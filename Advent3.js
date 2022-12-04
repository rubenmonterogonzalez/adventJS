const packOfGifts = ["book", "doll", "ball"]
const reindeers = ["dasher", "dancer"]

// el pack de regalos pesa 4 + 4 + 4 = 12
// los renos pueden llevar (2 * 6) + (2 * 6) = 24
// por lo tanto, Santa Claus puede entregar 2 cajas de regalos

distributeGifts(packOfGifts, reindeers) // 2


function distributeGifts(packOfGifts, reindeers) {
  let totalWeight = 0
  let totalCapacity = 0

  for (const gift of packOfGifts) {
    totalWeight += gift.length
  }

  for (const reindeer of reindeers) {
    totalCapacity += reindeer.length * 2
  }

  return Math.floor(totalCapacity / totalWeight)

}

console.log(distributeGifts(packOfGifts, reindeers))