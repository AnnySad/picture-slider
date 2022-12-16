const upBtn = document.querySelector('.up-button')
const downBtn = document.querySelector('.down-button')
const sidebar = document.querySelector('.sidebar')
const container = document.querySelector('.container')
const mainSlide = document.querySelector('.main-slide')
const sliderCount = mainSlide.querySelectorAll('div').length

let activeSlideIndex = 0

sidebar.style.top = `-${(sliderCount - 1) * 100}vh`

upBtn.addEventListener('click', () => {
    changesSlide('up')
})
downBtn.addEventListener('click', () => {
    changesSlide('down')
})

document.addEventListener('keydown', event => {
    if (event.key === 'ArrowUp') {
        changesSlide('up')
    } else if (event.key === 'ArrowDown'){
        changesSlide('down')
    }
})


function changesSlide(direction) {
    if (direction === 'up') {
        activeSlideIndex++
        if (activeSlideIndex === sliderCount) {
            activeSlideIndex = 0
        }
    } else if (direction === 'down') {
        activeSlideIndex--
        if (activeSlideIndex < 0) {
            activeSlideIndex = sliderCount - 1
        }
    }

    const height = container.clientHeight

    mainSlide.style.transform = `translateY(-${activeSlideIndex * height}px)`
    sidebar.style.transform = `translateY(${activeSlideIndex * height}px)`
}