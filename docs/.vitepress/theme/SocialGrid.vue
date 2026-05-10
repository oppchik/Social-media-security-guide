<template>
  <div class="grid-container">
    <div class="social-grid">
      <a href="/Social-media-security-guide/vk-security" class="grid-item vk">
        <img src="/vk-logo.svg" alt="VK" />
      </a>
      <a href="/Social-media-security-guide/telegram-security" class="grid-item tg">
        <img src="/tg-logo.svg" alt="Telegram" />
      </a>
      <a href="/Social-media-security-guide/max-security" class="grid-item max">
        <img src="/max-logo.svg" alt="Max" />
      </a>
      <a href="/Social-media-security-guide/whatsapp-security" class="grid-item wa">
        <img src="/wa-logo.svg" alt="WhatsApp" />
      </a>
      <a href="/Social-media-security-guide/discord-security" class="grid-item dc">
        <img src="/dc-logo.svg" alt="Discord" />
      </a>
      <a href="/Social-media-security-guide/instagram-security" class="grid-item insta">
        <img src="/insta-logo.svg" alt="Instagram" />
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
  -webkit-tap-highlight-color: transparent;
}

.social-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr); 
  gap: 16px;
  transform: rotateX(15deg) rotateY(-20deg) rotateZ(5deg);
  transition: transform 0.5s ease;
}

.grid-item {
  width: 100px;
  height: 100px;
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-gutter);
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  position: relative;
  overflow: hidden;
  text-decoration: none !important;
}

.grid-item img {
  width: 50px;
  height: 50px;
  transition: all 0.3s ease;
  z-index: 2;
  filter: grayscale(0.2) opacity(0.9);
}

.grid-item:hover {
  transform: translateY(-10px) translateZ(50px) scale(1.1) !important;
  background-color: var(--brand-color) !important;
  border-color: var(--brand-color) !important;
  box-shadow: 0 15px 45px var(--hover-shadow) !important;
}

.grid-item:hover img {
  filter: grayscale(0) opacity(1) brightness(1.2);
  transform: scale(1.1);
}

.grid-item::after {
  content: '';
  position: absolute;
  top: 0; left: 0; width: 100%; height: 100%;
  background: linear-gradient(135deg, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0) 50%);
  opacity: 0;
  transition: opacity 0.3s;
}

.grid-item:hover::after {
  opacity: 1;
}

.vk { --brand-color: #0077FF; --hover-shadow: rgba(0, 119, 255, 0.5); }
.tg { --brand-color: #24A1DE; --hover-shadow: rgba(36, 161, 222, 0.5); }
.wa { --brand-color: #25D366; --hover-shadow: rgba(37, 211, 102, 0.5); }
.dc { --brand-color: #5865F2; --hover-shadow: rgba(88, 101, 242, 0.5); }
.max { --brand-color: #2D5BFF; --hover-shadow: rgba(45, 91, 255, 0.4); }
.insta { --brand-color: #E1306C; --hover-shadow: rgba(225, 48, 108, 0.4); }

@media (max-width: 768px) {
  .grid-item {
    width: 85px;
    height: 85px;
    margin-top: 20px;
  }
  .social-grid {
    transform: rotateX(10deg) rotateY(-10deg) rotateZ(2deg);
  }
}
</style>
