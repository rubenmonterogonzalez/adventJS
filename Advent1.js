const gifts = ['cat', 'game', 'socks']

function wrapping(gifts) {
  return gifts.map(gift => `${'*'.repeat(gift.length + 2)}\n*${gift}*\n${'*'.repeat(gift.length + 2)}`);
}


const wrapped = wrapping(gifts)
console.log(wrapped)
// [
//   "*****\\n*cat*\\n*****",
//   "******\\n*game*\\n******",
//   "*******\\n*socks*\\n*******"
// ] 

