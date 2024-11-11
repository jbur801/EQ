export type pos = {x:number,y:number}
type Bounds = {minX:number,minY:number,maxX:number,maxY:number}

export default class ShitBox {

    width:number;
    height:number;
    pos:pos;
    velocity:pos;
    color:number[];

    constructor (pos:pos,width:number =50, height:number=50,color?:number[]) {
        this.width = width;
        this.height = height;
        this.pos = pos
        this.velocity = {x:(Math.random()-0.5)*300, y:(Math.random()-0.5)*300}
        this.color = [Math.random(),Math.random(),Math.random(),Math.random()]
    }   

    update = (timeMs:number,bounds:Bounds)=>{
        const t = timeMs/1000
        const p = this.pos
        const v = this.velocity
        let newX = p.x + v.x*t;
        if(newX+this.width>bounds.maxX){
            newX =bounds.maxX-this.width;
            this.velocity = {x:-v.x,y:v.y}
        }else if (newX<bounds.minX){
            newX =bounds.minX;
            this.velocity = {x:-v.x,y:v.y}
        }
        let newY = p.y + v.y*t;
        if(newY+this.height>bounds.maxY){
            newY =bounds.maxY-this.height;
            this.velocity = {x:v.x,y:-v.y}
        }else if (newY<bounds.minY){
            newY =bounds.minY;
            this.velocity = {x:v.x,y:-v.y}
        }
        this.pos = {x:newX,y:newY}
    }

    getTriangles = ()=>{
        const x = this.pos.x;
        const y = this.pos.y
        var x1 = x;
        var x2 = x + this.width;
        var y1 = y;
        var y2 = y + this.height;
        return [
           x1, y1,
           x2, y1,
           x1, y2,
           x1, y2,
           x2, y1,
           x2, y2,
        ];
    }

}