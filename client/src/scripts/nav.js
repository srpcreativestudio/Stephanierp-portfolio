document.addEventListener("DOMContentLoaded" , () => {
    const mobileIcon = document.querySelector('.hamburger')
    const nav = document.querySelector('.mobile__nav')
    const closeIcon = document.querySelector('.close')
    let lastScroll = window.pageYOffset || document.documentElement.scrollTop;
    const menu = document.querySelector('#main-menu nav');
    const mobileBreakpoint = 768;

    function toggleMenu() {
        nav?.classList.toggle('hidden');
        closeIcon?.classList.toggle('hidden');
        mobileIcon?.classList.toggle('hidden')

        // Toggle if the mobile menu is open
        mobileIcon?.classList.contains('hidden') ? nav.classList.add('open') : nav.classList.remove('open');


    }

    function onResize() {
      if (window.innerWidth >= mobileBreakpoint) {
        // Ensure mobile menu is closed
        nav?.classList.add('hidden');
        nav?.classList.remove('open');
      closeIcon?.classList.add('hidden');
      mobileIcon?.classList.remove('hidden');
      }
    }

    window.addEventListener('scroll', () => {
        // Only execute if window width is not mobile
        if (window.innerWidth >= mobileBreakpoint) {
          const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
    
          if (currentScroll > lastScroll && currentScroll > 100) {
            // Scrolling down: slide up (hide menu)
            menu.style.transform = 'translateY(-100%)';
          } else {
            // Scrolling up: slide down (show menu)
            menu.style.transform = 'translateY(0)';
          }
    
          lastScroll = Math.max(0, currentScroll);
        } else {
          // On mobile, ensure the menu stays visible.
          menu.style.transform = 'translateY(0)';
        }
      });
    window.addEventListener('resize', onResize);
    mobileIcon?.addEventListener("click", toggleMenu)
    closeIcon?.addEventListener("click", toggleMenu)

      // Initialize state in case user loads on desktop size
  onResize();
})