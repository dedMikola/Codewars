// When provided with a letter, return its position in the alphabet.

// Input :: "a"

// Ouput :: "Position of alphabet: 1"


function position(letter){
  return `Position of alphabet: ${"ABCDEFGHIJKLMNOPQRSTUVWXYZ".indexOf(letter.toUpperCase())+1}`
}
