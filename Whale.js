var input = "turpentine and turtles";

const vowels = ["a", "e", "i", "o", "u"];

var resultArray = [];

for (let inputIndex = 0; inputIndex < input.length; inputIndex++) {

  if (input[inputIndex] === "e") {

    resultArray.push(input[inputIndex]);

  }

  if (input[inputIndex] === "u") {

    console.log(resultArray.join("").toUpperCase());

    resultArray.push(input[inputIndex]);

  }

  for (let vowelIndex = 0; vowelIndex < vowels.length; vowelIndex++) {

    if (input[inputIndex] === vowels[vowelIndex]) {

      resultArray.push(input[inputIndex]);

    }

  }

}