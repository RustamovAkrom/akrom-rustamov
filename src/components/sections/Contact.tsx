"use client";

import { useState, type FormEvent } from "react";
import { useTranslations } from "next-intl";
import { useData } from "@/hooks/useData";
import { contactData } from "@/lib/data";
import { fireflyPositions, sporePositions } from "@/lib/fireflies";
import type { ContactData } from "@/types";
import styles from "./Contact.module.css";

type SubmissionStatus = "idle" | "sending" | "success" | "error";
type ContactMethod = "telegram" | "email" | "phone";

export default function Contact({ className = "" }: { className?: string }) {
  const t = useTranslations();
  const [status, setStatus] = useState<SubmissionStatus>("idle");
  const [contactMethod, setContactMethod] = useState<ContactMethod>("telegram");
  const { data } = useData<ContactData>("/api/contact", contactData);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (status === "sending") return;

    const form = event.currentTarget;
    const formData = new FormData(form);
    setStatus("sending");

    try {
      const response = await fetch("/api/send-message", {
        method: "POST",
        body: JSON.stringify({
          name: formData.get("name"),
          contactMethod: formData.get("contactMethod"),
          contactValue: formData.get("contactValue"),
          message: formData.get("message"),
          website: formData.get("website"),
        }),
        headers: { "Content-Type": "application/json" },
      });

      if (!response.ok) {
        setStatus("error");
        return;
      }

      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  return (
    <section className={`section contact ${styles.contact} ${className}`.trim()} id="contact">
      <div className="fireflies" aria-hidden="true">
        {fireflyPositions.map((firefly, index) => (
          <div
            key={index}
            className="firefly"
            style={{
              left: firefly.left,
              top: firefly.top,
              animationDelay: firefly.delay,
              animationDuration: firefly.duration,
            }}
          />
        ))}
      </div>
      <div className="spores" aria-hidden="true">
        {sporePositions.map((spore, index) => (
          <div
            key={index}
            className="spore"
            style={{
              left: spore.left,
              top: spore.top,
              animationDelay: spore.delay,
              animationDuration: spore.duration,
            }}
          />
        ))}
      </div>
      <div className="container">
        <div className="contact-grid">
          <div className="contact-left">
            <div className="s-head reveal">
              <span className="s-label mono">{t("Sections.contactLabel")}</span>
              <h2 className="s-title">{t("Contact.title")}</h2>
            </div>
            <p className="contact-sub reveal" style={{ "--d": ".08s" } as React.CSSProperties}>
              {t("Contact.description")}
            </p>
            <div className="contact-links reveal" style={{ "--d": ".15s" } as React.CSSProperties}>
              <a href={data.social.github.url} target="_blank" rel="noopener noreferrer" className="c-link">
                <svg viewBox="0 0 24 24" fill="currentColor" width="18" aria-hidden="true">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.44 9.8 8.2 11.38.6.11.82-.26.82-.58v-2.03c-3.34.72-4.04-1.6-4.04-1.6-.55-1.4-1.33-1.77-1.33-1.77-1.09-.74.08-.73.08-.73 1.2.08 1.84 1.24 1.84 1.24 1.07 1.83 2.8 1.3 3.49 1 .1-.78.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.11-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 3-.4c1.02 0 2.04.13 3 .4 2.28-1.55 3.29-1.23 3.29-1.23.65 1.66.24 2.88.12 3.18.77.84 1.23 1.9 1.23 3.22 0 4.61-2.8 5.63-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.21.7.82.58C20.56 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z" />
                </svg>
                <span className="mono">{data.social.github.username}</span>
                <span className={styles.linkArrow} aria-hidden="true">↗</span>
              </a>
              <a href={data.social.linkedin.url} target="_blank" rel="noopener noreferrer" className="c-link">
                <svg viewBox="0 0 24 24" fill="currentColor" width="18" aria-hidden="true">
                  <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14zM7.12 20.45H3.56V9H7.12v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" />
                </svg>
                <span className="mono">{data.social.linkedin.username}</span>
                <span className={styles.linkArrow} aria-hidden="true">↗</span>
              </a>
              <a href={data.social.telegram.url} target="_blank" rel="noopener noreferrer" className="c-link">
                <svg viewBox="0 0 24 24" fill="currentColor" width="18" aria-hidden="true">
                  <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                </svg>
                <span className="mono">{data.social.telegram.username}</span>
                <span className={styles.linkArrow} aria-hidden="true">↗</span>
              </a>
              <a href={data.social.hackthebox.url} target="_blank" rel="noopener noreferrer" className="c-link">
                <svg viewBox="0 0 24 24" fill="currentColor" width="18" aria-hidden="true">
                  <path d="M12 1.5 22.5 7.3v9.4L12 22.5 1.5 16.7V7.3L12 1.5Zm0 2.2L4 8.2v7.6l8 4.5 8-4.5V8.2l-8-4.5Zm-4.2 5h2.5v2.1h3.4V8.7h2.5v6.6h-2.5v-2.3h-3.4v2.3H7.8V8.7Z" />
                </svg>
                <span className="mono">{data.social.hackthebox.username}</span>
                <span className={styles.linkArrow} aria-hidden="true">→</span>
              </a>
            </div>
          </div>

          <div className={`contact-right reveal ${styles.formPanel}`} style={{ "--d": ".12s" } as React.CSSProperties}>
            <form className="cform" onSubmit={handleSubmit}>
              <div className={styles.honeypot} aria-hidden="true">
                <label htmlFor="contact-website">Website</label>
                <input id="contact-website" name="website" type="text" tabIndex={-1} autoComplete="off" />
              </div>
              <div className={styles.nameRow}>
                <div className="cform-g">
                  <label className="cform-l mono" htmlFor="contact-name">{t("Common.name")}</label>
                  <input
                    className="cform-i"
                    type="text"
                    id="contact-name"
                    name="name"
                    placeholder={t("Common.name")}
                    autoComplete="name"
                    maxLength={100}
                    required
                  />
                </div>
              </div>
              <fieldset className={styles.contactMethod}>
                <legend className="cform-l mono">{t("Common.contactMethod")}</legend>
                <div className={styles.methodOptions}>
                  {(["telegram", "email", "phone"] as const).map((method) => (
                    <label className={styles.methodOption} key={method}>
                      <input
                        type="radio"
                        name="contactMethod"
                        value={method}
                        checked={contactMethod === method}
                        onChange={() => setContactMethod(method)}
                      />
                      <span>{t(`Common.${method}`)}</span>
                    </label>
                  ))}
                </div>
                <label className="cform-l mono" htmlFor="contact-value">{t(`Common.${contactMethod}Contact`)}</label>
                <input
                  className="cform-i"
                  type={contactMethod === "email" ? "email" : "text"}
                  id="contact-value"
                  name="contactValue"
                  placeholder={t(`Common.${contactMethod}Placeholder`)}
                  autoComplete={contactMethod === "email" ? "email" : contactMethod === "phone" ? "tel" : "off"}
                  maxLength={contactMethod === "email" ? 254 : 40}
                  required
                />
              </fieldset>
              <div className="cform-g">
                <label className="cform-l mono" htmlFor="contact-message">{t("Common.message")}</label>
                <textarea
                  className="cform-i cform-ta"
                  id="contact-message"
                  name="message"
                  rows={5}
                  maxLength={5000}
                  placeholder={t("Common.messagePlaceholder")}
                  required
                />
              </div>
              <button type="submit" className={`btn solid full ${styles.submit}`} disabled={status === "sending"}>
                <span className="btn-lbl">{status === "sending" ? t("Common.sending") : t("Common.send")}</span>
                <span className="btn-arr" aria-hidden="true">→</span>
              </button>
              {status !== "idle" && status !== "sending" && (
                <p
                  className={`${styles.formStatus} ${status === "error" ? styles.formStatusError : ""}`}
                  role="status"
                  aria-live="polite"
                >
                  {status === "success" ? t("Common.messageSent") : t("Common.messageError")}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
