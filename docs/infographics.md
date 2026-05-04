# Инфографика и шпаргалки

Короткие визуальные памятки для быстрой проверки безопасности ваших профилей.

---

## База: 5 правил защиты аккаунта

<div class="ig5-grid">
    <div class="ig5-card" style="--accent:#3b82f6">
        <div class="ig5-num">01</div>
        <h3>Уникальные пароли</h3>
        <p>Один сервис — один пароль. Никогда не повторяйте пароли между сервисами.</p>
        <div class="ig5-tip">Используйте менеджер паролей: Bitwarden, 1Password или KeePassXC</div>
    </div>
    <div class="ig5-card" style="--accent:#3b82f6">
        <div class="ig5-num">02</div>
        <h3>Второй фактор</h3>
        <p>2FA через приложение надёжнее, чем SMS. Настройте везде, где это доступно.</p>
        <div class="ig5-tip">Google Authenticator, Aegis (Android), Raivo (iOS)</div>
    </div>
    <div class="ig5-card" style="--accent:#3b82f6">
        <div class="ig5-num">03</div>
        <h3>Приватность</h3>
        <p>Скройте номер телефона, дату рождения и геолокацию от посторонних.</p>
        <div class="ig5-tip">Проверяйте настройки после каждого крупного обновления приложения</div>
    </div>
    <div class="ig5-card" style="--accent:#3b82f6">
        <div class="ig5-num">04</div>
        <h3>Здоровый скептицизм</h3>
        <p>Не вводите логин и пароль после перехода по ссылке из письма или сообщения.</p>
        <div class="ig5-tip">Всегда открывайте сайты вручную через браузер или закладки</div>
    </div>
    <div class="ig5-card" style="--accent:#3b82f6">
        <div class="ig5-num">05</div>
        <h3>Контроль устройств</h3>
        <p>Регулярно проверяйте активные сеансы и отзывайте доступ у старых устройств.</p>
        <div class="ig5-tip">Делайте это минимум раз в месяц и после смены телефона</div>
    </div>
</div>

---

## Надёжность пароля: наглядно

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
            <div class="pm-pass"><code>Horse-Staple-88</code></div>
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
        <div class="pm-legend-item">Длина важнее сложности</div>
        <div class="pm-legend-item">Случайные слова = сильный пароль</div>
        <div class="pm-legend-item">Никогда не повторяйте пароли</div>
    </div>
</div>

---

## 2FA: методы от слабого к сильному

<div class="twofa-ladder">
    <div class="twofa-rung twofa-rung--worst">
        <div class="twofa-rung-left">
            <div>
                <strong>Нет 2FA</strong>
                <span>Только пароль</span>
            </div>
        </div>
        <div class="twofa-badge twofa-badge--red">Опасно</div>
    </div>
    <div class="twofa-rung twofa-rung--bad">
        <div class="twofa-rung-left">
            <div>
                <strong>SMS-коды</strong>
                <span>Перехватываются через SIM-свопинг</span>
            </div>
        </div>
        <div class="twofa-badge twofa-badge--orange">Слабо</div>
    </div>
    <div class="twofa-rung twofa-rung--ok">
        <div class="twofa-rung-left">
            <div>
                <strong>Email-коды</strong>
                <span>Почта тоже может быть взломана</span>
            </div>
        </div>
        <div class="twofa-badge twofa-badge--yellow">Средне</div>
    </div>
    <div class="twofa-rung twofa-rung--good">
        <div class="twofa-rung-left">
            <div>
                <strong>TOTP-приложение</strong>
                <span>Google Authenticator, Aegis, Raivo — надёжно</span>
            </div>
        </div>
        <div class="twofa-badge twofa-badge--lime">Хорошо</div>
    </div>
    <div class="twofa-rung twofa-rung--best">
        <div class="twofa-rung-left">
            <div>
                <strong>Аппаратный ключ</strong>
                <span>YubiKey, Google Titan — максимальная защита</span>
            </div>
        </div>
        <div class="twofa-badge twofa-badge--green">Отлично</div>
    </div>
</div>

---

## Анатомия фишинговой ссылки

<div class="url-anatomy">
    <div class="url-display">
        <span class="url-part url-part--ok" data-label="Протокол" data-desc="HTTPS есть, но это не гарантия безопасности — мошенники тоже используют шифрование">https://</span><span class="url-part url-part--danger" data-label="Внимание: Поддельный домен!" data-desc="vk-support — это не vk.com. Настоящий адрес ВКонтакте: vk.com">vk-support</span><span class="url-part url-part--warn" data-label="Доменная зона" data-desc="Похоже на легитимный адрес, но домен целиком — vk-support.ru, а не vk.com">.ru</span><span class="url-part url-part--neutral" data-label="Путь" data-desc="Путь может выглядеть убедительно, но главное — это основной домен слева">/login/confirm?token=abc123</span>
    </div>
    <div class="url-tooltip-area">
        <p class="url-hint">Нажмите на часть ссылки, чтобы узнать детали</p>
    </div>
    <div class="url-rule-box">
        <strong>Правило:</strong> Читайте домен справа налево до первого знака слеш — именно там настоящий адрес сайта.
    </div>
</div>

---

## Социальная инженерия: 6 сценариев атак

<div class="scenarios-wrap">
    <div class="scenario-tabs">
        <input type="radio" name="scenario" id="sc1" class="scenario-radio" checked>
        <input type="radio" name="scenario" id="sc2" class="scenario-radio">
        <input type="radio" name="scenario" id="sc3" class="scenario-radio">
        <input type="radio" name="scenario" id="sc4" class="scenario-radio">
        <input type="radio" name="scenario" id="sc5" class="scenario-radio">
        <input type="radio" name="scenario" id="sc6" class="scenario-radio">
        
  <div class="scenario-tab-labels">
            <label for="sc1">Поддержка</label>
            <label for="sc2">Займ</label>
            <label for="sc3">Конкурс</label>
            <label for="sc4">Знакомство</label>
            <label for="sc5">Работа</label>
            <label for="sc6">Доставка</label>
        </div>

  <div class="scenario-panels">
            <div class="scenario-panel" id="panel1">
                <div class="scenario-message">
                    <div class="scenario-msg-bubble"><strong>Служба безопасности:</strong> Ваш аккаунт подозревается в рассылке спама. Для разблокировки сообщите код подтверждения из SMS.</div>
                </div>
                <div class="scenario-analysis">
                    <div class="sc-red">Что не так</div>
                    <p>Настоящая техподдержка никогда не просит коды из SMS или пароли. Это кража аккаунта.</p>
                    <div class="sc-green">Как реагировать</div>
                    <p>Игнорируйте. Зайдите на сайт вручную и проверьте состояние аккаунта самостоятельно.</p>
                </div>
            </div>
            <div class="scenario-panel" id="panel2">
                <div class="scenario-message">
                    <div class="scenario-msg-bubble"><strong>Сообщение от друга:</strong> Привет! Я в больнице, срочно нужны деньги, переведи пожалуйста, завтра верну. Карта: 4276...</div>
                </div>
                <div class="scenario-analysis">
                    <div class="sc-red">Что не так</div>
                    <p>Аккаунт друга взломан. Мошенники рассылают такие сообщения из украденных профилей.</p>
                    <div class="sc-green">Как реагировать</div>
                    <p>Позвоните другу лично по телефону и уточните. Никогда не переводите деньги без звонка.</p>
                </div>
            </div>
            <div class="scenario-panel" id="panel3">
                <div class="scenario-message">
                    <div class="scenario-msg-bubble"><strong>Уведомление:</strong> Поздравляем! Вы выиграли смартфон в нашем розыгрыше. Перейдите по ссылке для получения приза: prize-site.ru</div>
                </div>
                <div class="scenario-analysis">
                    <div class="sc-red">Что не так</div>
                    <p>Вы не участвовали в розыгрыше. Ссылка ведёт на фишинговый сайт для сбора данных.</p>
                    <div class="sc-green">Как реагировать</div>
                    <p>Удалите сообщение. Никогда не переходите по ссылкам из уведомлений о внезапных выигрышах.</p>
                </div>
            </div>
            <div class="scenario-panel" id="panel4">
                <div class="scenario-message">
                    <div class="scenario-msg-bubble"><strong>Незнакомец:</strong> Привет! Мы познакомились в группе. Проголосуй, пожалуйста, за мою работу в конкурсе. Ссылка: vote-contest.ru</div>
                </div>
                <div class="scenario-analysis">
                    <div class="sc-red">Что не так</div>
                    <p>Классическая схема: просьба проголосовать. Сайт потребует логин и пароль для входа.</p>
                    <div class="sc-green">Как реагировать</div>
                    <p>Не переходите по ссылкам от незнакомцев. Заблокируйте и пожалуйтесь на аккаунт.</p>
                </div>
            </div>
            <div class="scenario-panel" id="panel5">
                <div class="scenario-message">
                    <div class="scenario-msg-bubble"><strong>HR-менеджер:</strong> Здравствуйте! Мы нашли ваше резюме. Зарплата высокая, удалённо. Пройдите анкету: job-form.ru и укажите паспортные данные.</div>
                </div>
                <div class="scenario-analysis">
                    <div class="sc-red">Что не так</div>
                    <p>Сбор паспортных данных через сторонние сайты — мошенничество. Цель: оформление фиктивных документов.</p>
                    <div class="sc-green">Как реагировать</div>
                    <p>Легитимные работодатели не собирают паспортные данные до оффера и официального оформления.</p>
                </div>
            </div>
            <div class="scenario-panel" id="panel6">
                <div class="scenario-message">
                    <div class="scenario-msg-bubble"><strong>Служба доставки:</strong> Ваша посылка задержана. Оплатите пошлину 299 рублей для доставки: delivery-pay.ru/customs</div>
                </div>
                <div class="scenario-analysis">
                    <div class="sc-red">Что не так</div>
                    <p>Поддельный сайт. После ввода данных карты будет списана крупная сумма.</p>
                    <div class="sc-green">Как реагировать</div>
                    <p>Проверяйте статус посылок только на официальных сайтах перевозчиков по трек-номеру.</p>
                </div>
            </div>
        </div>
    </div>
</div>

---

## Мини-тест: проверь свои знания

<div class="quiz-wrap" id="secQuiz">
    <div class="quiz-progress-bar"><div class="quiz-progress-fill" id="quizProgressFill"></div></div>
    <div class="quiz-question-counter" id="quizCounter">Вопрос 1 из 5</div>
    <div class="quiz-questions">
        <div class="quiz-q active" data-q="0">
            <p class="quiz-q-text">Служба безопасности сервиса просит сообщить код из SMS для верификации. Что делать?</p>
            <div class="quiz-options">
                <button class="quiz-opt" data-correct="false">Сообщить код — это официальный запрос</button>
                <button class="quiz-opt" data-correct="true">Игнорировать — сервисы никогда не запрашивают коды из SMS</button>
                <button class="quiz-opt" data-correct="false">Сначала проверить профиль отправителя</button>
            </div>
        </div>
        <div class="quiz-q" data-q="1">
            <p class="quiz-q-text">Какой пароль наиболее надёжный против взлома перебором?</p>
            <div class="quiz-options">
                <button class="quiz-opt" data-correct="false">Password2024!</button>
                <button class="quiz-opt" data-correct="false">Marina1995</button>
                <button class="quiz-opt" data-correct="true">конь-батарея-скрепка-верно</button>
            </div>
        </div>
        <div class="quiz-q" data-q="2">
            <p class="quiz-q-text">Что является главным индикатором фишинга в ссылке?</p>
            <div class="quiz-options">
                <button class="quiz-opt" data-correct="false">Отсутствие значка замка (HTTP)</button>
                <button class="quiz-opt" data-correct="true">Ошибки в написании основного домена</button>
                <button class="quiz-opt" data-correct="false">Длинный адрес с множеством символов</button>
            </div>
        </div>
        <div class="quiz-q" data-q="3">
            <p class="quiz-q-text">Друг просит перевести деньги в мессенджере. Ваше первое действие?</p>
            <div class="quiz-options">
                <button class="quiz-opt" data-correct="false">Сразу перевести, если сумма небольшая</button>
                <button class="quiz-opt" data-correct="false">Попросить прислать номер карты</button>
                <button class="quiz-opt" data-correct="true">Позвонить другу по телефону для подтверждения</button>
            </div>
        </div>
        <div class="quiz-q" data-q="4">
            <p class="quiz-q-text">Какой метод двухфакторной аутентификации считается наиболее защищенным?</p>
            <div class="quiz-options">
                <button class="quiz-opt" data-correct="false">Код в SMS-сообщении</button>
                <button class="quiz-opt" data-correct="false">Подтверждение по электронной почте</button>
                <button class="quiz-opt" data-correct="true">Использование TOTP-приложений или аппаратных ключей</button>
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
