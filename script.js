// script.js - Düzenlenmiş Versiyon

function openBear() {
    const landingPage = document.getElementById('landing-page');
    const messagePage = document.getElementById('message-page');
    const messageBubble = document.querySelector('.message-bubble');
    const bgMusic = document.getElementById('bg-music');

    // Giriş sayfasını küçülterek kaybet
    landingPage.style.transform = 'scale(0.9)';
    landingPage.style.opacity = '0';

    setTimeout(() => {
        landingPage.classList.remove('active');
        messagePage.classList.add('active');
        messageBubble.style.opacity = '1';
        
        // Mesaj balonunu büyüterek göster
        setTimeout(() => {
            messageBubble.classList.add('active');
        }, 100);

        try {
            bgMusic.volume = 0.2;
            bgMusic.play().catch(() => console.log("Otomatik çalma engellendi"));
        } catch (e) {
            console.log("Müzik çalma hatası:", e);
        }
    }, 500);
}

// Mini ayıcık zıplatma animasyonu
function animateMiniBears() {
    const miniBears = document.querySelectorAll('.bear-mini .bear-body');

    miniBears.forEach((bear, index) => {
        // Başlangıç animasyonu (sırayla zıplama)
        setTimeout(() => {
            bear.style.animation = 'jump 0.5s';
            setTimeout(() => {
                bear.style.animation = '';
            }, 500);
        }, index * 200);
        
        // Tıklama animasyonu
        bear.addEventListener('click', function () {
            this.style.animation = 'jump 0.5s';
            setTimeout(() => {
                this.style.animation = '';
            }, 500);
        });
    });
}

// Sayfa yüklendiğinde animasyonları başlat
document.addEventListener('DOMContentLoaded', function() {
    animateMiniBears();
    
    // Sayfa yüklendiğinde mesaj balonunu hazırla
    setTimeout(() => {
        document.querySelector('.message-bubble').style.opacity = '0';
    }, 100);
});

// Yaprak animasyonu (daha yumuşak geçişler)
function createPetal() {
    const petal = document.createElement('div');
    petal.classList.add('petal');

    const size = Math.random() * 40 + 40;
    petal.style.width = `${size}px`;
    petal.style.height = `${size}px`;
    petal.style.left = `${Math.random() * window.innerWidth}px`;
    
    // Daha yumuşak rüzgar efekti
    const xMove = (Math.random() - 0.5) * 150 + 'px';
    petal.style.setProperty('--x-move', xMove);

    petal.style.animationDuration = `${5 + Math.random() * 5}s`;
    petal.style.animationDelay = `${Math.random() * 2}s`;
    petal.style.transform = `rotate(${Math.random() * 360}deg)`;
    petal.style.opacity = '0.7';

    document.querySelector('.petal-container').appendChild(petal);

    setTimeout(() => {
        petal.style.transition = 'opacity 1s';
        petal.style.opacity = '0';
        setTimeout(() => {
            petal.remove();
        }, 1000);
    }, 9000);
}

setInterval(createPetal, 200);