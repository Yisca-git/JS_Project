const memory=document.querySelector(".two")
const user=document.querySelector(".user")
const name1=JSON.parse(localStorage.getItem("current")).name
user.textContent=`Hello ${name1}!`

memory.addEventListener("click",()=>{
    window.location.href="../html/choose.html"
})
