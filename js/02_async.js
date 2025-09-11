// //asyncronus programming
// function step1(){
//     setTimeout(() => {
//         console.log("post")
//     }, 5000);
// }
// function step2(){
//     setTimeout(()=>{
//         console.log("captions")
//     },4000)
// }
// function step3(){
//     setTimeout(()=>{
//         console.log("filter")
//     },3000)
// }
// function step4()
// {    setTimeout(()=>{
//         console.log("select photo")
// },1000)
// }

// step4()
// step3()
// step2()
// step1()


// function second(){
//     setTimeout(() => {
//         console.log("---------------------")
//         step1()
//         step2()
//         step3()
//         step4()
//     }, 7000)
// }

// second()


//-----------------callback help
function step1(){
    setTimeout(() => {
        console.log("post")
        
    }, 5000);
}
function step2(fn){
    setTimeout(()=>{
        console.log("captions")
        fn()
    },4000)
}
function step3(fn){
    setTimeout(()=>{
        console.log("filter")
        fn()
    },3000)
}
function step4(fn)
{    setTimeout(()=>{
        console.log("select photo")
        fn()
},1000)
}

step4(()=>{
     step3(()=>{
        step2(()=>{
            step1()
        })
     })
})