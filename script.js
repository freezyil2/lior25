document.addEventListener('DOMContentLoaded', () => {
    // לחיצה על כפתור ה-CTA
    document.querySelector('.cta-button').addEventListener('click', function() {
        alert('חקור את ההפלגות המיוחדות שלנו!');
    });

    // תפריט ניווט - הצגת תפריט המבורגר במובייל
    const navbar = document.querySelector('.navbar');
    let lastScrollTop = 0;
    window.addEventListener('scroll', function() {
        let currentScroll = window.scrollY;
        if (currentScroll > lastScrollTop && currentScroll > 50) { 
            navbar.style.top = "-70px";
            navbar.classList.add('scrolled');
        } else {
            navbar.style.top = "0";
            navbar.classList.remove('scrolled');
        }
        lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
    });

    // סגירת תיבת קשר צפה
    const contactBox = document.getElementById('contactBox');
    if (contactBox) {
        contactBox.querySelector('.close-btn').addEventListener('click', () => {
            contactBox.style.display = 'none';
        });
    }

    // תפריט המבורגר
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".navbar nav ul");

    hamburger.addEventListener("click", function() {
        navMenu.classList.toggle("show");
    });
});
