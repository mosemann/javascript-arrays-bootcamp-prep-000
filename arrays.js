var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray(array, element) {
  return [element, ...array]
}
function destructivelyAddElementToBeginningOfArray(array, element) {
  return array.unshift(element)
}
function addElementToEndOfArray(array, element) {
  return [...array, element]
}
function destructivelyAddElementToEndOfArray(a,b) {
  return array.push(element)
}
function accessElementInArray(a,b) {
  return a[b]
}
function destructivelyRemoveElementFromBeginningOfArray(a) {
  a.shift()
  return a
}
function removeElementFromBeginningOfArray(a) {
  a.slice(1)
  return a
}
function destructivelyRemoveElementFromEndOfArray(a) {
  a.pop(1)
  return addElementToBeginningOfArray
}
function removeElementFromEndOfArray(a) {
  
}