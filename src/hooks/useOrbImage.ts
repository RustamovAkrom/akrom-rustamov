"use client";

import { useEffect } from "react";

export function useOrbImage() {
    useEffect(() => {
        const core = document.querySelector<HTMLElement>(".orb__core");
        const img = core?.querySelector<HTMLImageElement>(".orb__img");

        if (!core || !img) return;

        const sync = () => {
            const hasImage = Boolean((img.getAttribute("src") || "").trim());
            core.classList.toggle("orb__core--with-image", hasImage);
        };

        sync();

        img.addEventListener("load", sync);
        img.addEventListener("error", () => {
            core.classList.remove("orb__core--with-image");
        });

        return () => {
            img.removeEventListener("load", sync);
        };
    }, []);
}
