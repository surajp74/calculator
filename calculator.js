let string = " ";
let buttons = document.querySelectorAll('.button') // Select all button class.
Array.from(buttons).forEach((button)=>{
    button.addEventListener('click', (e)=>{
        console.log(e.target)
        string = string + e.target.innerHTML;
        document.querySelector('input').value = string;
    })
})