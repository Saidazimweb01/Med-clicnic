let search = new URLSearchParams(window.location.search).get("id")
let elImg = document.querySelector(".nurse-left__img")
let elTitleRight = document.querySelector(".nurse-right__title")
let elTypeRight = document.querySelector(".nurse-right__type")
let elHeroTitle = document.querySelector(".hero-nurse__title")
let elBtnOpen=document.querySelector(".headerr__burger__btn"),elNavbar=document.querySelector(".headerr__navbar")


let newFindItem = mutaxasis.find((el) => {
    return el.id == search
})

elImg.src = newFindItem.image
elTitleRight.innerHTML = newFindItem.name
elTypeRight.innerHTML = newFindItem.description
elHeroTitle.innerHTML = newFindItem.name


elBtnOpen.addEventListener("click",()=>{elNavbar.classList.toggle("navbar--open")})

// console.log(newFindItem);

// console.log(1 + 2);


