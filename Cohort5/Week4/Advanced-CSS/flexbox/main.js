const mobileNavButton = document.getElementById('mobile-nav-menu')
const fullNavContainer = document.getElementById('full-nav')

const listItems = document.querySelectorAll('li')

listItems.forEach(item => {
  item.addEventListener('click', handleCloseMenu())
})

function handleCloseMenu (){
  if (window.innerWidth < 700) {
      mobileNavButton.innerText = "Menu ▼"
      fullNavContainer.classList.add("visually-hidden")
      fullNavContainer.setAttribute('aria-hidden', "true")
      mobileNavButton.setAttribute('aria-expanded', "false" )
  }
}

window.addEventListener("resize", function() {
  if (window.innerWidth > 700) {
    fullNavContainer.classList.remove("visually-hidden")
    fullNavContainer.removeAttribute('aria-hidden')
    mobileNavButton.display = "none"
  } else {
    fullNavContainer.classList.add("visually-hidden")
    fullNavContainer.setAttribute('aria-hidden', "true")
    mobileNavButton.setAttribute('aria-expanded', "false" )
    mobileNavButton.display = "block"
  }
});

fullNavContainer.addEventListener("mouseleave", function() {
  if (window.innerWidth < 700) {
    mobileNavButton.removeAttribute('aria-hidden')
    fullNavContainer.setAttribute('aria-hidden', "true" )
    fullNavContainer.classList.add("visually-hidden")
    mobileNavButton.innerText = "Menu ▼"
    mobileNavButton.setAttribute('aria-expanded', "false" )
    mobileNavButton.setAttribute('aria-label', "Open main navigation menu" )
  } else {
    mobileNavButton.setAttribute('aria-hidden', "true" )
  }
});

mobileNavButton.onclick = ()=> {
  let isHidden = fullNavContainer.classList.contains('visually-hidden') ? true : false;
  fullNavContainer.classList.toggle('visually-hidden');
  fullNavContainer.removeAttribute('aria-hidden')
  mobileNavButton.setAttribute('aria-label', isHidden ? "Close main navigation menu" : "Open main navigation menu" )
  mobileNavButton.setAttribute('aria-expanded', isHidden ? "true" : "false" )
  mobileNavButton.innerText = isHidden ? "Menu ▲" : "Menu ▼"
  fullNavContainer.setAttribute('aria-hidden', isHidden ?"false" : "true" )
}