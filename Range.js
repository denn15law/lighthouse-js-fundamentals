function range (start, end, step){
  let numbers = []
  if (start === undefined || end === undefined || step === undefined || start > end || step < 0){
    numbers = []
  }else{
    for (let i = start; i <= end; i = i + step){
      numbers.push(i)
    }
  }
  return numbers
}
console.log(range(10,30,5))