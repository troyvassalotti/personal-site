// open and close the side navigation on mobile
const sideNav = document.getElementById("sideNavigation");
const main = document.getElementById("main");
const open = document.getElementById("icoOpen");
const close = document.getElementById("icoClose");
var openCount = 0, closeCount = 0;
function openNav() {
    sideNav.classList.toggle("openNavSide");
    main.classList.toggle("openNavMain");
    open.classList.toggle("fade");
    openCount++;
    console.log("Navigation opened " + openCount + " times.");
}
function closeNav() {
    sideNav.classList.remove("openNavSide");
    main.classList.remove("openNavMain");
    open.classList.remove("fade");
    closeCount++;
    console.log("Navigation closed " + closeCount + " times.");
}
open.addEventListener("click", openNav);
close.addEventListener("click", closeNav);