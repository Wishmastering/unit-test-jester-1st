// one euro is:
let oneEuroIs = {
    "JPY": 127, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}

// Esta funcion convierte de Dolares a Yen
// Pero debe pasar primero de DOLAR a EURO 
// Y luego de EURO A YEN

function fromDollarToYen(dollar){   
    let valueDolEuro = dollar / oneEuroIs.USD;
    let valueEuroYen = valueDolEuro * oneEuroIs.JPY;
    return valueEuroYen;
}

// Esta funcion convierte de Euro a Dolares
function fromEuroToDollar(euro){
    let valueEuroDol = euro * oneEuroIs.USD;
    return valueEuroDol;
}


// Esta funcion convierte de YEN a POUND
// Pero debe pasar primero de YEN a EURO 
// Y luego de EURO A POUND
function fromYanToPound(yan){
    let valueYanEuro = yan / oneEuroIs.JPY;
    let valueEuroPound = valueYanEuro * oneEuroIs.GBP;
    return valueEuroPound;
}

module.exports = {fromDollarToYen, fromEuroToDollar, fromYanToPound}