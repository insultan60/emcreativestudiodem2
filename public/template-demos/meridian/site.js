/* The Hartwell Team · shared site behaviour (menu, header, reveal, forms, FAQ, card helpers) */
(function(){
  var d=document, html=d.documentElement, body=d.body;
  var HT=window.HT={};

  /* Formatting */
  HT.money=function(n){return '$'+Math.round(n).toLocaleString('en-US');};
  HT.short=function(n){return n>=1e6?'$'+(Math.round(n/1e5)/10).toString().replace(/\.0$/,'')+'M':'$'+Math.round(n/1e3)+'K';};
  HT.esc=function(s){return String(s).replace(/[&<>"]/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c];});};
  function badgeClass(s){return s==='Pending'?' st-pending':(s==='New Listing'||s==='Coming Soon')?' st-new':'';}
  HT.card=function(l,o){
    o=o||{};
    var e=HT.esc;
    return '<a href="listing.html?id='+l.id+'" class="lcard card-hover'+(o.compact?' compact':'')+'" data-id="'+l.id+'">'+
      '<div class="im"><img class="zoom" src="'+l.images[0]+'" alt="'+e(l.address)+', '+e(l.neighborhood)+'" loading="lazy">'+
      '<span class="badge'+badgeClass(l.status)+'">'+e(l.status)+'</span><span class="type">'+e(l.type)+'</span></div>'+
      '<div class="bd"><div><p class="loc"><svg class="ic"><use href="#i-pin"/></svg>'+e(l.neighborhood)+'</p><h3>'+e(l.address)+'</h3><p class="price">'+HT.money(l.price)+'</p></div>'+
      '<div class="meta"><div class="facts"><span><svg class="ic"><use href="#i-bed"/></svg>'+l.beds+' Bd</span><span><svg class="ic"><use href="#i-bath"/></svg>'+l.baths+' Ba</span><span><svg class="ic"><use href="#i-ruler"/></svg>'+l.sqft.toLocaleString('en-US')+' Sqft</span></div>'+
      '<span class="arrow-btn"><svg class="ic"><use href="#i-arrow-ur"/></svg></span></div></div></a>';
  };

  /* Scroll reveal */
  var still=window.matchMedia&&matchMedia('(prefers-reduced-motion: reduce)').matches;
  var io=(!still&&'IntersectionObserver' in window)?new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('is-visible');io.unobserve(e.target);}})},{threshold:.12,rootMargin:'0px 0px -60px 0px'}):null;
  HT.reveal=function(root){[].forEach.call((root||d).querySelectorAll('.reveal:not(.is-visible)'),function(n){if(io)io.observe(n);else n.classList.add('is-visible');});};
  HT.reveal();

  /* Header state + progress */
  var hdr=d.getElementById('hdr'), prog=d.getElementById('prog');
  if(hdr){
    var onScroll=function(){var y=window.scrollY||pageYOffset, t=html.scrollHeight-innerHeight;hdr.classList.toggle('scrolled',y>40);if(prog)prog.style.transform='scaleX('+(t>0?Math.min(y/t,1):0)+')';};
    onScroll(); addEventListener('scroll',onScroll,{passive:true}); addEventListener('resize',onScroll);
  }

  /* Dropdown */
  var dd=d.getElementById('dd'), ddBtn=d.getElementById('ddBtn');
  function setDD(o){if(!dd)return;dd.classList.toggle('open',o);ddBtn.setAttribute('aria-expanded',o);}
  if(dd){
    dd.addEventListener('mouseenter',function(){setDD(true)}); dd.addEventListener('mouseleave',function(){setDD(false)});
    ddBtn.addEventListener('click',function(){setDD(!dd.classList.contains('open'))});
    d.addEventListener('click',function(e){if(!dd.contains(e.target))setDD(false)});
  }

  /* Drawer */
  var menuBtn=d.getElementById('menuBtn'), drClose=d.getElementById('drClose');
  function openDr(o){body.classList.toggle('drawer-open',o);if(menuBtn)menuBtn.setAttribute('aria-expanded',o);if(o&&drClose)drClose.focus();}
  if(menuBtn){
    menuBtn.addEventListener('click',function(){openDr(true)});
    drClose.addEventListener('click',function(){openDr(false)});
    d.getElementById('scrim').addEventListener('click',function(){openDr(false)});
    [].forEach.call(d.querySelectorAll('#drawer a'),function(a){a.addEventListener('click',function(){openDr(false)})});
  }
  d.addEventListener('keydown',function(e){if(e.key==='Escape'){openDr(false);setDD(false);}});

  /* Demo forms */
  HT.bindForms=function(root){[].forEach.call((root||d).querySelectorAll('.demo-form'),function(f){if(f._b)return;f._b=1;f.addEventListener('submit',function(e){e.preventDefault();var m=f.querySelector('.form-msg');if(m){m.classList.remove('show');void m.offsetWidth;m.classList.add('show');}})});};
  HT.bindForms();

  /* FAQ accordion */
  [].forEach.call(d.querySelectorAll('.faq-item'),function(it){
    var q=it.querySelector('.faq-q');
    q.setAttribute('aria-expanded',it.classList.contains('open'));
    q.addEventListener('click',function(){var o=!it.classList.contains('open');it.classList.toggle('open',o);q.setAttribute('aria-expanded',o);});
  });
})();
