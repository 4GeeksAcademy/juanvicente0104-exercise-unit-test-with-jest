// Import the function sum from the app.js file
const { sum } = require('./app.js');

// Start your first test
test('adds 14 + 9 to equal 23', () => {
    // Inside the test we call our sum function with 2 numbers
    let total = sum(14, 9);

    // We expect the sum of those 2 numbers to be 23
    expect(total).toBe(23);
});

test("One euro should be 1.07 dollars", function() {
    // Import the function from app.js
    const { fromEuroToDollar } = require('./app.js');

    // Use the function like its supposed to be used
    const dollars = fromEuroToDollar(1);

    // If 1 euro is 1.07 dollars, then 3.5 euros should be (3.5 * 1.07)
    const expected = 1 * 1.07; 
    
    // This is the comparison for the unit test
    expect(fromEuroToDollar(1)).toBe(1.07); // 1 euro is 1.07 dollars, then 3.5 euros should be = (3.5 * 1.07)
})

test("One dollar should be 146.26182 Yens", function() {
    // Import the function from app.js
    const { fromDollarToYen } = require('./app.js');

    // Use the function like its supposed to be used
    //const dollars = fromDollarToYen(1);

    // If 1 euro is 1.07 dollars, then 3.5 euros should be (3.5 * 1.07)
    //const expected = 1 * 1.07; 
    
    // This is the comparison for the unit test
    expect(fromDollarToYen(1)).toBe(146.26168224299064); // 1 euro is 1.07 dollars, then 3.5 euros should be = (3.5 * 1.07)
})

test("One hundred and 80 Yens should be 1.00063898 pounds", function() {
    // Import the function from app.js
    const { fromYenToPound } = require('./app.js');

    // Use the function like its supposed to be used
    //const dollars = fromYenToPound(1);

    // If 1 euro is 1.07 dollars, then 3.5 euros should be (3.5 * 1.07)
    //const expected = 1 * 1.07; 
    
    // This is the comparison for the unit test
    expect(fromYenToPound(180)).toBe(1.0006389776357827); // 1 euro is 1.07 dollars, then 3.5 euros should be = (3.5 * 1.07)
})