const { add } = require('./math');

// test('adds 1 + 2 to equal 3', () => {
//     expect(add(1, 2)).toBe(3);
// });

test('basic matchers', () => {
    expect(2 + 2).toBe(4);
    expect([1, 2]).toEqual([1, 2]);
    expect('Hello').toMatch(/Hello/);
    expect(null).toBeNull();
    expect(undefined).toBeUndefined();
    expect(5).toBeGreaterThan(3);
});