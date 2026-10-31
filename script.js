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
    const name = repairForm.querySelector('input[name="name"]')?.value?.trim();
    const cellphone = repairForm.querySelector('input[name="cellphone"]')?.value?.trim();
    const device = repairForm.querySelector('input[name="device"]')?.value?.trim();

    if (name && cellphone && device) {
      repairForm.querySelector('input[name="_subject"]').value = 'Repair Request from ' + name;
      repairForm.querySelector('input[name="_template"]').value = 'table';
      repairForm.querySelector('input[name="_captcha"]').value = 'false';
    }
  });
}
