const factorial = (n) => {
    let fact = 1;
    while (n > 1) {
        fact *= n;
        n--;
    }

    console.log(fact);
}

factorial(5);