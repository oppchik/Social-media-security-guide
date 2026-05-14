export function initInfographics() {
  if (typeof document === 'undefined') return;

  const urlParts = document.querySelectorAll('.url-part');
  const tooltipArea = document.getElementById('urlTooltip');

  urlParts.forEach(part => {
    part.onclick = function() {
      urlParts.forEach(p => p.classList.remove('url-part--active'));
      this.classList.add('url-part--active');
      tooltipArea.innerHTML = `
        <div class="url-tooltip-box">
          <strong>${this.dataset.label}:</strong> ${this.dataset.desc}
        </div>
      `;
    };
  });

  const questions = document.querySelectorAll('.quiz-q');
  const counter = document.getElementById('quizCounter');
  const progressFill = document.getElementById('quizProgressFill');
  const resultEl = document.getElementById('quizResult');
  const restartBtn = document.getElementById('quizRestart');

  let current = 0, score = 0;

  function update() {
    questions.forEach((q, i) => q.classList.toggle('active', i === current));
    progressFill.style.width = ((current / questions.length) * 100) + '%';
    counter.textContent = `Вопрос ${current + 1} из ${questions.length}`;
  }

  document.querySelectorAll('.quiz-opt').forEach(btn => {
    btn.onclick = function() {
      const q = this.closest('.quiz-q');
      if (q.dataset.answered) return;
      q.dataset.answered = 'true';

      const isCorrect = this.dataset.correct === 'true';
      if (isCorrect) score++;
      
      this.classList.add(isCorrect ? 'quiz-opt--correct' : 'quiz-opt--wrong');
      q.querySelectorAll('.quiz-opt').forEach(b => {
        if (b.dataset.correct === 'true') b.classList.add('quiz-opt--correct');
        b.disabled = true;
      });

      setTimeout(() => {
        if (current < questions.length - 1) {
          current++;
          update();
        } else {
          showResult();
        }
      }, 1000);
    };
  });

  function showResult() {
    document.querySelector('.quiz-questions').style.display = 'none';
    counter.style.display = 'none';
    resultEl.style.display = 'block';
    progressFill.style.width = '100%';
    
    const icon = document.getElementById('quizResultIcon');
    const title = document.getElementById('quizResultTitle');
    const text = document.getElementById('quizResultText');

    icon.textContent = score === questions.length ? '🏆' : '🎯';
    title.textContent = `${score} из ${questions.length}`;
    text.textContent = score === questions.length ? 'Отлично! Вы настоящий эксперт.' : 'Хороший результат, но есть что подтянуть.';
  }

  restartBtn.onclick = () => location.reload();
}
