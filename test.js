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


test("This is dollar to yen value is 317.5", function(){
    //import the function from app.js
    const { fromDollarToYen } = require('./app.js')
    // use the function like its supposed to be used
    const yen = fromDollarToYen(3);
    const expected = (3 / 1.2) * 127;   
    // this is the comparison for the unit test
     expect(fromDollarToYen(3)).toBe(317.5); 
})

test("This 635 Yans should be 4 GBP", function(){
    //import the function from app.js
    const { fromYanToPound } = require('./app.js')
    // use the function like its supposed to be used
    const yen = fromYanToPound(635);
    const expected = (635 / 127) * 0.8;   
    // this is the comparison for the unit test
     expect(fromYanToPound(635)).toBe(4); 
})