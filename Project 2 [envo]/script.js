document.addEventListener('DOMContentLoaded', function () {
    var menuIcon = document.querySelector('.menu-icon');
    var mobileMenu = document.querySelector('.mobile-menu');

    menuIcon.addEventListener('click', function () {
        mobileMenu.classList.toggle('show');
    });

    var closeBtn = document.querySelector('.close-btn');

    if (closeBtn) {
        closeBtn.addEventListener('click', function () {
            mobileMenu.classList.remove('show');
        });
    }

    document.addEventListener('click', function (event) {
        var menuIcon = document.querySelector('.menu-icon');
        var mobileMenu = document.querySelector('.mobile-menu');

        if (!mobileMenu.contains(event.target) && event.target !== menuIcon) {
            mobileMenu.classList.remove('show');
        }
    });
});
