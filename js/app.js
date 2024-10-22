const lampButton = document.querySelector('.toggle-lamp')

lampButton.addEventListener('click', () => {
    let currentLampPath = document.querySelector('img')

    // Controlla lo stato della lampada vedendo come finisce src dell'immagine
    const isLampOn = currentLampPath.src.endsWith('yellow_lamp.png')
    
    if (isLampOn) {
        currentLampPath.src = './img/white_lamp.png'
        lampButton.innerText = 'Accendi!'
    } else {
        currentLampPath.src = './img/yellow_lamp.png'
        lampButton.innerText = 'Spegni!'
    }
})