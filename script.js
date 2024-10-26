document.getElementById('explore-button').addEventListener('click', function() {
    alert('החל לחקור את ההפלגות המיוחדות שלנו!');
});

let lastScrollTop = 0;

window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
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

function closeButton() {
    document.getElementById('contactBox').style.display = 'none';
}

const modal = document.getElementById('imageModal');
const modalImg = document.getElementById('fullImage');
const closeBtn = document.getElementsByClassName('close')[0];

document.querySelectorAll('.review-card img').forEach(img => {
    img.onclick = function() {
        modal.style.display = "block";
        modalImg.src = this.src;
    }
});

closeBtn.onclick = function() {
    modal.style.display = "none";
}

modal.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
