document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector('.menu-toggle');
    const mobileMenu = document.querySelector('.mobile-menu');

    if (menuToggle && mobileMenu) {
        menuToggle.addEventListener('click', function () {
            mobileMenu.classList.toggle('show-menu');
        });

        // Close menu when clicking a menu link
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



/* 🔥 Fix Mobile Menu Overlapping Hero Section */
.mobile-menu {
    display: none;
    background-color: red;
    position: fixed; /* Keep it fixed to avoid pushing content */
    top: 60px; /* Place it directly under the navbar */
    left: 0;
    width: 100%;
    z-index: 3000; /* Higher than hero section */
    padding: 20px 0;
    text-align: center;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.3); /* Adds a shadow effect */
}

/* Ensure the menu stays above all other sections */
.mobile-menu.show-menu {
    display: block;
}

/* 🔥 Fix Navbar Z-Index */
.navbar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background-color: red;
    color: white;
    z-index: 4000; /* ⬅️ Higher than mobile menu */
}
