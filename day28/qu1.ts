function isArmstrongNumber(num: number): boolean {
    let sum = 0;
    let originalNum = num;
    let digits = 0;

    // Count the number of digits
    while (originalNum > 0) {
        originalNum = Math.floor(originalNum / 10);
        digits++;
    }

    originalNum = num;

    // Calculate the sum of each digit raised to the power of the number of digits
    while (originalNum > 0) {
        const digit = originalNum % 10;
        sum += Math.pow(digit, digits);
        originalNum = Math.floor(originalNum / 10);
    }

    return sum === num;
}

// Example Usage
console.log(isArmstrongNumber(153)); // true
console.log(isArmstrongNumber(123)); // false
