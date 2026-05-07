"use client";

import { useState } from "react";

type Slide = {
    id: number;
    title: string;
    image: string;
};

const slides: Slide[] = [
    { id: 1, title: "Project 1", image: "/img/1.jpg" },
    { id: 2, title: "Project 2", image: "/img/2.jpg" },
    { id: 3, title: "Project 3", image: "/img/3.jpg" },
];

export default function Slider() {
    const [index, setIndex] = useState(0);

    const next = () => {
        setIndex((prev) => (prev + 1) % slides.length);
    };

    const prev = () => {
        setIndex((prev) => (prev - 1 + slides.length) % slides.length);
    };

    return (
        <div className="slider">
            <div
                className="slider__track"
                style={{
                    transform: `translateX(-${index * 100}%)`,
                }}
            >
                {slides.map((slide) => (
                    <div key={slide.id} className="slider__slide">
                        <img src={slide.image} alt={slide.title} />
                        <h3>{slide.title}</h3>
                    </div>
                ))}
            </div>

            <button className="slider__prev" onClick={prev}>
                ←
            </button>

            <button className="slider__next" onClick={next}>
                →
            </button>

            <div className="slider__dots">
                {slides.map((_, i) => (
                    <button
                        key={i}
                        className={i === index ? "active" : ""}
                        onClick={() => setIndex(i)}
                    />
                ))}
            </div>
        </div>
    );
}
