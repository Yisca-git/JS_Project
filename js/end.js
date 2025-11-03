const points= document.querySelector(".points")
const p=JSON.parse(localStorage.getItem("current")).points
const time= document.querySelector(".time")
const t=JSON.parse(localStorage.getItem("time"))
const button=document.querySelector(".button")
const but=document.querySelector(".but")
points.textContent=points.textContent+p
time.textContent=time.textContent+t
button.addEventListener("click",()=>{
     window.location.href="../html/game.html"
})  
but.addEventListener("click",()=>{
    window.location.href="../html/open.html"
})   

