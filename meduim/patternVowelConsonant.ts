function solution(pattern: string, source: string){

    const vowels = ['a','e','i','o','u','y'];

    const sourceArray = convertToBinary(source,vowels);

    const patternArray = pattern.split('');

    const n = sourceArray.length;
    let l = patternArray.length;

    let count = 0;
    for(let i = 0; i<n; i++){

    let text = sourceArray.slice(i, i + l).join('');
        console.log(text)
        if(text === pattern){
            count++;
        }
        

    }; 

    return count

}

function convertToBinary(text:string,vowels:string[]){

    const textArray = text.split('');
    const n = textArray.length;

    for(let i= 0; i<n; i++){

        if(vowels.includes(textArray[i])){
            textArray[i] = '0';
        }
        else{
            textArray[i] = '1';
        }
    }

    const result = textArray.join();

    return textArray;

}

console.log("Test Case 1");
console.log("Expected: 2");
console.log("Actual:", solution("010", "amazing"));
console.log("Result:", solution("010", "amazing") === 2 ? "PASS ✅" : "FAIL ❌");

console.log("\nTest Case 2");
console.log("Expected: 0");
console.log("Actual:", solution("100", "codesignal"));
console.log("Result:", solution("100", "codesignal") === 0 ? "PASS ✅" : "FAIL ❌");

console.log("\nTest Case 3");
console.log("Expected: 1");
console.log("Actual:", solution("01", "up"));
console.log("Result:", solution("01", "up") === 1 ? "PASS ✅" : "FAIL ❌");

console.log("\nTest Case 4");
console.log("Expected: 3");
console.log("Actual:", solution("10", "baobab"));
console.log("Result:", solution("10", "baobab") === 2 ? "PASS ✅" : "FAIL ❌");

console.log("\nTest Case 5");
console.log("Expected: 0");
console.log("Actual:", solution("00", "dry"));
console.log("Result:", solution("00", "dry") === 0 ? "PASS ✅" : "FAIL ❌");


