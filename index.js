
// template_blrn4zc
// service_r2andnd
// bsPht9jMSOoAs78ZA



function contact(event) {
    event.preventDefault()
    const loading = document.querySelector('.modal__overlay--loading')
    const success = document.querySelector('.modal__overlay--success')
    loading.classList += " modal__overlay--visible"
    emailjs
        .sendForm(
            'service_r2andnd',
            'template_blrn4zc',
            event.target,
            'bsPht9jMSOoAs78ZA'

        ).then(() => {
            loading.classList.remove("modal__overlay--visible")
            success.classList += " modal__overlay--visible"
            console.log("It Worked")
        }).catch(() => {
            loading.classList.remove("modal__overlay--visible")
            
            alert("The email service is temporarily unavailable. Please contact me directly on andrewcdawson@yahoo.com")
        })
}

let isModalOpen = false
let contrastToggle = false
let scaleFactor = 1/20


function moveBackground(event) {
    
    const shapes =document.querySelectorAll(".shape")
    const x = event.clientX * scaleFactor
    const y = event.clientY * scaleFactor
    for(let i = 0; i < shapes.length; ++i){
        const isOdd = i % 2 !== 0
        const boolInt = isOdd ? -1: 1
        shapes[i].style.transform = `translate(${x * boolInt}px, ${y * boolInt}px)`
    }


}



function toggleContrast() {
    event.preventDefault()
    contrastToggle = !contrastToggle
    if(contrastToggle) {
        document.body.classList += "dark-theme"
    } else {
        document.body.classList.remove("dark-theme")
    }
}


function toggleModal() {
    if(isModalOpen) {
        isModalOpen = false
        return document.body.classList.remove("modal--open")
    }
    isModalOpen = !isModalOpen
    document.body.classList += " modal--open"

}

