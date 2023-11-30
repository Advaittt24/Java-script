function isPrimeNumber(no) {
    if (no < 2) {
        return false;
    }
    for (let i = 2; i < no; i++) {
        if (no % i == 0) {
            return false;
        }
    }
    return true;
}

for (let i = 1; i <= 100; i++) {
    if (isPrimeNumber(i)) {
        console.log(i);
    }
}

// let prime_number = [];

// for (let i = 2; i <= 100; i++) {
//     let prime = true;
//     for (let j = 2; j <= i; j++) {
//         if (j < i && i % j == 0) {
//             prime = false;
//             break;
//         }
//     }
//     if (prime) {
//         prime_number.push(i);
//     }
// }

// console.log(prime_number);