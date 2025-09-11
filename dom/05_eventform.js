// data store when clicked on submit

let form=document.querySelector("form")
form.addEventListener("submit",(e)=>{
    // console.log("hello") //default behaviour me bar bar refresh hoga : no text visible4
    e.preventDefault()
    // console.log("hello")
    // console.log(form[0].value)
    // console.log(form[1].value)
    // console.log(form[2].value)

    let data={ name:form[0].value,
               email:form[1].value,
               pass:form[2].value}


console.log(data)
localStorage.setItem("formData",JSON.stringify(data))
    })

//delete the data
form.addEventListener("reset",(e)=>{
    localStorage.removeItem("formdata")
})

//local storage
// localStorage.setItem("key","data")
// localStorage.getItem("key")


let form2=document.querySelector("#form2")
form2.addEventListener("submit",(e)=>{
    e.preventDefault()
    let saveData=localStorage.getItem("formData")
    let dataobj =JSON.parse(saveData)
    let loginobj={
        email:form2[0].value,
        pass:form2[1].value
    }

    if(dataobj.email==loginobj.email && dataobj.pass==loginobj.pass)
        prompt("login successful")
    else
        prompt("errorr")

})