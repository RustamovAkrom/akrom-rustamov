"use client";

import { useRef } from "react";
import { useGalaxy } from "@/hooks/useGalaxy";

export default function Galaxy() {
    const canvasRef = useRef<HTMLCanvasElement>(null!);

    useGalaxy(canvasRef);

    return (
        <canvas
            ref={canvasRef}
            style={{
                position: "fixed",
                inset: 0,
                zIndex: -1,              // 🔥 КЛЮЧЕВОЕ
                pointerEvents: "none",   // 🔥 чтобы не блокировал клики
            }}
        />
    );
}
