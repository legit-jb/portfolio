var x = document.getElementById("myNav");
var sticky = x.offsetTop;

window.onscroll = function() {stickyNav()};

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function stickyNav() {
  if (window.pageYOffset >= sticky) {
    x.classList.add("sticky")
  } else {
    x.classList.remove("sticky");
  }
}

function collapseNav() {
  if (x.className === "navbar") {
    x.className += " responsive";
  } else {
    x.className = "navbar";
  }
} 