function $(query) {
    let element = document.querySelector(query)

    return {
        addClass(className) {
            element.classList.add(className)
            return this
        },
        text(txt) {
            element.innerHTML = txt
            return this
        },
        hide() {
            element.style.display = 'none'
            return this
        },
        show() {
            element.style.display = 'block'
            return this
        }
    }
}


const el = $('#id').addClass('my-class').text('Hi mum!')

setTimeout(() => {
    el.hide()
}, 2000)

setTimeout(() => {
    el.show()
}, 4000)
