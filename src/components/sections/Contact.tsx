'use client';

import { useEffect, useState } from 'react';

export default function Contact() {
  const [contact, setContact] = useState<any>(null);

  useEffect(() => {
    fetch('/api/contact')
      .then(res => res.json())
      .then(data => setContact(data))
      .catch(console.error);
  }, []);

  // Обработка отправки формы
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);

    try {
      const response = await fetch('/api/send-message', {
        method: 'POST',
        body: JSON.stringify({
          name: formData.get('name'),
          email: formData.get('email'),
          message: formData.get('message'),
        }),
        headers: { 'Content-Type': 'application/json' },
      });

      if (response.ok) {
        alert('Message sent successfully!');
        form.reset();
      } else {
        alert('Error sending message');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Error sending message');
    }
  };

  // Статика пока грузятся данные
  if (!contact) {
    return (
      <section className="section contact" id="contact">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-left">
              <div className="s-head reveal">
                <span className="s-label mono">06 — contact</span>
                <h2 className="s-title">Let's build<br /><em>something.</em></h2>
              </div>
              <p className="contact-sub reveal" style={{ '--d': '.08s' } as React.CSSProperties}>
                Open to freelance, full-time roles, and interesting collaborations.
              </p>
              <div className="contact-links reveal" style={{ '--d': '.15s' } as React.CSSProperties}>
                <a href="https://github.com/RustamovAkrom" target="_blank" rel="noopener" className="c-link">
                  <svg viewBox="0 0 24 24" fill="currentColor" width="16">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.44 9.8 8.2 11.38.6.11.82-.26.82-.58v-2.03c-3.34.72-4.04-1.6-4.04-1.6-.55-1.4-1.33-1.77-1.33-1.77-1.09-.74.08-.73.08-.73 1.2.08 1.84 1.24 1.84 1.24 1.07 1.83 2.8 1.3 3.49 1 .1-.78.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.11-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 3-.4c1.02 0 2.04.13 3 .4 2.28-1.55 3.29-1.23 3.29-1.23.65 1.66.24 2.88.12 3.18.77.84 1.23 1.9 1.23 3.22 0 4.61-2.8 5.63-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.21.7.82.58C20.56 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z" />
                  </svg>
                  <span className="mono">github.com/RustamovAkrom</span>
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener" className="c-link">
                  <svg viewBox="0 0 24 24" fill="currentColor" width="16">
                    <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14zM7.12 20.45H3.56V9H7.12v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" />
                  </svg>
                  <span className="mono">LinkedIn</span>
                </a>
                <a href="tel:+998958786277" className="c-link">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="16">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.99 12a19.79 19.79 0 0 1-3-8.59A2 2 0 0 1 4 1.22h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9a16 16 0 0 0 6.91 6.91l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  <span className="mono">+998 95 878 62 77</span>
                </a>
              </div>
            </div>

            <div className="contact-right reveal" style={{ '--d': '.12s' } as React.CSSProperties}>
              <form className="cform" onSubmit={handleSubmit} noValidate>
                <div className="cform-row">
                  <div className="cform-g">
                    <label className="cform-l mono" htmlFor="name">Name</label>
                    <input className="cform-i" type="text" id="name" name="name" placeholder="Your name" required />
                  </div>
                  <div className="cform-g">
                    <label className="cform-l mono" htmlFor="email">Email</label>
                    <input className="cform-i" type="email" id="email" name="email" placeholder="your@email.com" required />
                  </div>
                </div>
                <div className="cform-g">
                  <label className="cform-l mono" htmlFor="message">Message</label>
                  <textarea className="cform-i cform-ta" id="message" name="message" rows={5}
                    placeholder="Tell me about your project..." required></textarea>
                </div>
                <button type="submit" className="btn solid full">
                  <span className="btn-lbl">Send Message</span>
                  <span className="btn-arr">→</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    );
  }

  // API данные
  return (
    <section className="section contact" id="contact">
      <div className="container">
        <div className="contact-grid">
          <div className="contact-left">
            <div className="s-head reveal">
              <span className="s-label mono">06 — contact</span>
              <h2 className="s-title">Let's build<br /><em>something.</em></h2>
            </div>
            <p className="contact-sub reveal" style={{ '--d': '.08s' } as React.CSSProperties}>
              {contact.description}
            </p>
            <div className="contact-links reveal" style={{ '--d': '.15s' } as React.CSSProperties}>
              <a href={contact.social.github.url} target="_blank" rel="noopener" className="c-link">
                <svg viewBox="0 0 24 24" fill="currentColor" width="16">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.44 9.8 8.2 11.38.6.11.82-.26.82-.58v-2.03c-3.34.72-4.04-1.6-4.04-1.6-.55-1.4-1.33-1.77-1.33-1.77-1.09-.74.08-.73.08-.73 1.2.08 1.84 1.24 1.84 1.24 1.07 1.83 2.8 1.3 3.49 1 .1-.78.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.11-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 3-.4c1.02 0 2.04.13 3 .4 2.28-1.55 3.29-1.23 3.29-1.23.65 1.66.24 2.88.12 3.18.77.84 1.23 1.9 1.23 3.22 0 4.61-2.8 5.63-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.21.7.82.58C20.56 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z" />
                </svg>
                <span className="mono">{contact.social.github.username}</span>
              </a>
              <a href={contact.social.linkedin.url} target="_blank" rel="noopener" className="c-link">
                <svg viewBox="0 0 24 24" fill="currentColor" width="16">
                  <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14zM7.12 20.45H3.56V9H7.12v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" />
                </svg>
                <span className="mono">{contact.social.linkedin.username}</span>
              </a>
              <a href={`tel:${contact.phone.replace(/\s/g, '')}`} className="c-link">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="16">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.99 12a19.79 19.79 0 0 1-3-8.59A2 2 0 0 1 4 1.22h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9a16 16 0 0 0 6.91 6.91l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <span className="mono">{contact.phone}</span>
              </a>
            </div>
          </div>

          <div className="contact-right reveal" style={{ '--d': '.12s' } as React.CSSProperties}>
            <form className="cform" onSubmit={handleSubmit} noValidate>
              <div className="cform-row">
                <div className="cform-g">
                  <label className="cform-l mono" htmlFor="name">Name</label>
                  <input className="cform-i" type="text" id="name" name="name" placeholder="Your name" required />
                </div>
                <div className="cform-g">
                  <label className="cform-l mono" htmlFor="email">Email</label>
                  <input className="cform-i" type="email" id="email" name="email" placeholder="your@email.com" required />
                </div>
              </div>
              <div className="cform-g">
                <label className="cform-l mono" htmlFor="message">Message</label>
                <textarea className="cform-i cform-ta" id="message" name="message" rows={5}
                  placeholder="Tell me about your project..." required></textarea>
              </div>
              <button type="submit" className="btn solid full">
                <span className="btn-lbl">Send Message</span>
                <span className="btn-arr">→</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
