(()=>{"use strict";const e=e=>{event.preventDefault();const t=e.getAttribute("href").substring(1);t.length&&document.getElementById(t).scrollIntoView({behavior:"smooth"})};(function(e){const t=document.querySelector("#timer-hours"),o=document.querySelector("#timer-minutes"),c=document.querySelector("#timer-seconds"),n=setInterval((()=>{const e=function(){const e=(new Date("16 August 2021 07:00").getTime()-(new Date).getTime())/1e3,t=Math.floor(e%60),o=Math.floor(e/60%60);return{timeRemaining:e,hours:Math.floor(e/60/60),minutes:o,seconds:t}}(),a=e=>e<10?`0${e}`:e;t.textContent=e.hours<0?"00":a(e.hours),o.textContent=e.minutes<0?"00":a(e.minutes),c.textContent=e.seconds<0?"00":a(e.seconds),e.timeRemaining<0&&clearInterval(n)}),1e3)})(),(()=>{const t=document.querySelector("menu"),o=document.querySelector("main>a"),c=()=>t.classList.toggle("active-menu");document.addEventListener("click",(n=>{let a=n.target;if(!a.matches(".portfolio-btn, .dot")){if(n.target.closest("menu")||t.classList.remove("active-menu"),a.closest("a")===o)e(a.closest("a"));else if(n.target.classList.contains("close-btn"))n.preventDefault(),c();else if(n.target.closest("a")){if(a=n.target.closest("a"),"#"===a.getAttribute("href"))return void n.preventDefault();e(a),c()}n.target.closest("div")&&n.target.closest("div").classList.contains("menu")&&c()}}))})(),(()=>{const e=document.querySelector(".popup"),t=document.querySelector(".popup-close"),o=()=>{const t=document.querySelector(".popup-content");if(document.documentElement.clientWidth>=768){let o=40;const c=-5,n=()=>{if(-60===o)return e.style.display="none",cancelAnimationFrame(n),void(t.style.left="");o+=c,t.style.left=o+"%",requestAnimationFrame(n)};requestAnimationFrame(n)}else e.style.display="none";t.style.left=""};document.addEventListener("click",(t=>{t.target.matches(".popup-btn")&&(()=>{const t=document.querySelector(".popup-content");if(e.style.display="block",document.documentElement.clientWidth>=768){const e=5;let o=-60;const c=()=>{o<40&&(o+=e,t.style.left=o+"%",requestAnimationFrame(c))};requestAnimationFrame(c)}})()})),t.addEventListener("click",o),e.addEventListener("click",(e=>{let t=e.target;t.classList.contains("popup-close")?o():(t=t.closest(".popup-content"),t||o())}))})(),(()=>{const e=document.querySelector(".service-header"),t=document.querySelectorAll(".service-header-tab"),o=document.querySelectorAll(".service-tab");e.addEventListener("click",(e=>{let c=e.target;c=c.closest(".service-header-tab"),c&&t.forEach(((e,n)=>{e===c&&(e=>{for(let c=0;c<o.length;c++)e===c?(t[c].classList.add("active"),o[c].classList.remove("d-none")):(t[c].classList.remove("active"),o[c].classList.add("d-none"))})(n)}))}))})(),(()=>{const e=document.querySelectorAll(".portfolio-item"),t=document.querySelector(".portfolio-content"),o=document.querySelector(".portfolio-dots");o.innerHTML="";for(let t=0;t<e.length;t++){const e=document.createElement("li");e.classList.add("dot"),o.append(e)}const c=document.querySelectorAll(".dot");c[0].classList.add("dot-active");let n,a=0;const s=(e,t,o)=>{e[t].classList.remove(o)},r=(e,t,o)=>{e[t].classList.add(o)},l=()=>{s(e,a,"portfolio-item-active"),s(c,a,"dot-active"),a++,a>=e.length&&(a=0),r(e,a,"portfolio-item-active"),r(c,a,"dot-active")},i=(e=3e3)=>{n=setInterval(l,e)};t.addEventListener("click",(t=>{t.preventDefault();const o=t.target;o.matches(".dot, .portfolio-btn")&&(s(e,a,"portfolio-item-active"),s(c,a,"dot-active"),o.matches("#arrow-right")?a++:o.matches("#arrow-left")?a--:o.matches(".dot")&&c.forEach(((e,t)=>{e===o&&(a=t)})),a>=e.length&&(a=0),a<0&&(a=e.length-1),r(e,a,"portfolio-item-active"),r(c,a,"dot-active"))})),t.addEventListener("mouseover",(e=>{(e.target.matches(".portfolio-btn")||e.target.matches(".dot"))&&clearInterval(n)})),t.addEventListener("mouseout",(e=>{(e.target.matches(".portfolio-btn")||e.target.matches(".dot"))&&i()})),i(1500)})(),((e=100)=>{const t=document.querySelector(".calc-block"),o=document.querySelector(".calc-type"),c=document.querySelector(".calc-square"),n=document.querySelector(".calc-day"),a=document.querySelector(".calc-count"),s=document.getElementById("total");t.addEventListener("change",(t=>{const r=t.target;(r.matches(".calc-type")||r.matches(".calc-square")||r.matches(".calc-day")||r.matches(".calc-count"))&&(()=>{let t=0,r=1,l=1;const i=o.options[o.selectedIndex].value,u=+c.value;a.value>1&&(r+=(a.value-1)/10),n.value&&n.value<5?l*=2:n.value&&n.value<10&&(l*=1.5),i&&u&&(t=e*i*u*l*r,function(t){let o=0;const c=setInterval((()=>{o+=Math.ceil(t/e),o>=t&&clearInterval(c),s.textContent=o}),1)}(t))})()}))})(100),(()=>{const e=document.createElement("div");e.style.cssText="\n  font-size: 2rem;\n  color: aquamarine;\n  ",document.addEventListener("submit",(t=>{const o=t.target;t.preventDefault(),o.appendChild(e),e.textContent="Загрузка...";const c=new FormData(o),n={};c.forEach(((e,t)=>{n[t]=e})),o.reset(),(e=>fetch("./server.php",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}))(n).then((t=>{if(200!==t.status)throw new Error("status network not 200");e.textContent="Спасибо! Мы скоро с вами свяжемся!"})).catch((t=>{e.textContent="Что то пошло не так...",console.error(t)}))}))})();const t=document.getElementById("command");t.addEventListener("mouseover",(e=>{e.target.matches("img")&&([e.target.dataset.img,e.target.src]=[e.target.src,e.target.dataset.img])})),t.addEventListener("mouseout",(e=>{e.target.matches("img")&&([e.target.src,e.target.dataset.img]=[e.target.dataset.img,e.target.src])}));const o=/номер телефона/gi,c=/e-mail/gi,n=/имя/gi;document.addEventListener("input",(e=>{const t=e.target;t.matches(".calc-block>input")&&(t.value=t.value.replace(/\D/g,"")),o.test(t.placeholder)&&(t.value=t.value.replace(/[^\d\+]/g,"")),t.matches(".mess")&&(t.value=t.value.replace(/[^\.:,\!\?\-\s\dа-яё]/gi,"")),n.test(t.placeholder)&&(t.value=t.value.replace(/[^\sа-яё]/gi,"")),c.test(t.placeholder)&&(t.value=t.value.replace(/[^\w@\-.!~*']/gi,""))})),document.addEventListener("blur",(e=>{const t=e.target;if(t.matches("input")&&(t.value=t.value.trim().replace(/^-*/g,"").replace(/-*$/g,"").replace(/-+/g,"-").replace(/\s+/g," "),n.test(t.placeholder)&t.value.length>0)){let e=t.value.split(" ");e=e.reduce(((e,t)=>e+t[0].toUpperCase()+t.substring(1).toLowerCase()+" "),""),t.value=e.trim()}}),!0)})();