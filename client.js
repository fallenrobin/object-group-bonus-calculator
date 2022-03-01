$(document).ready(readyNow);
function readyNow(){
  console.log('j query');
  $('#theButton').on('click', employeeReview(employees));
}

const employees = [
  {
    name: 'Atticus',
    employeeNumber: '2405',
    annualSalary: '47000',
    reviewRating: 3
  },
  {
    name: 'Jem',
    employeeNumber: '62347',
    annualSalary: '63500',
    reviewRating: 4
  },
  {
    name: 'Scout',
    employeeNumber: '6243',
    annualSalary: '74750',
    reviewRating: 5
  },
  {
    name: 'Robert',
    employeeNumber: '26835',
    annualSalary: '66000',
    reviewRating: 1
  },
  {
    name: 'Mayella',
    employeeNumber: '89068',
    annualSalary: '35000',
    reviewRating: 1
  }
];

let testJem =
{
  name: 'Jem',
  employeeNumber: '62347',
  annualSalary: '30000',
  reviewRating: 5
}

// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT
function calculateBonus(person) {
  
  const maxBonus = .13
  let bonusPercentage = 0;
  //let totalCompensation = ((person.annualSalary * bonus) + person.annualSalary)
  const maxSalary = 65000;
  if (person.reviewRating <= 2) {
    bonusPercentage += 0;
  }
  else if (person.reviewRating === 3) {
    bonusPercentage += .04;
  }
  else if (person.reviewRating === 4) {
    bonusPercentage += .06;
  }
  else if (person.reviewRating === 5) {
    //console.log('5');
    bonusPercentage += .1;
  }
  if (person.employeeNumber.length === 4) {
    bonusPercentage += .05;
  }
  if (Number(person.annualSalary) > maxSalary && bonusPercentage > 0) {
    bonusPercentage -= .01;
  }
  if (bonusPercentage > maxBonus) {
    bonusPercentage = maxBonus;
  }
  let totalCompensation = ((Number(person.annualSalary) * bonusPercentage) + Number(person.annualSalary));
  let totalBonus = (bonusPercentage * Number(person.annualSalary));
  const newEmployeeObject = {
    name : person.name,
    bonusPercentage : bonusPercentage,
    totalCompensation : totalCompensation,
    totalBonus : totalBonus
  }
  console.log(newEmployeeObject);
  displayEmployees();
  return newEmployeeObject;
}

console.log(calculateBonus(testJem));

function employeeReview(payroll){
  for(let employee of payroll){
    calculateBonus(employee);
  }
}

employeeReview(employees);
//look at reviewRating
//calculate bonus based on reviewRating and base salary
//check for seniority (years of experience) and give extra bonus accordingly



// This problem is massive! Break the problem down, take small steps, and test as you go.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.

console.log(employees);
function displayEmployees(){
  let el=$('#listOut');
  el.append(`<li>`+ newEmployeeObject + `</li>`);
}
