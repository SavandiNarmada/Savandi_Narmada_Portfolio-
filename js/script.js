// Sticky Navbar
let header = document.querySelector('header');
let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    header.classList.toggle('shadow', window.scrollY > 0);
});

menu.onclick = () => {
    navbar.classList.toggle('active');
}
window.onscroll = () => {
    navbar.classList.remove('active');
}

window.addEventListener('DOMContentLoaded', () => {
    const typingText = document.querySelector('.typing');
    const skills = ['Undergrauate Student','UI/UX Designer', 'Front-end Developer', 'ICT Tutor'];
  
    let index = 0;
    let charIndex = 0;
    let isDeleting = false;
  
    function type() {
      const skill = skills[index];
      if (isDeleting) {
        typingText.textContent = skill.slice(0, charIndex--);
        if (charIndex === 0) {
          isDeleting = false;
          index = (index + 1) % skills.length;
        }
      } else {
        typingText.textContent = skill.slice(0, charIndex++);
        if (charIndex === skill.length + 1) {
          isDeleting = true;
          charIndex = skill.length;
        }
      }
      const typingSpeed = isDeleting ? 50 : 200;
      setTimeout(type, typingSpeed);
    }
  
    type();
  });
