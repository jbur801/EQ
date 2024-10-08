import { Button } from "@mui/material";
// import { DataGrid } from '@mui/x-data-grid';
import React, { useEffect, useRef, useState } from "react";

type vec2 = {
  x:number,
  y:number,

}

type planet = {
  pos:vec2,
  value:number
}

type flightPath = {
  a:planet,
  b:planet
}

const getDistSquared = (a:vec2,b:vec2)=>{
  return (a.x-b.x)*(a.x-b.x) +(a.y-b.y)*(a.y-b.y)
}

const curryFurther = (source:planet)=>{
  return (a:planet,b:planet)=>getDistSquared(source.pos,a.pos)-getDistSquared(source.pos,b.pos)
}
var ballX = 400;
var ballY = 400;
var mouseX = 0;
var mouseY = 0;
const NUMPOINTS = 500
const SIZE = 800
const MAXPATHS=5
export default function Game() {
  console.log("code segment reached:game");
  const canvasRef:  React.LegacyRef<HTMLCanvasElement> = useRef(null)
  const [points,setPoints] = useState<planet[]>([])
  const [paths,setPaths] = useState<flightPath[]>([])
  const [toggle,setToggle] =useState<boolean>(false);

  useEffect(() => {
    const newPoints:planet[] = []
    const newPaths:flightPath[] =[];
    for (let i = 0; i < NUMPOINTS; i++) {
      const x = SIZE*Math.random()
      const y = SIZE*Math.random()
      const pos:vec2 = {x,y};
      const value = 10*Math.random()
      newPoints.push({pos,value})
    }
    for (let point of newPoints){
      let numPaths = Math.ceil(Math.random()*MAXPATHS)
      console.assert(numPaths>0,'numpaths was:' + numPaths)
      const sortFn = curryFurther(point);
      let orderedPoints = newPoints.sort(sortFn)
      for(let i=1;i<=numPaths;i++){
        if(!newPaths.find((path)=>path.a===orderedPoints[i]&&path.b===point)){
          newPaths.push({a:point,b:orderedPoints[i]})
        }
        
      }
    }
    setPoints(newPoints)
    setPaths(newPaths)
  },[toggle]);
        //use `requestAnimationFrame` for the game loop
//so you stay sync with the browsers rendering
//makes it a smoother animation
function loop(ctx:CanvasRenderingContext2D){
  moveBall(ctx);
  // requestAnimationFrame(()=>loop(ctx));
}

function mouseMove(evt:any) {
  console.log(evt)
  mouseX = evt.clientX;
  mouseY = evt.clientY;
}
function moveBall(ctx:CanvasRenderingContext2D) {
  //get the distance between the mouse and the ball on both axes
  //walk only the an eight of the distance to create a smooth fadeout
  var dx = (mouseX - ballX) * .125;
  var dy = (mouseY - ballY) * .125;
  //calculate the distance this would move ...
  var distance = Math.sqrt(dx*dx + dy*dy);
  //... and cap it at 5px
  if(distance > 5){
    dx *= 5/distance;
    dy *= 5/distance;
  }
  
  //now move
  ballX += dx;
  ballY += dy;
  // ctx.clearRect(0, 0, SIZE,SIZE);
  ctx.beginPath();
  ctx.arc(ballX, ballY, 40, 0, 2 * Math.PI);
  ctx.fillStyle = "green";
  ctx.fill();
  ctx.lineWidth = 5;
  ctx.strokeStyle = "red";
  ctx.stroke();
}
  useEffect(() => {
    console.log('ran canvas useEffect')

    if(canvasRef.current){
  
      const canvas = canvasRef.current
      const context= canvas.getContext('2d') as CanvasRenderingContext2D 

      //Our first draw
      context.fillStyle = '#000000'
      context.fillRect(0, 0, context.canvas.width, context.canvas.height)
      for(let path of paths){
        // context.fillStyle = '#414C6B'
        context.strokeStyle ='#414C6B'
        context.lineWidth = 2;
        const aPos = path.a.pos;
        const bPos = path.b.pos;
        // let path = new Path2D();
        // path.lineTo(bPos.x,bPos.y)
        context.beginPath();
        context.moveTo(aPos.x,aPos.y)
  
        context.lineTo(bPos.x,bPos.y)
        context.stroke();
        }
      for(let point of points){
        context.fillStyle = '#FFFFFF'
        const pos = point.pos
        const val = point.value
        context.fillRect(pos.x-val/2,pos.y-val/2,val,val)
               
                
      }
      let x = document.getElementById("drawingArea");
      if(x)x.onmousemove = mouseMove;

    }

  }, [canvasRef.current,points])
  const canvas = canvasRef.current
  if(canvas){
    const context= canvas.getContext('2d') as CanvasRenderingContext2D 
    loop(context);
  }

  return (
    <div>
      <Button onClick={()=>setToggle((toggle)=>!toggle)}>yiyiyiyi motherfucker</Button>
      <canvas id ={"drawingArea"} width ={SIZE} height={SIZE}  ref={canvasRef}>

      </canvas>
      {/* <DataGrid
  rows={rows}
  columns={columns}
  initialState={{
    pagination: {
      paginationModel: { page: 0, pageSize: 5 },
    },
  }}
  pageSizeOptions={[5, 10]}
  checkboxSelection
/> */}
    </div>
  );
}
