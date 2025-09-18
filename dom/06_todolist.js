let inp =document.querySelector('input')
let btn=document.querySelector("button")
let ul=document.querySelector("ul")

    // btn.addEventListener("click",()=>{
    //      let data =inp.value
    //     //  console.log(data)
    //     let li=document.createElement("li")
    //     li.innerText=data
    //     ul.append(li)

    //     inp.value="" //remove input value when work is done

    //     li.addEventListener("click",()=>{
    //        li.remove()
    //     })

    //     let btn2=document.querySelector("#delete")
    //     btn2.addEventListener("click",()=>{
    //         ul.innerText=""
    //     })
    // })

    btn.addEventListener("click",()=>{
        let data=inp.value;
        let li=document.createElement("li")
        li.innerText=data
        ul.append(li)
        inp.value=""

        let items=document.querySelector(li)
        let list=[]
        list.push(li.innerText)


    })

