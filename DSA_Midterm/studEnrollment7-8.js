// luis AcostaRjay.     BSCS_1B

//Declare arrays to store subjects and enrolled students
let arrSubjects = ["DSA", "WebDev", "Soft Archi"]; //Array holding subject names
let arrStudents = [[], [], []]; //Each index corresponds to a subject in arrSubjects and holds an array of students

function enrollStudent() { //Function to enroll a student
    let subjectChoice = prompt("Select a subject to enroll in:\n(A) DSA\n(B) WebDev\n(C) Soft Archi").toUpperCase();
    //Prompt user to select a subject and convert input to uppercase for consistency

    let subjectIndex; //Variable to store the selected subject index

    //Determine the selected subject index based on user input
    if (subjectChoice === "A") subjectIndex = 0; //Enroll in DSA
    else if (subjectChoice === "B") subjectIndex = 1; //Enroll in WebDev
    else if (subjectChoice === "C") subjectIndex = 2; //Enroll in Soft Archi
    else { 
        alert("Invalid selection! Try again."); //Show an error message for invalid input
        return; //Exit the function early
    }

    let studentName = prompt("Enter the student's name:"); //Ask for the student's name
    arrStudents[subjectIndex].push(studentName); //Add the student to the selected subject's array
    alert(`${studentName} has been enrolled in ${arrSubjects[subjectIndex]}.`); //Confirm enrollment
}

//Function to list all enrolled students
function listStudents() {
    let list = "Enrolled Students:\n"; //Initialize a string to store the student list

    for (let i = 0; i < arrSubjects.length; i++) { //Loop through all subject
        list += `\n${arrSubjects[i]}: ${arrStudents[i].length > 0 ? arrStudents[i].join(", ") : "No students enrolled"}`;
        //Append each subject and its enrolled students to the list
    }

    alert(list); //Display the final list of enrolled students
}

//Function to remove a student from a subject
function removeStudent() {
    let subjectChoice = prompt("Select a subject to remove a student from:\n(A) DSA\n(B) WebDev\n(C) Soft Archi").toUpperCase();
    //Prompt user to choose a subject for student removal

    let subjectIndex; //Variable to store the selected subject index

    //Determine the selected subject index based on user input
    if (subjectChoice === "A") subjectIndex = 0; //DSA
    else if (subjectChoice === "B") subjectIndex = 1; //Web
    else if (subjectChoice === "C") subjectIndex = 2; //Soft Archi
    else { 
        alert("Invalid selection! Try again."); //Show an error message for invalid input
        return; //Exit the function early
    }

    if (arrStudents[subjectIndex].length === 0) { //Check if the selected subject has any students
        alert(`No students are enrolled in ${arrSubjects[subjectIndex]}.`); //Inform the user
        return; //Exit the function
    }

    let studentName = prompt(`Enter the name of the student to remove from ${arrSubjects[subjectIndex]}:`); //Ask for the student's name
    let studentIndex = arrStudents[subjectIndex].indexOf(studentName); //Find the index of the student in the array

    if (studentIndex !== -1) { //Check if the student exists in the list
        arrStudents[subjectIndex].splice(studentIndex, 1); //Remove the student using splice()
        alert(`${studentName} has been removed from ${arrSubjects[subjectIndex]}.`); //Confirm removal
    } else {
        alert(`${studentName} is not enrolled in ${arrSubjects[subjectIndex]}.`); //Inform user if student not found
    }
}

while (true) { //Infinite loop to keep the program running until the user exits
    let action = prompt("Choose an action:\n1 - Enroll Student\n2 - List Students\n3 - Remove Student\n4 - Exit").trim();
    //Prompt the user to select an action

    if (action === "1") {
        enrollStudent(); //Call function to enroll a student
    } else if (action === "2") {
        listStudents(); //Call function to list students
    } else if (action === "3") {
        removeStudent(); //Call function to remove a student
    } else if (action === "4") {
        alert("Exiting program. Goodbye!"); //Show exit message
        break; //Exit the while loop, ending the program
    } else {
        alert("Invalid input! Please select a valid option."); //Handle invalid input
    }
}
