window.onscroll = function() {StickyHeaderScrollFunction()};

var header = document.getElementById("stickyheader");
var sticky = header.offsetTop;
function StickyHeaderScrollFunction(header )
{
    if (window.pageYOffset > sticky)
    {
        //header.setAttribute("position","sticky");
        header.classList.add("sticky");
    }else
    {
        //header.removeAttribute("position");
        header.classList.remove("sticky");
    }
}
// Ф-я по нажатию бургера, раскрывающая список ссылок.
function onHamburgerClick()
{
    var x = document.getElementById("mobile-links");
    if (x.style.display == "inline-block")
    {
        x.style.display = "none";
    }else
    {
        x.style.display = "inline-block";
    }

}
        