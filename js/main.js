//select item from the dom

const menuBtn = document.querySelector('.menu-btn'),
      menu = document.querySelector('.menu'),
      menuNav = document.querySelector('.menu-nav'),
      menuBranding = document.querySelector('.menu-branding');

const navItems = document.querySelectorAll('.nav-item');

//set initial state of menu 

let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
    if(!showMenu) {
        menuBtn.classList.add('close');
        menu.classList.add('show');
        menuNav.classList.add('show');
        menuBranding.classList.add('show');
        navItems.forEach((item)=>{
            item.classList.add('show');
        });

        //set menu state
        showMenu = true;
    } else {

        menuBtn.classList.remove('close');
        menu.classList.remove('show');
        menuNav.classList.remove('show');
        menuBranding.classList.remove('show');
        navItems.forEach((item)=>{
            item.classList.remove('show');
        });

        //set menu state
        showMenu = false;
        
    }
}
      
$(function() {
    $('.dot-bar').each(function() {

        let template = $(this).html();
        let skillsPercent = $(this).parents('.skills-bar').find('.percent').text();
        
        let splitted =  skillsPercent.split('');
        splitted = splitted[0]+'.'+splitted[1];

        let float = parseFloat(splitted);

        let rounded = Math.round(float);

        $(this).html('');
        for(let i = 0; i < 10; i++) {
            if(i>rounded) {
                $(this).append(template).find(':last-child').addClass('gold-dot');
            }
            else {
                $(this).append(template);
            }
        }
        console.log(rounded);
    });
});