document.addEventListener('DOMContentLoaded', () => {
  // 1. Cursor Glow Effect
  // Atualiza as variáveis CSS globais baseadas na posição do mouse na tela.
  document.addEventListener('mousemove', (e) => {
    document.documentElement.style.setProperty('--x', `${e.clientX}px`);
    document.documentElement.style.setProperty('--y', `${e.clientY}px`);
  });

  // 2. 3D Tilt Effect nos Cards
  const tiltCards = document.querySelectorAll('.tilt-card');

  tiltCards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left; // coordenada x dentro do card
      const y = e.clientY - rect.top;  // coordenada y dentro do card
      
      const width = rect.width;
      const height = rect.height;
      
      // Calcula a inclinação (máximo de 12 graus)
      const rotateX = ((y / height) - 0.5) * -12; // Inverter y para rotacionar corretamente no eixo X
      const rotateY = ((x / width) - 0.5) * 12;

      // Aplica a transformação com perspectiva
      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
      
      // Adiciona uma sombra mais difusa direcionada
      card.style.boxShadow = `${-rotateY * 1.5}px ${rotateX * 1.5}px 30px rgba(99, 102, 241, 0.25)`;
      card.style.borderColor = 'var(--necxus-color-border-hover)';
    });

    card.addEventListener('mouseleave', () => {
      // Reseta a transformação suavemente
      card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
      card.style.boxShadow = 'none';
      card.style.borderColor = 'var(--necxus-color-border)';
    });
  });
});
