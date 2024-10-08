
export const initGlShaderProg = (gl:WebGLRenderingContext,vertexShader:string,fragShader:string)=>{
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

  const lerp = (zero:number,one:number, fraction:number)=>{
    return (one*fraction - zero*(1-fraction))
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
    console.log('shader compilation FAILED')
    console.log(gl.getShaderInfoLog(shader));
    gl.deleteShader(shader);
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

 export function resizeCanvasToDisplaySize(canvas: HTMLCanvasElement) {
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
  