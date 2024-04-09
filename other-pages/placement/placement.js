const accordionTitles = document.querySelectorAll('.accordion-title');

accordionTitles.forEach((title) => {
    title.addEventListener('click', () => {
        const activeTitle = document.querySelector('.accordion-title.active');
        if (activeTitle && activeTitle !== title) {
            activeTitle.classList.remove('active');
            const activeContent = activeTitle.nextElementSibling;
            activeContent.classList.remove('active');
        }
        title.classList.toggle('active');
        title.nextElementSibling.classList.toggle('active');
    });
});