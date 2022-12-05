const boxes = [
  { l: 1, w: 1, h: 1 },
  { l: 3, w: 3, h: 3 },
  { l: 2, w: 2, h: 2 }
]

const fitsInOneBox = (boxes) => {
  return boxes.sort((a, b) => (b.l * b.w * b.h) - (a.l * a.w * a.h)).every((b, index) => {
    if (!boxes[index + 1]) {
      return true
    } else {
      return (
        b.l > boxes[index + 1].l && b.w > boxes[index + 1].w && b.h > boxes[index + 1].h
      )
    }
  })
}


const solution = { fitsInOneBox: fitsInOneBox(boxes) } // true
console.log(solution);