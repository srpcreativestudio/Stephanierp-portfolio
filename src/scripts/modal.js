document.addEventListener("DOMContentLoaded" , () => {
    const modal = document.querySelector('.modal')
    const closeBtn = document.querySelector('.modal-header svg')
    const openBtn = document.querySelectorAll('.open-modal')
    const body = document.body;

    function closeModal() {
        modal?.classList.remove('open');
        modal?.classList.add('closed');
        body.classList.remove('no-scroll');
    }

    function openModal() {
        modal?.classList.remove('closed');
        modal?.classList.add('open');
        body.classList.add('no-scroll');
    }

    closeBtn?.addEventListener("click", closeModal)
    openBtn.forEach(btn => {
        btn.addEventListener("click", function (event) {
            event.preventDefault();
            openModal();
        })
    })
    modal?.addEventListener("click", function(event) {
        if(event.target === modal) {
            closeModal();
        }
        })
    window.addEventListener('keydown', event => {
        if (event.key === 'Escape') {
        closeModal();
        }
    });
})