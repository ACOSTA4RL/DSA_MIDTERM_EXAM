//Rjay Luis Acosta. BSCS_1B

let createGrocery = prompt("Do you want to create a grocery list? (yes/no): ").toLowerCase();
//Ask the user if they want to create a grocery list and convert the response to lowercase

if (createGrocery === "yes") { //Checks if its yes then proceed to next line of code 
  
  let groceryList = []; //Initializes an empty array to store grocery items

  let noOfItems = Number(prompt("Enter the number of items to be added in the grocery list: ")); 
  //Prompts the user to enter how many items they want to add and converts the input to a number

  if (groceryList.length < noOfItems) { //Checks if the list has fewer items than the number specified by the user
    for (let i = 0; i < noOfItems; i++) { //Loops to get the specified number of items from the user
      let addItem = prompt(`Enter ${i + 1} item: `); //Prompts the user to enter an item
      groceryList.push(addItem); //Adds the entered item to the grocery list
    }

    alert(`Normal List [${groceryList}]`); //Displays the grocery list in normal order

    groceryList.sort(); //Sorts the list alphabetically
    alert(`Sorted List [${groceryList}]`); //Displays the sorted list

    groceryList.reverse(); //Reverses the sorted list
    alert(`Reversed List [${groceryList}]`); //Displays the reversed list
  }
} else if (createGrocery === "no") { //Checks if the user input is "no"
  alert("Thank you! Come again!"); //Displays a message and exits
} else { //If the user enters anything other than "yes" or "no"
  alert("Invalid user input!"); //Displays an error message
}