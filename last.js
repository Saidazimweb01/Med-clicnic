let search = new URLSearchParams(window.location.search).get("id")
let elImg = document.querySelector(".plastic__img")
let elList = document.querySelector(".experts-container")
let elTitle = document.querySelector(".plastic__title")

let newFindItem = servis.find((el) => {
    return el.id == search
})

elImg.src = newFindItem.image
elTitle.innerHTML = newFindItem.title


// console.log(search);


// let newFilterntItem = mutaxasis.filter((el) => {
//     return el.id != search
// })


function renderListMutaxasis(array, list) {
    list.innerHTML = ""

    array.forEach((el) => {
        list.innerHTML += `
    <a class="expert-card" href="./nurse2.html?id=${el.id}">
    <div ">
                        <img src="${el.image}" alt="${el.description}" />
                        <h3 class="expert__title">${el.name}</h3>
                        <p>${el.description}</p>
                    </div>
    </a>

`
    })
}

renderListMutaxasis(mutaxasis, elList)




// console.log(elImg.src = newFindItem.image);
