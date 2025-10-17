import { Environment, Lightformer } from "@react-three/drei"

const StudioLights = () => {
  return (
    <group name="lights">
        <Environment resolution={256}>
            <group>
                <Lightformer 
                    form="rect"
                    intensity={10} 
                    rotation-y={Math.PI / 2} 
                    scale={10} 
                    position={[-10, 5, -5]}
                />
                <Lightformer 
                    form="rect"
                    intensity={10} 
                    rotation-y={Math.PI / 2} 
                    scale={10} 
                    position={[10, 0, 1]}
                />
            </group>
        </Environment>
        <spotLight
            decay={0}
            angle={0.15}
            intensity={Math.PI * 0.2}
            position={[-2, 10, 15]}
        />
        <spotLight
            decay={0}
            angle={0.15}
            intensity={Math.PI * 0.2}
            position={[0, -25, 10]}
        />
        <spotLight
            decay={0.1}
            angle={0.15}
            intensity={Math.PI * 1}
            position={[0, 15, 5]}
        />
    </group>
  )
}

export default StudioLights