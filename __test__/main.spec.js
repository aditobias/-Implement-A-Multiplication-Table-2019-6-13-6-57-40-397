const functionMap = require('../main');

it ('should start number is smaller than end number', () => {
    expect(functionMap.checkStartAndEndNum(2,3)).toBe("true");
});

it ('should start num and end num within range and result is not null', () => {
    expect(functionMap.withinRange(2,3,"true")).toBe(true);
});

it ('should return false when start num and end num exceed range', () => {
    expect(functionMap.withinRange(2,1001,"true")).toBe(false);
});

it ('should return null when start num is greater than end num', () => {
    expect(functionMap.withinRange(4,2,null)).toBe(false);
});

it ('should present multiplication table of two numbers', () => {
    expect(functionMap.printFinalMultiplicationTable(2,4)).toBe("2x2 = 4\n2x3 = 6 3x3 = 9\n2x4 = 8 3x4 = 12 4x4 = 16\n");
}); 

it ('should present multiplication table of same two numbers', () => {
    expect(functionMap.printFinalMultiplicationTable(2,2)).toBe("2x2 = 4\n");
}); 