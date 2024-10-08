// fragment shaders don't have a default precision so we need
// to pick one. mediump is a good default
precision mediump float;


// uniform vec3 circleColor; // Color of the circle

void main() {
        gl_FragColor = vec4(1,1,1, 1.0);
}