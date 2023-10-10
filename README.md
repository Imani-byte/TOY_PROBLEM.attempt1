# TOY_PROBLEM.attempt1
## challenge_1.js 
solves the problem:
Student Grade Generator (Toy Problem)

Write a function that prompts the user to input student marks. The input should be between 0 and 100. The output should correspond the correct grade, as shown below: 

        A > 79, B - 60 to 79, C -  59 to 49, D - 40 to 49, E - less 40.
### instruction for challenge_1
1.create a function labled StudentGradeGenerator
2.create an input for which the grade can be submited
3.then make sure that only numbers between 0-100 can be inputed
4.using conditionals put the limits of each grade and returns the following:
- A > 79
- B - 60 to 79
- C -  59 to 49
- D - 40 to 49
- E - less 40.

## challenge_2.js 
solves the problem:
Challenge 2: Speed Detector (Toy Problem)

Write a program that takes the speed of a car as input e.g 80. If the speed is less than 70, it should print “Ok”. Otherwise, for every 5 km/s above the speed limit (70), it should give the driver one demerit point and print the total number of demerit points.

   > For example, if the speed is 80, it should print: “Points: 2”. If the driver gets more than 12 points, the function should print: “License suspended”.

### instructions for challenge_2
1.create a function labled Speed Detector
2.create an input that takes the speed of the car
3.create a variable that states the speed limit is 70 and it prints "OK"
4.create a variable that shows for every 5km above the speed limit 1 demerit point is awarded
5.show that the maximum number of demerit points is 12 and if met prints "License suspended"

## challenge_3.js
solves the problem:
Write a program whose major task is to calculate an individual’s Net Salary by getting the inputs of basic salary and benefits. Calculate the payee (i.e. Tax), NHIF Deductions, NSSF Deductions, gross salary, and net salary.

### Instruction for challenge_3
1.create the function and label it net salary
2.create the following variables:
- netsalary=grossSalary - payee - NHIF - NSSF
- grosssalary=basicsalary + benefits
- payee
- NHIF
- NSSF
3.then return the netsalary
4.create function to calculate the 10% of payee taken
5.create a function for NHIF for proper deductions
6.create a function for NSSF for proper deductions

## Author and License
By Imani Naisiae Kasura

Data for values in challenge_3 obtained from:
- https://www.kra.go.ke/individual/calculate-tax/calculating-tax/paye
- https://www.aren.co.ke/payroll/taxrates.htm