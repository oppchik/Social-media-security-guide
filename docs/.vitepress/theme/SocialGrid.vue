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
.grid-container {
  perspective: 1000px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px;
}

.social-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  transform: rotateX(15deg) rotateY(-20deg) rotateZ(5deg);
  transition: transform 0.5s ease;
}

.grid-container:hover .social-grid {
  transform: rotateX(10deg) rotateY(-10deg) rotateZ(0deg);
}

.grid-item {
  width: 120px;
  height: 120px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease;
  backdrop-filter: blur(5px);
}

.grid-item img {
  width: 60px;
  height: 60px;
  transition: transform 0.3s ease;
}

.grid-item:hover {
  transform: translateZ(20px); 
  border-color: transparent;
  box-shadow: 0 0 30px var(--hover-color);
  background: var(--hover-color);
}

.grid-item:hover img {
  transform: scale(1.1);
  filter: brightness(1.2);
}

.vk { --hover-color: #0077FF; }
.tg { --hover-color: #26A5E4; }
.wa { --hover-color: #25D366; }
.dc { --hover-color: #5865F2; }

@media (max-width: 768px) {
  .grid-item {
    width: 90px;
    height: 90px;
  }
  .grid-item img {
    width: 40px;
    height: 40px;
  }
}
</style>
