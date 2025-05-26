let elBtnFoot = document.querySelector(".cite-foot-opinoin__send")
let elLetterInp = document.querySelector(".cite-foot-opinion__letter")
let elTelInp = document.querySelector(".cite-foot-opinion__tel")
let elNameInp = document.querySelector(".cite-foot-opinion__fio")
let elBtnSend = document.querySelector(".nurse-bottom__send")
let elInpTel = document.querySelector(".nurse-bottom__tel")
let elInpFio = document.querySelector(".nurse-bottom__name")
// let elInpTel = document.querySelector(".nurse-bottom__tel")






elBtnFoot.onclick = () => {
    alert(`Ismingiz: ${elNameInp.value}, Telefon raqamingiz: ${elTelInp.value}, Xabaringiz: ${elLetterInp.value} Saqlandi va yuvorildi!`)
}
elBtnSend.onclick = () => {
    alert(`Ismingiz: ${elInpFio.value}, Telefon raqamingiz: ${elInpTel.value} Saqlandi va qabulga yozildingiz!`)

}