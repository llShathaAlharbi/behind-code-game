// Decorative mascot: only peeks occasionally, never intercepts the game.
(()=>{
const robot=document.getElementById('robot-peek');
const reduced=matchMedia('(prefers-reduced-motion: reduce)');
let nextTimer,hideTimer,right=false;
const allowed=()=>!reduced.matches&&!document.body.classList.contains('motion-off')&&!document.hidden;
function hide(){robot.classList.remove('is-peeking');clearTimeout(hideTimer);}
function schedule(delay=10500){clearTimeout(nextTimer);if(allowed())nextTimer=setTimeout(peek,delay);}
function peek(){if(!allowed())return;if(document.getElementById('card').classList.contains('dragging')){schedule(3000);return;}robot.classList.toggle('from-right',right);right=!right;robot.classList.add('is-peeking');hideTimer=setTimeout(hide,4400);schedule(14500);}
document.getElementById('card').addEventListener('pointerdown',()=>{hide();schedule();});
document.getElementById('motion').addEventListener('click',()=>{hide();schedule(2500);});
document.addEventListener('visibilitychange',()=>{hide();schedule(3500);});
reduced.addEventListener('change',()=>{hide();schedule();});
robot.querySelector('img').addEventListener('error',()=>{hide();clearTimeout(nextTimer);robot.hidden=true;});
schedule(2200);
})();
