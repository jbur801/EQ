import { Box, Button, Slider, Typography } from "@mui/material";
import { assert } from "console";
import { initial } from "lodash";
import React, { useEffect, useRef, useState } from "react";
import { resizeCanvasToDisplaySize } from "./Util";
import { Framer } from "./Framer";
import { CameraBox } from "./Drawables/CameraBox";


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
export default function GameMapTSX(props:{framerRef: React.MutableRefObject<Framer | undefined>}) {
  const {framerRef} = props
  const canvasRef: React.MutableRefObject<any> = useRef(null);
  const framer = useRef<Framer>();

  
  useEffect(()=>{
    console.log('useEffect triggered',framerRef)
    const gameFramer = framerRef.current;

    if(canvasRef.current && gameFramer){
      console.log('got in')
      const canvas:HTMLCanvasElement = canvasRef.current;
      
      const contextAttributes = { antialias: true };
      const gl = canvas.getContext('webgl', contextAttributes) || canvas.getContext('experimental-webgl', contextAttributes);
      
      if (!gl) {
         // no webgl for you!
         console.log('no webgl in canvas context')
         return 
      }      
      framer.current = new Framer(gl as WebGL2RenderingContext);
      const box = new CameraBox(gameFramer,{x:0,y:0});

      framer.current.addDrawable(box);
      framer.current.play();
  } 
  },[framerRef.current])
  return (
    <div style={{ position:'absolute'       ,top: '79%',
      left: '79%',}}>

    <canvas style={{background:'black',height:'20vh',width:'20vw',
          border: '1px' }} ref={canvasRef}>

    </canvas>
   {/* <Button onClick={()=>framer.current?.drawFrame(0)}>FUCK </Button> */}
    </div>
  );
}
