document.addEventListener('DOMContentLoaded', () => {
    const text = "Bienvenue sur mon portfolio.";
    const typewriterElement = document.querySelector(".typewriter");
    let i = 0;

    function typeWriter() {
        if (i < text.length) {
            typewriterElement.innerHTML += text.charAt(i);
            i++;
            setTimeout(typeWriter, 60);
        }
    }

    if (typewriterElement) {
        typeWriter();
    }

    let lastScrollTop = 0;
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        const scrollTop = window.scrollY || document.documentElement.scrollTop;
        if (scrollTop > lastScrollTop) {
            navbar.style.top = -scrollTop + 'px';
        } else {
            navbar.classList.remove('hidden');
        }
        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // For Mobile or negative scrolling
    });

    window.addEventListener('resize', function() {
        const scale = 1 / window.devicePixelRatio;
        document.querySelector('.corner-decor').style.transform = `scale(${scale})`;
    });

//     const circle = document.createElement('div');
//     circle.classList.add('circle');
//     document.body.appendChild(circle);
//
//     document.addEventListener('mousemove', function setInitialPosition(e) {
//         circle.style.transform = `translate(${e.clientX - 10}px, ${e.clientY - 10}px)`;
//         // Remove this event listener after setting the initial position
//         document.removeEventListener('mousemove', setInitialPosition);
//     });
//
// // Update circle position on mouse move
//     document.addEventListener('mousemove', (e) => {
//         circle.style.transform = `translate(${e.clientX - 10}px, ${e.clientY - 10}px)`;
//     });
});