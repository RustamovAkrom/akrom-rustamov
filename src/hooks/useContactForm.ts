"use client";

import { useEffect } from "react";

export function useContactForm() {
    useEffect(() => {
        const form = document.querySelector<HTMLFormElement>(".cform");

        if (!form) return;

        const btn = form.querySelector<HTMLButtonElement>("button[type='submit']");
        const status = form.querySelector<HTMLElement>(".cform__status");

        const handleSubmit = async (e: Event) => {
            e.preventDefault();

            if (!btn) return;

            const formData = new FormData(form);

            const data = {
                name: formData.get("name"),
                email: formData.get("email"),
                message: formData.get("message"),
            };

            if (!data.email || !data.message) {
                if (status) status.textContent = "Please fill required fields";
                return;
            }

            try {
                btn.disabled = true;
                btn.textContent = "Sending...";

                // 🔥 пока fake request (потом подключим backend)
                await new Promise((r) => setTimeout(r, 1200));

                if (status) {
                    status.textContent = "Message sent successfully!";
                    status.classList.add("success");
                }

                form.reset();
            } catch (err) {
                if (status) {
                    status.textContent = "Something went wrong.";
                    status.classList.add("error");
                }
            } finally {
                btn.disabled = false;
                btn.textContent = "Send Message";
            }
        };

        form.addEventListener("submit", handleSubmit);

        return () => {
            form.removeEventListener("submit", handleSubmit);
        };
    }, []);
}
