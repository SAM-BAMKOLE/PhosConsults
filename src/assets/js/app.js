const setNavOnload = () => {
    const segments = window.location.pathname.split("/");
    const toDelete = [];

    const allPages = ["index", "about", "service", "article", "contact", "pricing"];
    let navActive = document.querySelector(".nav-active");
    if (navActive) navActive.classList.remove("nav-active");

    for (var i = 0; i < segments.length; i++) {
        if (segments[i].length < 1) {
            toDelete.push(i);
        }
    }
    for (var i = 0; i < toDelete.length; i++) {
        segments.splice(i, 1);
    }
    let filename = segments[segments.length - 1];

    if (document.getElementById(filename)) {
        document.getElementById(filename).classList.add("nav-active");
    } else document.getElementById("index").classList.add("nav-active");
};
document.addEventListener("DOMContentLoaded", setNavOnload);

// navbar
// animation for nav screen
const navDesktop = document.getElementById("navbar");

document.addEventListener("DOMContentLoaded", (e) => {
    if (navDesktop) {
        navDesktop.classList.remove("opacity-0");
    }
});

// navbar for mobile
const menu = document.querySelector("#menu");
const navLinks = document.querySelector("#navbar-links");

let navState = false;

function changeNavState() {
    if (navState) {
        navLinks.classList.remove("-left-[100%]");
        navLinks.classList.add("left-0");
    } else {
        navLinks.classList.add("-left-[100%]");
        navLinks.classList.remove("left-0");
    }
}

menu.addEventListener("click", () => {
    navState = !navState;
    changeNavState();
});

// intersection for overview navbar scrolling

const header = document.querySelector("#header");

const navScrollCallback = function (entries, observer) {
    const [entry] = entries;

    if (entry.isIntersecting) {
        navDesktop.classList.add("bg-transparent");
        navDesktop.classList.remove("bg-gray-950");
    } else {
        navDesktop.classList.remove("bg-transparent");
        navDesktop.classList.add("bg-gray-950");
    }
};

const navScrollOptions = {
    root: null,
    rootMargin: "-100px 0px 0px 0px",
    threshold: 0.7,
};

const navScrollObserver = new IntersectionObserver(navScrollCallback, navScrollOptions);
if (header && navDesktop) {
    navScrollObserver.observe(header);
}
// navbar

// testimonial slider section
/*
const testimonialSlider = document.getElementById("testimonial-images");
const allText = document.querySelectorAll(".testimonial-text");

testimonialSlider.addEventListener("click", (e) => {
    let currentText = document.querySelector(".current-testimonial-text");
    let image = document.querySelector(".current-testimonial");
    if (e.target.dataset.id) {
        image.classList.remove("current-testimonial");
        e.target.parentElement.classList.add("current-testimonial");
        currentText.classList.remove("current-testimonial-text");
        allText[e.target.dataset.id].classList.add("current-testimonial-text");
    }
});
*/
// testimonial slider
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    grabCursor: true,
    spaceBetween: 30,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    autoplay: {
        delay: 10000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
    },
});
// testimonial slider section ends

// slider code
const slides = document.querySelectorAll(".slide");
const btns = document.querySelectorAll(".btn");

let currentSlide = 1;

// image slider and manual naigation
let manualAction = (manual) => {
    slides.forEach((slide) => {
        slide.classList.remove("active");

        btns.forEach((btn) => {
            btn.classList.remove("activebtn");
        });

        slides[manual].classList.add("active");
        btns[manual].classList.add("activebtn");
    });
};

btns.forEach((btn, i) => {
    btn.addEventListener("click", (e) => {
        manualAction(i);
        currentSlide = i;
    });
});

setInterval(() => {
    if (currentSlide === slides.length) {
        currentSlide = 0;
    }
    manualAction(currentSlide);
    currentSlide++;
}, 15000);

// slider code ends

// footer copyright year
const copyYear = document.getElementById("year");

const currDate = new Date();
const currentYear = currDate.getFullYear();

// copyYear.textContent = currentYear;

// ================== about section ====================
// =================== vision / mission accordion =================
const accordion1Button = document.getElementById("accordion-heading-1");
const accordion2Button = document.getElementById("accordion-heading-2");
const accordion1Text = document.getElementById("accordion-body-1");
const accordion2Text = document.getElementById("accordion-body-2");

// const accordionState = (param) => {
//     param.classList.toggle("hidden");
// };
if (accordion1Button) {
    accordion1Button.addEventListener("click", () => {
        accordion1Text.classList.toggle("hidden");
        if (accordion1Text.classList.contains("hidden")) {
            accordion1Button.classList.add("bg-gray-50");
        } else {
            accordion1Button.classList.add("bg-gray-200");
        }
    });
}
if (accordion2Button) {
    accordion2Button.addEventListener("click", () => {
        accordion2Text.classList.toggle("hidden");
        if (accordion2Text.classList.contains("hidden")) {
            accordion2Button.classList.add("bg-gray-50");
        } else {
            accordion1Button.classList.add("bg-gray-200");
        }
    });
}
/*
const scrollTop = document.getElementById("scroll-top");
scrollTop.style.transition = "all .5s ease-in-out";
const scrollTopFunc = function (entries, observer) {
    const [entry] = entries;

    if (entry.isIntersecting) {
        scrollTop.classList.add("opacity-0");
        scrollTop.classList.remove("opacity-100");
    } else {
        scrollTop.classList.remove("opacity-0");
        scrollTop.classList.add("opacity-100");
    }
};

const scrollTopObj = {
    root: null,
    rootMargin: "50px 0px 0px 0px",
    threshold: 0,
};
const scrollIntersect = new IntersectionObserver(scrollTopFunc, scrollTopObj);
const mid = document.getElementById("mid");
if (header) {
    scrollIntersect.observe(header);
} else if (mid) {
    scrollIntersect.observe(mid);
}
*/
// google maps api

// initMap();

const categoriesDom = document.querySelectorAll("category");
const categories = [...categoriesDom];
categories.forEach((category) => {
    category.addEventListener("click", () => {});
});
