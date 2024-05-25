function calculateSumAndProduct(n, ...numbers) {
    if (n % 2 !== 1 || n <= 2) {
        return 'n must be an odd number greater than 2';
    }

    const sum = numbers[0] + numbers[1];
    let product = 1;
    for (let i = 2; i < n; i++) {
        product *= numbers[i];
    }

    return [sum, product];
}


console.log(calculateSumAndProduct(5, 1, 2, 3, 4, 5)); 
console.log(calculateSumAndProduct(7, 2, 3, 4, 5, 6, 7, 8));
console.log(calculateSumAndProduct(4, 1, 2, 3, 4)); 
