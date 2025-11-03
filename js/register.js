const form=document.querySelector("form")
const send=document.querySelector(".send")
const name=document.getElementById("name")
const password=document.getElementById("pass")


form.addEventListener("submit",(event)=>{
    event.preventDefault()
        const obj={"name":name.value,"password":password.value,"points":0}
    if(localStorage.getItem("users"))
        {
            const arr=JSON.parse(localStorage.getItem("users"))
            arr.push(obj)
            localStorage.setItem("users",JSON.stringify(arr))
        }
    else
        {
            const arr=[]
            arr.push(obj)
            localStorage.setItem("users",JSON.stringify(arr))
        }
    localStorage.setItem("current",JSON.stringify(obj))
    window.location.href="../html/game.html"
})