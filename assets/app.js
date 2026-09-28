
(function(){
  const menu=document.querySelector('.menu'), nav=document.querySelector('.navlinks');
  if(menu&&nav) menu.addEventListener('click',()=>nav.classList.toggle('open'));
  document.querySelectorAll('.navlinks a').forEach(a=>a.addEventListener('click',()=>nav&&nav.classList.remove('open')));
  const obs=new IntersectionObserver(es=>es.forEach(e=>e.isIntersecting&&e.target.classList.add('visible')),{threshold:.08});
  document.querySelectorAll('.reveal').forEach(e=>obs.observe(e));
  document.querySelectorAll('[data-filter]').forEach(btn=>btn.addEventListener('click',()=>{
    document.querySelectorAll('[data-filter]').forEach(b=>b.classList.remove('active')); btn.classList.add('active');
    const f=btn.dataset.filter;
    document.querySelectorAll('[data-category]').forEach(c=>c.classList.toggle('hidden',f!=='todos'&&c.dataset.category.split(' ').indexOf(f)<0));
  }));
  const form=document.querySelector('#orcamento-form');
  if(form){form.addEventListener('submit',e=>{e.preventDefault();const d=new FormData(form);const msg=`Olá! Sou ${d.get('nome')}. Gostaria de solicitar um orçamento para ${d.get('solucao')}.\n\nNegócio/segmento: ${d.get('segmento')}\nContato: ${d.get('contato')}\nMensagem: ${d.get('mensagem')}`;window.open('https://wa.me/5521991525359?text='+encodeURIComponent(msg),'_blank');});}
  const toast=document.querySelector('#toast'); document.querySelectorAll('[data-copy]').forEach(b=>b.addEventListener('click',async()=>{try{await navigator.clipboard.writeText(b.dataset.copy);if(toast){toast.textContent='Copiado.';toast.classList.add('show');setTimeout(()=>toast.classList.remove('show'),1800)}}catch(e){}}));
  document.querySelectorAll('[data-year]').forEach(e=>e.textContent=new Date().getFullYear());
})();
