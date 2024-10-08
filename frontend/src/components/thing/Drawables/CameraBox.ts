import { flightPath, planet, vec2 } from "../Types";
import { initGlShaderProg, resizeCanvasToDisplaySize } from "../Util";
import { Drawable, Framer, cameraInfo } from "../Framer";
import { v4 as uuidv4 } from 'uuid';
import { Zoom } from "@mui/material";
import { Triangle } from "three";
import { cfs, cvs } from "../Shaders/CameraBox/fuckingShootMe";


const BASESIZE = 1000;


type progInfo = {
  program: WebGLProgram;
  positionAttributeLocation: number;
  positionBuffer: WebGLBuffer | null;
  gl: WebGLRenderingContext;
}

const minValue = 5;
const maxValue = 25

export class CameraBox implements Drawable{
    id:string = uuidv4();
    framerRef:Framer
    bounds:vec2
    progInfo:progInfo|undefined

    constructor (framerRef:Framer,bounds:vec2){
        this.framerRef = framerRef
        this.bounds = bounds
    }
  load(gl:WebGL2RenderingContext){
    console.log('loading map')
    const progRes = initGlShaderProg(gl,cvs,cfs)
    this.progInfo = progRes;
    return(!!progRes);
  }

  draw(gl:WebGL2RenderingContext,cameraInfo:cameraInfo){
    if(!this.progInfo){
      console.log('shader program not loaded!')
      return false;
    }
    const {program,positionAttributeLocation,positionBuffer} = this.progInfo
    const positions = this.getCamPosition();
    gl.bindBuffer(gl.ARRAY_BUFFER, this.progInfo.positionBuffer);
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
    var size = 2;          // 3 components per iteration
    var type = gl.FLOAT;   // the data is 32bit floats
    var normalize = false; // don't normalize the data
    var stride = 0;        // 0 = move forward size * sizeof(type) each iteration to get the next position
    var offset = 0;        // start at the beginning of the buffer
    gl.vertexAttribPointer(
        positionAttributeLocation, size, type, normalize, stride, offset)
        var primitiveType = gl.TRIANGLES;

    var offset = 0;
    var count =6;
    gl.drawArrays(primitiveType, offset, count);
    let error;
    if((error = gl.getError()) !== gl.NO_ERROR) {
        console.error('WebGL error:', error);
        return false
    }
    return true
  }

  getCamPosition = ()=>{
    const {zoom,x,y} = this.framerRef.camReference
    const top = y/BASESIZE +0.5*zoom 
    const bot = y/BASESIZE-0.5*zoom 
    const left = x/BASESIZE -  0.5*zoom 
    const right = x /BASESIZE+  0.5*zoom
    return [left,top,
        right,top,
        left,bot,
        left,bot,
        right,top,
        right, bot  
    ]
  }

}




