const navWrapper = document.querySelector('#nav-wrapper');
const topOfNav = navWrapper.offsetTop;

const nav = document.querySelector('#main-nav');
const mobileNavButton = document.getElementById('mobile-nav-menu')
const fullNavContainer = document.getElementById('full-nav--main')
const mainNavLinks = document.querySelectorAll('#main-nav li')

const subNavContainer = document.getElementById('full-nav--sub')
const mobileSubNavButton = document.getElementById('mobile-nav-sub-menu')
const subNavLinks = document.querySelectorAll('#sub-nav li')

function fixNav() {
  if (window.scrollY >= topOfNav) {
    document.body.style.paddingTop = nav.offsetHeight + 'px';
    document.body.classList.add('fixed-nav');
  } else {
    document.body.classList.remove('fixed-nav');
    document.body.style.paddingTop = 0;
  }
}
window.addEventListener('scroll', fixNav);


mainNavLinks.forEach(item => {
  item.addEventListener('click', handleCloseMainNavMenu())
})

subNavLinks.forEach(item => {
  item.addEventListener('click', handleCloseSubNavMenu())
})

function handleCloseMainNavMenu (){
  if (window.innerWidth < 700) {
      mobileNavButton.innerText = "Menu ▼"
      fullNavContainer.classList.add("hidden")
      fullNavContainer.setAttribute('aria-hidden', "true")
      mobileNavButton.setAttribute('aria-expanded', "false" )
  }
}

function handleCloseSubNavMenu (){
  if (window.innerWidth < 700) {
      mobileSubNavButton.innerText = "Sub-menu ▼"
      subNavContainer.classList.add("hidden")
      subNavContainer.setAttribute('aria-hidden', "true")
      mobileSubNavButton.setAttribute('aria-expanded', "false" )
  }
}

window.addEventListener("resize", function() {
  if (window.innerWidth > 700) {
    fullNavContainer.classList.remove("hidden")
    fullNavContainer.removeAttribute('aria-hidden')
    mobileNavButton.display = "none"
    subNavContainer.classList.remove("hidden")
    subNavContainer.removeAttribute('aria-hidden')
    mobileSubNavButton.display = "none"
  } else {
    fullNavContainer.classList.add("hidden")
    fullNavContainer.setAttribute('aria-hidden', "true")
    mobileNavButton.setAttribute('aria-expanded', "false" )
    mobileNavButton.display = "block"
    subNavContainer.classList.add("hidden")
    subNavContainer.setAttribute('aria-hidden', "true")
    mobileSubNavButton.setAttribute('aria-expanded', "false" )
    mobileSubNavButton.display = "block"
  }
});

navWrapper.addEventListener("mouseleave", function() {
  if (window.innerWidth < 700) {
    mobileNavButton.removeAttribute('aria-hidden')
    fullNavContainer.setAttribute('aria-hidden', "true" )
    fullNavContainer.classList.add("hidden")
    mobileNavButton.innerText = "Menu ▼"
    mobileNavButton.setAttribute('aria-expanded', "false" )
    mobileNavButton.setAttribute('aria-label', "Open main navigation menu" )
  } else {
    mobileNavButton.setAttribute('aria-hidden', "true" )
  }
});

subNavContainer.addEventListener("mouseleave", function() {
  if (window.innerWidth < 700) {
    mobileSubNavButton.removeAttribute('aria-hidden')
    subNavContainer.setAttribute('aria-hidden', "true" )
    subNavContainer.classList.add("hidden")
    mobileSubNavButton.innerText = "SubMenu ▼"
    mobileSubNavButton.setAttribute('aria-expanded', "false" )
    mobileSubNavButton.setAttribute('aria-label', "Open sub navigation menu" )
  } else {
    mobileSubNavButton.setAttribute('aria-hidden', "true" )
  }
});

mobileNavButton.onclick = ()=> {
  let isHidden = fullNavContainer.classList.contains('hidden') ? true : false;
  fullNavContainer.classList.toggle('hidden');
  fullNavContainer.removeAttribute('aria-hidden')
  mobileNavButton.setAttribute('aria-label', isHidden ? "Close main navigation menu" : "Open main navigation menu" )
  mobileNavButton.setAttribute('aria-expanded', isHidden ? "true" : "false" )
  mobileNavButton.innerText = isHidden ? "Menu ▲" : "Menu ▼"
  fullNavContainer.setAttribute('aria-hidden', isHidden ?"false" : "true" )
}

mobileSubNavButton.onclick = ()=> {
  let isHidden = subNavContainer.classList.contains('hidden') ? true : false;
  subNavContainer.classList.toggle('hidden');
  subNavContainer.removeAttribute('aria-hidden')
  mobileSubNavButton.setAttribute('aria-label', isHidden ? "Close sub-navigation menu" : "Open sub-navigation menu" )
  mobileSubNavButton.setAttribute('aria-expanded', isHidden ? "true" : "false" )
  mobileSubNavButton.innerText = isHidden ? "SubMenu ▲" : "SubMenu ▼"
  subNavContainer.setAttribute('aria-hidden', isHidden ?"false" : "true" )
}