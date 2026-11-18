(()=>{const $=(s,c=document)=>c.querySelector(s),$$=(s,c=document)=>[...c.querySelectorAll(s)];
const nav=$('#nav'),menu=$('#menu'),burger=$('#burger'),root=document.documentElement;
const onScroll=()=>nav.classList.toggle('scrolled',scrollY>30||menu.classList.contains('open'));onScroll();addEventListener('scroll',onScroll,{passive:true});
burger.onclick=()=>{const o=menu.classList.toggle('open');burger.setAttribute('aria-expanded',o);nav.classList.toggle('open-m',o);onScroll()};
$$('#menu a').forEach(a=>a.onclick=()=>{menu.classList.remove('open');burger.setAttribute('aria-expanded',false);nav.classList.remove('open-m');onScroll()});
try{const t=localStorage.getItem('theme');if(t)root.dataset.theme=t}catch(e){}
$('#theme').onclick=()=>{const d=root.dataset.theme==='dark'||(!root.dataset.theme&&matchMedia('(prefers-color-scheme:dark)').matches);root.dataset.theme=d?'light':'dark';try{localStorage.setItem('theme',root.dataset.theme)}catch(e){}};
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.12});$$('.reveal').forEach(el=>io.observe(el));
const co=new IntersectionObserver(es=>es.forEach(e=>{if(!e.isIntersecting)return;const el=e.target,n=+el.dataset.count,s=el.dataset.suffix||'';let i=0;const t=setInterval(()=>{i++;el.textContent=i+(i>=n?s:'');if(i>=n)clearInterval(t)},n>10?35:300);co.unobserve(el)}),{threshold:.6});$$('[data-count]').forEach(el=>co.observe(el));
$$('.tabs button').forEach(b=>b.onclick=()=>{$$('.tabs button').forEach(x=>x.setAttribute('aria-selected',x===b));$$('.panel').forEach(p=>p.classList.toggle('on',p.id===b.dataset.t))});
$('#yr').textContent=new Date().getFullYear();
$('#form').addEventListener('submit',e=>{e.preventDefault();const f=e.target,h=$('#hint');
if(!f.name.value.trim()||!f.contact.value.trim()||!f.msg.value.trim()){h.textContent='Please complete all required fields.';return}
const b=`Name: ${f.name.value}\nContact: ${f.contact.value}\nService: ${f.service.value}\n\n${f.msg.value}`;
location.href=`mailto:info@infingroup.net.za?subject=${encodeURIComponent('Website enquiry: '+f.service.value)}&body=${encodeURIComponent(b)}`;h.textContent='Opening your email app…'});})();
