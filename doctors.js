let elListRendr = document.querySelector(".services-grid")
let elList = document.querySelector(".experts-container")
let elBtnOpen=document.querySelector(".headerr__burger__btn"),elNavbar=document.querySelector(".headerr__navbar")
elFioInp = document.querySelector(".cite-foot-opinion__fio"), elTelInp = document.querySelector(".cite-foot-opinion__tel"), elLetterInp = document.querySelector(".cite-foot-opinion__letter"), elSendBtn = document.querySelector(".cite-foot-opinoin__send")
function renderList(array, list) {

    list.innerHTML = ""

    array.forEach((el) => {
        list.innerHTML += `
<a href="./last.html?id=${el.id}">
      <div class="service-card">
                    <div class="service-image">
                        <img src="${el.image}" alt="${el.description}" />
                    </div>
                    <div class="service-content">
                        <h3>${el.title}</h3>
                        <p>
                        ${el.description}
                        </p>
                    </div>
                </div>
</a>
  
        `
    })
}

renderList(servis, elListRendr)

function listMutax(array, list) {
    list.innerHTML = ""

    array.forEach((element) => {
        list.innerHTML += `
       <a class="experts-card" href="./nurse.html?id=${element.id}">
     
        <img src="${element.image}" alt="${element.description}" />
        <h3 class="expert__title">${element.name}</h3>
        <p>${element.description}</p>
     
     </a>
`
    })
}

listMutax(mutaxasis, elList)


elBtnOpen.addEventListener("click", () => { elNavbar.classList.toggle("navbar--open") })


elSendBtn.addEventListener("click", () => { alert("F.I.O.: " + elFioInp.value + " Telefon raqamingiz: " + elTelInp.value + " Xabaringiz: " + elLetterInp.value) })

