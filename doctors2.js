let elList = document.querySelector(".services-grid")
let elBtnOpen=document.querySelector(".headerr__burger__btn"),elNavbar=document.querySelector(".headerr__navbar")

function renderList(array, list) {
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

renderList(mutaxasis, elList)



elBtnOpen.addEventListener("click",()=>{elNavbar.classList.toggle("navbar--open")})