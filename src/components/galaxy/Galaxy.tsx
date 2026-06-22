"use client";

import { useRef, useEffect, useState, useCallback } from "react";

interface Star {
    x: number;
    y: number;
    z: number;
    pz: number;
    r: number;
    a: number;
    speed: number;
    hue: number;
    sat: number;
}

interface ShootingStar {
    x: number;
    y: number;
    vx: number;
    vy: number;
    life: number;
    maxLife: number;
    len: number;
}

const ACCENT_HUES = [260, 190, 320, 160];

export default function Galaxy() {
    const canvasRef = useRef<HTMLCanvasElement>(null!);
    const mouseRef = useRef({ x: 0, y: 0 });
    const scrollRef = useRef(0);
    const [isReducedMotion, setIsReducedMotion] = useState(false);

    const handleMouseMove = useCallback((e: MouseEvent) => {
        if (isReducedMotion) return;
        mouseRef.current.x = (e.clientX / window.innerWidth - 0.5);
        mouseRef.current.y = (e.clientY / window.innerHeight - 0.5);
    }, [isReducedMotion]);

    const handleScroll = useCallback(() => {
        scrollRef.current = window.scrollY;
    }, []);

    useEffect(() => {
        const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
        setIsReducedMotion(mediaQuery.matches);
        mediaQuery.addEventListener("change", (e) => setIsReducedMotion(e.matches));
    }, []);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        const isMobile = window.matchMedia("(hover: none)").matches;
        const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

        const cfg = {
            count: isMobile ? 500 : 1500,
            depth: 900,
            fov: 320,
            speed: prefersReduced ? 0.05 : 0.2,
            mouse: { x: 0, y: 0 },
            shootingChance: isMobile ? 0.0003 : 0.001,
        };

        let W = 0, H = 0;
        let stars: Star[] = [];
        const shootingStars: ShootingStar[] = [];
        let raf: number;

        function resize() {
            W = canvas!.width = window.innerWidth;
            H = canvas!.height = window.innerHeight;
        }

        function createStar(): Star {
            const isAccent = Math.random() < 0.15;
            return {
                x: (Math.random() - 0.5) * cfg.depth * 2,
                y: (Math.random() - 0.5) * cfg.depth * 2,
                z: Math.random() * cfg.depth,
                pz: 0,
                r: Math.random() * 1.8 + 0.5,
                a: Math.random() * 0.8 + 0.2,
                speed: Math.random() * 0.6 + 0.4,
                hue: isAccent ? ACCENT_HUES[Math.floor(Math.random() * ACCENT_HUES.length)] : 0,
                sat: isAccent ? 70 + Math.random() * 30 : 0,
            };
        }

        function createShootingStar(): ShootingStar {
            const side = Math.floor(Math.random() * 2);
            const x = side === 0 ? Math.random() * W * 0.5 : W * 0.5 + Math.random() * W * 0.5;
            const y = Math.random() * H * 0.4;
            const angle = Math.PI * 0.25 + Math.random() * 0.3;
            const speed = 8 + Math.random() * 6;
            return {
                x, y,
                vx: Math.cos(angle) * speed,
                vy: Math.sin(angle) * speed,
                life: 0,
                maxLife: 40 + Math.random() * 30,
                len: 20 + Math.random() * 30,
            };
        }

        function drawNebula(cx: number, cy: number, scrollOffset: number, isDark: boolean) {
            if (!isDark || prefersReduced) return;

            const scrollParallax = scrollOffset * 0.02;
            const mouseParallaxX = cfg.mouse.x * 30;
            const mouseParallaxY = cfg.mouse.y * 20;

            const g1 = ctx!.createRadialGradient(
                cx * 0.7 + mouseParallaxX,
                cy * 0.6 + mouseParallaxY + scrollParallax,
                0,
                cx * 0.7 + mouseParallaxX,
                cy * 0.6 + mouseParallaxY + scrollParallax,
                W * 0.4
            );
            g1.addColorStop(0, 'rgba(139, 92, 246, 0.06)');
            g1.addColorStop(1, 'transparent');
            ctx!.fillStyle = g1;
            ctx!.fillRect(0, 0, W, H);

            const g2 = ctx!.createRadialGradient(
                cx * 1.3 + mouseParallaxX,
                cy * 1.2 + mouseParallaxY + scrollParallax,
                0,
                cx * 1.3 + mouseParallaxX,
                cy * 1.2 + mouseParallaxY + scrollParallax,
                W * 0.35
            );
            g2.addColorStop(0, 'rgba(6, 182, 212, 0.05)');
            g2.addColorStop(1, 'transparent');
            ctx!.fillStyle = g2;
            ctx!.fillRect(0, 0, W, H);

            const g3 = ctx!.createRadialGradient(
                cx + mouseParallaxX,
                cy + mouseParallaxY + scrollParallax,
                0,
                cx + mouseParallaxX,
                cy + mouseParallaxY + scrollParallax,
                W * 0.5
            );
            g3.addColorStop(0, 'rgba(236, 72, 153, 0.03)');
            g3.addColorStop(1, 'transparent');
            ctx!.fillStyle = g3;
            ctx!.fillRect(0, 0, W, H);
        }

        function draw() {
            const isDark = document.documentElement.dataset.theme !== "light";

            ctx!.fillStyle = isDark ? "#02030a" : "#f4f4f8";
            ctx!.fillRect(0, 0, W, H);

            const cx = W / 2 + cfg.mouse.x * 40;
            const cy = H / 2 + cfg.mouse.y * 30;

            drawNebula(cx, cy, scrollRef.current, isDark);

            if (Math.random() < cfg.shootingChance) {
                shootingStars.push(createShootingStar());
            }

            for (let i = shootingStars.length - 1; i >= 0; i--) {
                const ss = shootingStars[i];
                ss.x += ss.vx;
                ss.y += ss.vy;
                ss.life++;

                if (ss.life > ss.maxLife || ss.x > W + 100 || ss.y > H + 100) {
                    shootingStars.splice(i, 1);
                    continue;
                }

                const progress = ss.life / ss.maxLife;
                const alpha = progress < 0.2 ? progress / 0.2 : 1 - (progress - 0.2) / 0.8;
                const tailX = ss.x - ss.vx * (ss.len / 8);
                const tailY = ss.y - ss.vy * (ss.len / 8);

                const grad = ctx!.createLinearGradient(ss.x, ss.y, tailX, tailY);
                grad.addColorStop(0, `rgba(255,255,255,${alpha})`);
                grad.addColorStop(1, 'rgba(255,255,255,0)');

                ctx!.beginPath();
                ctx!.moveTo(tailX, tailY);
                ctx!.lineTo(ss.x, ss.y);
                ctx!.strokeStyle = grad;
                ctx!.lineWidth = 1.5;
                ctx!.stroke();

                ctx!.beginPath();
                ctx!.arc(ss.x, ss.y, 1.2, 0, Math.PI * 2);
                ctx!.fillStyle = `rgba(255,255,255,${alpha})`;
                ctx!.fill();
            }

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
                const size = s.r * k * 0.5;

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
                ctx!.arc(px, py, Math.max(size, 0.5), 0, Math.PI * 2);

                if (s.sat > 0 && isDark) {
                    ctx!.fillStyle = `hsla(${s.hue}, ${s.sat}%, 70%, ${alpha})`;
                } else {
                    ctx!.fillStyle = isDark
                        ? `rgba(255,255,255,${alpha})`
                        : `rgba(80,80,120,${alpha * 0.6})`;
                }
                ctx!.fill();
            }

            raf = requestAnimationFrame(draw);
        }

        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("scroll", handleScroll, { passive: true });
        window.addEventListener("resize", resize);

        resize();
        stars = Array.from({ length: cfg.count }, createStar);
        draw();

        return () => {
            cancelAnimationFrame(raf);
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("resize", resize);
        };
    }, [handleMouseMove, isReducedMotion]);

    return (
        <canvas
            ref={canvasRef}
            className="galaxy-canvas"
        />
    );
}
