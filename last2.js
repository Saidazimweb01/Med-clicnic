let search = new URLSearchParams(window.location.search).get("id")

let elImg2 = document.querySelector(".plastic__imgg")
let elList = document.querySelector(".experts-container")
let elTitle = document.querySelector(".plastic__title")
let elBtnOpen=document.querySelector(".headerr__burger__btn"),elNavbar=document.querySelector(".headerr__navbar")
elFioInp = document.querySelector(".cite-foot-opinion__fio"), elTelInp = document.querySelector(".cite-foot-opinion__tel"), elLetterInp = document.querySelector(".cite-foot-opinion__letter"), elSendBtn = document.querySelector(".cite-foot-opinoin__send")

function renderListMutaxasis(array, list) {
    list.innerHTML = ""

    array.forEach((el) => {
        list.innerHTML += `
    <a class="experts-card" href="./nurse.html?id=${el.id}">
   
                        <img src="${el.image}" alt="${el.description}" />
                        <h3 class="expert__title">${el.name}</h3>
                        <p>${el.description}</p>
                    </div>
    </a>

`
    })
}

renderListMutaxasis(mutaxasis, elList)

let newFindItem2 = blog.find((el) => {
    return el.id == search
})

elImg2.src = newFindItem2.image
elTitle.innerHTML = newFindItem2.title

console.log(search);


elBtnOpen.addEventListener("click",()=>{elNavbar.classList.toggle("navbar--open")})

elSendBtn.addEventListener("click", () => { alert("F.I.O.: " + elFioInp.value + " Telefon raqamingiz: " + elTelInp.value + " Xabaringiz: " + elLetterInp.value) })
