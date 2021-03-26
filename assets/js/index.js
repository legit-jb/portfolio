const myNav = document.getElementById("myNav");
const sticky = myNav.offsetTop;

window.onscroll = function() {stickyNav()};

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function stickyNav() {
  if (window.pageYOffset >= sticky) {
    myNav.classList.add("sticky")
  } else {
    myNav.classList.remove("sticky");
  }
}

function collapseNav() {
  console.log (myNav.classList.contains ("responsive"));
  if (myNav.classList.contains ("responsive")) {
    myNav.classList.remove ("responsive");
  } else {
    myNav.classList.add("responsive");
  }
} 