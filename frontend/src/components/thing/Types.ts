export type vec2 = {
    x:number,
    y:number,
  
  }
  
  export  type planet = {
    pos:vec2,
    value:number
  }
  
  export type flightPath = {
    a:planet,
    b:planet
  }