const user=document.querySelector(".user")
const users=JSON.parse(localStorage.getItem("users"))
const current=JSON.parse(localStorage.getItem("current"))
let points=JSON.parse(localStorage.getItem("current")).points
const name1=JSON.parse(localStorage.getItem("current")).name
user.textContent=`🃏${name1} LETS PLAY HARD MEMORY GAME🃏`
const cards=document.querySelectorAll(".card")
let flag=0
let ind1=-1
let ind2=-1
let count=0

let tim=0
const t=document.querySelector(".t")
const inter=setInterval(()=>{
    tim++
    t.textContent=tim
},1000)

const p=document.querySelector(".p")
p.textContent=`${points}`
let res=[-1]
let arr=["🚑","🚑","🚲","🚲","🛹","🛹","🚀","🚀","🛴","🛴","🚌","🚌","🚙","🚙","🚋","🚋","🪂","🪂"]
for(let i=0; i<arr.length; i++)
{
    const ind = Math.floor(Math.random()*(arr.length-i-1))
    const tmp=arr[ind]
    arr[ind]=arr[arr.length-i-1]
    arr[arr.length-i-1]=tmp
}


const check=(ind1,ind2,arr)=>{
    if(arr[ind1]===arr[ind2])
        {
            count=count+1
            points=points+10
            p.textContent=`${points}`
            res.push(ind1)
            res.push(ind2)
            flag=0
            cards[ind1].textContent="x"
            cards[ind2].textContent="x"
            cards[ind1].style.color="rgb(190, 128, 209)"
            cards[ind2].style.color="rgb(190, 128, 209)"
            if(count==9)
                {
                    current.points=points
                    localStorage.setItem("current",JSON.stringify(current))
                    for(let k=0; k<users.length; k++)
                        {
                            if(users[k].name===current.name && users[k].password===current.password)
                                {
                                    users[k].points=points
                                    break
                                }
                        }
                    localStorage.setItem("users",JSON.stringify(users))
                    clearInterval(inter)
                    localStorage.setItem("time",JSON.stringify(tim))
                    setTimeout(()=>{window.location.href="../html/end.html"},2000)
                    
                }
        }
    else{
        points=points-1
        p.textContent=`${points}`
        cards[ind1].textContent="🃏"
        cards[ind2].textContent="🃏"
        flag=0
    }
}


for(let i=0; i<cards.length; i++)
{ 
    cards[i].addEventListener("click",()=>{
        for(let j=0; j<res.length; j++)
            {
                if(i===res[j])
                    return
            }
        if(flag===2)
                return
        if(flag<2 && ind1!==i)
            {
                if(flag===0){
                        ind1=i
                    }
                    else{
                        ind2=i
                    }
                cards[i].textContent=arr[i]
                flag=flag+1
            }  
            
            if(flag===2)
                {
                    setTimeout(()=>{check(ind1,ind2,arr)},1000)
                }    
                    
    })

}




