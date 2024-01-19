function isPrime(N) {
    for (var j = 2; j <= N / 2; j++) {
        if (N % j === 0) {
            console.log(N, "is not a prime number");
            return;
        }
    }
    console.log(N, "is a prime number");
}
isPrime(5);