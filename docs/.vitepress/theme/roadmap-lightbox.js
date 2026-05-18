function initLightbox () {
  if (document.getElementById('sec-lightbox')) return

  const lb = document.createElement('div')
  lb.id = 'sec-lightbox'
  lb.className = 'sec-lightbox'
  lb.setAttribute('role', 'dialog')
  lb.setAttribute('aria-modal', 'true')
  lb.setAttribute('aria-label', 'Просмотр скриншота')

  const img = document.createElement('img')
  img.id = 'sec-lightbox-img'
  img.alt = ''

  const btn = document.createElement('button')
  btn.className = 'sec-lightbox-close'
  btn.setAttribute('aria-label', 'Закрыть')
  btn.textContent = '✕'

  lb.appendChild(img)
  lb.appendChild(btn)
  document.body.appendChild(lb)

  const close = () => lb.classList.remove('is-open')

  btn.addEventListener('click', close)
  lb.addEventListener('click', e => { if (e.target === lb) close() })
  document.addEventListener('keydown', e => { if (e.key === 'Escape') close() })

  document.addEventListener('click', e => {
    const trigger = e.target.closest('.sec-roadmap-screenshot img')
    if (!trigger) return
    img.src = trigger.src
    img.alt = trigger.alt
    lb.classList.add('is-open')
  })
}

if (typeof window !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initLightbox)
  } else {
    initLightbox()
  }
}
