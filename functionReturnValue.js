



function sumOfNumbers(num1, num2) {
    return num1 + num2;
}

function fullName(firstName, lastName) {
    return firstName + " " + lastName;

}

/*
the application starting point
*/

function theController() {
    var num1 = Number(prompt("enter 1st number : "));
    var num2 = Number(prompt("enter 2nd number : "));
    var result = sumOfNumbers(num1, num2);
    document.write(result);
    document.write("\n");

    var firstName = prompt("enter first Name : ");
    var lastName = prompt("enter last Name : ");
    var myName = fullName(firstName, lastName);
    document.write(myName);

}