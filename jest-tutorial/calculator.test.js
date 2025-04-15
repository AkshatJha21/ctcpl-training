const { multiply, divide } = require('./calculator');

test('multiply 3 x 4 = 12', () => {
    expect(multiply(3, 4)).toBe(12);
});

test('divide 6 / 2 = 3', () => {
    expect(divide(6, 2)).toBe(3);
});

test('divide by zero throw error', () => {
    expect(() => divide(5, 0)).toThrow('Cannot divide by zero');
});