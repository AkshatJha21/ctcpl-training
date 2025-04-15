const { greet, checkCallback } = require('./greeter');
const logger = require('./logger');

jest.mock('./logger');

test('greet calls log with correct message', () => {
    greet('Akshat');
    expect(logger.log).toHaveBeenCalledWith('Hello, Akshat');
});

const mockFn = jest.fn();

mockFn();

test('mock function was called', () => {
    expect(mockFn).toHaveBeenCalled();
});

test('calls the callback with Akshat', () => {
    const mockCallback = jest.fn();
    checkCallback(mockCallback);
    expect(mockCallback).toHaveBeenCalled();
    expect(mockCallback).toHaveBeenCalledWith('Akshat');
});