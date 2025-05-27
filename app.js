let elBtnFoot = document.querySelector(".cite-foot-opinoin__send")
let elLetterInp = document.querySelector(".cite-foot-opinion__letter")
let elTelInp = document.querySelector(".cite-foot-opinion__tel")
let elNameInp = document.querySelector(".cite-foot-opinion__fio")
let elBtnSend = document.querySelector(".nurse-bottom__send")
let elInpTel = document.querySelector(".nurse-bottom__tel")
let elInpFio = document.querySelector(".nurse-bottom__name")
let elBtnOpen = document.querySelector(".headerr__burger__btn")
let elNavbar = document.querySelector(".headerr__navbar")
let elListRender = document.querySelector(".service__list")
let elListStaff = document.querySelector(".experts-container")
let elListBlogers = document.querySelector(".blogers__list")
let elServicesList = document.querySelector(".services__list")
// let elInpTel = document.querySelector(".nurse-bottom__tel")


elBtnOpen.addEventListener("click", () => {
    elNavbar.classList.toggle("navbar--open")
})






// elBtnFoot.onclick = () => {
//     alert(`Ismingiz: ${elNameInp.value}, Telefon raqamingiz: ${elTelInp.value}, Xabaringiz: ${elLetterInp.value} Saqlandi va yuvorildi!`)
// }
// elBtnSend.onclick = () => {
//     alert(`Ismingiz: ${elInpFio.value}, Telefon raqamingiz: ${elInpTel.value} Saqlandi va qabulga yozildingiz!`)

// }



function renderListService(arr, list) {
    list.innerHTML = ""

    arr.forEach(element => {
        list.innerHTML += `
        <li class="service__item">
                        <img width="348" height="196" src="${element.image}" alt="${element.description}">
                        <h3 class="service__name">${element.title}</h3>
                        <p class="service__info">${element.description}</p>
                    </li>
                   
        `
    });
}

renderListService(servis, elListRender)


function renderListStaff(arr, list) {
    list.innerHTML = ""

    arr.forEach((element) => {

        list.innerHTML += `
        <div class="expert-card">
        <img src="${element.image}" alt="${element.description}" />
        <h3>${element.name}</h3>
        <p>${element.description}</p>
        </div>
        
        `
    });
    // console.log(element.name);
}

renderListStaff(mutaxasis, elListStaff)

function renderListBlog(arr, list) {
    list.innerHTML = ""

    arr.forEach((element) => {

        list.innerHTML += `
        <li class="blogers__item">
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
                    </li>
                   
        
        `
    });
    // console.log(element.name);
}

renderListBlog(blog, elListBlogers)


// console.log(mutaxasis);  


// function renderListSe(arr, list) {
//     list.innerHTML = ""

//     arr.forEach(element => {
//         list.innerHTML += `
//          <div class="service-card">
//           <div class="service-image">
//             <img src="${element.image}" alt="${element.description}" />
//           </div>
//           <div class="service-content">
//             <h3>${element.title}</h3>
//             <p>
//              ${element.description}
//             </p>
//           </div>
//         </div>
                   
//         `
//     });
// }

// renderListSe(servis, elServicesList)