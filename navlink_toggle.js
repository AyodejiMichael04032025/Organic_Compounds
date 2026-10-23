// navlink_toggle.js
            const navlink_toggle =document.querySelector('.navlink_toggle');
            const navlinks =document.querySelector('.navlinks');

            navlink_toggle.addEventListener('click', () => {
                navlinks.classList.toggle('expanded');
            })