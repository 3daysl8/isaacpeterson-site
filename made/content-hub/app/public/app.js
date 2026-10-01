(function(){
  function toast(m){var t=document.getElementById('ch-toast');if(!t)return;t.textContent=m;t.classList.add('show');clearTimeout(t._t);t._t=setTimeout(function(){t.classList.remove('show');},2200);}
  window.chDemo=function(e){if(e&&e.preventDefault)e.preventDefault();toast('Demonstration only — actions are disabled.');return false;};
  function toggleTheme(){var el=document.documentElement,cur=el.getAttribute('data-theme');var sysDark=window.matchMedia('(prefers-color-scheme: dark)').matches;var next=cur?(cur==='dark'?'light':'dark'):(sysDark?'light':'dark');el.setAttribute('data-theme',next);try{localStorage.setItem('ch-theme',next);}catch(e){}var l=document.getElementById('theme-label');if(l)l.textContent=next==='dark'?'Light':'Dark';}
  function closeMenus(ex){document.querySelectorAll('.menu.open').forEach(function(m){if(m!==ex)m.classList.remove('open');});}
  document.addEventListener('click',function(e){
    if(e.target.closest('[data-theme-toggle]')){e.preventDefault();toggleTheme();return;}
    var tog=e.target.closest('[data-menu]');
    if(tog){e.preventDefault();var m=document.getElementById(tog.getAttribute('data-menu'));var open=m&&m.classList.contains('open');closeMenus();if(m&&!open)m.classList.add('open');return;}
    if(e.target.closest('[data-copy],[data-demo]')){e.preventDefault();toast('Demonstration only — export is disabled.');closeMenus();return;}
    closeMenus();
  });
})();