for (let a = 2; a < 10; a++) {
    a++
    console.log(a)
}
for (let i = 1; i <= 100; i++) {
    if (i == 1) {

    } else if (i == 2) {
        console.log(`${i} is a prime number`);
    } else if (i >= 3) {
        x = i / 2;
        tf = Number.isInteger(x);
        if (tf == false && i >= 3) {
            console.log(`${i} is a prime number`);
        }
    }
}