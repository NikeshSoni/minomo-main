


//  for responsive header

 const mobile_nav = document.querySelector('.mobile-navbar-btn');

 const mobile_header = document.querySelector('.main-header');

    const toggleNavbar = ( ) => {
        mobile_header.classList.toggle("active")
    };

       

 mobile_nav.addEventListener('click' , () => toggleNavbar());