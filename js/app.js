const lampButton = document.querySelector('.toggle-lamp')

lampButton.addEventListener('click', () => {
    const mainLamp = document.querySelector('.main-img')
    const altLamp = document.querySelector('.alt-img')
    console.log(mainLamp.className)

    if (mainLamp.className.includes('d-none')) {
        mainLamp.classList.toggle('d-none')
        altLamp.classList.toggle('d-none')

        lampButton.innerText = 'Accendi!'
    } else {
        mainLamp.classList.toggle('d-none')
        altLamp.classList.toggle('d-none')

        lampButton.innerText = 'Spegni!'
    }
})
