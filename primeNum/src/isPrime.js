function isPrime(numb) {
    var check = [], i, j, primes = [];
    for (i = 2; i <= numb; ++i) {
        if (!check[i]) {
            primes.push(i);
            for (j = i << 1; j <= numb; j += i) {
                check[j] = true;
            }
        }
    }
    return primes;
}
