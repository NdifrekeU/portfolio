// Typing effect
const words=["engaging mobile games","gamified experiences","intuitive player UX","retention-driven features"];
let w=0,c=0,del=false;const el=document.getElementById("typed");
(function type(){const t=words[w];el.textContent=t.slice(0,c);
 if(!del&&c++===t.length){del=true;return setTimeout(type,1400)}
 if(del&&c--===0){del=false;w=(w+1)%words.length}
 setTimeout(type,del?40:80)})();
// Scroll reveal + counters
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add("in");io.unobserve(e.target);
 e.target.querySelectorAll("[data-count]").forEach(n=>{const to=+n.dataset.count,s=n.dataset.suffix||"";let i=0;
  const id=setInterval(()=>{i++;n.textContent=Math.round(to*i/40)+s;if(i>=40)clearInterval(id)},30)})}}),{threshold:.15});
document.querySelectorAll(".reveal").forEach((e,i)=>{e.style.transitionDelay=(i%4)*70+"ms";io.observe(e)});
// Hover-to-play videos (tap on mobile)
document.querySelectorAll(".media").forEach(m=>{const v=m.querySelector("video");
 m.addEventListener("mouseenter",()=>v.play().catch(()=>{}));
 m.addEventListener("mouseleave",()=>{v.pause()});
 m.addEventListener("click",()=>v.paused?v.play():v.pause())});
// Nav, progress bar, cursor glow
const nav=document.getElementById("nav"),bar=document.getElementById("progress"),glow=document.getElementById("glow");
addEventListener("scroll",()=>{nav.classList.toggle("s",scrollY>40);
 bar.style.width=scrollY/(document.body.scrollHeight-innerHeight)*100+"%"},{passive:true});
addEventListener("mousemove",e=>{glow.style.left=e.clientX+"px";glow.style.top=e.clientY+"px"});
document.getElementById("yr").textContent=new Date().getFullYear();
