import { ThreeElements, useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";
import THREE from "three";

//WILL DO LATER, LETS GET GENERATION DONE FIRST
export default function Test(props: ThreeElements["mesh"]) {
  const ref = useRef<THREE.Mesh>(null!);
  const [hovered, hover] = useState(false);
  const [clicked, click] = useState(false);
  //   useFrame((state, delta) => {
  //     ref.current.rotation.y += delta * 5;
  //     ref.current.rotation.x += delta;
  //   });

  // const material = new THREE.ShaderMaterial({
  //   uniforms: {
  //     time: { value: 1.0 },
  //     resolution: { value: new THREE.Vector2() },
  //   },

  //   vertexShader: document.getElementById("vertexShader").textContent,
  //   fragmentShader: document.getElementById("fragmentShader").textContent,
  // });
  return (
    <mesh
      {...props}
      ref={ref}
      userData={{ hello: "world" }}
      scale={clicked ? 1.5 : 1}
      onClick={(event) => click(!clicked)}
      onPointerOver={(event) => hover(true)}
      onPointerOut={(event) => hover(false)}
      // material={}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? "hotpink" : "orange"} />
    </mesh>
  );
}
