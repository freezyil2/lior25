document.addEventListener('DOMContentLoaded', () => {
    // לחיצה על כפתור ה-CTA
    const ctaButton = document.querySelector('.cta-button');
    if (ctaButton) {
        ctaButton.addEventListener('click', () => {
            alert('חקור את ההפלגות המיוחדות שלנו!');
        });
    }

    // ניווט - הצגת/הסתרת תפריט במובייל בעת גלילה
    const navbar = document.querySelector('.navbar');
    let lastScrollTop = 0;

    window.addEventListener('scroll', () => {
        let currentScroll = window.scrollY;
        if (currentScroll > lastScrollTop && currentScroll > 50) { 
            navbar.style.top = "-70px";
            navbar.classList.add('scrolled');
        } else {
            navbar.style.top = "0";
            navbar.classList.remove('scrolled');
        }
        lastScrollTop = Math.max(0, currentScroll);
    });

    // סגירת תיבת הקשר
    const contactBox = document.getElementById('contactBox');
    if (contactBox) {
        const closeBtn = contactBox.querySelector('.close-btn');
        if (closeBtn) {
            closeBtn.addEventListener('click', () => {
                contactBox.style.display = 'none';
            });
        }
    }

    // תפריט המבורגר - פתיחה/סגירה
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".navbar nav ul");

    if (hamburger && navMenu) {
        hamburger.addEventListener("click", () => {
            navMenu.classList.toggle("show");
        });
    }

    // לחיצה על כפתור 'explore-button'
    const exploreButton = document.getElementById('explore-button');
    if (exploreButton) {
        exploreButton.addEventListener('click', () => {
            alert('החל לחקור את ההפלגות המיוחדות שלנו!');
        });
    }

    // JavaScript למודאל
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('fullImage');
    const modalCloseBtn = document.getElementsByClassName('close')[0];

    // פתיחת מודאל כאשר לוחצים על תמונה
    document.querySelectorAll('.review-card img').forEach(img => {
        img.addEventListener('click', () => {
            modal.style.display = "block";
            modalImg.src = img.src;
        });
    });

    // סגירת המודאל כאשר לוחצים על ה-X
    if (modalCloseBtn) {
        modalCloseBtn.addEventListener('click', () => {
            modal.style.display = "none";
        });
    }

    // סגירת המודאל כאשר לוחצים מחוץ לתמונה
    modal.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
});
