//Rjay luis Acosta BSCS_1B

let userAge = Number(prompt("Enter your age:"));
//Prompt the user to enter their age and convert the input into an integer

if (userAge <= 5) {
    console.log("Category: Toddler (under 5 years)");
}
//Check if the user's age falls in the "Toddler" category (5 years and below)

else if (userAge <= 12) {
    console.log("Category: Child (5-12 years)");
}
//Check if the user's age falls in the "Child" category (6-12 years)

else if (userAge <= 19) {
    console.log("Category: Teenager (13-19 years)");
}
//Check if the user's age falls in the "Teenager" category (13-19 years)

else if (userAge <= 35) {
    console.log("Category: Young Adult (20-35 years)");
}
//Check if the user's age falls in the "Young Adult" category (20-35 years)

else if (userAge <= 60) {
    console.log("Category: Middle Aged (36-60 years)");
}
//Check if the user's age falls in the "Middle Aged" category (36-60 years)

else {
    console.log("Category: Senior (above 60 years)");
}
//If the user's age does not fit in the previous categories, they are categorized as a "Senior" (above 60 years)