/* =========================================================
   RubseroIA — Main JavaScript
   Cursor, partículas, animaciones, FAQ, formulario, nav
   ========================================================= */

/* CURSOR PERSONALIZADO */
const cur = document.getElementById('cursor');
const ring = document.getElementById('cursor-ring');
let mx = 0, my = 0, rx = 0, ry = 0;

document.addEventListener('mousemove', e => {
  mx = e.clientX;
  my = e.clientY;
  cur.style.left = mx + 'px';
  cur.style.top = my + 'px';
});

(function loop() {
  rx += (mx - rx) * .13;
  ry += (my - ry) * .13;
  ring.style.left = rx + 'px';
  ring.style.top = ry + 'px';
  requestAnimationFrame(loop);
})();

document.querySelectorAll('a, button, .svc, .plan, .tcard').forEach(el => {
  el.addEventListener('mouseenter', () => {
    cur.style.width = '20px';
    cur.style.height = '20px';
    ring.style.width = '54px';
    ring.style.height = '54px';
  });
  el.addEventListener('mouseleave', () => {
    cur.style.width = '12px';
    cur.style.height = '12px';
    ring.style.width = '36px';
    ring.style.height = '36px';
  });
});

/* PARTICLE CANVAS */
const cvs = document.getElementById('bg-canvas');
const ctx = cvs.getContext('2d');
let W, H, pts = [];

function resize() {
  W = cvs.width = innerWidth;
  H = cvs.height = innerHeight;
  pts = [];
  for (let i = 0; i < 80; i++) {
    pts.push({
      x: Math.random() * W,
      y: Math.random() * H,
      vx: (Math.random() - .5) * .22,
      vy: (Math.random() - .5) * .22,
      r: Math.random() * 1.4 + .3
    });
  }
}

function frame() {
  ctx.clearRect(0, 0, W, H);
  pts.forEach(p => {
    p.x += p.vx;
    p.y += p.vy;
    if (p.x < 0) p.x = W;
    if (p.x > W) p.x = 0;
    if (p.y < 0) p.y = H;
    if (p.y > H) p.y = 0;
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
    ctx.fillStyle = 'rgba(1,255,194,.32)';
    ctx.fill();
  });
  pts.forEach((a, i) => {
    for (let j = i + 1; j < pts.length; j++) {
      const b = pts[j];
      const d = Math.hypot(a.x - b.x, a.y - b.y);
      if (d < 120) {
        ctx.beginPath();
        ctx.moveTo(a.x, a.y);
        ctx.lineTo(b.x, b.y);
        ctx.strokeStyle = `rgba(1,255,194,${.07 * (1 - d / 120)})`;
        ctx.lineWidth = .5;
        ctx.stroke();
      }
    }
  });
  requestAnimationFrame(frame);
}

resize();
addEventListener('resize', resize);
frame();

/* SVC GLOW EFFECT */
document.querySelectorAll('.svc').forEach(c => {
  c.addEventListener('mousemove', e => {
    const r = c.getBoundingClientRect();
    c.style.setProperty('--mx', ((e.clientX - r.left) / r.width * 100) + '%');
    c.style.setProperty('--my', ((e.clientY - r.top) / r.height * 100) + '%');
  });
});

/* SCROLL REVEAL */
const ro = new IntersectionObserver(entries => {
  entries.forEach((e, i) => {
    if (e.isIntersecting) {
      setTimeout(() => e.target.classList.add('in'), i * 70);
      ro.unobserve(e.target);
    }
  });
}, { threshold: .1 });

document.querySelectorAll('.rv').forEach(el => ro.observe(el));

/* COUNTER ANIMATION */
const so = new IntersectionObserver(entries => {
  if (entries[0].isIntersecting) {
    document.querySelectorAll('.stat-n').forEach((el, i) => {
      const t = parseInt(el.dataset.target);
      const pre = el.dataset.prefix || '';
      const suf = el.dataset.suffix || '%';
      let t0 = null;
      setTimeout(() => {
        (function anim(ts) {
          if (!t0) t0 = ts;
          const p = Math.min((ts - t0) / 1600, 1);
          const e2 = 1 - Math.pow(1 - p, 4);
          el.textContent = pre + Math.round(e2 * t) + suf;
          if (p < 1) requestAnimationFrame(anim);
        })(performance.now());
      }, i * 140);
    });
    so.disconnect();
  }
}, { threshold: .6 });

const sr = document.querySelector('.stats-row');
if (sr) so.observe(sr);

/* FAQ ACCORDION */
function tFaq(btn) {
  const row = btn.parentElement;
  const was = row.classList.contains('open');
  document.querySelectorAll('.faq-row').forEach(r => {
    r.classList.remove('open');
    r.querySelector('.faq-q').setAttribute('aria-expanded', 'false');
  });
  if (!was) {
    row.classList.add('open');
    btn.setAttribute('aria-expanded', 'true');
  }
}

/* FORM */
function sendForm() {
  const n = document.getElementById('fn').value.trim();
  const e = document.getElementById('em').value.trim();
  if (!n || !e) {
    alert('Por favor, rellena nombre y email.');
    return;
  }
  const btn = document.querySelector('.submit-btn');
  btn.disabled = true;
  btn.textContent = 'Enviando...';
  setTimeout(() => {
    btn.textContent = '✓ Enviado';
    document.getElementById('fok').style.display = 'block';
  }, 900);
}

/* MOBILE NAV */
function toggleNav() {
  const nl = document.getElementById('nav-ul');
  const btn = document.querySelector('.hamburger');
  const open = nl.style.display === 'flex';
  nl.style.cssText = open ? '' : 'display:flex;flex-direction:column;position:absolute;top:58px;left:0;right:0;background:rgba(4,6,15,.97);padding:1.5rem 2rem;gap:1.2rem;border-bottom:1px solid rgba(255,255,255,.07);z-index:199';
  btn.setAttribute('aria-expanded', open ? 'false' : 'true');
}
