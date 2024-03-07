/// Level first ///

const capitalize = (str) =>
  str.at(0).toUpperCase() + str.slice(1).toLowerCase();
console.log("Level first - task 1:", capitalize("HeLLo"));
console.log("Level first - task 1:", capitalize("hOw ARe yOu?"));

/// ------------------------------------------------------------- ///

const reverseString = (str) => str.split("").reverse().join("");
console.log("Level first - task 2:", reverseString("Hello!"));
console.log("Level first - task 2:", reverseString("How are you?"));

/// ------------------------------------------------------------- ///

const convertToBinary = (num) => num.toString(2);
console.log("Level first - task 3:", convertToBinary(5));
console.log("Level first - task 3:", convertToBinary(15));

/// ------------------------------------------------------------- ///

const generateRandomFloat = (n) => {
  const randomNumber = Math.random() * 100;
  const finalRandomNumber = randomNumber.toFixed(n);
  return finalRandomNumber;
};
console.log("Level first - task 4:", generateRandomFloat(2));
console.log("Level first - task 4:", generateRandomFloat(1));
console.log("Level first - task 4:", generateRandomFloat(4));

/// Level 2 ///

const isPalindrome = (str) => {
  const palindrome = str.replaceAll(" ", "").toLowerCase();
  return palindrome.split("").reverse().join("") === palindrome;
};

console.log("Level 2:", isPalindrome("радар"));
console.log("Level 2:", isPalindrome("І розморозь зором зорі"));
console.log("Level 2:", isPalindrome("Привіт"));

/// ------------------------------------------------------------- ///

const sumOfNumbers = (number) => {
  const str = number.toString();
  let resultOfNumbers = 0;
  for (let i = 0; i < str.length; i++) {
    resultOfNumbers += parseFloat(str[i]);
  }
  return resultOfNumbers;
};

console.log("Level 2 - task 2:", sumOfNumbers(12));
console.log("Level 2 - task 2:", sumOfNumbers(122));
console.log("Level 2 - task 2:", sumOfNumbers(12256));

/// Level 3 ///

const generateNumberInLimit = (start, end) => {
  return start > end
    ? "Error"
    : Math.floor(Math.random() * (end - start + 1)) + start;
};
console.log("Level third - task 1:", generateNumberInLimit(1, 10));
console.log("Level third - task 1:", generateNumberInLimit(24, 50));

/// ------------------------------------------------------------- ///

// const toCamelCase = (str) => {
//   const remadeWord = str.split("_");
//   const camelCaseWord = remadeWord.map((value, index) => {
//     if (index === 0) {
//       return value;
//     }
//     return value.at(0).toUpperCase() + value.slice(1);
//   });
//   return camelCaseWord.join("");
// };
// console.log("Level 3 - task 2:", toCamelCase("current_user"));
// console.log("Level 3 - task 2:", toCamelCase("user_first_name"));
// console.log("Level 3 - task 2:", toCamelCase("car"));

const toCamelCase = (str) => {
  const camelCaseWord = str.split("_");
  let result = "";
  for (let i = 0; i < camelCaseWord.length; i++) {
    if (i === 0) {
      result += camelCaseWord[i];
    } else {
      result += camelCaseWord[i][0].toUpperCase() + camelCaseWord[i].slice(1);
    }
  }
  return result;
};

console.log("Level third - task 2:", toCamelCase("current_user"));
console.log("Level third - task 2:", toCamelCase("user_first_name"));
console.log("Level third - task 2:", toCamelCase("car"));
