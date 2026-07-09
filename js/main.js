// Evoghen — shared site behavior

document.addEventListener('DOMContentLoaded', function () {
  // Mobile nav toggle
  var toggle = document.querySelector('.nav-toggle');
  var links = document.querySelector('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', function () {
      var open = links.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    links.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () { links.classList.remove('open'); });
    });
  }

  // Footer year
  document.querySelectorAll('[data-year]').forEach(function (el) {
    el.textContent = new Date().getFullYear();
  });

  // Contact form submission (Formspree-compatible)
  var form = document.getElementById('contact-form');
  if (form) {
    var status = document.getElementById('form-status');
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var action = form.getAttribute('action') || '';

      if (!action || action.indexOf('YOUR_FORM_ID') !== -1) {
        status.textContent = 'Form endpoint not yet configured — see README for setup instructions. In the meantime, email contact@evoghen.com directly.';
        status.className = 'form-status visible error';
        return;
      }

      var submitBtn = form.querySelector('button[type="submit"]');
      var originalLabel = submitBtn.textContent;
      submitBtn.disabled = true;
      submitBtn.textContent = 'Sending...';

      fetch(action, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: new FormData(form)
      })
        .then(function (response) {
          if (response.ok) {
            status.textContent = "Thank you for reaching out. We've received your message and will respond within one business day.";
            status.className = 'form-status visible success';
            form.reset();
          } else {
            status.textContent = 'Something went wrong sending your message. Please email contact@evoghen.com directly.';
            status.className = 'form-status visible error';
          }
        })
        .catch(function () {
          status.textContent = 'Something went wrong sending your message. Please email contact@evoghen.com directly.';
          status.className = 'form-status visible error';
        })
        .finally(function () {
          submitBtn.disabled = false;
          submitBtn.textContent = originalLabel;
        });
    });
  }
});
