var sideNavbar = document.querySelector(".side-navbar");

function showNavbar() {
    sideNavbar.style.display = "block";
    // Add a small delay to ensure display: block is applied before adding the show class
    setTimeout(() => {
        sideNavbar.classList.add("show");
    }, 10);
}

function closeNavbar() {    
    sideNavbar.classList.remove("show");
    // Wait for transition to complete before hiding
    setTimeout(() => {
        sideNavbar.style.display = "none";
    }, 300);
}