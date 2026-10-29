// 1. Inject header
fetch('fetch.html')
  .then(response => response.text())
  .then(data => {
    // Turn the raw HTML string into a parseable DOM document
    const parser = new DOMParser();
    const doc = parser.parseFromString(data, 'text/html');

    // Extract only the specific element/div you want
    const targetElement = doc.querySelector('#navbar');

    if (!targetElement) {
      console.error('Target element not found in the fetched file.');
      return;
    }

// 2. Inject the extracted element into the container
    const container = document.getElementById('navbar_container');
    if (container) {
      container.outerHTML = targetElement.outerHTML; // Use targetElement.outerHTML if you don't want to keep the wrapper tag

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

// 4.Inject Footer
fetch('fetch.html')
  .then(response => response.text())
  .then(data => {
    // Turn the raw HTML string into a parseable DOM document
    const parser = new DOMParser();
    const doc = parser.parseFromString(data, 'text/html');

    // Extract only the specific element/div you want
    const targetElement = doc.querySelector('#footer');

    if (!targetElement) {
      console.error('Target element not found in the fetched file.');
      return;
    }
    // Inject the extracted footer into the container
    const container = document.getElementById('footer_container');
    if (container) {
      container.outerHTML = targetElement.outerHTML;
    }
    })
  .catch(error => console.error('Error loading navbar:', error));
