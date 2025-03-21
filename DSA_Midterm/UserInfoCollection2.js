//Rjay luis C. Acosta BSXCS_1B

let subjectTitle = prompt("Enter the subject title:");
//Prompt the user to enter the subject title and insert it in the variable "subjectTitle"

let classSchedule = prompt("Enter the class schedule (Time, Days):");
//Prompt the user to enter the class schedule (time and days) and inser  it in "classSchedule"

let classroom = prompt("Enter the classroom:");
//Prompt the user to enter the classroom number or location and insert it in "classroom" 

let classInstructor = prompt("Enter the class instructor:");
//Prompt the user to enter the instructor's name and insert it in "classInstructor"

let studentName = prompt("Enter your name:");
//Prompt the user to enter their own name and  it in "studentName"

console.log(`${studentName} is currently enrolled in ${subjectTitle} with a class schedule of ${classSchedule} at room ${classroom}. The instructor for the subject is ${classInstructor}.`);
//Display the collected information in a structured sentence