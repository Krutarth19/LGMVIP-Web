// js for display
const display = document.querySelector('#display');

const buttons = document.querySelectorAll('button');

buttons.forEach((item) => {
    item.onclick = () => {
        if (item.id == 'clear') {
            display.innerText = '';
        }
        else if (item.id == 'backspace') {
            let string = display.innerText.toString();
            display.innerText = string.substr(0, string.length - 1);
        }
        else if (display.innerText != '' && item.id == 'equal') {
            display.innerText = eval(display.innerText);
        }
        // else if (display.innerText == '' && item.id == 'equal') {
        //     display.innerText = 'Empty!';
        //     setTimeout(() => (display.innerText = ''), 20000);
        // }
        else {
            display.innerText += item.id;
        }
    }
})

const themeToggleBtn = document.querySelector('.theme-toggle');
const calculator = document.querySelector('.calculator');
const toggleIcon = document.querySelector('.toggler-icon');
const changebtn = document.querySelector('.theme-toggle i');

let isDark = true;
themeToggleBtn.onclick = () => {
    calculator.classList.toggle('dark-mode');
    themeToggleBtn.classList.toggle('active');

    if (isDark == false) {
        changebtn.classList.add('uil-moon');
        changebtn.classList.remove('uil-sun');
        isDark = true;
    }
    else {
        changebtn.classList.add('uil-sun');
        changebtn.classList.remove('uil-moon');
        isDark = false;
    }
}

