import Toast from "../web-elements/toast/toast/toast.js";


const t = new Toast({
    text: 'success'
})

const api = new Toast({
    text: 'API is not available',
    autoClose: false,
    canClose: false
})

setTimeout(() => {
    api.update({
        text: 'API is available now',
        canClose: true,
        autoClose: 6000
    })
}, 4000)