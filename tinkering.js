const amounts = [61.00, 52.25, 112.99, 5.00]
const total = 0
for (let i = 0; i < amounts.length; i++){
  total += amounts[i]
}
console.log("order total is: ", total)

for (let amount of amounts){
  total += amount
}