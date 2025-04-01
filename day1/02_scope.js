// scope tells where variables can be accessed
// 1. Global scope => accessible everywhere
// 2. Function scope -> only inside function
// 3. Block scope -> only inside {}

let gVar = 'global';

function f1() {
    let fVar = 'func';
    console.log(gVar);
    console.log(fVar);

    if (true) {
        let bVar = 'block';
        console.log(bVar);
    }

    // console.log(bVar); Cannot be accessed outside block
}

f1();
// console.log(fVar); Cannot access fVar outside function