const vegetables = [
  {
    submitter: 'Old Man Franklin',
    redness: 10,
    plumpness: 5
  },
  {
    submitter: 'Sally Tomato-Grower',
    redness: 2,
    plumpness: 8
  },
  {
    submitter: 'Hamid Hamidson',
    redness: 4,
    plumpness: 3
  }
]

const metric = 'redness'

const judgeVegetable = (vegetables, metric) => {
  let winner = 0
  let index;
  for (let i = 0; i < vegetables.length; i++){
    if (vegetables[i][metric] > winner){
      winner = vegetables[i][metric]
      index = i;
    }
  }
  return vegetables[index].submitter
}

console.log(judgeVegetable(vegetables, metric))