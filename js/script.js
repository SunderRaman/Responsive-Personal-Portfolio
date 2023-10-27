/* ---------- DARK Theme ------------*/
const themeButton = document.getElementById('theme-button');
const darkTheme = 'dark-theme';
const iconTheme = 'uil-sun';

//Previously selcted topic
const selectedTheme = localStorage.getItem('selectedTheme');
const selectedIcon = localStorage.getItem('selectedIcon');

//Get the current class of the interface by validating the dark theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme)?'dark':'light';
const getCurrentIcon = () => document.body.classList.contains(iconTheme)?'uil-moon':'uil-sun';

//We need to validate if the user has previously chosen a topic
if (selectedTheme) {
    document.body.classList[selectedTheme === 'dark'?'add':'remove'](darkTheme);
    themeButton.classList[selectedIcon === 'uil-moon'?'add':'remove'](iconTheme);
}

themeButton.addEventListener('click',() => {
    //Add or remove the dark theme and light icon
    document.body.classList.toggle(darkTheme);
    themeButton.classList.toggle(iconTheme);
    //Save the current theme and icon the user has chosen
    localStorage.setItem('selected-theme',getCurrentTheme());
    localStorage.setItem('selected-icon',getCurrentIcon());
})

console.log("Theme setting is working")

//------------- Menu Show Y Hidden -----
const navMenu = document.getElementById("nav-menu")
const navToggle = document.getElementById("nav-toggle")
const navClose = document.getElementById("nav-close")

//----------- Menu Show ----------------
// ------ Validate if the constant exists --------- 
if (navToggle) {
    navToggle.addEventListener('click',() => {
        navMenu.classList.add('show-menu');
    })
}

if (navClose) {
    navClose.addEventListener('click',() => {
        navMenu.classList.remove('show-menu');
    })
}

console.log("MENU Y setting is working")
// ------ REmove menu profile ------------

const navlink = document.querySelectorAll('nav__link');
function linkAction() {
   const navMenu = document.getElementById('nav-menu');
   // when we click on navlinks, we remove the show-menu
   navMenu.classList.remove('show-menu');
}
navlink.forEach(n=> n.addEventListener('click',linkAction));
console.log("Remove menu profile is working");

const typewriter = new Typewriter(document.getElementById("typewriter"),{
    autostart:true,
    loop:true,
    cursor:"|",
});
typewriter
.pauseFor(50)
.typeString('Sunder Raman V')
.pauseFor(200)
.deleteChars(20)
.typeString('Data Scientist')
.pauseFor(200)
.deleteChars(20)
.typeString('Program Manager')
.pauseFor(200)
.deleteChars(20)
.start();

console.log('Typewrite effect is working')
