export const cfs = `// fragment shaders don't have a default precision so we need
// to pick one. mediump is a good default
precision mediump float;


// uniform vec3 circleColor; // Color of the circle

void main() {
        gl_FragColor = vec4(1,1,1, 0.1);
}`

export const cvs = `attribute vec2 a_position;
uniform vec2 u_resolution;

  void main() {


    gl_Position = vec4(a_position, 0, 1);

  }
`