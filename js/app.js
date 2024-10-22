const lampButton = document.querySelector('.toggle-lamp')

lampButton.addEventListener('click', () => {
    let currentLampPath = document.querySelector('img').src
    
    const isLampOn = currentLampPath.endsWith('yellow_lamp.png')

    if (isLampOn) {
        document.querySelector('img').src = './img/white_lamp.png'
    } else {
        document.querySelector('img').src = './img/yellow_lamp.png'
    }
})