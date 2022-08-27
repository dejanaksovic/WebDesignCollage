let navText=document.querySelector("ul")
let inputs= document.querySelectorAll("input")

document.querySelector(".phoneNav").addEventListener("click", e=>{
    navText.classList.toggle("on")
})

const checkEmail = (test) => {
    let isprava= /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    
    let tacno= test.match(isprava)

    if(tacno!=null){
        return true
    }

    return false;

    }

const checkName = (test) => {
    let isprava= /[A-Z].[a-z]\w+\s+[A-Z].[a-z]\w+$/
    let tacno= test.match(isprava)

    if(tacno!=null){
        return true
    }
    
    return false
}

const checkAge = (test) => {
    if(test>=18){
        return true
    }

    return false
}

inputs[0].addEventListener("keyup", e=>{
    if(inputs[0].value==""){
        inputs[0].classList.remove("correct")
        inputs[0].classList.remove("incorrect")
    }

    else if(checkName(inputs[0].value)){
        inputs[0].classList.add("correct")
        inputs[0].classList.remove("incorrect")
    }

    else{
        inputs[0].classList.add("incorrect")
        inputs[0].classList.remove("correct")
    }
})

inputs[1].addEventListener("keyup", e=>{
    if(inputs[1].value==""){
        inputs[1].classList.remove("correct")
        inputs[1].classList.remove("incorrect")
    }

    else if(checkAge(inputs[1].value)){
        inputs[1].classList.remove("incorrect")
        inputs[1].classList.add("correct")
    }

    else{
        inputs[1].classList.remove("correct")
        inputs[1].classList.add("incorrect")
    }
})

inputs[2].addEventListener("keyup", e=>{
    if(inputs[2].value==""){
        inputs[2].classList.remove("correct")
        inputs[2].classList.remove("incorrect")
    }
    else if(checkEmail(inputs[2].value)){
        inputs[2].classList.remove("incorrect")
        inputs[2].classList.add("correct")
    }
    else{
        inputs[2].classList.remove("correct")
        inputs[2].classList.add("incorrect")
    }
})

document.querySelector("button").addEventListener("click", e=>{
    e.preventDefault()
    if(checkName(inputs[0].value) && checkAge(inputs[1].value) && checkEmail(inputs[2].value) && document.querySelector("textarea").value!="")
        alert("Your message is sent")
    else{
        alert("Please enter valid form information")
    }
})