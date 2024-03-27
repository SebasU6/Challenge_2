//Build a pyramid-shaped tower, as an array/list of strings, given a positive integer number of floors. 
//A tower block is represented with "*" character.
//For example, a tower with 3 floors looks like this:
//[
//  "  *  ",
//  " *** ", 
//  "*****"
//]
//And a tower with 6 floors looks like this:
//[
//  "     *     ", 
//  "    ***    ", 
//  "   *****   ", 
//  "  *******  ", 
//  " ********* ", 
//  "***********"
//]

function towerBuilder(nFloors) {
    const tower = []
    const maxWidth = nFloors * 2 - 1
    for (let index = 0; index < nFloors; index++) {
      const spaces = " ".repeat((maxWidth - (index * 2)) / 2)
      const stars = "*".repeat(index * 2 + 1)
      tower.push(spaces + stars + spaces)
    }
    return tower
  }