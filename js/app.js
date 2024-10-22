const lampButton = document.querySelector('.toggle-lamp')

lampButton.addEventListener('click', () => {
    const mainLamp = document.querySelector('.main-img')
    const altLamp = document.querySelector('.alt-img')

    mainLamp.classList.toggle('d-none')
    mainLamp.classList.toggle('d-block')
    
    altLamp.classList.toggle('d-none')
    altLamp.classList.toggle('d-block')
})