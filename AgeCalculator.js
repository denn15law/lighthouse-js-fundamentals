const ageCalculator = function(name, yearofBirth, currentYear){
  return name + " is " + (currentYear - yearofBirth) + " years old."
}

console.log(ageCalculator('miranda', 1983, 2015))