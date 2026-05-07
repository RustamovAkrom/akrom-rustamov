"use client";

import { useEffect, useState } from "react";

type Theme = "dark" | "light";

export function useTheme() {
    const [theme, setTheme] = useState<Theme>("dark");

    // init theme
    useEffect(() => {
        const saved = localStorage.getItem("theme") as Theme | null;

        if (saved) {
            setTheme(saved);
            document.documentElement.dataset.theme = saved;
            return;
        }

        // fallback → system theme
        const prefersLight = window.matchMedia("(prefers-color-scheme: light)").matches;

        const initial: Theme = prefersLight ? "light" : "dark";

        setTheme(initial);
        document.documentElement.dataset.theme = initial;
    }, []);

    const toggle = () => {
        const next: Theme = theme === "dark" ? "light" : "dark";

        setTheme(next);
        document.documentElement.dataset.theme = next;
        localStorage.setItem("theme", next);
    };

    return { theme, toggle };
}
