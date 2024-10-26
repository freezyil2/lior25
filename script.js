document.getElementById('explore-button').addEventListener('click', function() {
    alert('החל לחקור את ההפלגות המיוחדות שלנו!');
});

let lastScrollTop = 0;

window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    let currentScroll = window.scrollY;

    if (currentScroll > lastScrollTop && currentScroll > 50) { 
        // אם גוללים מטה, הסתר את הניווט
        navbar.style.top = "-70px";
        navbar.classList.add('scrolled'); // הוסף מחלקה כדי לשמור על רקע
    } else {
        // אם גוללים מעלה, הצג את הניווט
        navbar.style.top = "0";
        navbar.classList.remove('scrolled'); // הסר מחלקה כדי לשמור על רקע
    }

    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
});
function closeButton() {
    document.getElementById('contactBox').style.display = 'none';
}
// JavaScript למודאל
const modal = document.getElementById('imageModal');
const modalImg = document.getElementById('fullImage');
const closeBtn = document.getElementsByClassName('close')[0];

// כאשר לוחצים על תמונה, פותחים את המודאל ומציגים את התמונה
document.querySelectorAll('.review-card img').forEach(img => {
    img.onclick = function() {
        modal.style.display = "block";
        modalImg.src = this.src; // לוקח את ה-src של התמונה ולשים אותו במודאל
    }
});

// סוגרים את המודאל כאשר לוחצים על ה-X
closeBtn.onclick = function() {
    modal.style.display = "none";
}

// סוגרים את המודאל כאשר לוחצים מחוץ לתמונה
modal.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
