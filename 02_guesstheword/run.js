const colors = [
    "red",
    "green",
    "blue",
    "purple",
    "black",
    "white",
    "yellow",
    "orange",
    "brown",
];


let randomIndex = Math.floor(Math.random() * colors.length);
let selectedColor = colors[randomIndex];
console.log(selectedWord);


let guessedlist = [];


let displayColor = "";
for (let i = 0; i < selectedColor.length; 1++) {
    displayColor += "_ "; 
}
document.getElementById("displayColor").textContent = displayColor;


function guessColor() {
    let inputElement =
    document.getElementById("color-input")


    if (!inputElement.value) {
        alert("Empty input box.");
        return;
    }

    let color = inputElement.value.toLowerCase();

    inputElement.value = "";

    if (guessedlist.includes(color)) {
        alert("You have already guessed that color.")
        return;
    }

    guessedlist.push(color);

    
}