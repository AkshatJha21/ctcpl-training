const name = "Akshat";

test('name is defined', () => {
    expect(name).toBeDefined();
});

test('undefined is not defined', () => {
    let age;
    expect(age).not.toBeDefined();
});