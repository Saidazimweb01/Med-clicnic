let elList = document.querySelector(".services-grid")

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