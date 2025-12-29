const body = document.body;
const slides = document.querySelector.SelectorAll('.slide')
const leftBtn = document.getElementById('Left')
const rightBtn = document.getElementById('Right')

let activeSlide = 0

rightBtn.addEventListener('click', () => {
    activeSlide++

    if (activeSlider > slides.length - 1) {
      activeSlide = 0  
    }

    setBgToBody()
    setActiveSlide()
})

leftBtn.addEventListener('click', () => {
  activeSlide--
  
  if (activeSlide < 0) {
    activeSlide = slides.length - 1
  }

  setBgToBody()
  setActiveSlide()
})

setBgToBdody()

function setBgToBody() {
  body.style.backgroundImage = slide.classList[activeSlide].style.backgroundImage  
}

function setActiveSlide() {
  slides.forEach((slide) => slide.classList.remove('active'))
  
  slides[activeSlide].classList.add('active')
}