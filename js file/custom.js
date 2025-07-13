// make the event for the menu

// change the background image for the landing

let iamgesArray = ["img1.jpg", "img3.jpg", "img4.jpg"]

let landing = document.querySelector(".landing")

setInterval(()=> {
    
    let random = Math.floor(Math.random() * iamgesArray.length)

    landing.style.backgroundImage = 'url("./images/'+ [iamgesArray[random]]+'")'

}, 10000)

// make the container of the menu appear and disppear

let menu_active = document.querySelector(".toggle-menu")

let links = document.querySelector(".links-container")

menu_active.onclick = (e) => {

    menu_active.classList.toggle("event")

    menu_active.classList.toggle("menu-active")

    links.classList.toggle("open")

}

document.addEventListener("click", (e) => {

    if (e.target !== menu_active && e.target !== links) {

        e.stopPropagation()

        menu_active.classList.remove("event")

        menu_active.classList.remove("menu-active")

        links.classList.remove("open")

    }

})

links.onclick = (e) => {

    e.stopPropagation()

}

// make the images have the slide effect

let observer = new IntersectionObserver((entries) => {
    
    entries.forEach((entry) => {
        
        if (entry.isIntersecting) {
        
            entry.target.classList.add("show")
        
        }

    })

})

let hiddenImages = document.querySelectorAll(".hid")

hiddenImages.forEach(el => {

    observer.observe(el)

})

window.onscroll = () => {

    observer.observe(hiddenImages)

    console.log("testing")

}


// Codes for the status.html flil

let arrayImages = ["status 1.jpg", "status 2.jpg", "status 3.jpg", "status 4.jpg"]

let status = document.querySelector(".landing-status")

setInterval(() => {

    let random = Math.floor(Math.random() * arrayImages.length)
    
    status.style.backgroundImage = 'url("./images/' + arrayImages[random] + '")'

}, 10000)

// Image Slider 

let currentIndex = 0;

function showSlide(index) {

    const slides = document.querySelector('.slides');
    
    const totalSlides = 3;

    if (index >= totalSlides) currentIndex = 0;
    
    else if (index < 0) currentIndex = totalSlides - 1;
    
    else currentIndex = index;

  slides.style.transform = `translateX(-${currentIndex * 100}%)`;
}

function nextSlide() {

    showSlide(currentIndex + 1);

}

function prevSlide() {

    showSlide(currentIndex - 1);

}

setInterval(() => {
    
    nextSlide();

}, 15000)



let secondIndex = 0;

function seconsSilde(index) {

    const secondSildes = document.querySelector('.second-slides');
    
    const sildesLenght = 3;

    if (index >= sildesLenght) secondIndex = 0;
    
    else if (index < 0) secondIndex = sildesLenght - 1;
    
    else secondIndex = index;

  secondSildes.style.transform = `translateX(-${secondIndex * 100}%)`;
}

function next() {

    seconsSilde(secondIndex + 1);

}

function last() {

    seconsSilde(secondIndex - 1);

}

setInterval(() => {
    
    next();

}, 15000)

let civilNews = document.querySelector(".wanted")

let showingMs = false

window.onscroll = () => {

    let civilOff = civilNews.offsetTop

    let civilOuterHeight = civilNews.offsetHeight

    let windowHeight = window.innerHeight

    let windowScroll = window.pageYOffset

    if (!showingMs && windowScroll > (civilOff + civilOuterHeight - windowHeight)) {

        let div = document.createElement("div")
        
        div.className = 'notice'

        let divText = document.createTextNode("ملاحظة أن هذا البيانات غير مستقرة")

        // div.style.cssText = `
        // position : fixed;
        // top : 20px;
        // left : 50%;
        // transform : translateX(-50%);
        // text-align : center;
        // font-size : 20px;
        // color : white;
        // background-color : #004effbf;
        // border-radius : 25px;
        // line-height : 60px;
        // width : 300px;
        // height : 80px;
        // padding : 10px 20px;
        // z-index : 10000;
        // `

            div.style.cssText = `
            position: fixed;
            top: 20px;
            left: 50%;
            transform: translateX(-50%);
            text-align: center;
            font-size: 18px;
            font-weight: bold;
            color: white;
            background-color: #004effbf;
            border-radius: 12px;
            line-height: 50px;
            width: 320px;
            height: 80px;
            padding: 15px 20px;
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
            z-index: 10000;
            animation: fadeIn 1s ease-out;
        `
        
        div.appendChild(divText)
        
        document.body.appendChild(div)

        showingMs = true

        setTimeout(() => {
            
            div.remove()

        }, 3000);
    } 
}
