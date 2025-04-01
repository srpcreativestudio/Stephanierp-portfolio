document.addEventListener("DOMContentLoaded" , () => {
    const mobileMenu = document.querySelector('.hamburger')
    const nav = document.querySelector('.mobile__nav')
    const close = document.querySelector('.close')


    function toggleMenu() {
        nav?.classList.toggle('hidden');
        close?.classList.toggle('hidden');
        mobileMenu?.classList.toggle('hidden')
    }

    mobileMenu?.addEventListener("click", toggleMenu)
    close?.addEventListener("click", toggleMenu)
})