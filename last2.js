let search = new URLSearchParams(window.location.search).get("id")

let elImg2 = document.querySelector(".plastic__imgg")
let elTitle = document.querySelector(".plastic__title")
let elBtnOpen=document.querySelector(".headerr__burger__btn"),elNavbar=document.querySelector(".headerr__navbar")


let newFindItem2 = blog.find((el) => {
    return el.id == search
})

elImg2.src = newFindItem2.image
elTitle.innerHTML = newFindItem2.title

console.log(search);


elBtnOpen.addEventListener("click",()=>{elNavbar.classList.toggle("navbar--open")})