const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.nav');
const yearEl = document.getElementById('year');

if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

if (navToggle && nav) {
  navToggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });

  nav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      nav.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

const repairForm = document.getElementById('repairForm');
if (repairForm) {
  repairForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = new FormData(repairForm);
    const name = (formData.get('name') || '').toString().trim();
    const cellphone = (formData.get('cellphone') || '').toString().trim();
    const device = (formData.get('device') || '').toString().trim();

    const subject = encodeURIComponent('Repair Request');
    const body = encodeURIComponent(
      `Name: ${name}\nCellphone: ${cellphone}\nDevice to be repaired: ${device}`
    );

    window.location.href = `mailto:jcabiao18@gmail.com?subject=${subject}&body=${body}`;
  });
}
