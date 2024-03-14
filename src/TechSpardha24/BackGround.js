import React from 'react';
import Particles from "@tsparticles/react";
// import { loadSlim } from "@tsparticles/slim";
import particleConfig from './particle-config';

const BackGround = () => {
    const particlesLoaded = async (container) => {
        console.log(container);
    };

    return (
        <Particles options={particleConfig} />
    );
};

export default BackGround;
