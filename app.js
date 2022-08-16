let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}

// Esta funcion convierte de Dolares a Yen
// Pero debe pasar primero de DOLAR a EURO 
// Y luego de EURO A YEN

function fromDollarToYen(dollar){
    let dolToEur = dollar / oneEuroIs.USD;
    let eurToYen = dolToEur * oneEuroIs.JPY;
    
    return eurToYen;
}


// Esta funcion convierte de Euro a Dolares
function fromEuroToDollar(euro){
    let eurToDol = euro * oneEuroIs.USD;

    return (eurToDol);
}


// Esta funcion convierte de YEN a POUND
// Pero debe pasar primero de YEN a EURO 
// Y luego de EURO A POUND
function fromYantoPound(yan){
    let yanToEuro = yan / oneEuroIs.JPY;
    let eurToPound = yanToEuro * oneEuroIs.GBP;
    yanToEuro
    return eurToPound;
}

module.exports = {fromDollarToYen, fromEuroToDollar, fromYantoPound}
