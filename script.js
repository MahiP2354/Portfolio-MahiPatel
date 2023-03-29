function scrollHeader(){
    const header = document.getElementById('header')
    // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 50) header.classList.add('scroll-header') 
                           header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

const skillsContent = document.getElementsByClassName('skills__content'),
      skillsHeader = document.querySelectorAll('.skills__header')

function toggleSkills(){
    let itemClass = this.parentNode.className

    for(i = 0; i< skillsContent.length; i++){
        skillsContent[i].className = 'skills__content skills__close'
    }
    if(itemClass === 'skills__content skills__close'){
        this.parentNode.className = 'skills__content skills__open'
    }
}

skillsHeader.forEach((el) =>{
    el.addEventListener('click', toggleSkills)
})

//const modalViews = document.querySelectorAll('.services__modal'),
//      modalBtns = document.querySelectorAll('.services_button'),
//      modalClose = document.querySelectorAll('.services__modal-close')

//let modal = function(modalClick){
//    modalViews[modalClick].classList.add('active-modal')
//}

//modalBtns.forEach((mb, i) =>{
//    mb.addEventListener('click', () =>{
//        modal(i)
//    })
//})

//modalClose.forEach((mc) =>{
//    mc.addEventListener('click', () =>{
//        modalViews.forEach((mv) =>{
//            mv.classList.remove('active-modal')
//        })
//    })
//})

//let popup = document.getElementById("services__modal");

//function openPopup(){
//    popup.classList.add("open-popup");
//}
//function closePopup(){
//    popup.classList.remove("open-popup");
//}

const btns = document.querySelectorAll("[data-target]");
const close_btns = document.querySelectorAll(".modal-btn");

btns.forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelector(btn.dataset.target).classList.add("active");
    });
});

close_btns.forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelector(btn.dataset.target).classList.remove("active");
    });
});


const sections = document.querySelectorAll('section[id]')
    
const scrollActive = () =>{
  	const scrollY = window.pageYOffset

	sections.forEach(current =>{
		const sectionHeight = current.offsetHeight,
			  sectionTop = current.offsetTop - 58,
			  sectionId = current.getAttribute('id'),
			  sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

		if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
			sectionsClass.classList.add('active-link')
		}else{
			sectionsClass.classList.remove('active-link')
		}                                                    
	})
}
window.addEventListener('scroll', scrollActive)

const themeButton = document.getElementById('theme-button')
const lightTheme = 'light-theme'
const iconTheme = 'bx-sun'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the light-theme class
const getCurrentTheme = () => document.body.classList.contains(lightTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx bx-moon' : 'bx bx-sun'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the light
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](lightTheme)
  themeButton.classList[selectedIcon === 'bx bx-moon' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the light / icon theme
    document.body.classList.toggle(lightTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})


