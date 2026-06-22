"use client";

import { useEffect, useRef } from "react";

export function useScrollAnimation(options?: { threshold?: number; rootMargin?: string }) {
    const ref = useRef<HTMLElement>(null);
    const observerRef = useRef<IntersectionObserver | null>(null);

    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("section-visible");
                        observer.unobserve(entry.target);
                    }
                });
            },
            {
                threshold: options?.threshold ?? 0.1,
                rootMargin: options?.rootMargin ?? "0px 0px -80px 0px",
            }
        );

        observer.observe(element);
        observerRef.current = observer;

        return () => {
            observer.disconnect();
        };
    }, [options?.threshold, options?.rootMargin]);

    return ref;
}
