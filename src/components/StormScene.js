"use client";
import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, useEffect, useState } from "react";
import * as THREE from "three";
import { Environment } from "@react-three/drei";

function VolumetricClouds() {
  const group = useRef();
  const [clouds, setClouds] = useState([]);

  useEffect(() => {
    const cloudTex = new THREE.TextureLoader().load("/textures/cloud.png");
    const tempClouds = [];

    for (let i = 0; i < 20; i++) {
      const sprite = new THREE.Sprite(
        new THREE.SpriteMaterial({
          map: cloudTex,
          transparent: true,
          opacity: 0.5 + Math.random() * 0.3,
          depthWrite: false,
        })
      );
      sprite.position.set(
        Math.random() * 20 - 10,
        Math.random() * 4 + 2, // Y lowered for visibility
        Math.random() * -5
      );
      sprite.scale.set(15 + Math.random() * 5, 10 + Math.random() * 3, 1);
      sprite.userData.speed = 0.01 + Math.random() * 0.015;
      group.current?.add(sprite);
      tempClouds.push(sprite);
    }

    setClouds(tempClouds);
  }, []);

  useFrame(() => {
    clouds.forEach((cloud) => {
      cloud.position.x -= cloud.userData.speed;
      if (cloud.position.x < -20) {
        cloud.position.x = 20;
      }
    });
  });

  return <group ref={group} />;
}

function Lightning() {
  const boltRef = useRef();
  const lightRef = useRef();
  const [sound, setSound] = useState(null);

  useEffect(() => {
    const listener = new THREE.AudioListener();
    const audio = new THREE.Audio(listener);
    const loader = new THREE.AudioLoader();

    loader.load("/sounds/thunder.mp3", (buffer) => {
      audio.setBuffer(buffer);
      audio.setVolume(0.8);
      audio.setLoop(false);
      setSound(audio);
    });

    if (boltRef.current) {
      boltRef.current.add(listener);
    }
  }, []);

  useFrame(() => {
    if (Math.random() > 0.996 && lightRef.current && boltRef.current) {
      lightRef.current.intensity = 15;
      boltRef.current.visible = true;

      if (sound && !sound.isPlaying) sound.play();

      setTimeout(() => {
        lightRef.current.intensity = 0;
        boltRef.current.visible = false;
      }, 180);
    }
  });

  return (
    <>
      <pointLight
        ref={lightRef}
        position={[0, 6, 5]}
        intensity={0}
        color="white"
      />
      <mesh ref={boltRef} visible={false} position={[0, -1, 0]}>
        <cylinderGeometry args={[0.05, 0.05, 15, 6]} />
        <meshBasicMaterial color="white" />
      </mesh>
    </>
  );
}

export default function StormScene() {
  return (
    <Canvas
      camera={{ position: [0, 2, 15], fov: 70 }}
      style={{ background: "#000000" }}
    >
      <fog attach="fog" args={["#000000", 10, 40]} />
      <color attach="background" args={["#000000"]} />
      <VolumetricClouds />
      <Lightning />
      <Environment preset="night" />
    </Canvas>
  );
}
