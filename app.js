
let elBtnOpen = document.querySelector(".headerr__burger__btn")
let elNavbar = document.querySelector(".headerr__navbar")
let elListRender = document.querySelector(".service__list")
let elListStaff = document.querySelector(".experts-container")

let elListBlogers = document.querySelector(".blogers__list")
let elServicesList = document.querySelector(".service__list")
let elXizList = document.querySelector(".services-grid")


elBtnOpen.addEventListener("click", () => {
    elNavbar.classList.toggle("navbar--open")
})




function renderListService(array, list) {
    list.innerHTML = ""

    array.forEach((element) => {
        list.innerHTML += `
                  <a href="./last.html?id=${element.id}">
                   <li class="service__item">
                        <img width="348" height="196" src="${element.image}" alt="${element.description}">
                        <h3 class="service__name">${element.title}</h3>
                        <p class="service__info">${element.description}</p>
                    </li>
                  </a>
 
`
    })
}


renderListService(servis, elServicesList)


function renderListNurse(array, list) {
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

renderListNurse(mutaxasis, elListStaff)

function renderListBlog(array, list) {
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


renderListBlog(blog, elListBlogers)