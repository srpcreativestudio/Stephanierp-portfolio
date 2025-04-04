document.addEventListener("DOMContentLoaded" , () => {
    const tabContainer = document.querySelector('.tabs__container')
    const tabItemContainer = document.querySelector('.tabitem__container')
    const tabButtons = tabContainer.querySelectorAll('.tab__button')
    const tabItems = tabItemContainer.querySelectorAll('.tab__item')

    function updateActiveTab() {
        // Remove 'active' class from all tabItems
        tabItems.forEach(items => items.classList.remove('active'));
    
        // Find the active tab button
        const activeButton = tabContainer.querySelector('.tab__button.active');
        console.log(activeButton);
        if (activeButton) {
          const target = activeButton.getAttribute('data-target');
          // Add 'active' class to the corresponding tabItems
          tabItems.forEach(item => {
            if (item.getAttribute('data-target') === target) {
              item.classList.add('active');
            }
          });
        }
      }

    tabButtons.forEach(btn => {
        btn.addEventListener('click', (event) => {
            event.preventDefault();
            tabButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            updateActiveTab();
          });
    })

    if (!tabItemContainer.querySelector('.tab__item.active') && tabButtons.length > 0) {
        tabButtons[0].classList.add('active');
        updateActiveTab();
      }
})