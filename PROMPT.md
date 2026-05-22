# 🚀 ПРОМПТ ДЛЯ CLAUDE CODE — PORTFOLIO REVOLUTION

> **Контекст:** У меня есть Next.js 16.2.4 + React 19.2.4 проект (portfolio-next). Он уже работает, но я хочу сделать его ВЫДАЮЩИМСЯ — современным, креативным, с яркими эффектами, галактической/футуристичной/лесной эстетикой. Нужно оптимизировать, рефакторить и добавить новые секции. **ВАЖНО:** это Next.js 16 с breaking changes — читай `node_modules/next/dist/docs/` перед изменениями API.

---

## 📋 ПРАВИЛА РАБОТЫ (НЕ НАРУШАТЬ)

1. **НЕ ЛОМАЙ существующий функционал.** Все API routes, форма контакта, переключение темы, навигация — должны работать как сейчас или лучше.
2. **Mobile-first.** Все новые эффекты должны деградировать gracefully на мобильных (hover:none). Проверяй `@media (hover: none)`.
3. **Performance budget:** Lighthouse 90+ на всех метриках. Galaxy canvas уже есть — оптимизируй его, не создавай новый тяжёлый canvas без необходимости.
4. **Читай AGENTS.md и CLAUDE.md** в корне проекта — там описаны роли и правила.
5. **Работай итерациями.** После каждой крупной итерации — `next build` должен проходить без ошибок.
6. **TypeScript строго.** Убирай `any`. Создавай interfaces для всех данных.
7. **Accessibility:** добавляй `aria-label`, `role`, убедись что кастомный курсор не ломает таб-навигацию.

---

## 🎯 ЦЕЛИ (ПО ПРИОРИТЕТУ)

### ЭТАП 1: ФУНДАМЕНТ (Роль: System Architect)
- [ ] **Рефакторинг CSS:** Разделить `globals.css` на CSS Modules (`*.module.css`) рядом с компонентами. Оставить в `globals.css` только reset, variables, keyframes, scrollbar.
- [ ] **Типизация:** Создать `src/types/index.ts` со всеми интерфейсами (Project, Skill, Service, Certificate, Contact, AboutData). Заменить все `any` на типы.
- [ ] **Data Layer:** Создать `src/lib/data.ts` — вынести ВСЕ статические данные из компонентов и API routes туда. API routes должны импортировать из этого файла. Убрать дублирование "статика + API" в компонентах — компоненты должны принимать данные через props или использовать единый хук `useData`.
- [ ] **Image Optimization:** Заменить все `<img>` на `next/image` (кроме canvas/background). Добавить `sizes`, `priority` для LCP.
- [ ] **SEO:** Добавить `robots.ts`, `sitemap.ts` в `src/app/`. Добавить JSON-LD structured data для Person в layout.

### ЭТАП 2: ВИЗУАЛЬНАЯ РЕВОЛЮЦИЯ (Роль: UI/UX Designer + Frontend)

#### 🌌 Галактическая тема (усилить существующее)
- [ ] **Улучшенная Galaxy:** Добавить в `useGalaxy` цветные звёзды (оттенки `#8b5cf6`, `#06b6d4`, `#ec4899`), редкие "shooting stars" (линии с trail), nebula clouds (radial gradients с low opacity). На мобильных уменьшить count до 300.
- [ ] **Hero Orb Upgrade:** Добавить вокруг orb **3D-орбиту технологий** — маленькие иконки/буквы (Python, JS, Docker) вращаются по эллиптическим орбитам вокруг аватара с разной скоростью. Используй CSS 3D transforms (`transform-style: preserve-3d`, `@keyframes orbit`).
- [ ] **Neon Glow System:** Добавить CSS variables для акцентных цветов:
  ```css
  --accent-purple: #8b5cf6;
  --accent-cyan: #06b6d4;
  --accent-pink: #ec4899;
  --accent-green: #10b981;
  --glow-purple: rgba(139, 92, 246, 0.4);
  --glow-cyan: rgba(6, 182, 212, 0.4);
  ```
  Использовать для hover-эффектов, border glow, text-shadow на заголовках.

#### 🌲 Лесная/Биолюминесцентная эстетика
- [ ] **Firefly Particles:** В секции Contact или Footer добавить лёгкий эффект светлячков — 15-20 маленьких точек с мягким жёлто-зелёным свечением (`#a3e635`), плавающих вверх-вниз. Только CSS animations, НЕ canvas (чтобы не грузить CPU). Использовать `position: absolute` + `@keyframes float-random`.
- [ ] **Organic Blobs:** В фоне секций About или Services добавить медленно пульсирующие blob-формы (зелёный/фиолетовый градиент с opacity 0.03-0.05) — `border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%`.

#### 🤖 Футуристичные элементы
- [ ] **Glitch Text Effect:** На главном заголовке Hero (`Akrom Rustamov`) добавить редкий CSS glitch эффект (на hover или периодический) — `text-shadow` смещения в cyan/magenta.
- [ ] **Holographic Cards:** Карточки Skills и Certificates при hover должны получать holographic sheen — градиент блик, движущийся по диагонали (`linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.1) 45%, transparent 50%)`).
- [ ] **Scan Line:** Тонкая горизонтальная линия, медленно проходящая по экрану раз в 20 секунд (как в sci-fi интерфейсах) — CSS animation, `pointer-events: none`.
- [ ] **Typing Effect:** В Hero eyebrow (`<Backend Engineer · Python/>`) добавить эффект печатной машинки с мигающим курсором.

### ЭТАП 3: НОВЫЕ СЕКЦИИ (Роль: Frontend)

Добавить между существующими секциями:

1. **`GitHubActivity`** (после Hero или в About):
   - Показывать GitHub stats (public repos, stars, contributions) — fetch с `api.github.com/users/RustamovAkrom`.
   - Визуально: горизонтальная полоса с анимированными счётчиками.
   - Fallback: статичные цифры если API недоступен.

2. **`TechOrbit`** (перед или внутри Skills):
   - 3D сфера/орбита из иконок технологий. На мобильных — 2D grid с анимированными появлениями.
   - Цвета иконок соответствуют их брендам (Python желтый, Docker синий и т.д.).

3. **`QuoteSection`** (после About):
   - Большая цитата о коде/разработке с красивой типографикой.
   - Анимация: появление по словам или по буквам (GSAP SplitText или CSS).
   - Фон: градиентный blur blob.

4. **`BlogPreview`** (после Services или перед Contact):
   - 3 последних поста (можно mock данные с Medium/Dev.to стилем).
   - Карточки с изображением, заголовком, датой, тегами.
   - Если нет реальных постов — использовать placeholder с призывом "Coming Soon".

5. **`FunFacts`** (после Certificates):
   - 4 колонки с анимированными счётчиками: "Cups of Coffee", "Lines of Code", "Git Commits", "Bugs Squashed".
   - Иконки + числа с `useCounters` анимацией.

### ЭТАП 4: АНИМАЦИИ И ПОЛИРОВКА (Роль: Frontend)
- [ ] **Page Load Sequence:** Orchestrated entrance — сначала galaxy fade-in, потом orb, потом текст с staggered задержками.
- [ ] **Smooth Section Transitions:** При скролле между секциями — лёгкий parallax на фоновых элементах (translateY на 10-15% скорости скролла).
- [ ] **Magnetic Cursor Upgrade:** Улучшить существующий — добавить "trail" из 3-4 точек, затухающих позади основного курсора.
- [ ] **Mobile Menu Animation:** Бургер меню должно открываться с красивой анимацией — пункты выезжают по очереди с fade + slide + blur removal (уже есть CSS, нужно подключить JS логику в `useNavbarBehavior`).
- [ ] **Loading States:** Добавить `loading.tsx` и `error.tsx` в `src/app/` для Suspense boundaries.

---

## 🎨 ДИЗАЙН-СИСТЕМА (ОБНОВИТЬ)

### Цветовая палитра (добавить к существующей)
```css
/* Accent colors — использовать для glow, gradients, highlights */
--acc-purple: #8b5cf6;
--acc-cyan: #06b6d4;
--acc-pink: #ec4899;
--acc-green: #10b981;
--acc-amber: #f59e0b;

/* Gradients */
--grad-hero: linear-gradient(135deg, var(--acc-purple), var(--acc-cyan));
--grad-forest: linear-gradient(180deg, transparent, rgba(16, 185, 129, 0.03));

/* Glows */
--glow-sm: 0 0 20px var(--glow-purple);
--glow-md: 0 0 40px var(--glow-cyan), 0 0 80px var(--glow-purple);
```

### Типографика (сохранить Syne + JetBrains Mono)
- Добавить `font-feature-settings: "ss01"` для Syne (если поддерживается).
- Заголовки: letter-spacing -0.04em, line-height 0.95.
- Код/labels: JetBrains Mono, 10-11px, uppercase, letter-spacing 0.15em.

---

## 🏗️ АРХИТЕКТУРНЫЕ ТРЕБОВАНИЯ

1. **Компоненты:** Использовать `React.FC` или обычные функции с typed props. Никаких `any`.
2. **Hooks:** Переписать imperative DOM hooks (`useMagnetic`, `useTilt`, `useCardGlow`) на декларативный подход с `useRef` + `useEffect`, cleanup обязателен.
3. **CSS:** CSS Modules для компонентов. Глобальные анимации — в `globals.css`.
4. **Images:** Все изображения через `next/image`. Добавить `placeholder="blur"` где возможно.
5. **Fonts:** Уже подключены через `next/font/google` — оставить.
6. **API:** Routes оставить в `src/app/api/`, но данные импортировать из `src/lib/data.ts`.

---

## 📝 КОНТЕНТ (СОХРАНИТЬ И ДОПОЛНИТЬ)

**Все существующие тексты сохранить.** Добавить:
- Hero eyebrow: сделать typing animation
- Quote: "First, solve the problem. Then, write the code." — John Johnson
- FunFacts: Coffee: 999+, Code: 50k+, Commits: 500+, Bugs: 0 (hopefully)
- Blog: 3 placeholder поста о Python, FastAPI, System Design

---

## ✅ КРИТЕРИИ ГОТОВНОСТИ

- [ ] `npm run build` проходит без ошибок
- [ ] `npm run lint` проходит без ошибок
- [ ] Lighthouse: Performance 90+, Accessibility 95+, Best Practices 100, SEO 100
- [ ] Mobile: все эффекты либо работают, либо gracefully degradated
- [ ] Тёмная/светлая тема: все новые цвета корректно инвертируются
- [ ] Курсор: работает на десктопе, скрыт на мобильных
- [ ] Galaxy: 60fps на среднем ноутбуке

---

## 🤖 РЕЖИМ РАБОТЫ

Ты — команда из 3 экспертов, работающих последовательно:

1. **System Architect** — рефакторинг, типизация, CSS Modules, data layer, SEO
2. **UI/UX Designer** — цвета, градиенты, glow, визуальные эффекты, адаптив
3. **Frontend Developer** — компоненты, анимации, новые секции, полировка

**Начни с Architect. После каждого этапа — проверь `next build`.** Если видишь что лимит токенов接近 — создай TODO комментарий в коде и перейди к следующему мелкому файлу. НЕ пиши длинные объяснения — только код и краткие комментарии.

---

## 🚀 ФИНАЛЬНАЯ ЗАДАЧА

Сделай мой portfolio таким, чтобы он выделялся среди тысяч других. Он должен кричать: "Этот парень — профессионал, у него есть вкус и внимание к деталям." Сохрани минимализм, но добавь "волшебства".
