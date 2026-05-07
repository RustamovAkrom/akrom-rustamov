"use client";

import { useSmoothScroll } from "@/hooks/useSmoothScroll";
import { useNavbarBehavior } from "@/hooks/useNavbarBehavior";
import { useReveal } from "@/hooks/useReveal";
import { useCounters } from "@/hooks/useCounters";
import { useOrb } from "@/hooks/useOrb";
import { useMagnetic } from "@/hooks/useMagnetic";
import { useTilt } from "@/hooks/useTilt";
import { useCardGlow } from "@/hooks/useCardGlow";
import { useContactForm } from "@/hooks/useContactForm";
import { useProgress } from "@/hooks/useProgress";
import { useOrbImage } from "@/hooks/useOrbImage";

export default function AppInit() {
    useSmoothScroll();
    useNavbarBehavior();
    useReveal();
    useCounters();
    useOrb();
    useMagnetic();
    useTilt();
    useCardGlow();
    useContactForm();
    useProgress();
    useOrbImage();

    return null;
}
