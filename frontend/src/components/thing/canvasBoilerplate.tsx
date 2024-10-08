import { Box, Button, Slider } from "@mui/material";
import { assert } from "console";
import { initial } from "lodash";
import React, { useEffect, useRef, useState } from "react";
import { resizeCanvasToDisplaySize } from "./Util";
import { Framer, GameMouse } from "./Framer";
import { GameMap } from "./Map";
import GameMapTSX from "./mapCanvas";
import { Mouse } from "@mui/icons-material";
import { vec2 } from "./Types";


const BOUNDS = {
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

var lastScrollTop = 0;
export default function Canvas() {

  const canvasRef: React.MutableRefObject<any> = useRef(null);
  const activeRef = useRef(false)
  const [image,setImage] = useState<HTMLImageElement>();
  const framer = useRef<Framer>();
  const [framerRef,setFramerRef] = useState<Framer>();
  const map = useRef<GameMap>();

  

  useEffect(()=>{
    var image = new Image();
    image.src = "/DVD.png";
    image.onload= (e:any)=>setImage(image)
  },[])
  useEffect(()=>{
    if(canvasRef.current &&!activeRef.current &&image){
      const canvas:HTMLCanvasElement = canvasRef.current;
      const contextAttributes = { antialias: true };
      const gl = canvas.getContext('webgl', contextAttributes) || canvas.getContext('experimental-webgl', contextAttributes);
      
      if (!gl) {
         // no webgl for you!
         console.log('no webgl in canvas context')
         return 
      }      
      framer.current = new Framer(gl as WebGL2RenderingContext);
      setFramerRef(framer.current)
      map.current = new GameMap()
      framer.current.addDrawable(map.current);
      framer.current.play();
      const mouse = new GameMouse();
      const panOnBorder = (pos:vec2)=>{
        const top = gl.canvas.height*0.1
        const bottom = top*9;
        const left = gl.canvas.width*0.1;
        const right = left *9
        let pan = {x:0,y:0}
        if(pos.x<left){ 
          pan.x =-5;
        }else if(pos.x>right){
          pan.x =5;
        }
        if(pos.y<top){
          pan.y =5;
        }else if(pos.y>bottom){
          pan.y =-5;
        }
          framer.current?.setActivePan(pan)
      }
      mouse.addPositionListener(panOnBorder)
      canvas.addEventListener("wheel", function(e){
    const y = e.offsetY;
    const x = e.offsetX;
         if (e.deltaY > 0) {
            // downscroll code
          framer.current?.zoomOut({x,y})
         } else {
          framer.current?.zoomIn({x,y})
            // upscroll code
         } // else was horizontal scroll
      }, true);
    window.addEventListener("mousemove", function(e){
      const y = e.offsetY;
      const x = e.offsetX;
      mouse.setPos({x,y})
    })

    canvas.addEventListener('mouseleave', ()=>framer.current?.setActivePan({x:0,y:0}))
  } 
  },[image])
  return (
    <div style={{border:0,margin:0,height:'100%',width:'100%'}}>

    <canvas style={{background:'green',height:'90vh',width:'100vw'}} ref={canvasRef}>

    </canvas>
    {framerRef&& <GameMapTSX framerRef={framer}/>}
    {/* <Button onClick={()=>framer.current?.drawFrame(0)}>FUCK </Button> */}
    </div>
  );
}
