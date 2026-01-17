Spark Keeper Landing — Final Fixes Tech Spec (vFinal)

1) Global Particles Layer — повернути по всій сторінці + різнокольоровість

Problem
	•	Particles майже зникли зі сторінки.
	•	Зараз вони помітні майже тільки в блоці з фразами (“Saved it somewhere / Lost in screenshots”).
	•	Вони стали одного кольору, хоча раніше були різнокольорові.

Requirements
	1.	Global particles layer має бути активний на всіх секціях (як фон-атмосфера), не тільки в thought-phrase block.
	2.	Particles мають бути різнокольорові (мінімум 3–5 відтінків), у вашій палітрі (void + electric blue + neon violet + warm orange accents).
	3.	Depth effect:
	•	частина particles sharp, частина blur (перспектива)
	•	різні розміри/яскравість/швидкість за depth-layer

Acceptance criteria
	•	На будь-якому місці сторінки видно particles (не тільки в одному блоці).
	•	Є щонайменше 3 різні кольори particles одночасно.
	•	Видно depth: є і sharp, і blurred particles.
	•	Нема “перешуму” — particles не заважають читати текст (контраст контрольований).

⸻

2) Cursor Swarm (mouse-follow) — додати Brownian motion + реакцію на scroll

Problem
	•	Mouse-follow працює, але:
	1.	коли мишка стоїть — ефект “прилип” (нема життя)
	2.	при скролі пляма лишається приклеєною до курсора, без “інерції”/затримки

Requirements
	1.	Idle/Brownian life: навіть коли курсор нерухомий, swarm має “жити”:
	•	невеликий броунівський рух частинок
	•	micro-fluctuations в межах радіусу
	2.	Scroll реакція: коли користувач скролить (wheel/trackpad):
	•	swarm має поводитися ніби “відстає” в просторі (інерція)
	•	потім “підлітає” до курсора з easing (tail/follow)
	3.	Поведінка має бути однаково органічна для:
	•	mouse move
	•	scroll (wheel)
	4.	Performance: throttle, requestAnimationFrame, graceful degradation.

Suggested implementation notes (коротко)
	•	Тримати target = cursorPos
	•	Тримати current = current + (target-current)*followFactor
	•	На scroll збільшувати “lag” (тимчасово зменшити followFactor або додати velocity offset)
	•	Brownian: per-particle noise (sin/perlin) + random walk з clamp

Acceptance criteria
	•	При нерухомому курсорі swarm не завмирає, а продовжує легкий рух.
	•	При активному scroll swarm відстає і доганяє курсор плавно (видима інерція).
	•	Нема ефекту “приклеєна пляма”.
	•	FPS стабільний (нема фризів).

⸻

3) Thought Phrases Block — рандомні позиції + рандомний таймінг

Problem
	•	Фрази стали кращі, але анімація передбачувана: думки з’являються в тих самих місцях з однаковими таймінгами.

Requirements

Для кожної появи фрази:
	•	позиція має бути новою (в межах дозволеної safe-area)
	•	duration, delay, fade-in/out — рандомні
	•	кожна фраза анімується незалежно, асинхронно

Acceptance criteria
	•	Одна і та сама фраза не з’являється кожен раз в одному місці.
	•	Duration/Delay варіюються (нема синхронного “пульсу”).
	•	Поведінка схожа на “живі думки”, а не на циклічний слайдер.

⚠️ Важливо для SSR/Next: рандом має бути детермінований або тільки на клієнті (див. пункт 5).

⸻

4) Core “Universe Center” block — помаранчевий центр + градієнт тексту + curved lines

Problem/Request
	•	Блок виглядає добре, але хочеться:
	•	центр знову помаранчевий
	•	текст, який “летить” в центр: білий → помаранчевий при наближенні
	•	повернути/додати лінії, що з’єднують текст з центром; ideally curved

Requirements
	1.	Center glow: повернути warm orange core (як раніше).
	2.	Inbound text color shift:
	•	старт: білий/нейтральний
	•	near-core: теплий помаранчевий
	•	при “розчиненні” в центрі: opacity → 0
	3.	Connection lines:
	•	з’являються разом із inbound items
	•	не прямі: curved / bezier
	•	теж затухають при вході в центр

Acceptance criteria
	•	Центр явно читається як orange core.
	•	Текст змінює колір по мірі наближення (white→orange).
	•	Є connection lines для inbound елементів (краще curved).
	•	Лінії і текст зникають при вході в центр (не пролітають крізь).

⸻

5) Fix console error: React hydration mismatch (Next.js)

Error

A tree hydrated but some attributes of the server rendered HTML didn't match the client properties...

Likely cause

У вас є клієнтські компоненти, які під час SSR/першого рендеру використовують:
	•	Math.random(), Date.now()
	•	різний branch typeof window !== 'undefined'
	•	або “рандомні позиції” для фраз/particles, які відрізняються на сервері й клієнті

Це критично, бо Next прямо каже, що mismatch не буде patched.

Requirements / Fix options (обрати 1 правильний шлях)

Option A (рекомендовано): детермінований рандом із seed
	•	Використати seeded RNG (наприклад mulberry32) з фіксованим seed на SSR + CSR
	•	Або seed залежний від stable input (locale + section id), але стабільний між SSR/CSR

Option B: клієнт-only для рандомних анімаційних сцен
	•	Винести components типу particles/thought phrases у dynamic(() => import(...), { ssr: false })
	•	Або рендерити “статичний placeholder” на SSR, а потім у useEffect ініціалізувати рандом

Option C (точково): suppressHydrationWarning
	•	Тільки якщо mismatch не критичний і локальний (але краще A/B)

Acceptance criteria
	•	Помилка hydration зникає з консолі.
	•	Нема “стрибка” макета при hydration (layout shift мінімальний).
	•	Поведінка рандомних елементів стабільна й не ламає SEO-текст.

⸻

Загальний Definition of Done
	•	Global particles присутні всюди, різнокольорові, з depth.
	•	Cursor swarm живе (Brownian), має інерцію при scroll.
	•	Thought phrases мають рандомні позиції/таймінги при кожній появі.
	•	Universe center: orange core + white→orange text + curved lines.
	•	Hydration error в Next.js усунуто повністю.

⸻
