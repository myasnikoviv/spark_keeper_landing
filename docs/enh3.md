Ок, прийняв. Нижче — оновлене ТЗ у правильній послідовності: (1) фікси → (2) фінальна послідовність блоків → (3) motion (включно з твоїми початковими сценаріями зі scroll-driven частинками, перспективою і mouse-attraction). Я спираюсь на поточну HTML-структуру  ￼ і на “MOTION SCENARIOS v1”  ￼.

⸻

1) FIXES (поточна версія — що саме правимо)

1.1 Зменшити кількість CTA (до 3–4 на всю сторінку)

Зараз CTA стоять майже після кожного блоку (є “Get Spark Keeper” одразу після hero, “Stop losing ideas”, “Start capturing”, потім дубль “See it in your life” двічі і т.д.)  ￼

Зробити так:
	•	Прибрати CTA одразу після H1 (Hero) — залишаємо тільки hero + problem.  ￼
	•	Прибрати CTA “Stop losing ideas” (waitlist) після “Why ideas disappear” — він зараз зайвий і створює “банерний шум”.  ￼
	•	Лишити CTA “Start capturing” (перший основний) — він добре стоїть після “How Spark Keeper Works”.  ￼
	•	Прибрати CTA “See it in your life” повністю, тим більше він дублюється 2 рази — це прямий баг/дубль секції.  ￼
	•	Фінальний CTA в кінці — залишити обов’язково (останній “Get Spark Keeper” / waitlist).

Результат: 3 CTA (або максимум 4, якщо дуже треба один “після Use Cases”).

⸻

1.2 From Input to Action — лейбли + мобільна схема

У секції “From Input to Action” зараз є лейбл INPUT, є ACTION, але немає лейблу для AI та Spark, і через це “центрування” виглядає неправильно.  ￼

Зробити:
	•	Додати лейбли над відповідними вузлами:
	•	INPUT (є)
	•	AI (додати)
	•	SPARK (додати)
	•	ACTION (є)
	•	Лейбли мають бути в одному стилі (10px, uppercase, tracking, opacity як інші).  ￼

Mobile behavior:
	•	На мобільному зараз зникає анімація “доріжки” (spark trail) між елементами.
	•	На мобільному зробити вертикальну схему:
	•	Input
	•	(↓ spark trail)
	•	AI
	•	(↓ spark trail)
	•	Spark
	•	(↓ spark trail)
	•	Action
	•	На десктопі лишається горизонтальна.

⸻

1.3 “See Spark Keeper in action” — прибрати “картковість”

Цей блок зараз поданий як типові “cards”. Потрібно вбудувати в сцену (менше рамок/карточних бордерів, більше “diegetic UI” — ніби це частина космічного інтерфейсу).  ￼

Зробити:
	•	Переосмислити layout як “gallery strips / floating panels”, а не grid cards.
	•	Мікро-паралакс + легкий glow rim, але без “SaaS cards”.

⸻

1.4 Metrics block (Active Notes / System Rating…) — зробити background прозорішим

Ти сказав: блок ок, але фон треба прозоріший.

Зробити:
	•	Понизити opacity бекграунду/плашки.
	•	Залишити читабельність цифр та заголовків.

⸻

1.5 Testimonials — не картки + рейтинг “sparks”

Зараз відгуки знову як картки. Потрібно повернути “літаючі” відгуки + рейтинг не звичайними іконками, а spark-вогниками, які “трохи дріщать/дрижать” і не ідеально рівні.

Зробити:
	•	Layout: floating testimonials (не cards)
	•	Додати:
	•	name / role
	•	rating: 5 spark-icons, кожна з micro-jitter (рандомний tiny rotate/scale, різний glow), легкий “dribble” loop.

⸻

1.6 Particles / Story blocks — їх все ще нема як треба

У поточному HTML видно “fixed inset …” контейнер для бекграунду, але глобальний шар story/particles виглядає спрощено (без твоєї scroll-залежної драматургії).  ￼

Зробити:
	•	Повернути “story-послідовність” для particles, де вони змінюються по scroll (див. розділ motion нижче) — це прямо описано в твоєму v1.  ￼
	•	Додати depth/perpective: частина particles — чіткі, частина — розмиті.

⸻

2) ФІНАЛЬНА ПОСЛІДОВНІСТЬ БЛОКІВ (щоб дев не “переставляв як хоче”)
	1.	Header (i18n ок)
	2.	Hero (H1) — без CTA
	3.	Why ideas disappear — без CTA
	4.	One place for everything you think about
	5.	How Spark Keeper Works (Capture/Organize/Connect/Act)
	6.	CTA #1: Start capturing ✅
	7.	From Input to Action (3 сценарії: Link / Voice / Screenshot) ✅
	8.	See Spark Keeper in action (перероблений, не cards)
	9.	Mind Map / Constellation
	10.	Video (“Watch the magic”)
	11.	Metrics (Active Notes / System Rating…) (фон прозоріший)
	12.	Testimonials (floating + spark rating)
	13.	FAQ
	14.	Final CTA #2 (або #3): Get Spark Keeper / waitlist ✅
	15.	Footer

Примітка: якщо дуже хочеш 3 CTA — можна ще один вставити після Use Cases / See in action, але не раніше і не частіше.

⸻

3) MOTION (оновлені вимоги, з твоїх MOTION SCENARIOS v1 + нові нюанси)

Тут ключове: motion має бути cause → effect, scroll-driven, не “section reveal”. Це прямо в твоєму документі.  ￼

3.1 Scroll-driven particles “story arc” (обов’язково повернути)

Замість просто “повільно літають” — робимо сцени:
	•	SCENE 0 Idle (до скролу): майже нічого не рухається, тільки легке “breath” і noise.  ￼
	•	SCENE 1 Entry (5–10%): spark стабілізується, H1 “проявляється з темряви”, ніби очі звикають.  ￼
	•	SCENE 2 Fragmentation (10–25%): з’являються фрагменти/уривки, трохи пливуть і зникають (хаос).  ￼
	•	SCENE 3 Overload peak (25–35%): фрагментів більше, читати складніше (коротко).  ￼
	•	SCENE 4 Intervention (35–45%): spark впливає: частина фрагментів притягується/стабілізується.  ￼
	•	SCENE 5 Understanding (45–60%): контент стабільний, з’являються лінії/орбіти.  ￼
	•	SCENE 6 Connections (60–70%): mind map feeling, scroll = zoom/focus.  ￼
	•	SCENE 7 Real life anchors (70–80%): use cases більш “прибиті”, мінімум хаосу.  ￼
	•	SCENE 8 Coach presence (80–88%): тепліше світло, без “входу персонажа”.  ￼
	•	SCENE 9 Calm resolution (88–95%): майже нічого не рухається.  ￼
	•	SCENE 10 CTA moments: CTA тільки після SCENE 5, після SCENE 7, і фінал.  ￼

3.2 Perspective / depth (те, що ти просиш зараз)
	•	Частинки мають мати “глибину”:
	•	20–30% — sharp (низький blur, вищий контраст)
	•	70–80% — soft (вищий blur, нижчий контраст)
	•	Розмір/швидкість теж залежить від “depth layer” (далекі — менші і повільніші).

3.3 Mouse attraction (паралакс-притягання)

Додати ефект: коли ведеш мишкою — sparks трохи тягнуться в бік курсора.
	•	Не “все летить за курсором”, а micro-force field:
	•	max offset 8–18px (залежно від depth)
	•	easing повільний, “в’язкий”
	•	на мобільному: або вимкнено, або заміна на “tilt by device orientation” (якщо хочете).

3.4 From Input to Action — spark trail анімація
	•	На десктопі: горизонтальний trail між кроками (loop).
	•	На мобільному: вертикальний trail між кроками (loop), не зникає.
	•	“AI” вузол: має subtle “thinking” pulse, але не мультяшний.

3.5 Anti-checklist (не робити)
	•	Ніяких “slide from bottom”, “cards fade in”, “icons popping”. Це прямо заборонено в твоєму v1.  ￼

⸻

Якщо хочеш, я можу оформити це як один Markdown-файл “Spark Keeper Landing — Fixes + Final Structure + Motion v2”, щоб ти просто кинув деву. Але по суті — все вже тут, рівно по твоєму списку і в потрібному порядку.