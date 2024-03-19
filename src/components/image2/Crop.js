"use client"

import { Cropper } from "react-advanced-cropper";
import { useRef } from "react";
import image from '../../../public/christian-lambert-vmIWr0NnpCQ-unsplash.jpg'

const Crop = () => {

    return (
        <Cropper 
        className="my-10"
        src={image}
        aspectRatio={16 / 9} 
    /> 
    );
};

export default Crop;