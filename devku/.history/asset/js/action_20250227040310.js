document.addEventListener("DOMContentLoaded", function() {
    const comicPages = document.querySelectorAll('.comic-page');
    let currentPage = 0;

    function showPage(index) {
        comicPages.forEach((page, i) => {
            if (i === index) {
                page.classList.add('active');
            } else {
                page.classList.remove('active');
            }
        });
    }

    function handleScroll(event) {
        event.preventDefault(); // Prevent default scroll behavior
        if (event.deltaY > 0) {
            // Scroll down
            if (currentPage < comicPages.length - 1) {
                currentPage++;
                showPage(currentPage);
            }
        } else if (event.deltaY < 0) {
            // Scroll up
            if (currentPage > 0) {
                currentPage--;
                showPage(currentPage);
            }
        }
    }

    // Initial page
    showPage(currentPage);

    // Add scroll event listener
    window.addEventListener('wheel', handleScroll, { passive: false });
});