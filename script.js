// Console greeting
console.log('Welcome to FrGDPS Tools! Enjoy your journey, Freedomers!');

// Animasi klik tombol
const buttons = document.querySelectorAll('.btn');
buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        button.style.transform = 'scale(0.95)';
        setTimeout(() => {
            button.style.transform = 'scale(1)';
        }, 150);
    });
});

// Floating love animation di footer
const footer = document.querySelector('footer');
footer.addEventListener('click', () => {
    createFloatingHeart();
});

function createFloatingHeart() {
    const heart = document.createElement('div');
    heart.innerText = '❤️';
    heart.style.position = 'fixed';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.bottom = '0';
    heart.style.fontSize = '24px';
    heart.style.opacity = '1';
    heart.style.animation = 'floatUp 3s ease-out forwards';
    document.body.appendChild(heart);

    heart.addEventListener('animationend', () => {
        heart.remove();
    });
}

// Tambahin CSS animasi via JS
const style = document.createElement('style');
style.innerHTML = `
@keyframes floatUp {
    0% { transform: translateY(0); opacity: 1; }
    100% { transform: translateY(-100vh); opacity: 0; }
}
`;
document.head.appendChild(style);

// Scroll to top button
const scrollBtn = document.createElement('button');
scrollBtn.innerText = '⬆️';
scrollBtn.style.position = 'fixed';
scrollBtn.style.bottom = '30px';
scrollBtn.style.right = '30px';
scrollBtn.style.padding = '10px';
scrollBtn.style.fontSize = '20px';
scrollBtn.style.border = 'none';
scrollBtn.style.borderRadius = '50%';
scrollBtn.style.backgroundColor = '#999';
scrollBtn.style.color = '#121212';
scrollBtn.style.cursor = 'pointer';
scrollBtn.style.display = 'none';
document.body.appendChild(scrollBtn);

scrollBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        scrollBtn.style.display = 'block';
    } else {
        scrollBtn.style.display = 'none';
    }
});

// Parallax effect di logo
const logo = document.querySelector('.logo');
window.addEventListener('mousemove', (e) => {
    const x = (window.innerWidth / 2 - e.clientX) / 50;
    const y = (window.innerHeight / 2 - e.clientY) / 50;
    logo.style.transform = `translate(${x}px, ${y}px)`;
});
