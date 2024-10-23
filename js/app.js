const cssDisplayNone = 'd-none'
const lampButton = document.querySelector('.toggle-lamp')

lampButton.addEventListener('click', () => {
    const mainLamp = document.querySelector('.main-img')
    const altLamp = document.querySelector('.alt-img')
    console.log(mainLamp.className)

    if (mainLamp.checkVisibility()) {
        lampButton.innerText = 'Spegni!'
    } else {
        lampButton.innerText = 'Accendi!'
    }

    mainLamp.classList.toggle(cssDisplayNone)
    altLamp.classList.toggle(cssDisplayNone)
})
