var selectElementsStartingWithA = function (array) {
  function startingWithA(elements){
    return elements.charAt(0) === "a";
  }
  return array.filter(startingWithA);
}

var selectElementsStartingWithVowel = function(array) {
var vowel = ["a","e","i","o","u","y"];
function startingWithVowel(elements){
  var firstChar = elements.charAt(0)
  return vowel.indexOf(firstChar) !== -1 ;
}
return array.filter(startingWithVowel);
}


var removeNullElements = function(array) {
  function nullElements(elements){
    return elements !== null;
  }
  return array.filter(nullElements);
}

var removeNullAndFalseElements = function(array) {
  function nullAndFalseElements(elements) {
    return elements !== null && elements !== false;

  }
  return array.filter(nullAndFalseElements);
}

var reverseWordsInArray = function(array) {
function reverseWords(elements){
  return elements.split('').reverse().join('');
}
 return array.map(reverseWords);
}

var everyPossiblePair = function(array) {
    return 'Write your method here';
}

var allElementsExceptFirstThree = function(array) {
    array.splice(0,3);
    return array
}

var addElementToBeginning = function(array, element) {
    return 'Write your method here';
}

var sortByLastLetter = function(array) {
    return 'Write your method here';
}

var getFirstHalf = function(string) {
    return 'Write your method here';
}

var makeNegative = function(number) {
    return 'Write your method here';
}

var numberOfPalindromes = function(array) {
    return 'Write your method here';
}

var shortestWord = function(array) {
    return 'Write your method here';
}

var longestWord = function(array) {
    return 'Write your method here';
}

var sumNumbers = function(array) {
    return 'Write your method here';
}

var repeatElements = function(array) {
    return 'Write your method here';
}

var stringToNumber = function(string) {
    return 'Write your method here';
}

var calculateAverage = function(array) {
    return 'Write your method here';
}

var getElementsUntilGreaterThanFive = function(array) {
    return 'Write your method here';
}

var convertArrayToObject = function(array) {
    return 'Write your method here';
}

var getAllLetters = function(array) {
    return 'Write your method here';
}

var swapKeysAndValues = function(object) {
    return 'Write your method here';
}

var sumKeysAndValues = function(object) {
    return 'Write your method here';
}

var removeCapitals = function(string) {
    return 'Write your method here';
}

var roundUp = function(number) {
    return 'Write your method here';
}

var formatDateNicely = function(date) {
    return 'Write your method here';
}

var getDomainName = function(string) {
    return 'Write your method here';
}

var titleize = function(string) {
    return 'Write your method here';
}

var checkForSpecialCharacters = function(string) {
    return 'Write your method here';
}

var squareRoot = function(number) {
    return 'Write your method here';
}

var factorial = function(number) {
    return 'Write your method here';
}

var findAnagrams = function(string) {
    return 'Write your method here';
}

var convertToCelsius = function(number) {
    return 'Write your method here';
}

var letterPosition = function(array) {
    return 'Write your method here';
}
