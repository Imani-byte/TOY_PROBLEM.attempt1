//i choose to lable my function StudentGradeGenerator so it is easy to identify
function StudentGradeGenerator () {
    const userInput = prompt("Enter the student's marks out of 100")
    //using the prompt function the user will be shown where to write the marks
    const marks = parseFloat(userInput)
    //using the parseFloat function it will convert any input into a floating number 
//i used const to declare the two variables
    if (isNaN(marks) || marks < 0 || marks >100 ) {
        //the use of NaN ensures that only numbers are submitted
        //the logic gates used in this are: || or , &&and  operators 
        return("Please enter a valid number")
    } else if (marks > 70) {
        return("A");
    } else if (marks >=60 && marks <=79) {
        return ("B");
    } else if (marks >=50 && marks <=59) {
        return ("C");
    } else if (marks >=40 && marks <=49) {
        return ("D");
    } else {
        return ("E");
    }
    //inequalities used are: >= more than or equal to, <= less than or equal to, and > more than
    //i used return instead of consolee.log in this script as it returns a valu from the funtion wich is the grade
}
