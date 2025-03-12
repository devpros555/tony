document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector('.menu-toggle');
    const mobileMenu = document.querySelector('.mobile-menu');

    if (menuToggle && mobileMenu) {
        menuToggle.addEventListener('click', function () {
            mobileMenu.classList.toggle('show-menu');
        });

        // Close the menu when clicking a menu item
        document.querySelectorAll('.mobile-menu a').forEach(link => {
            link.addEventListener('click', function () {
                mobileMenu.classList.remove('show-menu');
            });
        });
    }
});


<script>
    document.addEventListener("DOMContentLoaded", function() {
        const menuToggle = document.querySelector('.menu-toggle');
        const mobileMenu = document.querySelector('.mobile-menu');

        if (menuToggle && mobileMenu) {
            menuToggle.addEventListener('click', function() {
                mobileMenu.classList.toggle('show-menu');

                // Ensure the menu stays fixed and does not push the hero section
                if (mobileMenu.classList.contains('show-menu')) {
                    mobileMenu.style.position = 'fixed';
                } else {
                    mobileMenu.style.position = 'fixed';
                }
            });

            // Close menu when clicking a menu link
            document.querySelectorAll('.mobile-menu a').forEach(link => {
                link.addEventListener('click', function() {
                    mobileMenu.classList.remove('show-menu');
                });
            });
        }
    });
</script>
