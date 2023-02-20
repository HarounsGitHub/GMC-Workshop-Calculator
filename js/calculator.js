const screen = document.querySelector('.screen')

// console.log(screen) 
// to test if we succesfully selected the screen html element

screen.innerHTML = '0'

// rather than giving each button an id of its number to be able to select it
// we will select all elements through querySelectorAll
// and use the already contained text in each tag and use innerHTML
const calcButtons = document.querySelectorAll('.buttons > button')

// console.log(calcButtons)
// to test if we succesfully selected the button html tags

const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.']
const operations = ['+', '-', 'x', '/', '=']
//we need this array in the condition () if we decide to use "else if" rather than just "else"
// const func = ['del', 'reset']
let savedScreen = ''
let lastOperation = ''
//if we click on an operation than it should be true/ if it is a number then it is false
let wasLastOp = false


calcButtons.forEach((calcButton) => {
    // console.log(calcButton.innerHTML) 
    // to test if we successfully selected the contained text between the HTML tags
    // if(calcButton.innerHTML=='7'){} 
    // we could use this logic this but we have a better solution just below
    if (numbers.includes(calcButton.innerHTML)) {
        //this is a number button
        calcButton.addEventListener('click', (event) => {
            console.log('number button clicked', calcButton.innerHTML)
            handleNumber(calcButton.innerHTML)
            //we should call the function handleNumberhere  to excute it
        })
    } else if (operations.includes(calcButton.innerHTML)) {
        calcButton.addEventListener('click', (event) => {
            console.log('operation button clicked', calcButton.innerHTML)
            handleOperation(calcButton.innerHTML)
        })
    } else {
        calcButton.addEventListener('click', (event) => {
            console.log('functionality button clicked', calcButton.innerHTML)
            handleFunc(calcButton.innerHTML)

        })
        // else if (func.includes(calcButton.innerHTML)) {
        //     calcButton.addEventListener('click', (event) => {
        //         console.log('functionality button clicked', calcButton.innerHTML)
        //     })
    }
});

// here we make a function to correct some operational cases that provoque some bugs and errors

function handleNumber(number) {
    // after operations we use the reset function that i should make here
    if (wasEqual) {
        //call reset function
        wasEqual = false
        wasLastOp = false
        screen.innerHTML = '0'
        savedScreen = ''
    }
    if (!wasLastOp) {
        //if we already have a point '.' on screen than we are not supposed to include another one!
        if (screen.innerHTML.includes('.') && number == '.') return
        //if the screen displays a zero '0' than we'll replace it with the new input number unless its a point
        if (screen.innerHTML == '0' && number != '.') {
            screen.innerHTML = number
        } else {
            // screen.innerHTML = screen.innerHTML + number 
            //(the previous line is the same as below)
            screen.innerHTML += number

        }
    } else {
        //we add this line when we have to save the previous screen number needed for the next operation
        savedScreen = screen.innerHTML
        screen.innerHTML = number == '.' ? '0.' : number
    }
    wasLastOp = false
    //it is a false condition as we clicked on a number then we should put the whole logic in an if (!wasLastOp){}
    //and we make the next operation named handleOperation()
}
let wasEqual = false
//we add this as we go further to develop the next HandleOperation function and we declare wasEqual with a false value
function handleOperation(op) {
    //if (lastOperation && !wasLastOp)
    if (lastOperation && !wasLastOp && (!wasEqual || op == '=')) {
        let result
        if (lastOperation == "+") {
            //addition
            /* explicit & implicit coertion we should watchout when we use + operator it concatinate numbers as string 
              so we should use value() */
            result = Number(savedScreen) + Number(screen.innerHTML)
        } else if (lastOperation == '-') {
            //we add this line to prevent issues when clicking '=' on the calculator
            if (wasEqual && op == '=') result = screen.innerHTML - savedScreen
            else result = savedScreen - screen.innerHTML
        } else if (lastOperation == 'x') {
            result = savedScreen * screen.innerHTML
        } else if (lastOperation == '/') {
            result = savedScreen / screen.innerHTML
        }

        //we added the next savedScreen line after the 2nd line
        savedScreen = op == '=' && wasEqual ? savedScreen : screen.innerHTML
        screen.innerHTML = result
    }

    // savedScreen = screen.innerHTML
    // the idea is that we should put the previous line above in the functions because we have an issue with the savedscreen value when
    //we do multiple additions
    // lastOperation = op
    // wasLastOp = true
    // the two previous line are more developped
    // lastOperation = op == '=' ? savedScreen : screen.innerHTML
    // THE PREVIOUS LINE SHOULD BE PUT INSIDE THE PREVIOUS FUNCTION CURLY BRACKETS
    // then 
    // // lastOperation = op == '=' && wasEqual ? savedScreen : screen.innerHTML
    lastOperation = op == '=' ? lastOperation : op
    wasLastOp = op == '=' ? false : true
    wasEqual = op == '='
}

// i try to do this on my own to make the functionalities reset and del
function handleFunc(func) {
    if (func == 'reset') {
        wasEqual = false
        wasLastOp = false
        screen.innerHTML = '0'
        savedScreen = ''
    } else {
        if (!wasLastOp && !wasEqual) {
            screen.innerHTML = screen.innerHTML.slice(0, -1)
            if (!screen.innerHTML) screen.innerHTML = '0'
        }
    }
}

