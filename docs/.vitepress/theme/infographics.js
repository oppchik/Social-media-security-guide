export function initInfographics() {
  if (typeof document === 'undefined') return;

  const observerOptions = {
    threshold: 0.15 
  };

  const appearanceObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('ig-visible');
        appearanceObserver.unobserve(entry.target);
      }
    });
  }, observerOptions);

  const animatedElements = document.querySelectorAll(
    '.password-meter-wrap, .twofa-rung, .url-anatomy, .scenarios-wrap'
  );
  animatedElements.forEach(el => appearanceObserver.observe(el));


  const questions = document.querySelectorAll('.quiz-q');
  if (questions.length > 0) {
    const counter = document.getElementById('quizCounter');
    const progressFill = document.getElementById('quizProgressFill');
    const resultEl = document.getElementById('quizResult');
    const resultIcon = document.getElementById('quizResultIcon');
    const resultTitle = document.getElementById('quizResultTitle');
    const resultText = document.getElementById('quizResultText');
    const restartBtn = document.getElementById('quizRestart');

    let current = 0;
    let score = 0;

    function updateProgress() {
      if (progressFill && counter) {
        progressFill.style.width = ((current / questions.length) * 100) + '%';
        counter.textContent = `Вопрос ${Math.min(current + 1, questions.length)} из ${questions.length}`;
      }
    }

    function showResults() {
      const qBox = document.querySelector('.quiz-questions');
      if (qBox) qBox.style.display = 'none';
      if (counter) counter.textContent = 'Тест завершен';
      if (resultEl) resultEl.style.display = 'block';

      if (score === questions.length) {
        resultIcon.textContent = '🏆';
        resultTitle.textContent = 'Отлично!';
        resultText.textContent = 'Вы настоящий эксперт. Ваши аккаунты в полной безопасности!';
      } else if (score >= 3) {
        resultIcon.textContent = '👍';
        resultTitle.textContent = 'Хороший результат!';
        resultText.textContent = 'Вы знаете основы, но есть пара моментов, которые стоит подтянуть.';
      } else {
        resultIcon.textContent = '📚';
        resultTitle.textContent = 'Нужно повторить';
        resultText.textContent = 'Рекомендуем еще раз изучить инфографику выше.';
      }
    }

    document.querySelectorAll('.quiz-opt').forEach(btn => {
      btn.onclick = function() {
        const qEl = this.closest('.quiz-q');
        if (qEl.dataset.answered) return;
        qEl.dataset.answered = 'true';

        const isCorrect = this.dataset.correct === 'true';
        if (isCorrect) score++;

        this.classList.add(isCorrect ? 'quiz-opt--correct' : 'quiz-opt--wrong');
        qEl.querySelectorAll('.quiz-opt').forEach(b => {
          b.disabled = true;
          if (b.dataset.correct === 'true') b.classList.add('quiz-opt--correct');
        });

        setTimeout(() => {
          qEl.classList.remove('active');
          current++;
          if (current < questions.length) {
            questions[current].classList.add('active');
            updateProgress();
          } else {
            showResults();
          }
        }, 1000);
      };
    });

    if (restartBtn) {
      restartBtn.onclick = () => location.reload();
    }

    updateProgress();
  }

  document.querySelectorAll('.url-part').forEach(part => {
    part.onclick = function() {
      document.querySelectorAll('.url-part').forEach(p => p.classList.remove('url-part--active'));
      this.classList.add('url-part--active');

      const area = document.querySelector('.url-tooltip-area');
      if (area) {
        area.innerHTML = `
          <div class="url-tooltip-box">
            <strong>${this.dataset.label}</strong>
            <p>${this.dataset.desc}</p>
          </div>
        `;
      }
    };
  });
}
