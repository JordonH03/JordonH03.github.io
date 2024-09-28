const switchButton = document.getElementById("theme-switch");
const elem = document.querySelectorAll('body', 'a', 'h2', '.profile-picture', '#logo', '#theme-switch');
let lightMode = false;

const switchMode = () => lightMode = !lightMode;
// const removeAttributes = value => {
//     elem.forEach(e => {
//         e.classList.replace()
//     });
// }
// const addAttributes = value => {
//     elem.forEach(e => {
//         e.setAttribute('class', value)
//     })
//     document.body.setAttribute('class', value);
//     document.body.querySelectorAll('h2').setAttribute('class', value);
//     document.querySelectorAll('a').setAttribute('class', value);
//     document.getElementById('logo').setAttribute('class', value);
//     document.querySelector('profile-picture').setAttribute('class', value);
//     switchButton.setAttribute('class', value);
// }
const toggleSwitch = () => {
    switchMode();
    if (!lightMode) {
        elem.forEach(e => {
            e.classList.replace('light', 'test');
        })
    } else {
        elem.forEach(e => {
            e.classList.replace('dark', 'light');
        })
    }
}

document.onload(toggleSwitch());