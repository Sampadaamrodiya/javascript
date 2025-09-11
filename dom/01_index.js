//  dom- document object model

// let h1=document.getElementById("one")
// h1.style.color="blue"
// console.log(h1)

// let h1=document.querySelector("#one");
// h1.style.color="red"
// console.log(h1)

// let h1=document.getElementsByClassName("two")
// h1[0].style.color="blue"
// console.log(h1)

// let h1=document.getElementsByClassName("two")
// for(let i of h1)
// {
//     i.style.color="purple"
// }

let h1=document.querySelector("a")
console.log(h1.getAttribute("a"))
h1.setAttribute("href","https://google.com")
console.log(h1)


