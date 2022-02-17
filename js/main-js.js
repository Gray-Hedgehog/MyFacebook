/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myClose").classList.toggle("close");
    document.getElementById("myDropdown").classList.toggle("show");

}


var dropdowns = document.getElementsByClassName("down-icons");
var i = 1;
myClose.onfocus = function () {
    myClose.classList.contains('close');
}

myClose.onblur = function () {
    if (myClose.classList.contains('close')) {
        myClose.classList.remove('close');
    }

    for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
            openDropdown.classList.remove('show');
        }
    }
}

const menuIcon = document.querySelector('.menu-icon')
if (menuIcon) {
    const menuBody = document.querySelector('.menu');
    menuIcon.addEventListener("click", function (e) {
        document.body.classList.toggle('_lock');
        menuBody.classList.toggle('_active');
    });
}