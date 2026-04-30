<template>
  <div class="grid-container">
    <div class="social-grid">
      <a href="/Social-media-security-guide/vk-security" class="grid-item vk">
        <img src="/vk-logo.svg" alt="VK" />
      </a>
      <a href="/Social-media-security-guide/telegram-security" class="grid-item tg">
        <img src="/tg-logo.svg" alt="Telegram" />
      </a>
      <a href="/Social-media-security-guide/whatsapp-security" class="grid-item wa">
        <img src="/wa-logo.svg" alt="WhatsApp" />
      </a>
      <a href="/Social-media-security-guide/discord-security" class="grid-item dc">
        <img src="/dc-logo.svg" alt="Discord" />
      </a>
    </div>
  </div>
</template>

<style scoped>
.social-grid-wrapper {
  perspective: 1000px;
  display: flex;
  justify-content: center;
  padding: 20px;
}

.social-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
  transform: rotateX(10deg) rotateY(-15deg) rotateZ(5deg);
}

.grid-item {
  width: 100px;
  height: 100px;
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-default-1);
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  backdrop-filter: blur(4px);
}

.grid-item img {
  width: 50px;
  height: 50px;
  opacity: 0.8;
  transition: all 0.3s ease;
}


.grid-item:hover {
  transform: translateZ(35px) scale(1.05);
  background: var(--brand-color);
  border-color: var(--brand-color);
  box-shadow: 0 10px 30px var(--hover-shadow);
}

.grid-item:hover img {
  opacity: 1;
  filter: brightness(1.2) contrast(1.1);
}

.vk { 
  --brand-color: #0077FF; 
  --hover-shadow: rgba(0, 119, 255, 0.4);
}
.tg { 
  --brand-color: #24A1DE; 
  --hover-shadow: rgba(36, 161, 222, 0.4);
}
.wa { 
  --brand-color: #25D366; 
  --hover-shadow: rgba(37, 211, 102, 0.4);
}
.dc { 
  --brand-color: #5865F2; 
  --hover-shadow: rgba(88, 101, 242, 0.4);
}

@media (max-width: 640px) {
  .social-grid {
    transform: none; 
  }
  .grid-item {
    width: 80px;
    height: 80px;
  }
}
</style>
