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
