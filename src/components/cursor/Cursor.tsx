"use client";

import { useRef } from "react";
import { useCursor } from "@/hooks/useCursor";

export default function Cursor() {
    const dotRef = useRef<HTMLDivElement>(null!);
    const ringRef = useRef<HTMLDivElement>(null!);

    useCursor(dotRef, ringRef);

    return (
        <>
            <div ref={dotRef} className="cur-dot" />
            <div ref={ringRef} className="cur-ring" />
        </>
    );
}
