/* Behaviour for /about, lifted from em-creative-studio-about_5.html. */
(() => {
'use strict';
const RM = matchMedia('(prefers-reduced-motion: reduce)').matches;

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

/* ==================================================================
   TEAM DATA + MODAL — same click-to-reveal pattern the homepage
   already ships (dormant there since the homepage shows only the CEO)
   ================================================================== */
const TEAM = [
  {
    name:'Seda Naumenko', nick:'The Visionary', role:'Founder &amp; Creative Director',
    img:'/images/pg/097ebd170bdf71f1.webp',
    bio:"Seda is the founder and creative force behind EM Creative Studio. With a background in marketing, branding, and real estate, she helps clients turn their ideas into thoughtful strategies and cohesive digital experiences. From brand development and social media to websites, content, and campaign direction, Seda oversees each project with a clear vision and a strong attention to detail.",
    tags:['Brand Strategy','Creative Direction','Real Estate Marketing'],
    quote:'"Marketing that feels authentic, intentional, and true to every client."'
  },
  {
    name:'Ernest', nick:'The Storyteller', role:'Co-Founder &amp; Visual Storytelling Director',
    img:'/images/pg/e7025139b435e968.webp',
    bio:"Ernest is the Co-Founder of EM Creative Studio, bringing together creativity, storytelling, and thoughtful execution to support each client's vision. His creative foundation was shaped through his education at ArtCenter in Pasadena and the New York Film Academy, where he studied directing and acting. At the studio, Ernest supports creative direction, content production, and the systems that keep every project organized and moving forward.",
    tags:['Visual Storytelling','Creative Direction','Content Production'],
    quote:'"Every project should feel intentional, authentic, and visually compelling."'
  },
  {
    name:'Lilit', nick:'The Creative Eye', role:'Social Media Videographer &amp; Content Producer',
    img:'/images/pg/c93b8e9ad57b2ce2.webp',
    bio:"Lilit is an Armenian filmmaker and writer based in LA, with a background at production companies and studios including SoulPancake, Netflix, and Hulu. At EM Creative Studio, she helps bring social media concepts to life through filming and content production, working closely with the creative team during shoots to capture the moments and personality that make each brand feel genuine.",
    tags:['Videography','Content Production','Cinematography'],
    quote:'"Footage that feels engaging, polished, and true to the brand."'
  },
  {
    name:'Hayk', nick:'The Story Shaper', role:'Video Editor &amp; Post-Production Specialist',
    img:'/images/pg/hayk.webp',
    bio:"Hayk transforms raw footage into polished, engaging content through thoughtful editing and post production. He shapes the pacing, sound, color, and visual flow of each video while keeping the client's brand and message at the center.",
    tags:['Video Editing','Post-Production','Color &amp; Sound'],
    quote:'"Videos that feel natural, professional, and designed to connect."'
  },
  {
    name:'Luba', nick:'The Content Creator', role:'Content Designer &amp; Canva Specialist',
    img:'/images/pg/luba.webp',
    bio:"Luba creates the branded visuals that bring each client's content strategy to life. As the studio's Canva lead, she designs social media graphics, carousels, stories, and marketing materials that feel cohesive and true to each brand.",
    tags:['Content Design','Canva','Social Graphics'],
    quote:'"Every piece of content should feel cohesive and true to the brand."'
  },
  {
    name:'Basit', nick:'The Project Lead', role:'Senior Project Director &amp; Manager',
    img:'/images/pg/basit.webp',
    bio:"Basit leads projects across EM Creative Studio. He plans timelines, coordinates the team and keeps every client project moving from kickoff to launch.",
    tags:['Project Direction','Team Coordination','Client Delivery'],
    quote:'"Reliable solutions that let the creative team move faster."'
  },
  {
    name:'Thomas', nick:'The Search Specialist', role:'SEO Specialist',
    img:'/images/pg/thomas.webp',
    bio:"Thomas handles search for the studio's clients. He researches keywords, shapes page content and site structure, and tracks how pages rank, so clients get found by the people looking for them.",
    tags:['SEO','Keyword Research','Content Optimization'],
    quote:''
  },
  {
    name:'Zayn', nick:'The Builder', role:'Developer &amp; AI Specialist',
    img:'/images/pg/zayn.webp',
    bio:"Zayn builds and maintains the websites and tools behind the studio's work, and brings AI into the workflow where it saves time and improves results.",
    tags:['Web Development','AI Tools','Automation'],
    quote:''
  },
  {
    name:'Johnny', nick:'The Organizer', role:'Creative Project Manager',
    img:'/images/pg/johnny.webp',
    bio:"Johnny keeps creative projects on track. He turns client goals into clear plans, coordinates designers, editors and developers, and makes sure work lands on time.",
    tags:['Project Management','Creative Production','Client Communication'],
    quote:''
  },
  {
    name:'Zohaib', nick:'The Engineer', role:'Full Stack Developer &amp; AI Engineer',
    img:'/images/pg/zohaib.webp',
    bio:"Zohaib builds the studio's websites and web apps end to end, from front-end design to back-end systems, and develops the AI features and automations that power client projects.",
    tags:['Full Stack Development','AI Engineering','Web Apps'],
    quote:''
  }
];

const modal = document.getElementById('teamModal');
const tmImg = document.getElementById('tmImg');
const tmAvatar = document.getElementById('tmAvatar');
const tmNick = document.getElementById('tmNick');
const tmName = document.getElementById('tmName');
const tmRole = document.getElementById('tmRole');
const tmBio = document.getElementById('tmBio');
const tmTags = document.getElementById('tmTags');
const tmQuote = document.getElementById('tmQuote');

function openTeam(idx){
  const m = TEAM[idx];
  if (m.img) {
    tmImg.src = m.img; tmImg.alt = m.name; tmImg.style.display = '';
    tmAvatar.style.display = 'none';
  } else {
    tmAvatar.textContent = m.avatar; tmAvatar.style.background = m.avatarBg;
    tmAvatar.style.display = 'flex';
    tmImg.style.display = 'none';
  }
  tmNick.textContent = m.nick;
  tmName.textContent = m.name;
  tmRole.innerHTML = m.role;
  tmBio.textContent = m.bio;
  tmTags.innerHTML = m.tags.map(t => `<span>${t}</span>`).join('');
  tmQuote.textContent = m.quote;
  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeTeam(){
  modal.classList.remove('open');
  document.body.style.overflow = '';
}
document.querySelectorAll('[data-open-team]').forEach(el => {
  el.addEventListener('click', () => openTeam(Number(el.dataset.openTeam)));
});
modal.querySelector('.team-modal__bg').addEventListener('click', closeTeam);
modal.querySelector('.team-modal__close').addEventListener('click', closeTeam);
addEventListener('keydown', e => { if (e.key === 'Escape') closeTeam(); });

})();
