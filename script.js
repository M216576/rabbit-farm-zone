
document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.querySelector('input[type="text"]');
    const rabbitSections = document.querySelectorAll('section#home > div > div');

    searchInput.addEventListener('keyup', () => {
        const filter = searchInput.value.toLowerCase();
        rabbitSections.forEach(section => {
            const title = section.querySelector('h2').textContent.toLowerCase();
            if (title.includes(filter)) {
                section.style.display = '';
            } else {
                section.style.display = 'none';
            }
        });
    });
});


const careTipInput = document.querySelector('section#care input[type="text"]');
const careTipShare = document.querySelector('section#care span');

if (careTipInput && careTipShare) {
    careTipInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            const tip = careTipInput.value.trim();
            if (tip) {
                careTipShare.textContent = `Thank you for sharing: "${tip}"`;
                careTipInput.value = ''; 
            }
        }
    });
}


const stars = document.querySelectorAll('.fa-star');
const ratingValue = document.getElementById('rating-value');

if (stars.length > 0 && ratingValue) {
    stars.forEach(star => {
        star.addEventListener('click', () => {
            const value = star.getAttribute('data-value');
            ratingValue.textContent = value;

            stars.forEach(s => s.classList.remove('active'));

            
            for (let i = 0; i < value; i++) {
                stars[i].classList.add('active');
            }
        });
    });
}
function toggleNav() {
    const navLinks = document.getElementById('nav-links');
    navLinks.classList.toggle('nav-active');
}

function login() {
   
    alert("Login function called. Implement your login logic here.");
}

function signUp() {
   
    alert("Sign Up function called. Implement your sign-up logic here.");
}

function toggleNav() {
    const navLinks = document.getElementById('nav-links');
    navLinks.classList.toggle('nav-active');
}