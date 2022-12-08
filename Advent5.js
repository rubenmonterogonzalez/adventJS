const giftsCities = [12, 3, 11, 5, 7]
const maxGifts = 20
const maxCities = 3

// la suma más alta de regalos a repartir
// visitando un máximo de 3 ciudades
// es de 20: [12, 3, 5]

// la suma más alta sería [12, 7, 11]
// pero excede el límite de 20 regalos y tendría
// que dejar alguna ciudad a medias.

getMaxGifts(giftsCities, maxGifts, maxCities) // 20


function getMaxGifts(giftsCities, maxGifts, maxCities) {

  let combinations = [];
  combinations.push([], [giftsCities[0]]);
  giftsCities.shift()

  giftsCities.map(x => {
    const newList = combinations.map(combination => {
      let _combination = [...combination]
      if (_combination.length < maxCities) {
        _combination.push(x)
      }
      return _combination
    })
    combinations = combinations.concat(newList)
  })

  combinations.shift()

  return Math.max(
    ...combinations.map(x => {
      let sum = x.reduce((total, num) => total + num)
      return sum > maxGifts ? 0 : sum
    })
  )
}