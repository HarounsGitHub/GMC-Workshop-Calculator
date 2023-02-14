

var buttons = document.querySelectorAll('.toggle')
var lastActive = 0
// console.log(buttons.length) TEST IF WE SELECTED ALL BUTTONS



//or for loop
// for (let i = 0; i < buttons.length; i++) {
//     let button = buttons[i]
//     button.addEventListener('click', function () {
//         let button = buttons[i]
//         buttons[lastActive].classList.remove('active')
//         button.classList.add('active')
//         lastActive = i
//     })
// }

const theme1 = {
    '--main-bg': 'hsl(222, 26%, 31%)',
    '--keypad-bg': 'hsl(223, 31%, 20%)',
    '--screen-bg': 'hsl(224, 36%, 15%)',

    /* text */
    '--text-blue': 'hsl(221, 14%, 31%)',
    // '--text-white': 'hsl(0, 0%, 100%)',
    '--screen-text': 'hsl(0, 0%, 100%)',

    /* keys */
    '--keys-func-bg': 'hsl(225, 21%, 49%)',
    '--keys-func-hover': 'hsl(255, 51%, 76%)',
    '--keys-func-bg-shadow': 'hsl(224, 28%, 35%)',

    '--keys-equal-bg': 'hsl(6, 63%, 50%)',
    '--keys-equal-hover': 'hsl(6, 93%, 67%)',
    '--keys-equal-bg-shadow': 'hsl(6, 70%, 34%)',

    '--keys-bg': 'hsl(30, 25%, 89%)',
    '--keys-hover': 'white',
    '--keys-shadow': 'hsl(28, 16%, 65%)',
}
const theme2 = {
    '--main-bg': 'hsl(0, 0%, 90%)',
    '--keypad-bg': 'hsl(0, 5%, 81%)',
    '--screen-bg': ' hsl(0, 0%, 93%)',

    /* text */
    '--text-blue': 'hsl(60, 10%, 19%)',
    '--text-white': 'hsl(0, 0%, 100%)',
    '--screen-text': 'hsl(225, 21%, 49%)',
    /* keys */
    '--keys-func-bg': 'hsl(185, 42%, 37%)',
    '--keys-func-hover': 'hsl(185, 70%, 50%)',
    '--keys-func-bg-shadow': 'hsl(185, 58%, 25%)',

    '--keys-equal-bg': 'hsl(25, 98%, 40%)',
    '--keys-equal-hover': 'hsl(25, 100%, 67%)',
    '--keys-equal-bg-shadow': 'hsl(25, 99%, 27%)',

    '--keys-bg': 'hsl(45, 7%, 89%)',
    '--keys-hover': 'white',
    '--keys-shadow': 'hsl(35, 11%, 61%)',
}
const theme3 = {
    '--main-bg': 'hsl(268, 75%, 9%)',
    '--keypad-bg': 'hsl(268, 71%, 12%)',
    '--screen-bg': 'hsl(268, 71%, 12%)',

    /* text */
    // '--text-yellow': 'hsl(52, 100%, 62%)', UNUSED
    '--text-blue': 'hsl(52, 100%, 62%)',
    '--text-white': 'hsl(0, 0%, 100%)',
    '--screen-text': 'hsl(52, 100%, 62%)',

    /* keys */
    '--keys-func-bg': 'hsl(281, 89%, 26%)',
    '--keys-func-hover': 'hsl(284, 100%, 50%)',
    '--keys-func-bg-shadow': 'hsl(285, 91%, 52%)',

    '--keys-equal-bg': 'hsl(176, 100%, 44%)',
    '--keys-equal-hover': 'hsl(176, 100%, 67%)',
    '--keys-equal-bg-shadow': 'hsl(177, 92%, 70%)',

    '--keys-bg': 'hsl(268, 47%, 21%)',
    '--keys-hover': 'hsl(268, 87%, 40%)',
    '--keys-shadow': 'hsl(290, 70%, 36%)',
}

// forEach uses a callback function better than use for loop that caused us an issue when we used var inside of it rather than let
buttons.forEach(function (button, i, array) {
    button.addEventListener('click', function () {
        buttons[lastActive].classList.remove('active')
        button.classList.add('active')
        lastActive = i
        //TODO : Change theme
        applyTheme(i); //FEB 14 2023
    })
})

const themes = [theme1, theme2, theme3];

function applyTheme(index) {
    const rootEl = document.querySelector(':root')

    const selectedTheme = themes[index]
    for (let key in selectedTheme) {
        rootEl.style.setProperty(key, selectedTheme[key])
    }
}

applyTheme(0)

