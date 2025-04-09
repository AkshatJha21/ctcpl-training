// promises: a value that may be available now, later, or never

let success = false;
const promise = new Promise((resolve, reject) => {
    if (success) {
        resolve("Success");
    } else {
        reject("Error");
    }
});

// then catch

function fetchData(): Promise<string> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const success = true;
            success ? resolve("Done") : reject("Nope");
        }, 1000);
    });
}

fetchData()
    .then((data) => console.log(data))
    .catch((err) => console.error(err));

// async await

async function loadData() {
    try {
        const result = await fetchData();
        console.log(result);
    } catch (error) {
        console.error(error);
    }
}