let headerOffset = document.querySelector('nav').offsetHeight * 1/2;
const sections = document.querySelectorAll('section[id]');
const menuLinks = document.querySelectorAll('#main-menu  .nav-item');


document.addEventListener('DOMContentLoaded', () => {
    // Select all anchor links that point to an id (starting with "#")
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        // Get the target element id (removing the '#' character)
        const targetID = this.getAttribute('href').slice(1);
        const targetEl = document.getElementById(targetID);
        if (targetEl) {
          // Calculate the element's position relative to the document
          const elementPosition = targetEl.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
          
          // Scroll to the computed position smoothly
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      });
    });

    // Callback function for IntersectionObserver.
    const observerCallback = (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            // Get the id of the section currently in the viewport.
            const sectionId = entry.target.getAttribute('id');
  
            // Loop through all menu links.
            menuLinks.forEach(link => {
              // Check if the href of the link (without the '#' character) matches the section id.
              if (link.getAttribute('href').slice(1) === sectionId) {
                link.classList.add('active');
              } else {
                link.classList.remove('active');
              }
            });
          }
        });
      };
  
      // Set up the IntersectionObserver with options.
      const observerOptions = {
        root: null, // use the viewport as the container
        threshold: 0.5 // 50% of the section should be visible to trigger the callback
      };
  
      const observer = new IntersectionObserver(observerCallback, observerOptions);
  
      // Observe each section.
      sections.forEach(section => observer.observe(section));
  });

  