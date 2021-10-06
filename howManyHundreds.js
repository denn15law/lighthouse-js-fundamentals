function howManyHundreds (num){
  let answer = 0
  if (num >= 100){
    answer = Math.floor(num / 100)
  } else{
    answer = 0
  }
  return answer
}
console.log(howManyHundreds(99))