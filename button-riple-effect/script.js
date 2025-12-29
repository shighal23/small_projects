const buttons = document.querySelectorAll('.ripple')

buttons.forEach(button => {
    button.addEventListener('click', function (e) {
        const x = e.pageX
        const y = e.pageY

        const buttonTop = e.target.offsetTop
        const buttonLeft = e.target.offsetLeft

        const xIndia = x - buttonLeft
        const yIndia = y - buttonTop

        const circle = document.createElement('span')
        circle.classList.add('circle')
        circle.style.top = yIndia + 'px'
        circle.style.left = xIndia + 'px'

        this.appendChild(circle)

        setTimeout(() => circle.remove(), 500)
    })
})