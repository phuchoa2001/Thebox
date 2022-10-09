const Header = document.querySelector(".header");
window.addEventListener("scroll", function (event) {
    var top = window.pageYOffset || document.documentElement.scrollTop;
    if (top > 50) {
        Header.classList.add("fixed")
    } else {
        Header.classList.remove("fixed")
    }
})

const Open = document.querySelector(".header_iconMenu");

const Close = document.querySelector(".header_close");

Open.onclick = function () {
    Header.classList.add("open");
}

Close.onclick = function () {
    Header.classList.remove("open");
}