function isPrime(N) {
    var count = 0;
    for (var i = 2; i <= N / 2; i++) {
        if (N % i === 0) {
            count++;
        }
        if (count == 1) {
            console.log(N, "is a prime number");
        }
        else {
            console.log(N, "is not a prime");
        }
    }
}
isPrime(5);