const functions = require('./functions');

test('adds 1+ 2 to equal 3', () =>{
    expect(functions.sum(1,2)).toBe(3);
}); 

test('tests hello toBe Hello', () => {
    expect(functions.capitalizeString("hello")).toBe("Hello"); 
}); 

test('hello should be olleh', () => {
    expect(functions.reverseString("hello")).toBe("olleh");
});

test('4+4 should equal 8', () => {
    expect(functions.calculator.add(4,4)).toBe(8); 
}); 

test('abc should equal bcd', () => {
    expect(functions.cipher("abc", 1)).toBe("bcd");
}); 

test('tests hello to be ifmmp',() => {
    expect(functions.cipher("hello", 1)).toBe("ifmmp");
});

test('[1,8,3,4,2,6] average should equal 4', () => {
    expect(functions.anaylzeArray.average([1,8,3,4,2,6])).toBe(4);
});
test('[1,8,3,4,2,6] min should equal 1', () => {
    expect(functions.anaylzeArray.min([1,8,3,4,2,6])).toBe(1);
});
test('[1,8,3,4,2,6] max should be 8', () => {
    expect(functions.anaylzeArray.max([1,8,3,4,2,6])).toBe(8);
});
