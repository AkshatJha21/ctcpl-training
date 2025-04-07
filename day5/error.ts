// try catch

function divide(a: number, b: number): number {
    if (b === 0) {
      throw new Error("Cannot divide by zero");
    }
    return a / b;
}

try {
    const result = divide(1, 0);
    console.log(result);
} catch (error) {
    console.error((error as Error).message);
}

async function fetchData(url: string) {
    try {
        const res = await fetch(url);
        if (!res.ok) {
            throw new Error("Failed to fetch");
        }
        const data = await res.json();
        return data;
    } catch (error) {
        console.error((error as Error).message);
    }
}