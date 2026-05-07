"use client";

import { useEffect } from "react";

interface Star {
    x: number;
    y: number;
    z: number;
    pz: number;
    r: number;
    a: number;
    speed: number;
}

export function useGalaxy(ref: React.RefObject<HTMLCanvasElement>) {
    useEffect(() => {
        const canvas = ref.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        const cfg = {
            count: 900,          // 🔥 уменьшили
            depth: 900,
            fov: 320,
            speed: 0.22,
            mouse: { x: 0, y: 0 },
        };

        let W = 0, H = 0;
        let stars: Star[] = [];
        let raf: number;

        function resize() {
            W = canvas.width = window.innerWidth;
            H = canvas.height = window.innerHeight;
        }

        function createStar(): Star {
            return {
                x: (Math.random() - 0.5) * cfg.depth * 2,
                y: (Math.random() - 0.5) * cfg.depth * 2,
                z: Math.random() * cfg.depth,
                pz: 0,
                r: Math.random() * 1.2 + 0.2,
                a: Math.random() * 0.8 + 0.2,
                speed: Math.random() * 0.6 + 0.4,
            };
        }

        function draw() {
            const isDark = document.documentElement.dataset.theme !== "light";

            ctx!.fillStyle = isDark ? "#02030a" : "#f4f4f8";
            ctx!.fillRect(0, 0, W, H);

            const cx = W / 2 + cfg.mouse.x * 40;
            const cy = H / 2 + cfg.mouse.y * 30;

            for (let i = 0; i < stars.length; i++) {
                const s = stars[i];

                s.pz = s.z;
                s.z -= cfg.speed * s.speed;

                if (s.z <= 0) {
                    Object.assign(s, createStar(), { z: cfg.depth });
                }

                const k = cfg.fov / s.z;
                const px = s.x * k + cx;
                const py = s.y * k + cy;

                const pk = cfg.fov / s.pz;
                const ppx = s.x * pk + cx;
                const ppy = s.y * pk + cy;

                if (px < 0 || px > W || py < 0 || py > H) continue;

                const alpha = s.a * (1 - s.z / cfg.depth);
                const size = s.r * k * 0.4;

                // 🔥 streak near camera
                if (s.z < 120) {
                    ctx!.beginPath();
                    ctx!.moveTo(ppx, ppy);
                    ctx!.lineTo(px, py);
                    ctx!.strokeStyle = isDark
                        ? `rgba(255,255,255,${alpha * 0.5})`
                        : `rgba(100,100,140,${alpha * 0.3})`;
                    ctx!.lineWidth = size * 0.5;
                    ctx!.stroke();
                }

                ctx!.beginPath();
                ctx!.arc(px, py, Math.max(size, 0.4), 0, Math.PI * 2);
                ctx!.fillStyle = isDark
                    ? `rgba(255,255,255,${alpha})`
                    : `rgba(80,80,120,${alpha * 0.6})`;
                ctx!.fill();
            }

            raf = requestAnimationFrame(draw);
        }

        const mouseHandler = (e: MouseEvent) => {
            cfg.mouse.x = (e.clientX / window.innerWidth - 0.5);
            cfg.mouse.y = (e.clientY / window.innerHeight - 0.5);
        };

        window.addEventListener("mousemove", mouseHandler);
        window.addEventListener("resize", resize);

        resize();
        stars = Array.from({ length: cfg.count }, createStar);
        draw();

        return () => {
            cancelAnimationFrame(raf);
            window.removeEventListener("mousemove", mouseHandler);
            window.removeEventListener("resize", resize);
        };
    }, [ref]);
}
