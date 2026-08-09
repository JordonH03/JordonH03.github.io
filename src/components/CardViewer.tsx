import { OrthographicCamera, useGLTF, useTexture } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { Suspense, useMemo, useRef } from "react";
import { Material, Mesh, MeshStandardMaterial, Object3D, Quaternion, SRGBColorSpace, Vector3 } from "three";

function CardModel() {
    const { scene } = useGLTF('/assets/models/card-dynamic-front.glb')
    const cardFront = useTexture('/assets/cards/rbc_unity_fest.JPG')

    // Configure texture properties cleanly in React
    useMemo(() => {
        cardFront.colorSpace = SRGBColorSpace;
        cardFront.flipY = false; // Match glTF UV orientation standard
        cardFront.needsUpdate = true;
    }, [cardFront])

    // Clone the scene and swap the material on the target face
    const clonedScene = useMemo(() => {
        const cloned = scene.clone(true);

        cloned.traverse((child) => {
            if ((child as Mesh).isMesh) {
                const mesh = child as Mesh
                console.log('mesh')
                if (Array.isArray(mesh.material)) {
                    console.log('array');

                    const materials = mesh.material as Material[]

                    // Find the slot by the material name assigned in Blender
                    const matIndex = materials.findIndex(
                        (mat) => mat.name === 'card-front'
                    );

                    if (matIndex !== -1) {
                        console.log('face found')
                        // Clone the target material so swapping textures doesn't mutate other instances
                        const targetMat = materials[matIndex].clone() as MeshStandardMaterial;
                        targetMat.map = cardFront;
                        targetMat.needsUpdate = true

                        materials[matIndex] = targetMat
                    } else {
                        console.log('couldnt find face');

                    }
                } else {
                    // Replace the single material on this sub-mesh
                    const newMat = new MeshStandardMaterial({
                        map: cardFront,
                        transparent: false,
                        roughness: 0.5,
                    });
                    newMat.name = 'card-front';
                    mesh.material = newMat;
                }
            } else {
                console.log('not mesh')
            }
        });

        return cloned;
    }, [scene, cardFront]);

    const posRef = useRef<Object3D>(null)
    const rotRef = useRef<Object3D>(null)

    const Y = useMemo(() => new Vector3(0, 1, 0), [])
    const rotation = useMemo(() => new Quaternion(), [])

    useFrame((_, delta) => {
        if (!rotRef.current) return
        rotRef.current.rotateOnWorldAxis(Y, delta)
    })

    return (
        <group ref={rotRef} quaternion={rotation}>
            <group rotation={[Math.PI / 2, Math.PI / 12, 0]}>
                <primitive ref={posRef} object={clonedScene} />
            </group>
        </group>
    )
}

export default function CardViewer() {
    return (
        <Canvas className="canvas">
            <OrthographicCamera makeDefault top={100} bottom={-100} left={-100} right={100} position={[0, 0, 100]} zoom={2} />
            <ambientLight intensity={1} />
            <Suspense fallback={null}>
                <CardModel />
            </Suspense>
            <axesHelper args={[10]} />
        </Canvas>
    );
}