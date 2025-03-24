//Rjay luis Acosta.    BSCS_1B

const theFavNumber = 7;
//Declare a variable for the favorite number and sets the favorite number to 7.

let guess; //This declares a variable 'guess' that will store the user's input.

while (guess !== theFavNumber) { //The loop runs until the user guesses the correct number.
    guess = Number(prompt("Guess my favorite number: "), 10);
    //Prompts the user for input and converts it to an integer.

    if (guess > theFavNumber) { //Checks if the guessed number is greater than the favorite number.
        console.log("Too high! Try again."); //Prompt a message indicating the guess is too high.
    } else if (guess < theFavNumber) { //Checks if the guessed number is less than the favorite number.
        console.log("Too low! Try again."); //Prompt a message indicating the guess is too low.
    } else { //If the guessed number matches the favorite number.
        console.log(`Correct! You guessed my favorite number. ${theFavNumber}`);
        //Prompt a success message to the user and display the favorite number.
    }
}
