$(document).ready( function() {
    // Hide the navigation menu items for now.
    let nav_elements = document.querySelectorAll(".navigation-menu-item")
    nav_elements.forEach(element => {
        element.style.display = "none"
    })
})