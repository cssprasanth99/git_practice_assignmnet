function isPrime(N) {
    for (var i = 2; i <= N / 2; i++) {
        if (N % i === 0) {
            console.log(N, "is not a prime number");
            return;
        }
    }
    console.log(N, "is a prime number");
}
isPrime(17);