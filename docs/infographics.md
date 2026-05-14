# Инфографика и шпаргалки

Короткие визуальные памятки для быстрой проверки безопасности ваших профилей.

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
            <div class="pm-time pm-time--orange">минуты</div>
        </div>
        <div class="pm-row">
            <div class="pm-pass"><code>Marina_1995!</code></div>
            <div class="pm-bar-wrap"><div class="pm-bar" style="width:38%;background:#f59e0b"></div></div>
            <div class="pm-time pm-time--yellow">дни</div>
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
        <div class="pm-legend-item">Случайные слова = сила</div>
        <div class="pm-legend-item">Без повторов</div>
    </div>
</div>

## 2FA: методы защиты

<div class="twofa-ladder">
    <div class="twofa-rung twofa-rung--worst">
        <div class="twofa-rung-left">
            <strong>Нет 2FA</strong>
            <span>Только пароль</span>
        </div>
        <div class="twofa-badge twofa-badge--red">Опасно</div>
    </div>
    <div class="twofa-rung twofa-rung--bad">
        <div class="twofa-rung-left">
            <strong>SMS-коды</strong>
            <span>Риск SIM-свопинга</span>
        </div>
        <div class="twofa-badge twofa-badge--orange">Слабо</div>
    </div>
    <div class="twofa-rung twofa-rung--ok">
        <div class="twofa-rung-left">
            <strong>Email-коды</strong>
            <span>Зависит от защиты почты</span>
        </div>
        <div class="twofa-badge twofa-badge--yellow">Средне</div>
    </div>
    <div class="twofa-rung twofa-rung--good">
        <div class="twofa-rung-left">
            <strong>TOTP-приложение</strong>
            <span>Authenticator, Aegis</span>
        </div>
        <div class="twofa-badge twofa-badge--lime">Хорошо</div>
    </div>
    <div class="twofa-rung twofa-rung--best">
        <div class="twofa-rung-left">
            <strong>Аппаратный ключ</strong>
            <span>YubiKey, Titan</span>
        </div>
        <div class="twofa-badge twofa-badge--green">Отлично</div>
    </div>
</div>

## Анатомия фишинговой ссылки

<div class="url-anatomy">
    <div class="url-display">
        <span class="url-part url-part--ok" data-label="Протокол" data-desc="HTTPS — это стандарт шифрования, но мошенники тоже его используют.">https://</span><span class="url-part url-part--danger" data-label="Поддельный домен" data-desc="vk-support — это не vk.com. Злоумышленники создают похожие названия.">vk-support</span><span class="url-part url-part--warn" data-label="Зона" data-desc="Доменная зона может быть любой, главное — имя перед ней.">.ru</span><span class="url-part url-part--neutral url-part--last" data-label="Путь" data-desc="Хвост ссылки часто выглядит официально, чтобы усыпить бдительность.">/login/confirm?token=abc123</span>
    </div>
    <div class="url-tooltip-area" id="urlTooltip">
        <p class="url-hint">Нажмите на часть ссылки выше</p>
    </div>
    <div class="url-rule-box">
        <strong>Правило:</strong> Всегда проверяйте основной домен (слово перед .com, .ru и т.д.).
    </div>
</div>

## Сценарии атак

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
                    <div class="scenario-msg-bubble"><strong>Служба безопасности:</strong> Ваш аккаунт взломан. Срочно назовите код из SMS для проверки.</div>
                </div>
                <div class="scenario-analysis">
                    <span class="sc-red">Угроза:</span> Кража доступа. Поддержка никогда не просит коды.
                </div>
            </div>
            <div class="scenario-panel" id="panel2">
                <div class="scenario-message">
                    <div class="scenario-msg-bubble"><strong>Друг:</strong> Привет! Выручи до завтра, не хватает 2000р на лекарства, скинь на карту.</div>
                </div>
                <div class="scenario-analysis">
                    <span class="sc-red">Угроза:</span> Взлом аккаунта друга. Сначала позвоните ему по телефону.
                </div>
            </div>
            <div class="scenario-panel" id="panel3">
                <div class="scenario-message">
                    <div class="scenario-msg-bubble"><strong>Бот:</strong> Вы выиграли iPhone! Для получения приза авторизуйтесь на сайте розыгрыша.</div>
                </div>
                <div class="scenario-analysis">
                    <span class="sc-red">Угроза:</span> Фишинг. Бесплатный сыр только в ловушке для данных.
                </div>
            </div>
            <div class="scenario-panel" id="panel4">
                <div class="scenario-message">
                    <div class="scenario-msg-bubble"><strong>Новое фото:</strong> Привет, ты мне понравился! Посмотри мои фото по ссылке.</div>
                </div>
                <div class="scenario-analysis">
                    <span class="sc-red">Угроза:</span> Вирус или фишинг. Не переходите по ссылкам от незнакомцев.
                </div>
            </div>
            <div class="scenario-panel" id="panel5">
                <div class="scenario-message">
                    <div class="scenario-msg-bubble"><strong>HR:</strong> Ваше резюме одобрено. Установите программу для собеседования.</div>
                </div>
                <div class="scenario-analysis">
                    <span class="sc-red">Угроза:</span> Шпионское ПО. Проверяйте компанию перед установкой софта.
                </div>
            </div>
            <div class="scenario-panel" id="panel6">
                <div class="scenario-message">
                    <div class="scenario-msg-bubble"><strong>Доставка:</strong> Посылка не может быть вручена. Оплатите пошлину 15р по ссылке.</div>
                </div>
                <div class="scenario-analysis">
                    <span class="sc-red">Угроза:</span> Кража данных карты. Проверяйте трек на официальном сайте.
                </div>
            </div>
        </div>
    </div>
</div>

## Мини-тест

<div class="quiz-wrap" id="secQuiz">
    <div class="quiz-progress-bar"><div class="quiz-progress-fill" id="quizProgressFill"></div></div>
    <div class="quiz-question-counter" id="quizCounter">Вопрос 1 из 5</div>
    <div class="quiz-questions">
        <div class="quiz-q active" data-q="1">
            <p class="quiz-q-text">Какой пароль является самым надежным из списка?</p>
            <div class="quiz-options">
                <button class="quiz-opt" data-correct="false">p@ssword123</button>
                <button class="quiz-opt" data-correct="true">Correct-Horse-Battery-Staple</button>
                <button class="quiz-opt" data-correct="false">Admin12345!</button>
            </div>
        </div>
        <div class="quiz-q" data-q="2">
            <p class="quiz-q-text">Что делать, если пришло письмо о подозрительном входе в аккаунт?</p>
            <div class="quiz-options">
                <button class="quiz-opt" data-correct="false">Нажать "Это не я" прямо в письме</button>
                <button class="quiz-opt" data-correct="true">Зайти на сайт вручную и сменить пароль</button>
                <button class="quiz-opt" data-correct="false">Проигнорировать, если ничего не пропало</button>
            </div>
        </div>
        <div class="quiz-q" data-q="3">
            <p class="quiz-q-text">Ваш друг в Telegram просит срочно перевести денег. Ваши действия?</p>
            <div class="quiz-options">
                <button class="quiz-opt" data-correct="true">Позвонить ему голосом по телефону</button>
                <button class="quiz-opt" data-correct="false">Перевести, ведь друг в беде</button>
                <button class="quiz-opt" data-correct="false">Попросить фото карты с двух сторон</button>
            </div>
        </div>
        <div class="quiz-q" data-q="4">
            <p class="quiz-q-text">Какой метод 2FA самый безопасный?</p>
            <div class="quiz-options">
                <button class="quiz-opt" data-correct="false">СМС-код</button>
                <button class="quiz-opt" data-correct="true">Аппаратный ключ (YubiKey)</button>
                <button class="quiz-opt" data-correct="false">Код на почту</button>
            </div>
        </div>
        <div class="quiz-q" data-q="5">
            <p class="quiz-q-text">Как проверить, что ссылка ведет на настоящий сайт банка?</p>
            <div class="quiz-options">
                <button class="quiz-opt" data-correct="false">Проверить наличие замочка (HTTPS)</button>
                <button class="quiz-opt" data-correct="true">Внимательно проверить доменное имя</button>
                <button class="quiz-opt" data-correct="false">Если сайт выглядит как обычно — всё ок</button>
            </div>
        </div>
    </div>
    <div class="quiz-result" id="quizResult">
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
