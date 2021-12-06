//  modal
var login = document.querySelectorAll(".modal__btn-login");
var register = document.querySelectorAll(".modal__btn-register");
var modalItemres = document.querySelector(".register");
var modalItemlog = document.querySelector(".login");
var modalContainer = document.querySelectorAll('.modal__container')


var modal = document.querySelector('.modal');
modal.addEventListener("click", function(e) {
    var isVisible = false
    for (var i = 0; i < login.length; i++) {
        if (modalContainer[i].contains(e.target)) {
            isVisible = true;
        }

    }
    if (!isVisible) {
        modal.style.opacity = "0";
        modal.style.visibility = "hidden";
        modal.style.transitiondelay = "0.5s";
    }
})


for (var i = 0; i < login.length; i++) {
    login[i].addEventListener("click", function() {
        modalItemres.style.display = "none";
        modalItemlog.style.display = "block";
    })
    register[i].addEventListener("click", function() {
        modalItemres.style.display = "block";
        modalItemlog.style.display = "none";

    })
}
// end modal
var user = document.querySelectorAll(".header__navbar-user");
var modal = document.querySelector(".modal");

for(var item of user){   
    item.addEventListener("click", function() {
    
        modal.style.opacity = "1";
        modal.style.visibility = "visible";
        modal.style.transitiondelay = "0.5s";
    })
}

            // slider ảnh 
        var slideIndex = 0;
        showSlides();

        function showSlides() {
            var i;
            var slides = document.getElementsByClassName("mySlides");
            for (i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";
            }
            slideIndex++;
            if (slideIndex > slides.length) {
                slideIndex = 1
            }
            slides[slideIndex - 1].style.display = "block";
            setTimeout(showSlides, 5000); // Change image every 2 seconds
        }