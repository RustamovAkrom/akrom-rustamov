"use client";

import { useRef } from "react";
import { useCursor } from "@/hooks/useCursor";

export default function Cursor() {
    const dotRef = useRef<HTMLDivElement>(null!);
    const ringRef = useRef<HTMLDivElement>(null!);
    const trail1Ref = useRef<HTMLDivElement>(null!);
    const trail2Ref = useRef<HTMLDivElement>(null!);
    const trail3Ref = useRef<HTMLDivElement>(null!);

    useCursor(dotRef, ringRef, [trail1Ref, trail2Ref, trail3Ref]);

    return (
        <>
            <div ref={trail3Ref} className="cur-trail" style={{ opacity: 0.15, width: '4px', height: '4px' }} />
            <div ref={trail2Ref} className="cur-trail" style={{ opacity: 0.3, width: '5px', height: '5px' }} />
            <div ref={trail1Ref} className="cur-trail" style={{ opacity: 0.5, width: '6px', height: '6px' }} />
            <div ref={dotRef} className="cur-dot" />
            <div ref={ringRef} className="cur-ring" />
        </>
    );
}
