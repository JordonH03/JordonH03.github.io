const themeToggle = document.getElementById('theme-toggle'); // Button that toggles the theme

let light = true; // webpage starts in light mode



// themeToggle.onclick(() => alert('click')); 
themeToggle.addEventListener('click', () => {
    let elems;

    if (light) { // swtich to dark mode
        elems = document.querySelectorAll('.light');

        for (const elem of elems) {

            // console.log('switched to dark mode')
            elem.classList.add('dark');
            elem.classList.remove('light');
        }

        themeToggle.innerHTML = '🌙';
    }
    else { // switch to light mode
        elems = document.querySelectorAll('.dark');

        for (const elem of elems) {
            elem.classList.add('light');
            elem.classList.remove('dark');
        }

        themeToggle.innerHTML = '☀️';
    }

    light = !light;


});// switch the theme on button click