import { motion } from "framer-motion";

import React, { Suspense } from "react";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas/";
import TypeWriter from './TypeWriter';
import profileImg from '../assets/me2-removebg-preview.png';

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div className="hidden">
        <div id="stars" />
        <div id="stars2" />
        <div id="stars3" />
      </div>
      <div className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}  >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div className="flex flex-col gap-10">
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className='text-[#915EFF]'>MO HACHAMI</span>
          </h1>
          <TypeWriter />
          <p className={`${styles.heroSubText} mt-4 text-white-100`}>
            I enjoy creating delightful,<br className='sm:block hidden' /> human-centered digital experiences.
          </p>

        </div>
      </div>

      {/* <ComputersCanvas /> */}
      <div className="relative w-[60%] h-[80%] left-[46rem] top-[15rem] me-bg" style={{}}>
        <Canvas style={{ width: '100%', height: '100%', }}>
          <Suspense fallback={null}>
            <OrbitControls enableZoom={false} />
            <ambientLight intensity={1} />
            <directionalLight position={[1, 2, 1]} /> 
            <Sphere args={[1, 100, 200]} scale={2.4}>
              <MeshDistortMaterial
                color="#C0C0C0"
                attach="material"
                distort={0.5}
                speed={2}
              />
            </Sphere>
          </Suspense>
        </Canvas>
        <img src={profileImg} className="relative left-[24rem] bottom-[100%] w-[25rem]  img" alt="" srcset="" />
      </div>

      <div className='absolute xs:bottom-10 bottom-34 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;