# Инфографика и шпаргалки

Короткие визуальные памятки для быстрой проверки безопасности ваших профилей.

---

## 🛡️ База: 5 правил защиты аккаунта

<div class="ig5-grid">
  <div class="ig5-card" style="--accent:#3b82f6">
    <div class="ig5-num">01</div>
    <div class="ig5-icon">🔑</div>
    <h3>Уникальные пароли</h3>
    <p>Один сервис — один пароль. Никогда не повторяйте пароли между сервисами.</p>
    <div class="ig5-tip">Используйте менеджер паролей: Bitwarden, 1Password или KeePassXC</div>
  </div>
  <div class="ig5-card" style="--accent:#8b5cf6">
    <div class="ig5-num">02</div>
    <div class="ig5-icon">📱</div>
    <h3>Второй фактор</h3>
    <p>2FA через приложение надёжнее, чем SMS. Настройте везде, где это доступно.</p>
    <div class="ig5-tip">Google Authenticator, Aegis (Android), Raivo (iOS)</div>
  </div>
  <div class="ig5-card" style="--accent:#06b6d4">
    <div class="ig5-num">03</div>
    <div class="ig5-icon">🕵️</div>
    <h3>Приватность</h3>
    <p>Скройте номер телефона, дату рождения и геолокацию от посторонних.</p>
    <div class="ig5-tip">Проверяйте настройки после каждого крупного обновления приложения</div>
  </div>
  <div class="ig5-card" style="--accent:#f59e0b">
    <div class="ig5-num">04</div>
    <div class="ig5-icon">🧠</div>
    <h3>Здоровый скептицизм</h3>
    <p>Не вводите логин и пароль после перехода по ссылке из письма или сообщения.</p>
    <div class="ig5-tip">Всегда открывайте сайты вручную через браузер или закладки</div>
  </div>
  <div class="ig5-card" style="--accent:#22c55e">
    <div class="ig5-num">05</div>
    <div class="ig5-icon">📋</div>
    <h3>Контроль устройств</h3>
    <p>Регулярно проверяйте активные сеансы и отзывайте доступ у старых устройств.</p>
    <div class="ig5-tip">Делайте это минимум раз в месяц и после смены телефона</div>
  </div>
</div>

---

## 🎣 Как распознать фишинг

<div class="phish-detector">
  <div class="phish-header">
    <span class="phish-header-icon">⚠️</span>
    <div>
      <strong>Тест на фишинг</strong>
      <span>Наведите на каждый признак, чтобы узнать детали</span>
    </div>
  </div>
  <div class="phish-signs">
    <div class="phish-sign phish-sign--red">
      <div class="phish-sign-front">
        <span class="phish-emoji">😱</span>
        <span class="phish-label">Срочность и страх</span>
        <span class="phish-arrow">→</span>
      </div>
      <div class="phish-sign-back">«Ваш аккаунт будет заблокирован через 24 часа!» — классический способ отключить критическое мышление. Реальные сервисы не давят так.</div>
    </div>
    <div class="phish-sign phish-sign--orange">
      <div class="phish-sign-front">
        <span class="phish-emoji">🔗</span>
        <span class="phish-label">Кривая ссылка</span>
        <span class="phish-arrow">→</span>
      </div>
      <div class="phish-sign-back">telegran.org, vk-support.ru, faceb00k.com — подделки заменяют буквы или добавляют слова. Всегда проверяйте адрес до точки.</div>
    </div>
    <div class="phish-sign phish-sign--yellow">
      <div class="phish-sign-front">
        <span class="phish-emoji">🗝️</span>
        <span class="phish-label">Запрос данных</span>
        <span class="phish-arrow">→</span>
      </div>
      <div class="phish-sign-back">Ни один легитимный сервис никогда не попросит пароль, код из SMS или CVV карты через сообщение или звонок.</div>
    </div>
    <div class="phish-sign phish-sign--purple">
      <div class="phish-sign-front">
        <span class="phish-emoji">✍️</span>
        <span class="phish-label">Ошибки и странный текст</span>
        <span class="phish-arrow">→</span>
      </div>
      <div class="phish-sign-back">Опечатки, нарушенная грамматика, машинный перевод — признаки массовой рассылки. Легитимные уведомления пишут профессионалы.</div>
    </div>
    <div class="phish-sign phish-sign--blue">
      <div class="phish-sign-front">
        <span class="phish-emoji">🎁</span>
        <span class="phish-label">Нереальная награда</span>
        <span class="phish-arrow">→</span>
      </div>
      <div class="phish-sign-back">«Вы выиграли iPhone!», «Вам одобрен кредит 500 000₽» — если предложение кажется слишком хорошим, это почти всегда ловушка.</div>
    </div>
    <div class="phish-sign phish-sign--green">
      <div class="phish-sign-front">
        <span class="phish-emoji">👤</span>
        <span class="phish-label">Чужой аккаунт</span>
        <span class="phish-arrow">→</span>
      </div>
      <div class="phish-sign-back">Сообщение от друга с просьбой одолжить деньги или «проголосовать» — возможно, его взломали. Позвоните и уточните лично.</div>
    </div>
  </div>
</div>

---

## 🔐 Надёжность пароля: наглядно

<div class="password-meter-wrap">
  <div class="pm-examples">
    <div class="pm-row">
      <div class="pm-pass"><code>qwerty123</code></div>
      <div class="pm-bar-wrap"><div class="pm-bar" style="width:8%;background:#ef4444"></div></div>
      <div class="pm-time pm-time--red">мгновенно</div>
    </div>
    <div class="pm-row">
      <div class="pm-pass"><code>Мама2024</code></div>
      <div class="pm-bar-wrap"><div class="pm-bar" style="width:18%;background:#f97316"></div></div>
      <div class="pm-time pm-time--orange">несколько минут</div>
    </div>
    <div class="pm-row">
      <div class="pm-pass"><code>Marina_1995!</code></div>
      <div class="pm-bar-wrap"><div class="pm-bar" style="width:38%;background:#f59e0b"></div></div>
      <div class="pm-time pm-time--yellow">несколько дней</div>
    </div>
    <div class="pm-row">
      <div class="pm-pass"><code>Horse-Staple#88</code></div>
      <div class="pm-bar-wrap"><div class="pm-bar" style="width:68%;background:#84cc16"></div></div>
      <div class="pm-time pm-time--lime">десятки лет</div>
    </div>
    <div class="pm-row">
      <div class="pm-pass"><code>kX9!mP2#qL7@nW4$</code></div>
      <div class="pm-bar-wrap"><div class="pm-bar" style="width:100%;background:linear-gradient(90deg,#22c55e,#16a34a)"></div></div>
      <div class="pm-time pm-time--green">миллиарды лет</div>
    </div>
  </div>
  <div class="pm-legend">
    <div class="pm-legend-item">📏 Длина важнее сложности</div>
    <div class="pm-legend-item">🔀 Случайные слова = сильный пароль</div>
    <div class="pm-legend-item">♻️ Никогда не повторяйте пароли</div>
  </div>
</div>

---

## 📊 2FA: методы от слабого к сильному

<div class="twofa-ladder">
  <div class="twofa-rung twofa-rung--worst">
    <div class="twofa-rung-left">
      <span class="twofa-icon">📵</span>
      <div>
        <strong>Нет 2FA</strong>
        <span>Только пароль</span>
      </div>
    </div>
    <div class="twofa-badge twofa-badge--red">❌ Опасно</div>
  </div>
  <div class="twofa-rung twofa-rung--bad">
    <div class="twofa-rung-left">
      <span class="twofa-icon">📨</span>
      <div>
        <strong>SMS-коды</strong>
        <span>Перехватываются через SIM-свопинг</span>
      </div>
    </div>
    <div class="twofa-badge twofa-badge--orange">⚠️ Слабо</div>
  </div>
  <div class="twofa-rung twofa-rung--ok">
    <div class="twofa-rung-left">
      <span class="twofa-icon">📧</span>
      <div>
        <strong>Email-коды</strong>
        <span>Лучше SMS, но почта тоже может быть взломана</span>
      </div>
    </div>
    <div class="twofa-badge twofa-badge--yellow">🟡 Средне</div>
  </div>
  <div class="twofa-rung twofa-rung--good">
    <div class="twofa-rung-left">
      <span class="twofa-icon">📲</span>
      <div>
        <strong>TOTP-приложение</strong>
        <span>Google Authenticator, Aegis, Raivo — надёжно</span>
      </div>
    </div>
    <div class="twofa-badge twofa-badge--lime">✅ Хорошо</div>
  </div>
  <div class="twofa-rung twofa-rung--best">
    <div class="twofa-rung-left">
      <span class="twofa-icon">🔐</span>
      <div>
        <strong>Аппаратный ключ</strong>
        <span>YubiKey, Google Titan — максимальная защита</span>
      </div>
    </div>
    <div class="twofa-badge twofa-badge--green">🏆 Отлично</div>
  </div>
</div>

---

## 🗺️ Анатомия фишинговой ссылки

<div class="url-anatomy">
  <div class="url-display">
    <span class="url-part url-part--ok" data-label="Протокол (ок)" data-desc="HTTPS есть, но это не гарантия безопасности — мошенники тоже используют HTTPS">https://</span><span class="url-part url-part--danger" data-label="⚠️ Поддельный домен!" data-desc="vk-support — это не vk.com. Настоящий адрес ВКонтакте: vk.com">vk-support</span><span class="url-part url-part--warn" data-label="Похоже на легитимный" data-desc=".ru выглядит знакомо, но домен целиком — vk-support.ru, а не vk.com">.ru</span><span class="url-part url-part--neutral" data-label="Путь" data-desc="Путь может выглядеть убедительно, но главное — это основной домен слева">/login/confirm?token=abc123</span>
  </div>
  <div class="url-tooltip-area">
    <p class="url-hint">👆 Нажмите на часть ссылки, чтобы узнать, что она означает</p>
  </div>
  <div class="url-rule-box">
    <strong>Правило:</strong> Читайте домен справа налево до первого «/» — именно там настоящий адрес сайта.
  </div>
</div>

---

## ⚡ Экспресс-аудит: что проверить прямо сейчас

<div class="audit-grid">
  <div class="audit-card audit-card--blue">
    <div class="audit-platform">
      <span class="audit-icon">📘</span>
      <strong>ВКонтакте</strong>
    </div>
    <ul class="audit-list">
      <li>Настройки → Безопасность → Подтверждение входа</li>
      <li>Настройки → Приватность → Кто видит мой номер</li>
      <li>Настройки → Безопасность → История активности</li>
    </ul>
  </div>
  <div class="audit-card audit-card--sky">
    <div class="audit-platform">
      <span class="audit-icon">✈️</span>
      <strong>Telegram</strong>
    </div>
    <ul class="audit-list">
      <li>Настройки → Конфиденциальность → Двухэтапная верификация</li>
      <li>Настройки → Устройства → завершить лишние сеансы</li>
      <li>Настройки → Конфиденциальность → Номер телефона: Никто</li>
    </ul>
  </div>
  <div class="audit-card audit-card--pink">
    <div class="audit-platform">
      <span class="audit-icon">📸</span>
      <strong>Instagram</strong>
    </div>
    <ul class="audit-list">
      <li>Настройки → Безопасность → Двухфакторная аутентификация</li>
      <li>Настройки → Безопасность → Активные сеансы</li>
      <li>Настройки → Конфиденциальность → Закрытый аккаунт</li>
    </ul>
  </div>
  <div class="audit-card audit-card--green">
    <div class="audit-platform">
      <span class="audit-icon">💬</span>
      <strong>WhatsApp</strong>
    </div>
    <ul class="audit-list">
      <li>Настройки → Аккаунт → Двухшаговая проверка</li>
      <li>Настройки → Аккаунт → Привязанные устройства</li>
      <li>Настройки → Конфиденциальность → Фото профиля: Мои контакты</li>
    </ul>
  </div>
  <div class="audit-card audit-card--purple">
    <div class="audit-platform">
      <span class="audit-icon">🎮</span>
      <strong>Discord</strong>
    </div>
    <ul class="audit-list">
      <li>Настройки → Моя учётная запись → Двухфакторная аутентификация</li>
      <li>Настройки → Авторизованные приложения → удалить лишние</li>
      <li>Настройки → Конфиденциальность → Кто может добавлять в друзья</li>
    </ul>
  </div>
</div>

---

## 🧩 Социальная инженерия: 6 сценариев атак

<div class="scenarios-wrap">
  <div class="scenario-tabs">
    <input type="radio" name="scenario" id="sc1" class="scenario-radio" checked>
    <input type="radio" name="scenario" id="sc2" class="scenario-radio">
    <input type="radio" name="scenario" id="sc3" class="scenario-radio">
    <input type="radio" name="scenario" id="sc4" class="scenario-radio">
    <input type="radio" name="scenario" id="sc5" class="scenario-radio">
    <input type="radio" name="scenario" id="sc6" class="scenario-radio">

    <div class="scenario-tab-labels">
      <label for="sc1">😰<span>Техподдержка</span></label>
      <label for="sc2">💸<span>Займи деньги</span></label>
      <label for="sc3">🏆<span>Конкурс</span></label>
      <label for="sc4">😍<span>Романтика</span></label>
      <label for="sc5">💼<span>Работа</span></label>
      <label for="sc6">📦<span>Доставка</span></label>
    </div>

    <div class="scenario-panels">
      <div class="scenario-panel" id="panel1">
        <div class="scenario-message">
          <div class="scenario-msg-bubble">🤖 <strong>«Служба безопасности ВКонтакте»:</strong> Ваш аккаунт подозревается в рассылке спама. Для разблокировки сообщите код подтверждения из SMS.</div>
        </div>
        <div class="scenario-analysis">
          <div class="sc-red">❌ Что не так</div>
          <p>Настоящая техподдержка никогда не просит коды из SMS или пароли. Это мгновенная кража аккаунта.</p>
          <div class="sc-green">✅ Как реагировать</div>
          <p>Игнорируйте. Зайдите на сайт вручную и проверьте состояние аккаунта самостоятельно.</p>
        </div>
      </div>
      <div class="scenario-panel" id="panel2">
        <div class="scenario-message">
          <div class="scenario-msg-bubble">👥 <strong>Друг в Telegram:</strong> Привет! Я в больнице, срочно нужны 5000₽, переведи пожалуйста, потом верну. Карта: 4276...</div>
        </div>
        <div class="scenario-analysis">
          <div class="sc-red">❌ Что не так</div>
          <p>Аккаунт друга взломан или клонирован. Мошенники массово рассылают такие сообщения из украденных аккаунтов.</p>
          <div class="sc-green">✅ Как реагировать</div>
          <p>Позвоните другу лично по телефону и уточните. Никогда не переводите деньги по просьбе в мессенджере без звонка.</p>
        </div>
      </div>
      <div class="scenario-panel" id="panel3">
        <div class="scenario-message">
          <div class="scenario-msg-bubble">🎉 <strong>Instagram:</strong> Поздравляем! Вы выиграли iPhone 15 Pro в нашем розыгрыше. Перейдите по ссылке для получения приза: insta-prize.ru</div>
        </div>
        <div class="scenario-analysis">
          <div class="sc-red">❌ Что не так</div>
          <p>Вы не участвовали в розыгрыше. Ссылка ведёт на фишинговый сайт. Официальные уведомления приходят внутри приложения.</p>
          <div class="sc-green">✅ Как реагировать</div>
          <p>Удалите сообщение. Никогда не переходите по ссылкам из «выигрышей», в которых вы не участвовали.</p>
        </div>
      </div>
      <div class="scenario-panel" id="panel4">
        <div class="scenario-message">
          <div class="scenario-msg-bubble">💌 <strong>Незнакомец:</strong> Привет! Ты очень красивая. Я сейчас в командировке за рубежом, хочу познакомиться. Можешь проголосовать за мою племянницу? Ссылка: vote-konkurs.ru</div>
        </div>
        <div class="scenario-analysis">
          <div class="sc-red">❌ Что не так</div>
          <p>Классическая схема: завоевать доверие, затем попросить перейти по ссылке. Сайт украдёт данные аккаунта.</p>
          <div class="sc-green">✅ Как реагировать</div>
          <p>Не переходите по ссылкам от незнакомцев. Заблокируйте и пожалуйтесь на аккаунт.</p>
        </div>
      </div>
      <div class="scenario-panel" id="panel5">
        <div class="scenario-message">
          <div class="scenario-msg-bubble">💼 <strong>HR-менеджер:</strong> Здравствуйте! Мы нашли ваше резюме. Зарплата 150 000₽, удалённо. Пройдите анкетирование: job-anketa.ru/form и укажите паспортные данные.</div>
        </div>
        <div class="scenario-analysis">
          <div class="sc-red">❌ Что не так</div>
          <p>Сбор паспортных данных через сторонние сайты — мошенничество. Цель: оформить кредит или зарегистрировать фиктивные фирмы на ваше имя.</p>
          <div class="sc-green">✅ Как реагировать</div>
          <p>Легитимные работодатели не собирают паспортные данные до оффера. Проверьте компанию на hh.ru или по официальному сайту.</p>
        </div>
      </div>
      <div class="scenario-panel" id="panel6">
        <div class="scenario-message">
          <div class="scenario-msg-bubble">📦 <strong>СДЭК:</strong> Ваша посылка задержана на таможне. Оплатите 299₽ за растаможку: cdek-pay.ru/customs?id=4821</div>
        </div>
        <div class="scenario-analysis">
          <div class="sc-red">❌ Что не так</div>
          <p>Поддельный сайт имитирует СДЭК. После ввода данных карты спишут гораздо больше 299₽.</p>
          <div class="sc-green">✅ Как реагировать</div>
          <p>Проверяйте посылки только на официальном сайте cdek.ru. Никогда не платите по ссылкам из SMS и мессенджеров.</p>
        </div>
      </div>
    </div>
  </div>
</div>

---

## 📅 Календарь цифровой гигиены

<div class="hygiene-calendar">
  <div class="hc-col">
    <div class="hc-period">🗓️ Раз в неделю</div>
    <div class="hc-items">
      <div class="hc-item"><span>👁️</span> Проверить уведомления о подозрительных входах</div>
      <div class="hc-item"><span>🗑️</span> Удалить ненужные переписки с личными данными</div>
    </div>
  </div>
  <div class="hc-col">
    <div class="hc-period">📆 Раз в месяц</div>
    <div class="hc-items">
      <div class="hc-item"><span>📱</span> Проверить активные сеансы во всех аккаунтах</div>
      <div class="hc-item"><span>🔌</span> Отозвать доступ у неиспользуемых приложений</div>
      <div class="hc-item"><span>🔄</span> Обновить приложения до последних версий</div>
    </div>
  </div>
  <div class="hc-col">
    <div class="hc-period">📊 Раз в квартал</div>
    <div class="hc-items">
      <div class="hc-item"><span>🔑</span> Обновить пароли в важных сервисах</div>
      <div class="hc-item"><span>📋</span> Пройти чек-лист безопасности</div>
      <div class="hc-item"><span>💾</span> Проверить резервные коды 2FA</div>
      <div class="hc-item"><span>🛡️</span> Проверить настройки приватности</div>
    </div>
  </div>
  <div class="hc-col hc-col--trigger">
    <div class="hc-period hc-period--red">🚨 После этих событий</div>
    <div class="hc-items">
      <div class="hc-item"><span>📵</span> Смена телефона или номера</div>
      <div class="hc-item"><span>📧</span> Смена основной почты</div>
      <div class="hc-item"><span>💻</span> Потеря или продажа устройства</div>
      <div class="hc-item"><span>🌐</span> Утечка данных в сервисе</div>
      <div class="hc-item"><span>🤝</span> Расставание с партнёром/коллегой</div>
    </div>
  </div>
</div>

---

## 🧠 Мини-тест: проверь свои знания

<div class="quiz-wrap" id="secQuiz">
  <div class="quiz-progress-bar"><div class="quiz-progress-fill" id="quizProgressFill"></div></div>
  <div class="quiz-question-counter" id="quizCounter">Вопрос 1 из 5</div>

  <div class="quiz-questions">
    <div class="quiz-q active" data-q="0">
      <p class="quiz-q-text">Вам пишет «служба безопасности» Telegram и просит сообщить код из SMS для «верификации аккаунта». Что делать?</p>
      <div class="quiz-options">
        <button class="quiz-opt" data-correct="false">Сообщить код — раз просят, значит, надо</button>
        <button class="quiz-opt" data-correct="true">Игнорировать и заблокировать — Telegram никогда так не делает</button>
        <button class="quiz-opt" data-correct="false">Попросить подтверждения и тогда сообщить</button>
      </div>
    </div>
    <div class="quiz-q" data-q="1">
      <p class="quiz-q-text">Какой пароль наиболее надёжный?</p>
      <div class="quiz-options">
        <button class="quiz-opt" data-correct="false">P@ssw0rd2024!</button>
        <button class="quiz-opt" data-correct="false">ИмяДочери+ДатаРождения</button>
        <button class="quiz-opt" data-correct="true">конь-батарея-скрепка-верно</button>
      </div>
    </div>
    <div class="quiz-q" data-q="2">
      <p class="quiz-q-text">Что важнее проверить в первую очередь на фишинговой ссылке?</p>
      <div class="quiz-options">
        <button class="quiz-opt" data-correct="false">Наличие HTTPS (замочек)</button>
        <button class="quiz-opt" data-correct="true">Основной домен (часть до первого «/»)</button>
        <button class="quiz-opt" data-correct="false">Длину ссылки</button>
      </div>
    </div>
    <div class="quiz-q" data-q="3">
      <p class="quiz-q-text">Друг в WhatsApp просит срочно перевести деньги. Как проверить, что это он?</p>
      <div class="quiz-options">
        <button class="quiz-opt" data-correct="false">Переписка в WhatsApp — зачем звонить?</button>
        <button class="quiz-opt" data-correct="false">Попросить прислать фото с паспортом</button>
        <button class="quiz-opt" data-correct="true">Позвонить другу по телефону и уточнить</button>
      </div>
    </div>
    <div class="quiz-q" data-q="4">
      <p class="quiz-q-text">Какой метод 2FA наиболее безопасный?</p>
      <div class="quiz-options">
        <button class="quiz-opt" data-correct="false">SMS-код на телефон</button>
        <button class="quiz-opt" data-correct="false">Код на email</button>
        <button class="quiz-opt" data-correct="true">TOTP-приложение (Google Authenticator и аналоги)</button>
      </div>
    </div>
  </div>

  <div class="quiz-result" id="quizResult" style="display:none">
    <div class="quiz-result-icon" id="quizResultIcon"></div>
    <div class="quiz-result-title" id="quizResultTitle"></div>
    <div class="quiz-result-text" id="quizResultText"></div>
    <button class="quiz-restart" id="quizRestart">Пройти ещё раз</button>
  </div>
</div>

<script setup>
import { onMounted } from 'vue'
import { initInfographics } from './.vitepress/theme/infographics.js'

onMounted(() => {
  initInfographics()
})
</script>
