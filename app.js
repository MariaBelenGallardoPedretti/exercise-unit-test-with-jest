const sum = (a,b) => {
    return a + b
}
console.log(sum(7,3))

module.exports = { sum };

const fromEuroToDollar = function(valueInEuro) {
    // Convertimos el valor a dólares
    let valueInDollar = valueInEuro * 1.07;
    // Retornamos el valor en dólares
    return valueInDollar;
}

const fromDollarToYen = function (valueInDollar) {
    let euro = valueInDollar / 1.07;
    let valueInYen = euro * 156.5;
    return valueInYen;
}

const fromYenToPound = function(valueInYen) {
    let euro = valueInYen / 156.5;
    let valueInPound = euro * 0.87;
    return valueInPound;
}
module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound }