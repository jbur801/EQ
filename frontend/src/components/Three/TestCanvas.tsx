import { Canvas } from "@react-three/fiber";
import Test from "./test";

export default function TestCanvas() {
  return (
    <Canvas>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Test position={[1.2, 0, 0]} />
    </Canvas>
  );
}
