/* Behaviour for /contact, lifted from em-creative-studio-contact_1.html. */
(() => {
'use strict';
const RM = matchMedia('(prefers-reduced-motion: reduce)').matches;
const FINE = matchMedia('(hover:hover) and (pointer:fine)').matches;

/* reveal on scroll */
const io = new IntersectionObserver((es) => {
  es.forEach(e => {
    if (!e.isIntersecting) return;
    const sibs = [...e.target.parentElement.querySelectorAll('[data-rise]')];
    e.target.style.transitionDelay = Math.min(sibs.indexOf(e.target), 4) * 70 + 'ms';
    e.target.classList.add('in');
    io.unobserve(e.target);
  });
}, {rootMargin:'0px 0px -12% 0px', threshold:.12});
document.querySelectorAll('[data-rise]').forEach(el => io.observe(el));

/* headline: split into words, each masked up on a stagger */
const hl = document.querySelector('[data-words]');
if (hl) {
  const walk = node => {
    const out = [];
    node.childNodes.forEach(n => {
      if (n.nodeType === 3) {
        n.textContent.split(/(\s+)/).forEach(t => {
          if (!t.trim()) { out.push(document.createTextNode(' ')); return; }
          const w = document.createElement('span'); w.className = 'w';
          const i = document.createElement('i'); i.textContent = t;
          w.appendChild(i); out.push(w);
        });
      } else {
        const clone = n.cloneNode(false);
        walk(n).forEach(c => clone.appendChild(c));
        out.push(clone);
      }
    });
    return out;
  };
  const parts = walk(hl);
  hl.textContent = '';
  parts.forEach(p => hl.appendChild(p));
  [...hl.querySelectorAll('.w > i')].forEach((i,n) => {
    i.style.animationDelay = (320 + n*52) + 'ms';
  });
  /* the line is held back by html.js-words until this point, so that the
     unsplit text is never painted - see the stylesheet */
  hl.classList.add('words-in');
}

/* nav scroll shadow */
addEventListener('scroll', () => {
  document.body.classList.toggle('scrolled', scrollY > 24);
}, {passive:true});

/* service picker — the <details> dropdown opens and closes on its own; this
   only keeps the summary line showing what is ticked, and closes the panel
   when you click away, which <details> does not do by itself. */
const picker  = document.getElementById('servicePicker');
const pickSum = document.getElementById('svcSummary');

const pickedServices = () =>
  [...document.querySelectorAll('#servicePicker input[name="services"]:checked')]
    .map(i => i.value);

function paintSummary() {
  if (!pickSum) return;
  const picked = pickedServices();
  /* Names while they fit, a count past that - three service names end to end
     are wider than the control on a phone. */
  pickSum.textContent =
    picked.length === 0 ? 'Select services'
    : picked.length <= 2 ? picked.join(', ')
    : picked.length + ' services selected';
  pickSum.dataset.empty = String(picked.length === 0);
}

if (picker) {
  paintSummary();
  picker.addEventListener('change', paintSummary);
  /* Click outside closes it. Without this the panel sits open over the
     message field until the summary is clicked again. */
  document.addEventListener('click', (e) => {
    if (picker.open && !picker.contains(e.target)) picker.open = false;
  });
  picker.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && picker.open) {
      picker.open = false;
      picker.querySelector('summary').focus();
    }
  });
}

/* faq accordion — one open at a time */
const faqs = [...document.querySelectorAll('.faq-item')];
faqs.forEach(item => {
  const q = item.querySelector('.faq-item__q');
  q.addEventListener('click', () => {
    const willOpen = item.dataset.open !== 'true';
    faqs.forEach(f => f.dataset.open = 'false');
    item.dataset.open = String(willOpen);
  });
});

/* contact form — posts to /api/contact, which mails the studio.
   This used to wait 900ms and show the success panel regardless; the panel
   said "Message sent." and nothing had been. Now the panel only appears if
   the server says the mail went out. */
const form = document.getElementById('contactForm');
const submitBtn = document.getElementById('cformSubmit');
const successPanel = document.getElementById('cformSuccess');
const resetBtn = document.getElementById('cformReset');
const errorNote = document.getElementById('cformError');


const showError = (msg) => {
  if (!errorNote) return;
  errorNote.textContent = msg;
  errorNote.hidden = false;
};

if (form) {
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    if (errorNote) errorNote.hidden = true;
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    submitBtn.classList.add('is-loading');
    submitBtn.disabled = true;

    const data = new FormData(form);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          name:     data.get('name'),
          email:    data.get('email'),
          company:  data.get('company'),
          message:  data.get('message'),
          services: pickedServices(),
          website:  data.get('website'),   /* honeypot, always empty for a person */
        }),
      });
      const out = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(out.error || 'That did not send.');
      successPanel.classList.add('show');
    } catch (err) {
      showError(err.message || 'That did not send. Please email us directly.');
    } finally {
      submitBtn.classList.remove('is-loading');
      submitBtn.disabled = false;
    }
  });
}
if (resetBtn) {
  resetBtn.addEventListener('click', () => {
    successPanel.classList.remove('show');
    if (errorNote) errorNote.hidden = true;
    form.reset();
    document.querySelectorAll('#servicePicker input[name="services"]').forEach(i => { i.checked = false; });
    paintSummary();
  });
}

})();
