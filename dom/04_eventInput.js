let inp=document.querySelector("input")
let para=document.querySelector("p")
inp.addEventListener("input",(event)=>{
    // console.log(event)
    // console.log(event.target)
    // console.log(event.target.value)
    para.innerText=event.target.value


})