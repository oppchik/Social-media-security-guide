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
</div>

<div class="ig5-card full-width-card" style="--accent:#3b82f6; margin-top: 20px;">
    <div class="ig5-num">02</div>
    <h3>Второй фактор</h3>
    <p>2FA через приложение надёжнее, чем SMS. Настройте в настройках безопасности (например, в ВК), как на скриншоте:</p>
    <img src="/public/vk_2fa.png" alt="Настройка 2FA">
    <div class="ig5-tip">Google Authenticator, Aegis (Android), Raivo (iOS)</div>
</div>

<div class="ig5-grid" style="margin-top: 20px;">
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
            <div><strong>Нет 2FA</strong><span>Только пароль</span></div>
        </div>
        <div class="twofa-badge twofa-badge--red">Опасно</div>
    </div>
    <div class="twofa-rung twofa-rung--bad">
        <div class="twofa-rung-left">
            <div><strong>SMS-коды</strong><span>Перехватываются через SIM-свопинг</span></div>
        </div>
        <div class="twofa-badge twofa-badge--orange">Слабо</div>
    </div>
    <div class="twofa-rung twofa-rung--ok">
        <div class="twofa-rung-left">
            <div><strong>Email-коды</strong><span>Почта тоже может быть взломана</span></div>
        </div>
        <div class="twofa-badge twofa-badge--yellow">Средне</div>
    </div>
    <div class="twofa-rung twofa-rung--good">
        <div class="twofa-rung-left">
            <div><strong>TOTP-приложение</strong><span>Google Authenticator, Aegis — надёжно</span></div>
        </div>
        <div class="twofa-badge twofa-badge--lime">Хорошо</div>
    </div>
    <div class="twofa-rung twofa-rung--best">
        <div class="twofa-rung-left">
            <div><strong>Аппаратный ключ</strong><span>YubiKey, Google Titan — максимум</span></div>
        </div>
        <div class="twofa-badge twofa-badge--green">Отлично</div>
    </div>
</div>

---

## Анатомия фишинговой ссылки

<div class="url-anatomy">
    <div class="url-display">
        <span class="url-part url-part--ok" data-label="Протокол" data-desc="HTTPS есть, но мошенники тоже его используют">https://</span><span class="url-part url-part--danger" data-label="Поддельный домен!" data-desc="vk-support — это не vk.com.">vk-support</span><span class="url-part url-part--warn" data-label="Доменная зона" data-desc="Домен целиком — vk-support.ru, а не vk.com">.ru</span><span class="url-part url-part--neutral" data-label="Путь" data-desc="Путь может выглядеть убедительно">/login/confirm?token=abc123</span>
    </div>
    <div class="url-tooltip-area"><p class="url-hint">Нажмите на часть ссылки, чтобы узнать детали</p></div>
    <div class="url-rule-box"><strong>Правило:</strong> Читайте домен справа налево до первого знака / — там настоящий адрес.</div>
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
                <div class="scenario-message"><div class="scenario-msg-bubble"><strong>Служба безопасности:</strong> Ваш аккаунт под угрозой. Сообщите код из SMS.</div></div>
                <div class="scenario-analysis">
                    <div class="sc-red">Что не так</div><p>Поддержка никогда не просит коды.</p>
                    <div class="sc-green">Реакция</div><p>Игнорируйте.</p>
                </div>
            </div>
            <div class="scenario-panel" id="panel2">
                <div class="scenario-message"><div class="scenario-msg-bubble"><strong>Друг:</strong> Привет! Скинь 5000 до завтра, очень нужно!</div></div>
                <div class="scenario-analysis">
                    <div class="sc-red">Что не так</div><p>Аккаунт друга взломан.</p>
                    <div class="sc-green">Реакция</div><p>Позвоните другу лично.</p>
                </div>
            </div>
            <div class="scenario-panel" id="panel3">
                <div class="scenario-message"><div class="scenario-msg-bubble"><strong>Бот:</strong> Вы выиграли iPhone! Перейдите по ссылке для получения.</div></div>
                <div class="scenario-analysis">
                    <div class="sc-red">Что не так</div><p>Бесплатный сыр только в мышеловке.</p>
                    <div class="sc-green">Реакция</div><p>Не переходите по ссылкам.</p>
                </div>
            </div>
            <div class="scenario-panel" id="panel4">
                <div class="scenario-message"><div class="scenario-msg-bubble"><strong>Незнакомка:</strong> Привет, нашла твоё фото тут: [ссылка]</div></div>
                <div class="scenario-analysis">
                    <div class="sc-red">Что не так</div><p>Ссылка ведет на фишинговый сайт.</p>
                    <div class="sc-green">Реакция</div><p>Заблокируйте пользователя.</p>
                </div>
            </div>
            <div class="scenario-panel" id="panel5">
                <div class="scenario-message"><div class="scenario-msg-bubble"><strong>HR:</strong> Вакансия 5000$/час. Заполните анкету по ссылке.</div></div>
                <div class="scenario-analysis">
                    <div class="sc-red">Что не так</div><p>Слишком заманчиво. Кража данных.</p>
                    <div class="sc-green">Реакция</div><p>Проверяйте компанию.</p>
                </div>
            </div>
            <div class="scenario-panel" id="panel6">
                <div class="scenario-message"><div class="scenario-msg-bubble"><strong>Почта:</strong> Ошибка в адресе доставки. Оплатите 10р за повтор.</div></div>
                <div class="scenario-analysis">
                    <div class="sc-red">Что не так</div><p>Нужны данные вашей карты.</p>
                    <div class="sc-green">Реакция</div><p>Проверьте трек-номер на оф. сайте.</p>
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
    <div class="quiz-questions"></div>
</div>

<script setup>
import { onMounted } from 'vue'
import { initInfographics } from './.vitepress/theme/infographics.js'

onMounted(() => {
  initInfographics()
})
</script>

<style scoped>
.ig5-card {
  transition: transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;
  border: 1px solid rgba(255,255,255,0.1);
  position: relative;
  overflow: hidden;
  padding: 20px;
  border-radius: 12px;
  background: rgba(255,255,255,0.02);
}

.ig5-card img {
  width: 100%;
  max-width: 600px;
  height: auto;
  display: block;
  margin: 15px 0;
  border-radius: 8px;
  border: 1px solid rgba(255,255,255,0.1);
}

.full-width-card {
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
}

.ig5-card:hover {
  transform: translateY(-5px);
  border-color: var(--accent);
  box-shadow: 0 10px 20px rgba(0,0,0,0.2), 0 0 15px rgba(59, 130, 246, 0.2);
}

.ig5-num { transition: transform 0.3s ease; }
.ig5-card:hover .ig5-num { transform: scale(1.2); color: var(--accent); }

/* Шкала паролей */
.pm-row { transition: all 0.2s ease; padding: 10px; border-radius: 8px; }
.pm-row:hover { background: rgba(255,255,255,0.05); transform: translateX(5px); }

/* Лестница 2FA */
.twofa-rung { transition: all 0.3s ease; border-left: 4px solid transparent; }
.twofa-rung:hover { background: rgba(255,255,255,0.03); padding-left: 20px; }

/* Анатомия ссылки */
.url-part { transition: all 0.2s ease; cursor: pointer; padding: 2px 4px; border-radius: 4px; }
.url-part:hover { background: rgba(255,255,255,0.1); }

/* Табы сценариев */
.scenario-tab-labels label { transition: all 0.3s ease; cursor: pointer; }
.scenario-tab-labels label:hover { color: var(--vp-c-brand); background: rgba(255,255,255,0.05); }

/* Кнопки теста */
.quiz-opt { transition: all 0.2s ease; }
.quiz-opt:hover:not(:disabled) { transform: translateX(10px); background: var(--vp-c-brand-soft); }
</style>
