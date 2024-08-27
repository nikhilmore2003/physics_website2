document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Interactive element: Hide and show sections
document.querySelectorAll('h2').forEach(sectionHeader => {
    sectionHeader.addEventListener('click', function() {
        const sectionContent = this.nextElementSibling;
        if (sectionContent.style.display === 'none') {
            sectionContent.style.display = 'block';
        } else {
            sectionContent.style.display = 'none';
        }
    });
});