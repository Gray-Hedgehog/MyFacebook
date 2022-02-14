/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myClose").classList.toggle("close");
    document.getElementById("myDropdown").classList.toggle("show");

}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('.drop')) {

        var dropdowns = document.getElementsByClassName("down-icons");
        var i = 1;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
            if (openDropdown.classList.contains('close')) {
                openDropdown.classList.remove('close');
            }
        }
    }
}

