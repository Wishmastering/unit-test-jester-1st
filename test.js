test("One euro should be 1.206 dollars", function(){
    //import the function from app.js
    const { fromEuroToDollar } = require('./app.js')

    // use the function like its suppoed to be used
    const dollars = fromEuroToDollar(3.5)

    // if 1 euro are 1.206 dollars, then 3.5 euros should be (3.5 * 1.2)
    const expected = 3.5 * 1.2; 
    
    // this is the comparison for the unit test
     expect(fromEuroToDollar(3.5)).toBe(4.2); //1 euro are 1.2 dolares, then 3.5 euros should be = (3.5 * 1.2)
})


/// TEST DOLLAR A YEN EMPIEZA ACA ->

test("Three Dollars should be 319.75 Yen", function(){
    //import the function from app.js
    const { fromDollarToYen } = require('./app.js')

    // use the function like its suppoed to be used
    const yen = fromDollarToYen(3)

    // 1 dollar are 0.833 euros (1$ / 1.2eur), then we multiply 0.833 * 127.9
    const expected = (dolToEur) * oneEuroIs.JPY; 
    
    // this is the comparison for the unit test
     expect(fromDollarToYen(3)).toBe(319.75); 
     //1 $ are 0.833 euro, then 0.833 euros should be = (0.833 * 127.9)
})

/// TEST YEN A POUND EMPIEZA ACA ->

test("Three Dollars should be 319.75 Yen", function(){
    //import the function from app.js
    const { fromYantoPound } = require('./app.js')

    // use the function like its suppoed to be used
    const yen = fromYantoPound(100)

    // 100 yen are 0.781 euros (1YAN / 127.9eur per YAN), then we multiply 0.781 * 0.8 GBP per Eur
    const expected = (yanToEuro) * oneEuroIs.GBP; 
    
    // this is the comparison for the unit test
     expect(fromYantoPound(100)).toBe(0.625); 
     //100 yen are 0.781 euro, then 0.781 euros should be = (0.781 * 0.8) = 0.625
})