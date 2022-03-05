let n = 5
let isPrime = true;

for (let i = 2; i * i < n; i++) {
    if (n % i == 0) {
        isPrime = false;

    }
    if (isPrime == true) {
        console.log("prime")
    } else {
        console.log("not prime")
    }
}