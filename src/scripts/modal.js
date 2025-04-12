document.addEventListener("DOMContentLoaded", () => {
    const modals = document.querySelectorAll('.modal');
    const closeButtons = document.querySelectorAll('.modal-header .close');
    const openButtons = document.querySelectorAll('[data-modal-trigger]');
    const body = document.body;

    // Utility functions for body scroll management
    const bodyScroll = {
        disable(scrollPosition) {
            body.classList.add('no-scroll');
            body.style.position = 'fixed';
            body.style.top = `-${scrollPosition}px`;
            body.style.width = '100%';
            body.dataset.scrollPosition = scrollPosition;
        },
        enable() {
            const scrollPosition = parseInt(body.dataset.scrollPosition || '0');
            body.classList.remove('no-scroll');
            body.style.position = '';
            body.style.top = '';
            body.style.width = '';
            window.scrollTo(0, scrollPosition);
        }
    };

    function openModal(modalType, e) {
        if (e) {
            e.preventDefault();
            e.stopPropagation();
        }
        
        const targetModal = document.querySelector(`.modal[data-modal-type="${modalType}"]`);
        if (!targetModal) return;

        // Close any open modals first
        modals.forEach(modal => {
            if (modal.classList.contains('open')) {
                closeModal(modal);
            }
        });

        const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
        targetModal.classList.remove('closed');
        targetModal.classList.add('open');
        bodyScroll.disable(scrollPosition);
    }

    function closeModal(modal, e) {
        if (e) {
            e.preventDefault();
        }
        
        // Close the modal
        modal.classList.remove('open');
        modal.classList.add('closed');
        bodyScroll.enable();
    }

    // Set up event listeners
    
    // Open button handlers
    openButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const modalType = btn.getAttribute('data-modal-trigger');
            if (modalType) {
                openModal(modalType, e);
            }
        });
    });

    // Close button handlers
    closeButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const modal = btn.closest('.modal');
            if (modal) closeModal(modal, e);
        });
    });

    // Click outside modal to close
    modals.forEach(modal => {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeModal(modal, e);
            }
        });
    });

    // Escape key handler
    window.addEventListener('keydown', e => {
        if (e.key === 'Escape') {
            const openModal = document.querySelector('.modal.open');
            if (openModal) closeModal(openModal, e);
        }
    });
});