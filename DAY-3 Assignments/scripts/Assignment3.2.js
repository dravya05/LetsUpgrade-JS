//Using ternary

let marks1 = Number(prompt("Enter the marks : ","50"));
let result = (marks1 >= 80 && marks1 < 100) ? `Marks are ${marks1} and grade is A+`:
             (marks1 >= 65 && marks1 < 80) ? `Marks are ${marks1} and grade is A`:
             (marks1 >= 50 && marks1 < 65) ? `Marks are ${marks1} and grade is B`:
             (marks1 >= 40 && marks1 < 50) ? `Marks are ${marks1} and grade is B+`:
             (marks1 >= 35 && marks1 < 40) ? `Marks are ${marks1} and grade is C`:
             (marks1 < 35) ? `Marks are ${marks1} and grade is C+`: "There was some mistke while entering the input, try again!";
console.log(result);             