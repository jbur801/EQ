import { flightPath, planet, vec2 } from "./Types";
import {pvs,pfs} from './Shaders/Planet/fuckingShootMe'
import { initGlShaderProg, resizeCanvasToDisplaySize } from "./Util";
import { Drawable, cameraInfo } from "./Framer";
import { v4 as uuidv4 } from 'uuid';


const getDistSquared = (a:vec2,b:vec2)=>{
    return (a.x-b.x)*(a.x-b.x) +(a.y-b.y)*(a.y-b.y)
  }
  
  const curryFurther = (source:planet)=>{
    return (a:planet,b:planet)=>getDistSquared(source.pos,a.pos)-getDistSquared(source.pos,b.pos)
  }


type progInfo = {
  program: WebGLProgram;
  positionAttributeLocation: number;
  positionBuffer: WebGLBuffer | null;
  gl: WebGLRenderingContext;
}

const minValue = 5;
const maxValue = 25

export class GameMap implements Drawable{
    id:string = uuidv4();
    paths:flightPath[]=[];
    planets:planet[]=[];
    progInfo:progInfo|undefined
    constructor (numPoints:number = 100, maxPaths:number = 5){
       this.generatePlanets(numPoints);
       this.generatePaths(maxPaths);

    }
    generatePlanets(numPoints:number){
        const SIZE =10000
        let planets: planet[]=[]
        for (let i = 0; i < numPoints; i++) {
            const x = SIZE*Math.random()
            const y = SIZE*Math.random()
            const pos:vec2 = {x,y};
            const value = minValue + (maxValue-minValue)*Math.random()
            planets.push({pos,value})
          }
          this.planets =planets;
    }

    generatePaths(maxPaths: number){
        let planets = this.planets
        let newPaths:flightPath[] = []
        for (let point of planets){
            let numPaths = Math.ceil(Math.random()*maxPaths)
            console.assert(numPaths>0,'numpaths was:' + numPaths)
            const sortFn = curryFurther(point);
            let orderedPoints = planets.sort(sortFn)
            for(let i=1;i<=numPaths;i++){
              if(!newPaths.find((path)=>path.a===orderedPoints[i]&&path.b===point)){
                newPaths.push({a:point,b:orderedPoints[i]})
              }
              
            }
          }
        this.paths = newPaths
    }
  
  load(gl:WebGL2RenderingContext){
    console.log('loading map')
    const progRes = initGlShaderProg(gl,pvs,pfs)
    this.progInfo = progRes;
    return(!!progRes);
  }

  draw(gl:WebGL2RenderingContext,cameraInfo:cameraInfo){
    if(!this.progInfo){
      console.log('shader program not loaded!')
      return false;
    }

    const {program,positionAttributeLocation,positionBuffer} = this.progInfo
    const positions = this.getPlanetPositions(cameraInfo);
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
    var size = 3;          // 3 components per iteration
    var type = gl.FLOAT;   // the data is 32bit floats
    var normalize = false; // don't normalize the data
    var stride = 0;        // 0 = move forward size * sizeof(type) each iteration to get the next position
    var offset = 0;        // start at the beginning of the buffer
    gl.vertexAttribPointer(
        positionAttributeLocation, size, type, normalize, stride, offset)
        var primitiveType = gl.POINTS;

    var offset = 0;
    var count =3*this.planets.length;
    gl.drawArrays(primitiveType, offset, count);
    let error;
    if((error = gl.getError()) !== gl.NO_ERROR) {
        console.error('WebGL error:', error);
        return false
    }
    return true
  }

  getPlanetPositions(cameraInfo?:cameraInfo){
    const positions:number[] = [];
    if(!cameraInfo){
      for(let planet of this.planets){
        positions.push(planet.pos.x)
        positions.push(planet.pos.y)
        positions.push(planet.value)
      }

    }else{
      for(let planet of this.planets){
        positions.push(planet.pos.x/cameraInfo.zoom-cameraInfo.x/2)
        positions.push(planet.pos.y/cameraInfo.zoom-cameraInfo.y/2)
        positions.push(planet.value/cameraInfo.zoom)
      }
    }
    return positions
  }
}




