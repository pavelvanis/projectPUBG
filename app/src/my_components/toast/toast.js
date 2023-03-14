
const DEFAULT_OPTIONS = {
    autoClose: 5000,
    position: 'top-right',
    canClose: true,
    onClose: () => { }
}


export default class Toast {
    #toastElem
    #removeBind

    constructor(options) {
        this.#toastElem = document.createElement('div')
        this.#toastElem.classList.add('toast')
        requestAnimationFrame(() => {
            this.#toastElem.classList.add('show')
        })
        this.#removeBind = this.remove.bind(this)
        this.update({ ...DEFAULT_OPTIONS, ...options })
    }

    set autoClose(value) {
        if (value === false) return
        setTimeout(() => {
            this.remove()
        }, value)
    }

    set position(value) {
        const selector = `.toast-container[data-position="${value}"]`
        const currentContainer = this.#toastElem.parentElement
        const container = document.querySelector(selector) || createContainer(value)
        container.append(this.#toastElem)
        if (!currentContainer || currentContainer.hasChildNodes()) return
        currentContainer.remove()
    }

    set text(value) {
        this.#toastElem.textContent = value
    }

    set canClose(value) {
        this.#toastElem.classList.toggle('can-close', value)
        if (value) this.#toastElem.addEventListener('click', this.#removeBind)
        else this.#toastElem.removeEventListener('click', this.#removeBind)

    }

    update(options) {
        Object.entries(options).forEach(([key, value]) => {
            this[key] = value
        })
    }

    remove() {
        const container = this.#toastElem.parentElement
        this.#toastElem.classList.remove('show')
        this.#toastElem.addEventListener('transitionend', () => {
            this.#toastElem.remove()
            if (container.hasChildNodes()) return
            container.remove()
        })
        this.onClose()
    }

};

function createContainer(position) {
    const container = document.createElement('div')
    container.classList.add('toast-container')
    container.dataset.position = position
    document.body.append(container)
    return container
}