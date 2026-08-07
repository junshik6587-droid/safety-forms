/* =========================================================
   현장 목록 (모든 서식이 공통으로 사용)
   ---------------------------------------------------------
   ● 신규 현장 추가 : 아래 목록에 한 줄 추가 (앞에 큰따옴표 " , 뒤에 쉼표 ,)
   ● 종료 현장 삭제 : 해당 줄을 지우기
   ● 맨 아래 줄은 쉼표(,)를 붙이지 않습니다.
   ● 수정 후 GitHub에 저장하면 모든 서식·모든 폰에 반영됩니다.
   ========================================================= */
window.SITES = [
  "아르시엘 방배 732 공동주택 신축공사",
  "이태원동 106-2 단독주택 신축현장",
  "보라동 20-1 단독주택 신축현장",
  "평창동 496-4 단독주택"
];

/* =========================================================
   마지막 선택 현장 기억 (현장 전용 태블릿용)
   - 현장명을 한 번 선택하면 이 기기에 저장되어,
     같은 서식이나 다른 서식을 다시 열 때 자동으로 채워집니다.
   - 임시저장한 문서에 다른 현장이 들어있으면 그 값이 우선합니다.
   ========================================================= */
(function(){
  var KEY='lastSite';
  function isSiteEl(t){ return t && (t.id==='site' || (t.getAttribute && t.getAttribute('data-k')==='site')); }
  function remember(t){ try{ if(t && t.value) localStorage.setItem(KEY, t.value); }catch(_){} }
  document.addEventListener('change', function(e){ if(isSiteEl(e.target)) remember(e.target); }, true);
  document.addEventListener('input',  function(e){ var t=e.target; if(t && t.getAttribute && t.getAttribute('data-k')==='site') remember(t); }, true);
  function apply(){ try{
    var last=localStorage.getItem(KEY); if(!last) return;
    var el=document.getElementById('site')||document.querySelector('[data-k=site]'); if(!el) return;
    if(el.tagName==='SELECT'){
      var has=false; for(var i=0;i<el.options.length;i++){ if(el.options[i].value===last){ has=true; break; } }
      if(has && el.selectedIndex<=0){ el.value=last; el.dispatchEvent(new Event('change')); }
    } else if(!el.value){ el.value=last; el.dispatchEvent(new Event('input')); }
  }catch(_){} }
  window.addEventListener('load', function(){ setTimeout(apply, 80); });
})();
