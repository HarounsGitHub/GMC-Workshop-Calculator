

var buttons = document.querySelectorAll('.toggle')
var lastActive = 0
// console.log(buttons.length) TEST IF WE SELECTED ALL BUTTONS

// forEach uses a callback function better than use for loop that caused us an issue when we used var inside of it rather than let
buttons.forEach(function (button, i, array) {
    button.addEventListener('click', function () {
        buttons[lastActive].classList.remove('active')
        button.classList.add('active')
        lastActive = i
        //TODO : Change theme
    })
})

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

