const soat = document.querySelector('.h'), /* htmldan soat strelkasiga javob beruvchi kodni js ga chaiqrib oldik */
    soniya = document.querySelector('.s'), /* htmldan soniya strelkasiga ga javob beruvchi kodni js ga chaiqrib oldik */
    daqiqa = document.querySelector('.m'), /* htmldan daqiqa strelkasiga ga javob beruvchi kodni js ga chaiqrib oldik */
    raqamSoat = document.querySelector('.hours'),
    raqamDaqiqa = document.querySelector('.minutes') /* raqamli soatni chaqirish */

// console.log(soat)  /* console da soatni korish */ 






// console.log(soniya)  /* console da soniyani korish */
// console.log(daqiqa)  /* console da daqiqani korish */
// console.log(soat, soniya, daqiqa);  /* console da hamma berilgan ozgaruvchilarni korish */


function clock() /* metod */ {
    /* function ning tanasi */

    const time = new Date(/* metod */) /* Qurulmani hozirgi vaqtini olish */
    const hours = time.getHours()
    /* Qurulmani hozirgi vaqtini olish*/
    const minutes = time.getMinutes()
    /* Qurulmani hozirgi vaqtini olish*/
    const seconds = time.getSeconds() /* Qurulmani hozirgi vaqtini olish */

    // funksiya tashqaridan malumot oladi == tepadagi soat strelkasini qiymatlarni chaqiramiz


    soniya.style.transform = `rotate(${seconds * 6}deg)` /*1soniya 60 marotaba aylansa 1 daqiqa boladi va har soniya 6 gradusdan aylanadi */

    daqiqa.style.transform = `rotate(${minutes * 6}deg)`  /*1daqiqa 60 marotaba aylansa 1 soat boladi va har daqiqa 6 gradusdan aylanadi */

    soat.style.transform = `rotate(${hours * 30}deg)` /*1soatda 60 marotaba 1===soat 30 gradusdan aylanadi 360 / 12(soat) = 30 gradus  */

    setTimeout(clock, 1000) /* nima,qancha / soatimiz ozini ozi 1000 milisekund=1sekunda chaqoraveradi */

    // console.dir(raqamDaqiqa)/* Innerhtml da ekanligi topib okamiz */

    raqamSoat.innerHTML = hours
    raqamDaqiqa.innerHTML = minutes < 10 ? `0${minutes}` : minutes /* agar daqiqa 10dan kichik bosa o raqam yoz , agar 10 katta bolsa ozini korsat */


}


clock()


const tabsLink = document.querySelectorAll /* barcha birxil classlarni olish */('.tabsItem')
const tabsItem = document.querySelectorAll /* barcha birxil classlarni olish */('.tabsContentItem')

// console.dir(tabsLink,tabsItem) console da active holatini korsh
/* hodisa berish */

for (const key in tabsLink) {
    if (typeof tabsLink[key] === 'object')
        tabsLink[key].addEventListener('click'/* bosilganda */, function () {
            for (let i = 0; i < tabsLink.length; i++) { /* sikl = agar  i kichkina bolsa tabslinkni uzunligidan i++ */
                tabsLink[i].classList.remove('active') /* classlist remove = ochirish = 'active' degan classni ochirish */
                tabsItem[i].classList.remove('active') /* classlist remove = ochirish = 'active' degan classni ochirish */

            }

            addActive(this, tabsItem[key]) /* uzunligi birxilligi uchun y ham oladi */

        })
}

function addActive(link, content) { /* ynuverSAL FUNKSIYA  LINK = A ; CONTENT = B*/
    link.classList.add('active') 
    content.classList.add('active')
}
