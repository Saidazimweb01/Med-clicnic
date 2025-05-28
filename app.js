let elBtnOpen=document.querySelector(".headerr__burger__btn"),elNavbar=document.querySelector(".headerr__navbar"),elListRender=document.querySelector(".service__list"),elListStaff=document.querySelector(".experts-container"),elListBlogers=document.querySelector(".blogers__list"),elServicesList=document.querySelector(".service__list"),elXizList=document.querySelector(".services-grid"),elFioInp=document.querySelector(".cite-foot-opinion__fio"),elTelInp=document.querySelector(".cite-foot-opinion__tel"),elLetterInp=document.querySelector(".cite-foot-opinion__letter"),elSendBtn=document.querySelector(".cite-foot-opinoin__send");function renderListService(e,i){i.innerHTML="",e.forEach(e=>{i.innerHTML+=`
    <a href="./last.html?id=${e.id}">
     <li class="service__item">
          <img width="348" height="196" src="${e.image}" alt="${e.description}">
          <h3 class="service__name">${e.title}</h3>
          <p class="service__info">${e.description}</p>
      </li>
    </a>

`})}function renderListNurse(e,i){i.innerHTML="",e.forEach(e=>{i.innerHTML+=`
<a class="experts-card" href="./nurse.html?id=${e.id}">

<img src="${e.image}" alt="${e.description}" />
<h3 class="expert__title">${e.name}</h3>
<p>${e.description}</p>

</a>

`})}function renderListBlog(e,i){i.innerHTML="",e.forEach(e=>{i.innerHTML+=`
<a class="blogers__item" href="./last2.html?id=${e.id}">

<img width="348" height="196" src="${e.image}" alt="${e.description}">
<div class="blogers__text__box">
<h3 class="blogers__name">${e.title}</h3>
<p class="blogers__info">
 ${e.description}
</p>
</div>


<div class="blogers__data__box">
<span class="blogers__data">
 ${e.date}
</span>
</div>

</a>

`})}elSendBtn.addEventListener("click",()=>{alert("F.I.O.: "+elFioInp.value+" Telefon raqamingiz: "+elTelInp.value+" Xabaringiz: "+elLetterInp.value)}),elBtnOpen.addEventListener("click",()=>{elNavbar.classList.toggle("navbar--open")}),renderListService(servis,elServicesList),renderListNurse(mutaxasis,elListStaff),renderListBlog(blog,elListBlogers);