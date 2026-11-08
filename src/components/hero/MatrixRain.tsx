"use client";

import { useEffect, useRef } from "react";
import styles from "./MatrixRain.module.css";

interface RainColumn {
  x: number;
  y: number;
  speed: number;
  glyphs: string[];
  lastCell: number;
  system: NumericSystem;
  scale: number;
  depth: number;
}

type NumericSystem = "binary" | "decimal" | "hexadecimal";

const SYSTEMS: NumericSystem[] = ["binary", "decimal", "hexadecimal"];
const GLYPHS: Record<NumericSystem, string[]> = {
  binary: Array.from("01"),
  decimal: Array.from("0123456789"),
  hexadecimal: Array.from("0123456789ABCDEF"),
};
const FRAME_INTERVAL = 1000 / 30;

function initializeMatrixRain(canvas: HTMLCanvasElement, context: CanvasRenderingContext2D): () => void {
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  const lowPower = window.matchMedia("(hover: none)");
  const columns: RainColumn[] = [];
  let width = 0;
  let height = 0;
  let fontSize = 20;
  let accent = "#b6ff78";
  let systemColors: Record<NumericSystem, string> = {
    binary: accent,
    decimal: accent,
    hexadecimal: accent,
  };
  let headColor = "#edffe9";
  let trailColor = "rgba(1, 5, 2, 0.13)";
  let frameId = 0;
  let lastFrame = 0;
  let running = false;
  let previousTime = 0;

  function randomGlyph(system: NumericSystem) {
    const glyphs = GLYPHS[system];
    return glyphs[Math.floor(Math.random() * glyphs.length)];
  }

  function resize() {
    const bounds = canvas.getBoundingClientRect();
    const pixelRatio = Math.min(window.devicePixelRatio || 1, lowPower.matches ? 1.5 : 2);
    width = bounds.width;
    height = bounds.height;
    fontSize = width < 640 ? 11 : 13;

    canvas.width = Math.round(width * pixelRatio);
    canvas.height = Math.round(height * pixelRatio);
    const isLightTheme = document.documentElement.dataset.theme === "light";
    context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
    context.font = `${isLightTheme ? "700 " : ""}${fontSize}px "JetBrains Mono", monospace`;
    context.textAlign = "center";
    context.textBaseline = "top";
    context.clearRect(0, 0, width, height);

    accent = getComputedStyle(document.documentElement).getPropertyValue("--acc-green").trim() || accent;
    systemColors = isLightTheme
      ? {
          binary: "#020403",
          decimal: "#080c09",
          hexadecimal: "#101411",
        }
      : {
          binary: accent,
          decimal: getComputedStyle(document.documentElement).getPropertyValue("--acc-cyan").trim() || accent,
          hexadecimal: getComputedStyle(document.documentElement).getPropertyValue("--acc-amber").trim() || accent,
        };
    headColor = isLightTheme ? "#000000" : "#edffe9";
    trailColor = isLightTheme ? "rgba(241, 247, 239, 0.3)" : "rgba(1, 5, 2, 0.13)";

    const columnGap = fontSize * 0.85;
    const columnCount = Math.ceil(width / columnGap);
    columns.length = 0;

    const layerCount = lowPower.matches ? 2 : 3;
    for (let layer = 0; layer < layerCount; layer += 1) {
      const depth = layer / (layerCount - 1);
      const scale = 0.72 + depth * 0.48;
      const layerFontSize = fontSize * scale;
      const layerColumnGap = layerFontSize * (0.82 + Math.random() * 0.18);
      const layerColumnCount = Math.ceil(width / layerColumnGap * (1.12 + depth * 0.12));
      for (let index = 0; index < layerColumnCount; index += 1) {
        const x = Math.random() * width;
        const y = Math.random() * height;
        const system = SYSTEMS[Math.floor(Math.random() * SYSTEMS.length)];
        columns.push({
          x,
          y,
          speed: (36 + Math.random() * 86) * (0.62 + depth * 0.68),
          glyphs: Array.from({ length: 7 + Math.floor(Math.random() * 14) }, () => randomGlyph(system)),
          lastCell: Math.floor(y / layerFontSize),
          system,
          scale,
          depth,
        });
      }
    }
  }

  function drawStaticFrame() {
    context.clearRect(0, 0, width, height);
    for (const column of columns) {
      context.globalAlpha = document.documentElement.dataset.theme === "light" ? 0.68 : 0.42;
      context.fillStyle = systemColors[column.system];
      context.font = `${document.documentElement.dataset.theme === "light" ? "700 " : ""}${fontSize * column.scale}px "JetBrains Mono", monospace`;
      for (let index = 0; index < column.glyphs.length; index += 1) {
        context.fillText(column.glyphs[index], column.x, column.y - index * fontSize * column.scale);
      }
    }
    context.globalAlpha = 1;
  }

  function draw(time: number) {
    if (!running) return;
    frameId = window.requestAnimationFrame(draw);

    const frameInterval = lowPower.matches ? 1000 / 24 : FRAME_INTERVAL;
    if (time - lastFrame < frameInterval) return;
    const elapsed = previousTime === 0 ? 0 : Math.min((time - previousTime) / 1000, 0.05);
    lastFrame = time;
    previousTime = time;
    const isLightTheme = document.documentElement.dataset.theme === "light";

    context.fillStyle = trailColor;
    context.fillRect(0, 0, width, height);

    for (const column of columns) {
      const cellSize = fontSize * column.scale;
      column.y += column.speed * elapsed;

      if (column.y - column.glyphs.length * cellSize > height) {
        column.y = -Math.random() * height * 0.45;
        column.speed = 48 + Math.random() * 104;
        column.glyphs = Array.from({ length: 8 + Math.floor(Math.random() * 12) }, () => randomGlyph(column.system));
        column.lastCell = Math.floor(column.y / cellSize);
      }

      const currentCell = Math.floor(column.y / cellSize);
      const steps = Math.min(currentCell - column.lastCell, column.glyphs.length);
      for (let step = 0; step < steps; step += 1) {
        column.glyphs.pop();
        column.glyphs.unshift(randomGlyph(column.system));
      }
      column.lastCell = currentCell;

      const sway = Math.sin(time * 0.00055 + column.x) * 1.1;
      context.font = `${isLightTheme ? "700 " : ""}${cellSize}px "JetBrains Mono", monospace`;
      for (let index = column.glyphs.length - 1; index >= 0; index -= 1) {
        const glyphY = column.y - index * cellSize;
        if (glyphY < -cellSize || glyphY > height) continue;

        if (isLightTheme) {
          context.globalAlpha = index === 0 ? 1 : Math.max(0.18, 0.82 - index * 0.05);
        } else {
          context.globalAlpha = index === 0 ? 0.95 : Math.max(0.06, 0.64 - index * 0.05);
        }
        context.globalAlpha *= 0.38 + column.depth * 0.62;
        context.fillStyle = index === 0 ? headColor : systemColors[column.system];
        context.fillText(column.glyphs[index], column.x + sway, glyphY);
      }
    }

    context.globalAlpha = 1;
  }

  function start() {
    if (running || document.hidden) return;
    running = true;
    previousTime = 0;
    lastFrame = 0;
    frameId = window.requestAnimationFrame(draw);
  }

  function stop() {
    running = false;
    window.cancelAnimationFrame(frameId);
  }

  function onVisibilityChange() {
    if (document.hidden) {
      stop();
    } else if (!reducedMotion.matches) {
      start();
    } else {
      drawStaticFrame();
    }
  }

  function onMotionPreferenceChange() {
    if (reducedMotion.matches) {
      stop();
      drawStaticFrame();
    } else {
      start();
    }
  }

  const observer = new ResizeObserver(resize);
  const themeObserver = new MutationObserver(() => {
    resize();
    if (reducedMotion.matches) drawStaticFrame();
  });
  observer.observe(canvas);
  themeObserver.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });
  document.addEventListener("visibilitychange", onVisibilityChange);
  reducedMotion.addEventListener("change", onMotionPreferenceChange);
  resize();

  if (reducedMotion.matches) {
    drawStaticFrame();
  } else {
    start();
  }

  return () => {
    stop();
    observer.disconnect();
    themeObserver.disconnect();
    document.removeEventListener("visibilitychange", onVisibilityChange);
    reducedMotion.removeEventListener("change", onMotionPreferenceChange);
  };
}

export default function MatrixRain() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) {
      console.error("Matrix rain canvas element is unavailable.");
      return;
    }
    const context = canvas.getContext("2d");
    if (!context) {
      console.error("Matrix rain could not initialize its canvas.");
      return;
    }
    return initializeMatrixRain(canvas, context);
  }, []);

  return <canvas ref={canvasRef} className={styles.canvas} aria-hidden="true" />;
}
