// *Question 2: Find the Difference Between the Largest and Smallest Digit*

// Description:

// Write a TypeScript function that takes a number as input and returns the difference between its largest and smallest digits.

// Example:
// typescript
// Input: 7593
// Output: 6  // 9 - 3 = 6

// Input: 12345
// Output: 4  // 5 - 1 = 4



function differenceBetweenLargestAndSmallestDigit(num: number): number {
    let str = num.toString();
    let maxDigit = Number(str[0]);
    let minDigit = Number(str[0]);

    for (let i = 1; i < str.length; i++) {
        let currentDigit = Number(str[i]);
        if (currentDigit > maxDigit) {
            maxDigit = currentDigit;
        }
        if (currentDigit < minDigit) {
            minDigit = currentDigit;
        }
    }

    return maxDigit - minDigit;
}

console.log(differenceBetweenLargestAndSmallestDigit(7593));  // Output: 6
console.log(differenceBetweenLargestAndSmallestDigit(12345));  // Output: 4
