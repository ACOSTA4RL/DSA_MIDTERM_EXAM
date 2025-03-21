// Rjay Luis Acosta BSCS_1B

let colors = [];  
// Initialize an empty array to store the user's favorite colors  

let color;  
// Declare a variable "color" to store the user's input  

while (true) {  
    // Start an infinite loop that will keep running until the user types "stop"  

    color = prompt("Enter a favorite color (or type 'stop' to end):");  
    // Prompt the user to enter a favorite color and store it in the `color` variable  

    if (color && color.toLowerCase() === "stop") break;  
    // Convert the input to lowercase and check if the user typed "stop"  

    colors.push(color);  
    // Add the entered color to the "colors" array  

    console.log("Updated Colors:", colors);  
    // Display the updated list of colors in the console  
}