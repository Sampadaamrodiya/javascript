let inp =document.querySelector('input')
let btn=document.querySelector("button")
let ul=document.querySelector("ul")

    btn.addEventListener("click",()=>{
         let data =inp.value
        //  console.log(data)
        let li=document.createElement("li")
        li.innerText=data
        ul.append(li)

        inp.value="" //remove input value when work is done

    })
