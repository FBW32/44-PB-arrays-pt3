//**1. Where Have My Four Letter Words Gone?**
function isFourLetters(arr) {
  let newarr = arr.filter((item) => item.length == 4);
  return newarr;
}
console.log(isFourLetters(["John", "Jack"]));

//**2. Months.**
function monthName(num) {
  if (num >= 1 && num <= 12) {
    let months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    return months[num - 1];
  } else {
    return "Please enter a number between 1 and 12!";
  }
}
console.log(monthName(3));

//**3. Amplify the Multiples of 4.**

function amplify(int) {
  if (int >= 1) {
    let newarr = [];
    for (i = int; i >= 1; i--) {
      if (i % 4 == 0) {
        newarr.push(i * 10);
      } else {
        newarr.push(i);
      }
    }
    newarr.reverse();
    return newarr;
  } else {
    return "Please give a number which is grater than 1!";
  }
}
console.log(amplify(25));

//**4. One is not like the others...**
function unique(arr) {
  let arrOfUniques = [];
  for (i = 0; i <= arr.length; i++) {
    let item = arr[i];
    let counter = 0;
    arr.map((nums) => {
      if (nums == item) {
        counter += 1;
      }
    });
    if (counter == 1) {
      arrOfUniques.push(item);
    }
  }
  return arrOfUniques.join();
}

console.log(unique([3, 3, 3, 7, 3, 3]));

//**5. Word Ranking.**

function wordRank(str) {
  let orderedstr = str.slice(0, str.length - 1); //without . at the end
  let arrOfString = orderedstr.split(" "); //array from str
  let arrOfStringLower = orderedstr.toLowerCase().split(" "); //array with lower case
  let alphabet = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  let newarr = [];

  for (word of arrOfStringLower) {
    let score = 0;
    for (characters of word) {
      score += alphabet.indexOf(characters) + 1;
    }
    newarr.push(score);
  }
  let maxScore = Math.max(...newarr);
  return arrOfString[newarr.indexOf(maxScore)];
}

console.log(wordRank("Today is Wednesday."));

//**6. c4n y0u r34d th15?**
function hackerSpeak(str) {
  let objOfHacker = { a: 4, e: 3, i: 1, o: 0, s: 5 };
  let wordsOfStr = str.split(" ");
  let newarr = [];
  for (word of wordsOfStr) {
    for (i = 0; i < word.length; i++) {
      let letter = word.charAt(i);
      if (Object.keys(objOfHacker).includes(letter)) {
        word = word.slice(0, i) + objOfHacker[letter] + word.slice(i + 1);
      }
    }
    newarr.push(word);
  }
  return newarr.join(" ");
}
console.log(hackerSpeak("javascript is cool"));

//## Bonus Questions
//**1. Is it Symmetrical?**
function isSymetrical(num) {
  let strNum = num.toString();
  let arrOfNum = strNum.split("");
  arrOfNum.reverse();
  let revercedNum = arrOfNum.join("");
  if (strNum == revercedNum) {
    return true;
  } else {
    return false;
  }
}
console.log(isSymetrical(7227));

//**2. snake_case ➞ camelCase**
function toCamelCase(snake_case) {
  let c_1 = snake_case.indexOf("_");
  let toBig = snake_case.charAt(c_1 + 1);
  let bigLetter = toBig.toUpperCase();
  snake_case = snake_case.slice(0, c_1) + bigLetter + snake_case.slice(c_1 + 2);
  return snake_case;
}
console.log(toCamelCase("hello_world"));

//**3. Pig Latin Translation.**
function pigL(str) {
  let vowels = ["a", "e", "i", "o", "u"];
  let newarr = [];
  let arr = str.split(" ");
  arr.map((word) => {
    let sliced = word.slice(1);
    let first = word.slice(0, 1);
    let firststep = sliced + first.toLowerCase();
    if (vowels.join("").includes(first)) {
      newword = firststep + "way";
      newarr.push(newword);
    } else {
      newword = firststep + "ay";
      newarr.push(newword);
    }
  });

  let strng = newarr.join(" ");
  return strng.slice(0, 1).toUpperCase() + strng.slice(1);
}
console.log(pigL("Cats are great pets"));
