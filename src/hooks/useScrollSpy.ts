"use client";

import { useEffect, useState } from "react";

export function useScrollSpy(ids: string[]) {
    const [active, setActive] = useState(ids[0]);

    useEffect(() => {
        const sections = ids
            .map((id) => document.getElementById(id))
            .filter(Boolean) as HTMLElement[];

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActive(entry.target.id);
                    }
                });
            },
            {
                rootMargin: "-40% 0px -50% 0px",
                threshold: 0,
            }
        );

        sections.forEach((sec) => observer.observe(sec));

        return () => observer.disconnect();
    }, [ids]);

    return active;
}
