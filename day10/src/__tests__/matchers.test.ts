import { expect, test } from "@jest/globals";

test('basic matchers', () => {
    expect(1 + 1).toBe(2);
    expect('Akshat').toBeDefined();
    expect([1, 2, 3]).toContain(2);
})