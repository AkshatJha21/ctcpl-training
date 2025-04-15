const { fetchData } = require('./fetchData');

test('async test using resolves', async () => {
    await expect(fetchData()).resolves.toBe('data recieved');
});

// notes for self:
// assertion => check u make in a test using expect()
// matcher =>  used after expect() to describe how u want to check the value
