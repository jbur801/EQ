import { ThreeElements, useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";

//WILL DO LATER, LETS GET GENERATION DONE FIRST
export default function Test(props: ThreeElements["mesh"]) {
  const ref = useRef<THREE.Mesh>(null!);
  const [hovered, hover] = useState(false);
  const [clicked, click] = useState(false);
  //   useFrame((state, delta) => {
  //     ref.current.rotation.y += delta * 5;
  //     ref.current.rotation.x += delta;
  //   });
  return (
    <mesh
      {...props}
      ref={ref}
      userData={{ hello: "world" }}
      scale={clicked ? 1.5 : 1}
      onClick={(event) => click(!clicked)}
      onPointerOver={(event) => hover(true)}
      onPointerOut={(event) => hover(false)}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? "hotpink" : "orange"} />
    </mesh>
  );
}
