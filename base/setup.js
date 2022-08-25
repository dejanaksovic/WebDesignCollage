
function doNav() {
    let navText=document.querySelector("ul")

document.querySelector(".phoneNav").addEventListener("click", e=>{
    navText.classList.toggle("on")
})
}

export {doNav}