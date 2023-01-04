function sieveOfEratosthenes(number) {

}

function primeFactors(number) {
    if(number < 2) {
        return [];
    }
    let firstPrimeFactor = findFirstPrimeFactorOf(number);
    return [firstPrimeFactor].concat(primeFactors(Math.round(number/firstPrimeFactor)));
}

function findFirstPrimeFactorOf(number) {
    let arrayPossible = possibleFactors(number);
    for(let element of arrayPossible) {
        if(isPrime(element) && isFactorOf(number, element)) {
            console.log(element);
            return element;
        }
    }

    return number;
}

function possibleFactors(number) {
    let returnArray = new Array(Math.round(Math.sqrt(number)));
    for(let i = 1; i <= Math.round(Math.sqrt(number)); i++) {
        returnArray[i-1] = i;
    }
    return returnArray;
}

function isPrime(number) {
    return (number > 1) && !hasFactorsOtherThanOneAndSelf(number).length;
}

function isFactorOf(number, possibleFactor) {
    return (number % possibleFactor) === 0;
}

function hasFactorsOtherThanOneAndSelf(number) {
    return factors(number).filter( ( el ) => ![1, number].includes( el ) );
}

function factors(number) {
    return possibleFactors(number).filter( (possibleFactor) => isFactorOf(number, possibleFactor));
}