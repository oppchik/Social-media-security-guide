const STORAGE_PREFIX = 'social-security-checklist:'

function updateProgress(container) {
  const checkboxes = [...container.querySelectorAll('input[type="checkbox"]')]
  const checked = checkboxes.filter((item) => item.checked).length
  const total = checkboxes.length
  const percent = total ? Math.round((checked / total) * 100) : 0
  const progressBar = container.querySelector('[data-checklist-bar]')
  const progressLabel = container.querySelector('[data-checklist-progress]')

  if (progressBar) progressBar.style.width = `${percent}%`
  if (progressLabel) progressLabel.textContent = `${percent}%`
}

function saveState(container) {
  const key = `${STORAGE_PREFIX}${container.dataset.checklistId}`
  const values = [...container.querySelectorAll('input[type="checkbox"]')].map((item) => item.checked)
  localStorage.setItem(key, JSON.stringify(values))
}

function loadState(container) {
  const key = `${STORAGE_PREFIX}${container.dataset.checklistId}`
  const raw = localStorage.getItem(key)

  if (!raw) {
    updateProgress(container)
    return
  }

  try {
    const values = JSON.parse(raw)
    const checkboxes = [...container.querySelectorAll('input[type="checkbox"]')]
    checkboxes.forEach((checkbox, index) => {
      checkbox.checked = Boolean(values[index])
    })
  } catch {
    localStorage.removeItem(key)
  }

  updateProgress(container)
}

function resetState(container) {
  const key = `${STORAGE_PREFIX}${container.dataset.checklistId}`
  container.querySelectorAll('input[type="checkbox"]').forEach((item) => {
    item.checked = false
  })
  localStorage.removeItem(key)
  updateProgress(container)
}

export function initChecklists() {
  if (typeof window === 'undefined') return

  document.querySelectorAll('[data-checklist]').forEach((container) => {
    if (container.dataset.initialized === 'true') {
      updateProgress(container)
      return
    }

    loadState(container)

    container.querySelectorAll('input[type="checkbox"]').forEach((checkbox) => {
      checkbox.addEventListener('change', () => {
        saveState(container)
        updateProgress(container)
      })
    })

    const resetButton = container.querySelector('[data-checklist-reset]')
    if (resetButton) {
      resetButton.addEventListener('click', () => resetState(container))
    }

    container.dataset.initialized = 'true'
  })
}
