// Internationalization (i18n)
const translations = {
    en: {
        'page.title': 'Pabloe Aguilar | Full-Stack Developer',
        'meta.desc': 'Portfolio of a full-stack developer with experience in Vue.js, Java, and database systems',
        'header.subtitle': 'Full-Stack Developer',
        'nav.about': 'About',
        'nav.projects': 'Projects',
        'nav.skills': 'Skills',
        'nav.contact': 'Contact',
        'about.title': 'About Me',
        'about.p1': "I'm a full-stack developer with a passion for building practical applications. At the moment located in Izúcar de Matamoros, my journey in programming started with Java, and I've since expanded my skills to include web development with Vue.js and database management.",
        'about.p2': "I'm particularly interested in creating solutions that solve real-world problems, like my laundry management system project. I enjoy both frontend design and backend logic, and I'm constantly learning and practicing new technologies to become a well-rounded developer.",
        'projects.title': 'My Projects',
        'filter.all': 'All',
        'filter.web': 'Web',
        'filter.desktop': 'Desktop',
        'filter.fullstack': 'Full Stack',
        'laundry.title': 'Laundry Management System',
        'laundry.caption': 'Local system for laundry management',
        'laundry.desc': 'This desktop application was built with Vue.js, Electron, and SQLite to help manage laundry operations for small businesses. Features include:',
        'laundry.feat1': 'Order tracking',
        'laundry.feat2': 'Customer management',
        'laundry.feat3': 'Ticket printing',
        'laundry.demo': 'Link to demo',
        'portfolio.title': 'Basic Customizable Portfolio',
        'portfolio.caption': 'Basic Customizable Portfolio',
        'portfolio.desc': 'This web application was built to provide a customizable portfolio template. Features include:',
        'portfolio.feat1': 'Responsive design',
        'portfolio.feat2': 'Customizable content',
        'portfolio.feat3': 'Content customization using Strapi',
        'portfolio.feat4': 'Built with React to provide a dynamic user experience using server-side rendering for static content and client-side for some interactivity',
        'portfolio.demo': 'Link to demo',
        'skills.title': 'Skills',
        'skills.frontend': 'Frontend',
        'skills.backend': 'Backend',
        'skills.tools': 'Tools & Databases',
        'skills.responsive': 'Responsive Design',
        'skills.serverConf': 'Linux Server Configuration',
        'skills.relationalDB': 'Relational databases (MySQL, SQL Server, PostgreSQL)',
        'skills.strapi': 'Headless CMS with <a href="https://strapi.io/" target="_blank" rel="noopener noreferrer">Strapi</a>',
        'contact.title': 'Get In Touch',
        'contact.name_label': 'Name:',
        'contact.email_label': 'Email:',
        'contact.message_label': 'Message:',
        'contact.send': 'Send Message',
    },
    es: {
        'page.title': 'Pabloe Aguilar | Desarrollador Full-Stack',
        'meta.desc': 'Portafolio de un desarrollador full-stack con experiencia en Vue.js, Java y bases de datos',
        'header.subtitle': 'Desarrollador Full-Stack',
        'nav.about': 'Acerca de',
        'nav.projects': 'Proyectos',
        'nav.skills': 'Habilidades',
        'nav.contact': 'Contacto',
        'about.title': 'Sobre Mí',
        'about.p1': 'Soy un desarrollador full-stack apasionado por construir aplicaciones prácticas. Actualmente ubicado en Izúcar de Matamoros, mi camino en la programación comenzó con Java, y desde entonces he ampliado mis habilidades para incluir desarrollo web con Vue.js y gestión de bases de datos.',
        'about.p2': 'Me interesa especialmente crear soluciones que resuelvan problemas del mundo real, como mi proyecto de sistema de gestión de lavandería. Disfruto tanto del diseño frontend como de la lógica backend, y estoy en constante aprendizaje para convertirme en un desarrollador íntegro.',
        'projects.title': 'Mis Proyectos',
        'filter.all': 'Todos',
        'filter.web': 'Web',
        'filter.desktop': 'Escritorio',
        'filter.fullstack': 'Full Stack',
        'laundry.title': 'Sistema de Gestión de Lavandería',
        'laundry.caption': 'Sistema local para gestión de lavandería',
        'laundry.desc': 'Esta aplicación de escritorio fue construida con Vue.js, Electron y SQLite para ayudar a gestionar las operaciones de lavandería para pequeños negocios. Sus características incluyen:',
        'laundry.feat1': 'Seguimiento de pedidos',
        'laundry.feat2': 'Gestión de clientes',
        'laundry.feat3': 'Impresión de tickets',
        'laundry.demo': 'Ver demo',
        'portfolio.title': 'Portafolio Personalizable Básico',
        'portfolio.caption': 'Portafolio Personalizable Básico',
        'portfolio.desc': 'Esta aplicación web fue construida para ofrecer una plantilla de portafolio personalizable. Sus características incluyen:',
        'portfolio.feat1': 'Diseño responsivo',
        'portfolio.feat2': 'Contenido personalizable',
        'portfolio.feat3': 'Personalización de contenido usando Strapi',
        'portfolio.feat4': 'Construido con React para una experiencia de usuario dinámica usando renderizado en servidor para contenido estático y del lado del cliente para algo de interactividad',
        'portfolio.demo': 'Ver demo',
        'skills.title': 'Habilidades',
        'skills.frontend': 'Frontend',
        'skills.backend': 'Backend',
        'skills.tools': 'Herramientas & Bases de datos',
        'skills.responsive': 'Diseño Responsivo',
        'skills.serverConf': 'Configuración de Servidores Linux',
        'skills.relationalDB': 'Bases de datos relacionales (MySQL, SQL Server, PostgreSQL)',
        'skills.strapi': 'CMS headless con <a href="https://strapi.io/" target="_blank" rel="noopener noreferrer">Strapi</a>',
        'contact.title': 'Contáctame',
        'contact.name_label': 'Nombre:',
        'contact.email_label': 'Correo:',
        'contact.message_label': 'Mensaje:',
        'contact.send': 'Enviar Mensaje',
    }
};

function setLanguage(lang) {
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.dataset.i18n;
        if (translations[lang][key] !== undefined) {
            el.textContent = translations[lang][key];
        }
    });
    document.querySelectorAll('[data-i18n-html]').forEach(el => {
        const key = el.dataset.i18nHtml;
        if (translations[lang][key] !== undefined) {
            el.innerHTML = translations[lang][key];
        }
    });
    document.documentElement.lang = lang;
    document.title = translations[lang]['page.title'] || document.title;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', translations[lang]['meta.desc'] || '');
    localStorage.setItem('lang', lang);
    const toggleBtn = document.getElementById('lang-toggle');
    if (toggleBtn) toggleBtn.textContent = lang === 'en' ? 'ES' : 'EN';
}

document.addEventListener('DOMContentLoaded', function () {
    const langToggle = document.getElementById('lang-toggle');
    const savedLang = localStorage.getItem('lang') ||
        (navigator.language.startsWith('es') ? 'es' : 'en');
    setLanguage(savedLang);

    if (langToggle) {
        langToggle.addEventListener('click', () => {
            const current = localStorage.getItem('lang') || 'en';
            setLanguage(current === 'en' ? 'es' : 'en');
        });
    }
});

document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('nav ul');

    if (menuToggle) {
        menuToggle.addEventListener('click', function () {
            navMenu.classList.toggle('show');
        });
    }
});


document.addEventListener('DOMContentLoaded', function () {
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

    // Carousel Functionality
    const carousels = document.querySelectorAll('.carousel');

    carousels.forEach(carousel => {
        const slides = carousel.querySelectorAll('.carousel-slide');
        const dotsContainer = carousel.querySelector('.carousel-dots');
        const prevBtn = carousel.querySelector('.carousel-prev');
        const nextBtn = carousel.querySelector('.carousel-next');

        if (slides.length === 0) return;

        let current = 0;

        // Create dots
        slides.forEach((_, i) => {
            const dot = document.createElement('span');
            dot.classList.add('carousel-dot');
            if (i === 0) dot.classList.add('active');
            dot.addEventListener('click', () => goTo(i));
            dotsContainer.appendChild(dot);
        });

        // Activate first slide
        slides[0].classList.add('active');

        // Hide controls when only one slide
        if (slides.length === 1) {
            prevBtn.style.display = 'none';
            nextBtn.style.display = 'none';
            dotsContainer.style.display = 'none';
        }

        function goTo(index) {
            slides[current].classList.remove('active');
            dotsContainer.querySelectorAll('.carousel-dot')[current].classList.remove('active');
            current = (index + slides.length) % slides.length;
            slides[current].classList.add('active');
            dotsContainer.querySelectorAll('.carousel-dot')[current].classList.add('active');
        }

        prevBtn.addEventListener('click', () => goTo(current - 1));
        nextBtn.addEventListener('click', () => goTo(current + 1));
    });
});
