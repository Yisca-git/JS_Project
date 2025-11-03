const form=document.querySelector("form")
const login=document.querySelector(".get_in")
const name=document.getElementById("name")
const password=document.getElementById("pass")
console.log({name});
const newBut=document.querySelector(".new")

form.addEventListener("submit",(event)=>{
    event.preventDefault()
    const arr=JSON.parse(localStorage.getItem("users"))
    let flag = false
    const obj={"name":name.value,"password":password.value}
    for(let i=0; i<arr.length; i++)
        {
            if(arr[i].name===obj.name && arr[i].password===obj.password)
                flag=true
        }
    if(flag===true)
        {
            localStorage.setItem("current",JSON.stringify(obj))
            window.location.href="../html/game.html"
        }
    else
       alert("you have to register")

    
})

newBut.addEventListener("click",(event)=>{
    event.preventDefault()
    window.location.href="../html/register.html"
})


