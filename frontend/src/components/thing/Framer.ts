import { nonenumerable } from 'core-decorators';
import { lerp } from 'three/src/math/MathUtils';
import { vec2 } from './Types';

export type Drawable= {
    update?:(dt:number)=>void
    load:(gl:WebGL2RenderingContext)=>boolean
    draw:(gl:WebGL2RenderingContext,cameraInfo:cameraInfo)=>boolean
    id:string
    }

export type cameraInfo ={
    zoom:number;
    x:number;
    y:number;
}
const ZOOMSPEED = 1.1

type posChangeListener = (newPos:vec2)=>void;

export class GameMouse{
    pos:vec2
    framer:Framer|undefined
    posChangeListeners: posChangeListener[] 
    constructor(){
        this.pos = {x:0,y:0}
        this.posChangeListeners = [];
    }

    setFramer = (framer:Framer)=>{
        this.framer = framer
    }

    handlePosChange = ()=>{
        for(let listener of this.posChangeListeners){
            listener(this.pos)
        }
    }

    setPos = (newPos:vec2)=>{
        if(this.pos!==newPos){    
            this.pos = newPos
            this.handlePosChange();

        }        
    }

    addPositionListener = (listener:posChangeListener)=>{
        this.posChangeListeners.push(listener);
    }

}

export class Framer {
    gl:WebGL2RenderingContext
    drawables:Drawable[]
    active:boolean= false;
    activePan:vec2 = {x:0,y:0}
    camReference: cameraInfo = {
        zoom:1,
        x:0,
        y:0

    }
    constructor(gl:WebGL2RenderingContext,drawables:Drawable[] =[])
    {
        this.gl = gl
        const canvas = gl.canvas
        this.drawables = drawables
    }

    addDrawable =(newDrawable:Drawable)=>{
        this.drawables.push(newDrawable)
        newDrawable.load(this.gl);
    }

    removeDrawableById = (id:string|string[])=>{
        if(Array.isArray(id)){
            const ids = new Set(id);
            const toRemove = this.drawables.filter((drawable)=>ids.has(drawable.id))
            this.drawables = this.drawables.filter((drawable)=>!ids.has(drawable.id))
            return toRemove
        }else{
            const toRemove =  this.drawables.filter((drawable)=>drawable.id===id)
            this.drawables = this.drawables.filter((drawable)=>drawable.id!==id)
            return toRemove;
        }       
    }

    pause = ()=>{
        this.active = false;
    }

    play = ()=>{
        this.active = true;
        this.loop(new Date().getTime());
    }
    loop = (t:number)=>{
        if(this.active){
            const newT = new Date().getTime();
            //elapsed time since last frame
            const dt= newT-t;
            this.drawFrame(dt);
            requestAnimationFrame(()=>this.loop(newT))
        }

    }

    zoom = (z:number,t?:number)=>{
        if(!t){
            this.camReference ={
                ...this.camReference,
                zoom:z
            }
        }else{
            //TODO
        }
    }

    zoomIn = (mousePos:{x:number,y:number})=>{
        const currentWidth = this.gl.canvas.width
        const currentHeight = this.gl.canvas.height
        const {x:newX,y:newY} = this.canvasToCoordSpace(mousePos);
        const fromcenterX =  mousePos.x - currentWidth/2;
        const fromcenterY = mousePos.y - currentHeight/2;
        const {x,y,zoom} = this.camReference
        this.camReference ={
            zoom:zoom/ZOOMSPEED,
            x:x+fromcenterX/(ZOOMSPEED*zoom),
            y:y + fromcenterY/(ZOOMSPEED*zoom)
            // y:newY-fromcenterY*zoom
        }
    }

    canvasToCoordSpace(pos:{x:number,y:number}){
        const currentWidth = this.gl.canvas.width
        const currentHeight = this.gl.canvas.height
        const {x,y} = pos
        const {x:camX,y:camY,zoom} = this.camReference
        
        let transformedX = camX+(x-currentWidth/2)*zoom 
        let transformedY = -camY +(currentHeight/2 + y)*zoom
        return {x:transformedX,y:transformedY}
    }

    setActivePan(pan:vec2){
        this.activePan = pan
    }

    zoomOut =(mousePos:{x:number,y:number})=>{
        console.log('zooming out')
        const currentWidth = this.gl.canvas.width
        const currentHeight = this.gl.canvas.height
        const {x:newX,y:newY} = this.canvasToCoordSpace(mousePos);
        const fromcenterX =  mousePos.x - currentWidth/2;
        const fromcenterY = mousePos.y - currentHeight/2;
        const {x,y,zoom} = this.camReference
        this.camReference ={
            zoom:zoom*ZOOMSPEED,
            x:x,
            // y
            y:y
        }
        console.log(mousePos.x,newX,fromcenterX,this.camReference.x)
    }

    pan = (x:number=0,y:number=0,t?:number)=>{
        if(!t){
            this.camReference ={
                ...this.camReference,
                x:this.camReference.x+x,
                y:this.camReference.y+y
            }
        }else{
            //TODO
        }
    }

    panTo = (x:number,y:number,t?:number)=>{
        if(!t){
            this.camReference ={
                ...this.camReference,
                x,
                y
            }
        }else{
            //TODO
        }
    }
    
    drawFrame = (dt:number)=>{
        for(let drawable of this.drawables){
            //SHOULD NOT BE HERE MOST LIKELY
            if(drawable.update) drawable.update(dt);
            const success = drawable.draw(this.gl,this.camReference);
            this.active = success;
        }
        if(this.activePan.x ||this.activePan.y){
            const {zoom} = this.camReference
            this.pan(this.activePan.x/zoom,this.activePan.y/zoom)
        }
    }
  

}
nonenumerable(Framer,'loop')