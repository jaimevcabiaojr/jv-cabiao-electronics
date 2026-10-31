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
const successDialog = document.getElementById('successDialog');
const closeDialogButton = document.getElementById('closeDialog');

if (successDialog && closeDialogButton) {
  closeDialogButton.addEventListener('click', () => {
    successDialog.classList.remove('visible');
    window.location.href = '/';
  });
}

if (repairForm) {
  repairForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    const name = repairForm.querySelector('input[name="name"]')?.value?.trim();
    const cellphone = repairForm.querySelector('input[name="cellphone"]')?.value?.trim();
    const device = repairForm.querySelector('input[name="device"]')?.value?.trim();

    if (!name || !cellphone || !device) return;

    const payload = {
      name,
      cellphone,
      device,
      _subject: 'Repair Request from ' + name,
      _captcha: 'false',
      _template: 'table'
    };

    try {
      await fetch('https://formsubmit.co/ajax/jcabiao18@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify(payload)
      });
      if (successDialog) {
        successDialog.classList.add('visible');
      }
    } catch (error) {
      console.error('Repair request failed:', error);
      alert('There was a problem sending your request. Please try again later.');
    }
  });
}
