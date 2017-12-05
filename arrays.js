var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(a,b) {
  b.push(a)
  return a
}
function destructivelyAddElementToBeginningOfArray(a,b) {
  b.unshift(a);
  return a;
}
function addElementToEndOfArray(a,b) {
  return [. . .a, b]
}
function destructivelyAddElementToEndOfArray(a,b) {
  a = [. . .a, b]
  return a
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