// script.js

/* PRELOADER */

window.addEventListener("load",()=>{

  setTimeout(()=>{

    document.getElementById("preloader").style.opacity="0"

    setTimeout(()=>{

      document.getElementById("preloader").style.display="none"

    },1000)

  },1500)

})

/* CUSTOM CURSOR */

const cursor=document.querySelector(".cursor")

document.addEventListener("mousemove",(e)=>{

  cursor.style.left=e.clientX+"px"
  cursor.style.top=e.clientY+"px"

})

/* REVEAL ON SCROLL */

const reveals=document.querySelectorAll(".reveal")

const observer=new IntersectionObserver(entries=>{

  entries.forEach(entry=>{

    if(entry.isIntersecting){

      entry.target.classList.add("active")

    }

  })

},{threshold:.2})

reveals.forEach(reveal=>{

  observer.observe(reveal)

})

/* BUBBLES */

const bubbleContainer=document.querySelector(".bubbles")

for(let i=0;i<25;i++){

  const bubble=document.createElement("span")

  bubble.style.width=Math.random()*20+10+"px"
  bubble.style.height=bubble.style.width

  bubble.style.left=Math.random()*100+"%"
  bubble.style.animationDuration=
  Math.random()*10+5+"s"

  bubble.style.animationDelay=
  Math.random()*5+"s"

  bubble.style.position="fixed"
  bubble.style.bottom="-100px"

  bubble.style.background=
  "rgba(255,255,255,.15)"

  bubble.style.borderRadius="50%"

  bubble.style.backdropFilter="blur(5px)"

  bubble.style.animation=
  "bubbleUp linear infinite"

  bubbleContainer.appendChild(bubble)

}

/* ADD KEYFRAMES */

const style=document.createElement("style")

style.innerHTML=`

@keyframes bubbleUp{

  0%{
    transform:translateY(0);
    opacity:0;
  }

  20%{
    opacity:1;
  }

  100%{
    transform:translateY(-120vh);
    opacity:0;
  }

}

`

document.head.appendChild(style)

/* PARALLAX */

const fanta=document.getElementById("fanta")

document.addEventListener("mousemove",(e)=>{

  let x=(window.innerWidth/2-e.pageX)/40
  let y=(window.innerHeight/2-e.pageY)/40

  fanta.style.transform=
  `translate(${x}px,${y}px)`

})

/* LIGHT ANIMATION */

function animate(){

  requestAnimationFrame(animate)

}

animate()
