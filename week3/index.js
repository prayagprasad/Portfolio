function EmployeeInfo(name, salary) {
    console.log("Welcome " + name + ", Your monthly salary is " + salary);
  }
  
  var EmpName = "John";
  var EmpSalary = 50000;
  
  EmployeeInfo(EmpName, EmpSalary);

  const EmpSkills = (skills) => {
    console.log("Expert in " + skills);
  };
  
  EmpSkills("Java");

  const student = require('./studentinfo');
const Person = require('./person');

console.log("Student Name: " + student.getName());
console.log(student.Location());
console.log(student.dob);
console.log("Grade for 55 marks: " + student.Studentgrade(55));


const person1 = new Person("Jim", "USA", "myemail@gmail.com");


console.log("Using Person Module:", person1.getPersonInfo());

console.log("Program ended.");
  