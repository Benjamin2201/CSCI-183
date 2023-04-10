// Array of strings
const names = [
    "Jane", "Brenda", "Wanda", "Maria", "Jasper",
    "John", "Malik", "Arjun", "Larry", "Curly", "Moe","Ben","Ronda"
];



const outputElement = document.querySelector('#output');

 
let i = 0;
while ( i < names.length) {
    outputElement.insertAdjacentHTML('beforeend', `<p>Welcome, ${names[i]}!</p>`);
    i++;
}

