export function initInfographics() {
  if (typeof document === 'undefined') return;

  const questions = document.querySelectorAll('.quiz-q');
  if (!questions.length) return;

  const counter = document.getElementById('quizCounter');
  const progressFill = document.getElementById('quizProgressFill');
  const resultEl = document.getElementById('quizResult');
  const resultIcon = document.getElementById('quizResultIcon');
  const resultTitle = document.getElementById('quizResultTitle');
  const resultText = document.getElementById('quizResultText');
  const restartBtn = document.getElementById('quizRestart');

  let current = 0, score = 0;

  function updateProgress() {
    progressFill.style.width = ((current / questions.length) * 100) + '%';
    counter.textContent = `Вопрос ${Math.min(current + 1, questions.length)} из ${questions.length}`;
  }

  document.querySelectorAll('.quiz-opt').forEach(btn => {
    btn.onclick = null; 
    btn.onclick = function() {
      const qEl = this.closest('.quiz-q');
      if (qEl.dataset.answered) return;
      qEl.dataset.answered = 'true';

      const correct = this.dataset.correct === 'true';
      if (correct) score++;

      qEl.querySelectorAll('.quiz-opt').forEach(b => {
        b.disabled = true;
        if (b.dataset.correct === 'true') b.classList.add('quiz-opt--correct');
        else b.classList.add('quiz-opt--wrong');
      });

      setTimeout(() => {
        qEl.classList.remove('active');
        current++;
        if (current < questions.length) {
          questions[current].classList.add('active');
          updateProgress();
        } else {
          progressFill.style.width = '100%';
          counter.textContent = 'Готово!';
          setTimeout(showResult, 400);
        }
      }, 1000);
    };
  });

  function showResult() {
    document.querySelector('.quiz-questions').style.display = 'none';
    resultEl.style.display = 'flex';
    if (score === 5) {
      resultIcon.textContent = '🏆';
      resultTitle.textContent = 'Отличный результат!';
      resultText.textContent = 'Вы знаете все основы цифровой безопасности. Поделитесь этим сайтом с друзьями!';
    } else if (score >= 3) {
      resultIcon.textContent = '👍';
      resultTitle.textContent = score + ' из 5 — хорошо!';
      resultText.textContent = 'Базовые знания есть. Изучите разделы сайта, чтобы закрыть пробелы.';
    } else {
      resultIcon.textContent = '📚';
      resultTitle.textContent = score + ' из 5 — есть над чем поработать';
      resultText.textContent = 'Прочитайте инфографику внимательнее и вернитесь к тесту снова.';
    }
  }

  if (restartBtn) {
    restartBtn.onclick = function() {
      current = 0; score = 0;
      questions.forEach((q, i) => {
        q.classList.toggle('active', i === 0);
        delete q.dataset.answered;
        q.querySelectorAll('.quiz-opt').forEach(b => {
          b.disabled = false;
          b.classList.remove('quiz-opt--correct', 'quiz-opt--wrong');
        });
      });
      document.querySelector('.quiz-questions').style.display = 'block';
      resultEl.style.display = 'none';
      updateProgress();
    };
  }

  updateProgress();

  document.querySelectorAll('.url-part').forEach(part => {
    part.onclick = function() {
      document.querySelectorAll('.url-part').forEach(p => p.classList.remove('url-part--active'));
      this.classList.add('url-part--active');
      const area = document.querySelector('.url-tooltip-area');
      if (area) {
        area.innerHTML = `<div class="url-tooltip-box"><strong>${this.dataset.label}</strong><p>${this.dataset.desc}</p></div>`;
      }
    };
  });
}
