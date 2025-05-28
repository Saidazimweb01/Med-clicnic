let elList = document.querySelector(".news__list")


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