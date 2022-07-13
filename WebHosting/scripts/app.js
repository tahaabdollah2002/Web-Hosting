let icon = document.querySelector(".menu-icon");
let menu = document.querySelector(".main-menu");

icon.addEventListener("click",function () {
    if (icon.classList.contains("fa-bars")){
        menu.style.left = 0;
        icon.classList = "fa fa-times menu-icon";
    } else {
        menu.style.left = "-250px";
        icon.classList = "fa fa-bars menu-icon";
    }
})
// carousel
$('.owl-carousel').owlCarousel({
    loop:true,
    autoplay:true,
    navText:["<span class='fa fa-angle-left'></span>","<span class='fa fa-angle-right'></span>"],
    margin:10,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true,
            dots:false
        },
        768:{
            items:1,
            nav:true
        },
        992:{
            items:2,
            nav:true
        },
    }
})