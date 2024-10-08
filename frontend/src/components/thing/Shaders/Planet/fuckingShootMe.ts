export const pfs = `// fragment shaders don't have a default precision so we need
// to pick one. mediump is a good default
precision mediump float;


// uniform vec3 circleColor; // Color of the circle

void main() {
    // Calculate distance from fragment coordinate to center (0.5, 0.5)
    float dist = distance(gl_PointCoord.xy, vec2(0.5));

    // Discard fragments outside the circle
    if (dist > 0.5) discard;
        gl_FragColor = vec4(0,0,0, 1.0);
}`

export const pvs = `attribute vec3 a_position;
uniform vec2 u_resolution;

  void main() {
    vec2 a_xy = a_position.xy;
float a_scale = a_position.z;
    // convert the position from pixels to 0.0 to 1.0
    vec2 zeroToOne = a_xy / u_resolution;
 
    // convert from 0->1 to 0->2
    vec2 zeroToTwo = zeroToOne * 2.0;
 
    // convert from 0->2 to -1->+1 (clip space)
    vec2 clipSpace = zeroToTwo - 1.0;

 gl_PointSize =a_scale;
    gl_Position = vec4(clipSpace, 0, 1);

  }
`