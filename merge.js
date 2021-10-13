const merge = (arr1, arr2) => {
  let final = []
  for (let num of arr1){
    final.push(num)
  }
  for (let num of arr2){
    final.push(num)
  }
  final.sort();
  return final;
}