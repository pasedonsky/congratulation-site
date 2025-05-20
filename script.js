document.getElementById('confetti-btn').addEventListener('click', () => {
    const confettiContainer = document.querySelector('.confetti');
    
    for (let i = 0; i < 100; i++) {
        const confetti = document.createElement('div');
        confetti.style.position = 'absolute';
        confetti.style.width = '10px';
        confetti.style.height = '10px';
        confetti.style.backgroundColor = getRandomColor();
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.top = '-10px';
        confetti.style.borderRadius = '50%';
        confetti.style.animation = `fall ${Math.random() * 3 + 2}s linear forwards`;
        
        confettiContainer.appendChild(confetti);
        
        setTimeout(() => {
            confetti.remove();
        }, 5000);
    }
});

function getRandomColor() {
    const colors = ['#ff6b6b', '#4ecdc4', '#ffe66d', '#ff9ff3', '#feca57'];
    return colors[Math.floor(Math.random() * colors.length)];
}

// Добавляем анимацию в стили динамически
const style = document.createElement('style');
style.textContent = `
    @keyframes fall {
        to {
            transform: translateY(100vh) rotate(360deg);
        }
    }
`;
document.head.appendChild(style);