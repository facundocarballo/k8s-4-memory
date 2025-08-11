import { HeavyObject } from "#domain/heavy-object";

function delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function init() {
    let counter = 0;
    const heavyObjects: HeavyObject[] = [];

    while (true) {
        const heavyObject = new HeavyObject();
        heavyObjects.push(heavyObject);
        counter++;
        
        console.log(`${counter} heavy-objects created`);

        await delay(1000); // 1 seg delay
    }
}

init();