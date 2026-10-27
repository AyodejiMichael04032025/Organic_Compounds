// 1. Fire the fetch request instantly
fetch('navbar.html')
  .then(response => response.text())
  .then(data => {
    // 2. Inject the header into the container as soon as it arrives
    const container = document.getElementById('navbar_container');
    if (container) {
      container.innerHTML = data;

      // 3. Hook up your menu buttons right after the header appears
      const menubutton = document.getElementById('menu_button');
      const closebutton = document.getElementById('close_button_for_menu_overlay');
      const menuoverlay = document.getElementById('menu_overlay');

      if (menubutton && closebutton && menuoverlay) {
        menubutton.addEventListener('click', () => {
          menuoverlay.classList.add('active');
        });

        closebutton.addEventListener('click', () => {
          menuoverlay.classList.remove('active');
        });
      }
    }
  })
  .catch(error => console.error('Error loading navbar:', error));
