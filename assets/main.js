document.addEventListener('DOMContentLoaded', function() {
    var dropdown = document.querySelector('.dropdown');
    var dropdownContent = document.querySelector('.dropdown-content');
    var dropbtn = document.querySelector('.dropbtn');

    function isMobileDevice() {
        return /Mobi|Android/i.test(navigator.userAgent);
    }

    if (isMobileDevice()) {
        dropbtn.addEventListener('click', function(event) {
            event.preventDefault();
            if (dropdownContent.style.display === 'block') {
                dropdownContent.style.display = 'none';
            } else {
                dropdownContent.style.display = 'block';
            }
        });
    } else {
        dropdown.addEventListener('mouseover', function() {
            dropdownContent.style.display = 'block';
        });

        dropdown.addEventListener('mouseout', function() {
            dropdownContent.style.display = 'none';
        });
    }
});