function fetchData() {
    return new Promise((resolve) => {
        setTimeout(() => resolve('data recieved'), 100);
    });
}

module.exports = { fetchData };