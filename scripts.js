document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('nav ul');

    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('show');
        });
    }
});


document.addEventListener('DOMContentLoaded', function() {
    // Project Filtering
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projects = document.querySelectorAll('.project');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            const filterValue = button.dataset.filter;

            // Filter projects
            projects.forEach(project => {
                const categories = project.dataset.category.split(' ');

                if (filterValue === 'all' || categories.includes(filterValue)) {
                    project.style.display = 'block';
                    setTimeout(() => {
                        project.style.opacity = '1';
                    }, 50);
                } else {
                    project.style.opacity = '0';
                    setTimeout(() => {
                        project.style.display = 'none';
                    }, 300);
                }
            });
        });
    });

    // Lightbox Functionality
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-image');
    const lightboxCaption = document.querySelector('.lightbox-caption');
    const closeBtn = document.querySelector('.close-lightbox');
    const triggers = document.querySelectorAll('.lightbox-trigger');

    // Open lightbox
    triggers.forEach(trigger => {
        trigger.addEventListener('click', () => {
            lightbox.style.display = 'block';
            lightboxImg.src = trigger.src;
            lightboxCaption.textContent = trigger.alt || '';
            document.body.style.overflow = 'hidden'; // Prevent scrolling
        });
    });

    // Close lightbox
    closeBtn.addEventListener('click', () => {
        lightbox.style.display = 'none';
        document.body.style.overflow = 'auto';
    });

    // Close when clicking outside image
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            lightbox.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });

    // Close with ESC key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && lightbox.style.display === 'block') {
            lightbox.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
});
