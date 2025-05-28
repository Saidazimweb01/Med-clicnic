let search = new URLSearchParams(window.location.search).get("id")
let elImg = document.querySelector(".nurse-left__img")
let elTitleRight = document.querySelector(".nurse-right__title")
let elTypeRight = document.querySelector(".nurse-right__type")
let elHeroTitle = document.querySelector(".hero-nurse__title")
let elBtnOpen=document.querySelector(".headerr__burger__btn"),elNavbar=document.querySelector(".headerr__navbar")
elFioInp = document.querySelector(".cite-foot-opinion__fio"), elTelInp = document.querySelector(".cite-foot-opinion__tel"), elLetterInp = document.querySelector(".cite-foot-opinion__letter"), elSendBtn = document.querySelector(".cite-foot-opinoin__send")

let newFindItem = mutaxasis.find((el) => {
    return el.id == search
})

elImg.src = newFindItem.image
elTitleRight.innerHTML = newFindItem.name
elTypeRight.innerHTML = newFindItem.description
elHeroTitle.innerHTML = newFindItem.name


elBtnOpen.addEventListener("click",()=>{elNavbar.classList.toggle("navbar--open")})

elSendBtn.addEventListener("click", () => { alert("F.I.O.: " + elFioInp.value + " Telefon raqamingiz: " + elTelInp.value + " Xabaringiz: " + elLetterInp.value) })

// console.log(newFindItem);

// console.log(1 + 2);


