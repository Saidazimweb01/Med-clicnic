let elList = document.querySelector(".news__list")
let elBtnOpen=document.querySelector(".headerr__burger__btn"),elNavbar=document.querySelector(".headerr__navbar")
elFioInp = document.querySelector(".cite-foot-opinion__fio"), elTelInp = document.querySelector(".cite-foot-opinion__tel"), elLetterInp = document.querySelector(".cite-foot-opinion__letter"), elSendBtn = document.querySelector(".cite-foot-opinoin__send")

function renderList(array, list) {
    list.innerHTML = ""

    array.forEach((element) => {
        list.innerHTML += `
  <a class="blogers__item" href="./last2.html?id=${element.id}">
       
        <img width="348" height="196" src="${element.image}" alt="${element.description}">
        <div class="blogers__text__box">
            <h3 class="blogers__name">${element.title}</h3>
            <p class="blogers__info">
               ${element.description}
            </p>
        </div>


        <div class="blogers__data__box">
            <span class="blogers__data">
               ${element.date}
            </span>
        </div>
    
       </a>
`
    })
}

renderList(blog, elList)

elBtnOpen.addEventListener("click",()=>{elNavbar.classList.toggle("navbar--open")})

elSendBtn.addEventListener("click", () => { alert("F.I.O.: " + elFioInp.value + " Telefon raqamingiz: " + elTelInp.value + " Xabaringiz: " + elLetterInp.value) })