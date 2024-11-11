import { Box, Button, Slider } from "@mui/material";
import { assert } from "console";
import { initial } from "lodash";
import React, { useEffect, useRef, useState } from "react";
import ShitBox, { pos } from "./Box";

const vertexShader = ` attribute vec2 a_position;
 
  attribute vec2 a_texCoord;

  uniform vec2 u_resolution;

varying vec2 v_texCoord;
 
  void main() {
    // convert the position from pixels to 0.0 to 1.0
    vec2 zeroToOne = a_position / u_resolution;
 
    // convert from 0->1 to 0->2
    vec2 zeroToTwo = zeroToOne * 2.0;
 
    // convert from 0->2 to -1->+1 (clip space)
    vec2 clipSpace = zeroToTwo - 1.0;

 
    gl_Position = vec4(clipSpace, 0, 1);
           // pass the texCoord to the fragment shader
   // The GPU will interpolate this value between points
   v_texCoord = a_texCoord;
  }`
 
const fragShader = `
  // fragment shaders don't have a default precision so we need
  // to pick one. mediump is a good default
  precision mediump float;

// our texture
uniform sampler2D u_image;

// the texCoords passed in from the vertex shader.
varying vec2 v_texCoord;

void main() {
   gl_FragColor = texture2D(u_image, v_texCoord);
}
`

let BOUNDS = {
  maxX:500,
  maxY:500,
  minX:0,
  minY:0
}

type AttLocations = {
  program: WebGLProgram;
  positionAttributeLocation: number;
  positionBuffer: WebGLBuffer | null;
  gl:WebGLRenderingContext
}

function resizeCanvasToDisplaySize(canvas: HTMLCanvasElement) {
  // Lookup the size the browser is displaying the canvas in CSS pixels.
  const displayWidth  = canvas.clientWidth;
  const displayHeight = canvas.clientHeight;
 
  // Check if the canvas is not the same size.
  const needResize = canvas.width  !== displayWidth ||
                     canvas.height !== displayHeight;
 
  if (needResize) {
    // Make the canvas the same size
    canvas.width  = displayWidth;
    canvas.height = displayHeight;
  }
 
  return needResize;
}

function createShader(gl:WebGLRenderingContext, type:number, source:string) {
  var shader = gl.createShader(type);
  if(!shader){
    console.log('shader creation FAILED')
    return false
  }
  gl.shaderSource(shader, source);
  gl.compileShader(shader);
  var success = gl.getShaderParameter(shader, gl.COMPILE_STATUS);
  if (success) {
    return shader;
  }
 
  console.log(gl.getShaderInfoLog(shader));
  gl.deleteShader(shader);
}

export const initGlShaderProg = (gl:WebGLRenderingContext)=>{
  const createdVertexShader = createShader(gl,gl.VERTEX_SHADER,vertexShader);
  const createdFragShader = createShader(gl,gl.FRAGMENT_SHADER,fragShader)

  if(createdVertexShader&&createdFragShader){
    const program = createProgram(gl,createdVertexShader,createdFragShader)
    if(!program) return 
    const positionAttributeLocation = gl.getAttribLocation(program, "a_position");
    const positionBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
    return {program,positionAttributeLocation,positionBuffer,gl};
  }

}

function createProgram(gl:WebGLRenderingContext, vertexShader: WebGLShader, fragmentShader: WebGLShader) {
  var program = gl.createProgram()
  if(!program){
    console.log('shader PROGRAM creation FAILED')
    return false
  }
  gl.attachShader(program, vertexShader);
  gl.attachShader(program, fragmentShader);
  gl.linkProgram(program);
  var success = gl.getProgramParameter(program, gl.LINK_STATUS);
  if (success) {
    return program;
  }
 
  console.log(gl.getProgramInfoLog(program));
  gl.deleteProgram(program);
}


export default function Lobby() {

  const canvasRef: React.MutableRefObject<any> = useRef(null);
  const activeRef = useRef(false)
  const [image,setImage] = useState<HTMLImageElement>();
  const [numObs,setNumObs] = useState<number>(200)
  const [bounds,setBounds] = useState<any>(BOUNDS)
  const [boxes,setBoxes] = useState<ShitBox[]>(Array.from({ length:numObs }, (_, index) => {
    // Generate something here, for example:
    const x =Math.random()*500; const y = Math.random()*500
    return new ShitBox({x,y},250,350);
  }));
  const boxes2 = useRef(boxes);
  const glRef = useRef<WebGLRenderingContext>();
  const texBuffer = useRef<WebGLBuffer>();
  const [attLocations,setAttLocations] = useState<AttLocations>();
  const timer = useRef<NodeJS.Timeout>();

  function debounce(callback:()=>any, delay:number) {
    return function() {
      clearTimeout(timer.current)
      timer.current = setTimeout(() => {
        callback();
      }, delay)
    }
  }
  
    const reset = ()=>{
      console.log('reset called')
      activeRef.current=false;
      setTimeout(()=>attLocations&& beginLoop(attLocations),100)
    }
    const resetSim = debounce(reset, 150)
  
  

  useEffect(()=>{

      boxes2.current = boxes
      const gl = glRef.current;
      const tb = texBuffer.current;
      if(gl&&tb){
        gl.bindBuffer(gl.ARRAY_BUFFER, tb);
        const data = boxes2.current.reduce((acc:number[],curr)=>acc.concat([
          0.0,  1.0,
          1.0,  1.0,
          0.0,  0.0,
          0.0,  0.0,
          1.0,  1.0,
          1.0,  0.0]),[])
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(data ), gl.STATIC_DRAW);
      }



  },[boxes])

  const getMousePos = (event:MouseEvent,canvasRef:React.MutableRefObject<any>):pos|null=>{
    const canvas = canvasRef.current;
    if(!canvas){
      return null
    }
    let rect = canvas.getBoundingClientRect();
    let x = event.clientX - rect.left;
    let y = event.clientY - rect.top;
    return  {x,y}
  }
  const beginLoop = (attLocations:AttLocations)=>{
    if(!attLocations){
      console.log('mother of fuck')
    }
    activeRef.current = true
   

     const {gl,program} = attLocations
        // look up where the texture coordinates need to go.
        var texCoordLocation = gl.getAttribLocation(program, "a_texCoord");
        // provide texture coordinates for the rectangle.
        var texCoordBuffer = gl.createBuffer();
        
       texBuffer.current = texCoordBuffer||undefined
       gl.bindBuffer(gl.ARRAY_BUFFER, texCoordBuffer);
        const data = boxes2.current.reduce((acc:number[],curr)=>acc.concat([
          0.0,  1.0,
          1.0,  1.0,
          0.0,  0.0,
          0.0,  0.0,
          1.0,  1.0,
          1.0,  0.0]),[])
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(data ), gl.STATIC_DRAW);
        
        gl.enableVertexAttribArray(texCoordLocation);
        gl.vertexAttribPointer(texCoordLocation, 2, gl.FLOAT, false, 0, 0);
       
        // Create a texture.
        var texture = gl.createTexture();
        gl.bindTexture(gl.TEXTURE_2D, texture);
       
        // Set the parameters so we can render any size image.
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
       
        // Upload the image into the texture.
        if(!image){
          console.log('ASS MY FUCKHOLE')
          return
        }
        gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, image);
      
            

      let t = new Date().getTime();


      const doIteration = (attLocations:AttLocations,t:number,texCoordBuffer:WebGLBuffer,texCoordLocation:number)=>{
        if(!activeRef.current) return 
        let t2 = new Date().getTime();
        let dt = t2-t;
        t = t2
        const {positionAttributeLocation,program,positionBuffer,gl} = attLocations
        {
          gl.bindBuffer(gl.ARRAY_BUFFER, texBuffer.current||null);
          const data = boxes2.current.reduce((acc:number[],curr)=>acc.concat([
            0.0,  1.0,
            1.0,  1.0,
            0.0,  0.0,
            0.0,  0.0,
            1.0,  1.0,
            1.0,  0.0]),[])
          gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(data ), gl.STATIC_DRAW);
        }

        const canvas = canvasRef.current
        const BOUNDS = {
          maxX: canvas?.width||500,
          maxY:canvas?.height||500,
          minX:0,
          minY:0
        }
        boxes2.current.forEach((box)=>box.update(dt,BOUNDS));
        const positions = boxes2.current.reduce((acc:number[],curr:ShitBox)=>{
          return acc.concat(curr.getTriangles());
        },[])
        gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(positions), gl.STATIC_DRAW);
        
        
        
        resizeCanvasToDisplaySize(gl.canvas as  HTMLCanvasElement);
        
        gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);
        // Clear the canvas

        // Tell it to use our program (pair of shaders)
        gl.useProgram(program);
        // set the resolution
        var resolutionUniformLocation = gl.getUniformLocation(program, "u_resolution");
        gl.uniform2f(resolutionUniformLocation, gl.canvas.width, gl.canvas.height);
        gl.enableVertexAttribArray(positionAttributeLocation);
        
        // Bind the position buffer.
        gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
         
        // Tell the attribute how to get data out of positionBuffer (ARRAY_BUFFER)
        var size = 2;          // 2 components per iteration
        var type = gl.FLOAT;   // the data is 32bit floats
        var normalize = false; // don't normalize the data
        var stride = 0;        // 0 = move forward size * sizeof(type) each iteration to get the next position
        var offset = 0;        // start at the beginning of the buffer
        gl.vertexAttribPointer(
            positionAttributeLocation, size, type, normalize, stride, offset)
            var primitiveType = gl.TRIANGLES;

          // Turn on the texcoord attribute
  gl.enableVertexAttribArray(texCoordLocation);


// Bind the buffer
gl.bindBuffer(gl.ARRAY_BUFFER, texCoordBuffer);


  // Tell the texcoord attribute how to get data out of texcoordBuffer (ARRAY_BUFFER)
  var size = 2;          // 2 components per iteration
  var type = gl.FLOAT;   // the data is 32bit floats
  var normalize = false; // don't normalize the data
  var stride = 0;        // 0 = move forward size * sizeof(type) each iteration to get the next position
  var offset = 0;        // start at the beginning of the buffer
  gl.vertexAttribPointer(
      texCoordLocation, size, type, normalize, stride, offset);

        var offset = 0;
        var count = boxes2.current.length*6;
        gl.drawArrays(primitiveType, offset, count);
        let error;
while ((error = gl.getError()) !== gl.NO_ERROR) {
    console.error('WebGL error:', error);
}
requestAnimationFrame(()=>doIteration(attLocations,t,texCoordBuffer!,texCoordLocation))
        // setTimeout(()=>doIteration(attLocations,boxes,t2,texCoordBuffer,texCoordLocation),10)  
      }
      if(!texCoordBuffer){
        console.log("NO TEXCOORDBUFFER!!!!")
        return
      }
      doIteration(attLocations,t,texCoordBuffer!,texCoordLocation)
     
    
  }

  useEffect(()=>{
    var image = new Image();
        image.crossOrigin = "anonymous";
        image.src = "https://infinite-bayou-83293-7e3a584bfa26.herokuapp.com/https://ga-index-public.s3.us-west-2.amazonaws.com/cards/scry-the-skies-alc.jpg"
    image.onload= (e:any)=>setImage(image)
  },[])
  useEffect(()=>{
    if(canvasRef.current &&!activeRef.current &&image){

      const canvas:HTMLCanvasElement = canvasRef.current;
      console.log('canvas',canvas.width,canvas.height)
      setBounds({
        maxX: canvas.width,
        maxY: canvas.height,
        minX: 0,
        minY: 0
      })
      var gl:WebGLRenderingContext|null = canvas.getContext("webgl");
      if (!gl) {
         // no webgl for you!
         console.log('no webgl in canvas context')
         return 
      }
      const attLocations = initGlShaderProg(gl)
      if(!attLocations){
        console.log('GlShaderProgInit Failed')
        return
      }
      setAttLocations(attLocations);
      glRef.current = gl
      beginLoop(attLocations);    
      
  }
  },[image])
  return (
    // <div>
    //   <iframe
    //     id="background"
    //     style={{
    //       position: "fixed",
    //       width: "100vw",
    //       height: "100vh",
    //     }}
    //     src={process.env.PUBLIC_URL + "/shaders/base.html"}
    //   />
    // </div>
    <div style={{border:4}}>

    <canvas style={{background:'green',height:'70%',width:'85%'}} ref={canvasRef}>

    </canvas>
    <Button onClick={()=>activeRef.current=false}>OFF</Button>
    <Button onClick={()=>{activeRef.current=false;setTimeout(()=>attLocations&& beginLoop(attLocations),30)}}>Reset</Button>
    <Slider max={600} min={1} value = {numObs} onChange={(e:any,obs:any)=>{
      setBoxes((boxes)=>{

        const num = obs as number - boxes.length;
        if(num>0){
          const newBoxes = Array.from({ length:num }, (_, index) => {
            // Generate something here, for example:
            const x =Math.random()*500; const y = Math.random()*500
            return new ShitBox({x,y},250,350);
          })
          return boxes.concat(newBoxes)
        }
        else{return boxes.slice(0,obs as number)}

      })
      setNumObs(obs as number)}}/>

    </div>
  );
}
