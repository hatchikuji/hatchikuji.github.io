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
