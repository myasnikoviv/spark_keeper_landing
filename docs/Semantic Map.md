✅ 1️⃣ Контент-розмітка (Semantic Map для арт-лендингу)

Це не layout і не секції.
Це логічний скелет, який:
	•	🧠 читається Google
	•	🧠 читається користувачем
	•	🎨 НЕ ламає арт-потік

⸻

H1 (один на сторінку)

H1 (Hero / Entry moment):

Spark Keeper — your second brain for ideas that matter

(візуально може бути фрагментований, але в DOM — один H1)

⸻

H2 — смислові вузли (5–7 штук на всю сторінку)

❗ H2 — це якорі, вони можуть з’являтися в будь-якому місці потоку

H2 #1 — Problem

H2: Why your ideas disappear

Під ним — 1–2 абзаци тексту (не списком):
	•	information overload
	•	scattered apps
	•	bookmarks, saves, notes
	•	nothing turns into action

⸻

H2 #2 — Emotional Pain

H2: Your thoughts are valuable — but they vanish

Тут ідеальні:
	•	короткі абзаци
	•	або 3–4 окремі фрази (але в DOM — <p>)

⸻

H2 #3 — Solution Introduction

H2: One place for everything you think about

Тут вперше чітко пояснюємо:
	•	що Spark Keeper — single intelligent space
	•	без фіч-листів
	•	простими реченнями

⸻

H2 #4 — How It Works (conceptual)

H2: Capture once. Understand forever.

Тут логіка:
	•	multimodal input
	•	AI understanding
	•	sparks
	•	connections
	•	actions

👉 НЕ списком, а абзацами або розбитим текстом

⸻

H2 #5 — Use Cases (реальне життя)

H2: Built for real life, not productivity theatre

Під ним — H3 (див. нижче)

⸻

H2 #6 — AI Coach

H2: An AI that thinks with you

Тут:
	•	не “features”
	•	а відчуття presence / companion

⸻

H2 #7 — CTA / Resolution

H2: Keep what matters. Let go of the rest.


⸻

H3 — тільки для SEO + ясності (невидимі як “секції”)

Використовуються всередині арт-сцен, не як підзаголовки блоків.

Приклади H3 (Use Cases):

H3: Travel ideas you never lose
H3: Gift ideas you actually remember
H3: Movies, series, and saved content — organized
H3: Reading lists that turn into reading

⚠️ Візуально це може бути:
	•	звичайний текст
	•	або частина сцени
Але в HTML — <h3>

⸻

✅ 2️⃣ SEO-тексти (готові, можна брати як є)

Meta

Title:

Spark Keeper — AI Second Brain for Ideas, Thoughts & Actions

Description:

Spark Keeper helps you capture ideas, links, voice notes, and images in one intelligent space. AI organizes your thoughts, connects them, and turns them into actions — so nothing important is lost.

Keywords (optional, акуратно):

second brain app, idea management, AI knowledge app, thought organization, personal knowledge management


⸻

Core Text Blocks (для сторінки)

Problem Text

We save ideas everywhere — in notes, bookmarks, chats, screenshots, voice memos.
But when the moment comes, we can’t find what matters.

Modern life creates information overload.
What’s important gets buried.
What could become something meaningful disappears.


⸻

Solution Text

Spark Keeper is a single intelligent space for everything you think about.

Send text, voice, links, or images — anytime.
AI understands what you share, creates structured sparks, connects ideas, and suggests actions when they matter.


⸻

How It Works Text

You capture once.
Spark Keeper understands.
Ideas connect naturally.
Actions appear when it’s time to act.

No folders.
No manual sorting.
No mental overhead.


⸻

Use Case Text (example)

You see a place you want to visit.
You send it to Spark Keeper.
Months later, when you plan a trip, it’s already there — connected, remembered, ready.


⸻

Coach Text

Spark Keeper is not just a tool.
It’s an AI that thinks with you — helping you reflect, connect, and move forward.


⸻

✅ 3️⃣ Технічний гайд для інтеграції (Next.js / SEO / Motion)

Це інструкція для фронтендера, щоб нічого не зламали.

⸻

HTML / SEO

Обов’язково:
	•	Реальні <h1>–<h3>, <p>
	•	Текст у DOM, не тільки canvas/WebGL
	•	Контент читається без JS

Правильна модель:

HTML = смисл
CSS / Motion = форма


⸻

Анімації
	•	Анімація поверх тексту, не замість
	•	opacity, transform, filter
	•	Scroll-based reveal (Intersection Observer)
	•	Fallback: без motion — все видно

⸻

CTA Buttons
	•	App Store / Google Play:
	•	<a> або <button>
	•	aria-disabled="true"
	•	текст: “Coming Soon”
	•	CTA повторюється по сторінці
	•	Не ховати тільки в кінці

⸻

Localization
	•	Структура контенту однакова для EN / ES / UA
	•	Тільки текст міняється
	•	Перемикання мов без reload

⸻

Performance
	•	Lazy load media
	•	Motion не блокує first paint
	•	SEO-first, art-second (але візуально навпаки)

⸻
