import React, { useState, useEffect } from 'react';
import { womenNewProductSlide } from "../womenData";
import { menNewProductSlide } from '../menData';
import './NewProductSlide.css';

function NewProductSlide({ navbarTap }) {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => {
                if (navbarTap === "WOMEN") {
                    return (prev + 1) % womenNewProductSlide.length;
                } else {
                    return (prev + 1) % menNewProductSlide.length;
                }
            });
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    const currentImage =
        navbarTap === "WOMEN"
            ? womenNewProductSlide[currentSlide]?.src
            : menNewProductSlide[currentSlide]?.src;

    return (
        <div className='newProductSlide'>
            {currentImage ? <img src={currentImage} alt="슬라이드 이미지" /> : null}
        </div>
    );
}

export default NewProductSlide;
