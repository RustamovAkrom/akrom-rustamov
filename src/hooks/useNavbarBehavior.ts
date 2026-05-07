"use client";

import { useEffect } from "react";

export function useNavbarBehavior() {
    useEffect(() => {
        const nav = document.getElementById("nav");
        const burger = document.getElementById("navBurger");
        const list = document.getElementById("navList");
        const links = document.querySelectorAll<HTMLAnchorElement>(".nav__a");
        const sections = document.querySelectorAll<HTMLElement>("section[id]");

        if (!nav) return;

        let lastY = 0;
        let ticking = false;
        let open = false;

        const onScroll = () => {
            if (!ticking) {
                requestAnimationFrame(() => {
                    const y = window.scrollY;

                    // 🔥 КЛЮЧЕВОЙ МОМЕНТ
                    if (y < 80) {
                        nav.classList.remove("vis");
                    } else {
                        nav.classList.add("vis");
                    }

                    lastY = y;

                    // active link
                    let cur = "";
                    sections.forEach((s) => {
                        if (y >= s.offsetTop - 130) {
                            cur = s.id;
                        }
                    });

                    links.forEach((l) => {
                        l.classList.toggle("on", l.dataset.s === cur);
                    });

                    ticking = false;
                });

                ticking = true;
            }
        };

        const closeMenu = () => {
            open = false;
            burger?.classList.remove("open");
            list?.classList.remove("open");
            document.body.style.overflow = "";
        };

        burger?.addEventListener("click", () => {
            open = !open;

            burger.classList.toggle("open", open);
            list?.classList.toggle("open", open);

            document.body.style.overflow = open ? "hidden" : "";

            // 🔥 важно
            if (open) nav.classList.add("vis");
        });

        links.forEach((l) => l.addEventListener("click", closeMenu));

        window.addEventListener("scroll", onScroll, { passive: true });

        // 🔥 КРИТИЧНО: initial state
        onScroll();

        return () => {
            window.removeEventListener("scroll", onScroll);
        };
    }, []);
}
