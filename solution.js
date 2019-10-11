// Four Letter  Words. 

function isFourLetters(array) {
    let filter = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i].length === 4) {
            filter.push(array[i]);
        }
    }
    return filter;
}

console.log(isFourLetters(["Deer", "Duck", "Dog", "Elephant"]));

// Months

function months(number) {
    const monthOfYear = ["January", "February", "March","April","May","June","July","August","September","October", "November","December"];
    let numberOfMonth = number - 1;
    if (number <= 0) {
        return `no corresponding month`;
    } else if ((number >= 1) && (number <= 12)) {
        return monthOfYear[numberOfMonth];
    } else {
        return `no corresponding month`;
    }
}

console.log(months(8));

// Amplify the Multiples of 4

function amplify(number) {
    let amplified = [];
    console.log(number);
 for (let i = 1; i <= number; i++) {
     if (i % 4 === 0) {
        let ampByTen = i * 10;
        amplified.push(ampByTen);
     } else {
         amplified.push(i);
     }
 }
 return amplified;
}

console.log(amplify(50));

// Is it Symmetrical? 

function isSymmetrical(number) {
    const numberForwards = number.toString();
    const numberSplit = numberForwards.split("");
    const reverse = numberSplit.reverse();
    const numberReverse = reverse.join("");

    if (numberForwards === numberReverse) {
        return true;
    } else {
        return false;
    }
}

console.log(isSymmetrical(111));

// camelCase -> snake_case

function toCamelCase(snakeString) {
    const splitString = snakeString.split("_");
    let camelCaseArray = [];
    for (let i = 0; i < splitString.length; i++) {
        let firstChar, remainder;
        if (splitString[i] === splitString[0]) {
            camelCaseArray.push(splitString[0]);
            continue;
        } else {
           firstChar = splitString[i].slice(0, 1);
            remainder = splitString[i].slice(1, splitString[i].length);
        }
        let currentWord = firstChar.toUpperCase() + remainder;
        camelCaseArray.push(currentWord);
    }
    const camelCaseText = camelCaseArray.join("");
    return camelCaseText;
}

console.log(toCamelCase("this_is_francesca_borg"));

// One is not like the others...

function unique(arr) {
    let countCurrent = 0;
    let countRemainder = 0;
    let current = [];
    let remainder = [];
    for (let i = 0; i < arr.length; i++) {
        if ((current.length === 0) || (current[0] === arr[i])) {
            current.push(arr[i]);
            countCurrent++;
        } else if ((current[0] !== arr[i])) {
            remainder.push(arr[i]);
            countRemainder++;
        }   
    } 

    if (countCurrent === 1) {
        return current[0];
    } else {
        return remainder[0];
    }
 }
const uniqueArray = [1, 1, 1, 0.1, 1];
console.log(unique(uniqueArray));

// Pig Latin Translation 

function pigLatin(str) {
    const lowerCase = str.toLowerCase();
    const splitStr = lowerCase.split(" ");
    const vowels = ["a", "e", "i", "o", "u"];
    let pigTranslate = [];
    for (let i = 0; i < splitStr.length; i++){
        const firstChar = splitStr[i][0];
        let remainder = splitStr[i].slice(1, splitStr[i].length);
        if (vowels.includes(firstChar.toLowerCase())) {
            // checking if i is truthy or falsy. 
            //If falsy, then it's the first word because it's 0.
            const firstCharVowel = (i ? firstChar : firstChar.toUpperCase()) + remainder + "way";
            pigTranslate.push(firstCharVowel);
        } else {
            if (i === 0) {
               const firstCharRem = remainder[0];
               const wordRemainder = remainder.slice(1, remainder.length);
               remainder = firstCharRem.toUpperCase() + wordRemainder;
            }
            const firstCharConsonant = remainder + firstChar + "ay";
            pigTranslate.push(firstCharConsonant);
        }
    }

    const joinedString = pigTranslate.join(" ");
    return joinedString;
}

console.log(pigLatin("this pig latin"));

// Word Ranking

function wordRank(sentence) {
    const words = sentence.split(" ");
  
    let ranking = [];
    for (let i = 0; i < words.length; i++) {
        let wordScore = 0;
        const word = words[i];
        for(let y = 0; y < word.length; y++) {
            const letterScore = word.toLowerCase().charCodeAt(y) - 96;
            wordScore += letterScore;       
        }   
        ranking.push(wordScore);
    }
    let winningPosition = 0;
    for (let i = 0; i < ranking.length; i++) {
        if (i === 0) {
            // first entry, skip over
           continue;
        } 
        if (ranking[i] > ranking[winningPosition]) {
            winningPosition = i;
        }
    }
  return `"${words[winningPosition]}" is the winner with a score of ${ranking[winningPosition]}`;
}
console.log(wordRank("Testing, one, 2, three"));

// c4n y0u r34d th15? 

function code(string) {
    const lowerString = string.toLowerCase();
    const letters = lowerString.split("");
    let hackerSpeak = [];
    for (let i = 0; i < letters.length; i++) {
        if (letters[i] === "a") {
            letters[i] = "4";
            hackerSpeak.push(letters[i]);
        } else if (letters[i] === "e") {
            letters[i] = "3";
            hackerSpeak.push(letters[i]);
        } else if (letters[i] === "i") {
            letters[i] = "1";
            hackerSpeak.push(letters[i]);
        } else if (letters[i] === "o") {
            letters[i] = "0";
            hackerSpeak.push(letters[i]);
        } else if (letters[i] === "s") {
            letters[i] = "5";
            hackerSpeak.push(letters[i]);
        } else {
            hackerSpeak.push(letters[i]);
        }
    }
    let hacked = hackerSpeak.join("");
    return hacked;
}

console.log(code("do you even code, sis"));