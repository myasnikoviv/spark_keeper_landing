Я спираюсь на файли з архіву Spark Keeper Landing Page.zip (React/Vite) — там є конкретні компоненти:
	•	src/app/components/floating-particles.tsx
	•	entry-moment.tsx
	•	fragmented-reality.tsx
	•	transformation.tsx
	•	understanding.tsx
	•	constellation.tsx
	•	presence.tsx
	•	memories-returning.tsx
	•	whispered-voices.tsx
	•	whispered-cta.tsx
	•	resolution.tsx
	•	minimal-header.tsx
(це не “я придумав” — вони реально є в архіві).

⸻

✅ DOC: Spark Keeper Landing — FIXES → RESTORE BLOCKS → MOTION

1) FIXES (те, що треба пофіксити в поточній версії)

1.1 Header / Localization (критично)
	•	Локалізувати меню в хедері: при перемиканні мов пункти меню мають мінятися, а не залишатися EN.
	•	Перевірити також: aria-label, title атрибути, “Download/Coming soon” тексти — теж i18n.

1.2 Hero / H1 (чорний квадрат)
	•	Прибрати “чорний квадрат/плашку” під H1 (все ще є).
	•	H1 має виглядати як частина сцени: світло/глоу/градієнт/blur reveal, без контейнера, який читається як блок.

1.3 Sparks / particles layer
	•	Sparks/іскорки не мають зникати. Зараз їх мало/майже нема.
	•	Повернути глобальний шар іскорок (як у старому лендінгу) і зробити його стабільно видимим (не “ледь-ледь”).

База вже є в архіві: floating-particles.tsx (50 particles, glow, drift). Її треба повернути як root-layer.

1.4 CTA блоки (idle animation)
	•	Зараз “жовтий/помаранчевий” фон видно тільки на hover.
	•	Треба: idle pulse, який помітний так само як hover, але трохи м’якший (hover = підсилення).

Важливо: “мерехтіння під великим blur” — не підходить. Має читатися без наведення.

1.5 Why ideas disappear (фон з “ідеями”)
	•	Зробити всі background-фрази горизонтальними (без рандомних кутів).
	•	Позиціювання має виглядати “акуратно”, як deliberate design, а не “розкидано”.
	•	Sparks у цій сцені — більше (зараз мало).

1.6 How Spark Keeper Works (скріни додали, але виглядає як темплейт)
	•	Скріни/блоки зараз читаються як “SaaS cards”.
	•	Їх треба переверстати під ваш світ: більше depth, glow, floating, micro-parallax, без “плоских карток”.

1.7 From Input to Action (зламано концепт)
	•	Повернути тексти (вони не можуть пропасти — це SEO + ясність).
	•	Spark зараз “жовтий круг” — замінити на UI-spark елемент (мікро-картка/чіп Spark з заголовком/тегом/типом).
	•	Додати анімацію: “іскорки біжать по шляху” Input → AI → Spark → Action (і для Link/Voice/Screenshot сценаріїв однаково).

1.8 Дублі / структура
	•	“See it in your life” / CTA повторюються дивно — перевірити і прибрати зайве дублювання (або зробити різними за змістом і motion).
	•	Повернути “круті анімовані блоки” (див. п.2) — зараз їх реально замінили “плоскими вставками”.

1.9 Watch the magic (відео)
	•	Зараз “embed-плитка”, яка не вписується в sci-fi/void.
	•	Переробити контейнер під “космос/глоу/портал”: depth, animated border, subtle particles, не прямокутний шаблон.

1.10 Stats (2k+ users…)
	•	Поточний блок виглядає “з жопи вирвано”.
	•	Його треба повністю переробити під ваш стиль або прибрати до моменту, коли є реальні числа.
	•	Якщо залишаємо: цифри мають з’являтися як “signal readout” + spark-акценти, не cards.

1.11 Testimonials
	•	Повернути формат floating testimonials (як було в старому лендінгу), НЕ карточки.
	•	Додати: ім’я, роль/контекст, рейтинг.
	•	Рейтинг: не ⭐⭐⭐⭐⭐, а 5 spark-вогників (брендово).

⸻

2) ЯКІ БЛОКИ ПОВЕРТАЄМО З АРХІВУ + ДЕ ЇХ ВСТАВИТИ

Ти просив конкретику: що саме повернути і куди вставити.

Блоки з архіву (всі “круті анімації”, які прибрали)

Ось список того, що треба повернути (назви = файли в архіві):
	1.	Global ambient layer

	•	FloatingParticles → src/app/components/floating-particles.tsx
	•	Куди: root (під усі секції), постійно на сторінці.

	2.	Hero / Entry

	•	EntryMoment → entry-moment.tsx
	•	Куди: верх сторінки, але інтегрувати з вашим SEO-H1 (H1 залишається DOM).

	3.	Problem atmosphere

	•	FragmentedReality → fragmented-reality.tsx
	•	Куди: одразу після блоку “Why ideas disappear”, як “емоційне підсилення проблеми”.

	4.	Transformation / Understanding (алхімія сенсу)

	•	Transformation → transformation.tsx
	•	Understanding → understanding.tsx
	•	Куди: між “One place for everything…” і “How Spark Keeper works”
(це ідеальний місток: “AI перетворює → AI розуміє”).

	5.	Constellation / Mind map feel

	•	Constellation → constellation.tsx
	•	Куди: залишити близько до “From input to action” / “Use cases”, як вау-блок зв’язків.

	6.	Presence

	•	Presence → presence.tsx
	•	Куди: блок “An AI that thinks with you” (і тут не треба тупий аватар — Presence як абстрактна присутність підходить ідеально).

	7.	MemoriesReturning

	•	MemoriesReturning → memories-returning.tsx
	•	Куди: після секцій з use cases / demo, як “ось як повертаються думки”.

	8.	Testimonials (floating)

	•	WhisperedVoices → whispered-voices.tsx
	•	Куди: секція відгуків, але доробити: ім’я+роль+spark-rating і виправити layout на desktop.

	9.	Resolution + CTA

	•	Resolution → resolution.tsx
	•	WhisperedCTA → whispered-cta.tsx
	•	Куди: фінал, замість плоского фінального CTA — але з вашим SEO-текстом і store buttons (DOM).

Важливо: це не “додати ще щось” — це повернути те, що вже було зроблено і зникло.

⸻

3) ФІНАЛЬНА СТРУКТУРА + MOTION СЦЕНАРІЇ ПО БЛОКАХ (після повернення блоків)

Нижче — фінальний порядок сторінки (без “пенні”, без повторів), і для кожного — motion.

Block A — Header
	•	Motion: subtle glow underline на active language + hover spark trail під nav.
	•	i18n: меню міняється разом з мовою.

Block B — Hero (SEO H1 + EntryMoment + sparks)
	•	FloatingParticles: завжди.
	•	EntryMoment: breathing central glow.
	•	H1: blur→sharp reveal, без чорної плашки.
	•	CTA: idle pulse (видимий), hover = сильніше.

Block C — Why ideas disappear (SEO + background phrases)
	•	Background phrases: всі горизонтальні, акуратна сітка/потоки.
	•	Motion: повільний drift + fade cycle.
	•	Sparks: трохи “пролітають” між фразами.

Block D — FragmentedReality (повернути як було)
	•	Motion з архіву: floating fragments + broken light threads.
	•	Нічого не перетворювати в карточки.

Block E — One place for everything… (SEO)
	•	Reveal: stagger по реченнях.
	•	Background: “gravity field” — фрази/іскорки повільно притягуються до центру.

Block F — Transformation (повернути)
	•	Motion: “алхімія” перетворення (як у вашому компоненті).

Block G — Understanding (повернути)
	•	Motion: “структура з’являється” (як у компоненті).

Block H — How Spark Keeper Works (screenshots) — ПЕРЕРОБИТИ ВІЗУАЛ
	•	Не cards.
	•	Motion: скрін floating + parallax + glow rim.
	•	Текст: завжди DOM, stagger reveal.

Block I — From Input to Action (3 сценарії)
	•	Кожен сценарій має:
	•	Input artifact (link preview / voice bubble / screenshot tile) з micro “attached jiggle”
	•	spark particles running path між кроками
	•	AI: pulse/thinking
	•	Spark: UI-елемент Spark, не круг
	•	Action: UI chips (calendar/todo/reminder)
	•	Текст: повернути й тримати видимим (SEO).

Block J — Use cases / See SparkKeeper in action (переробити)
	•	Не grid cards.
	•	Motion: use case як “сценка” + sparks, мінімум рамок.

Block K — Constellation / Mind map (повернути/залишити)
	•	Motion з архіву: nodes pulse + lines draw-in.

Block L — Watch the magic (відео)
	•	Переробити контейнер: “portal frame”, animated border, subtle particles.
	•	Autoplay тільки when in view (якщо треба).

Block M — Presence (повернути, замість аватара)
	•	Motion: “тепла присутність”, breathing glow.

Block N — MemoriesReturning (повернути)
	•	Motion: “повернення згадок” — як у вас задумано.

Block O — Testimonials (WhisperedVoices, повернути)
	•	Повернути floating layout.
	•	Додати:
	•	rating = 5 spark-іконок
	•	name + role
	•	Виправити desktop: ніколи не перекривати (або adaptive positioning, або grid на desktop з floating ефектом).

Block P — FAQ
	•	Мінімальний motion, accordion ок.

Block Q — Resolution + WhisperedCTA (повернути)
	•	Resolution: calm settle.
	•	CTA: idle pulse (видимий), hover = підсилення.

⸻