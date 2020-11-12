const wait = (ms = 0) => new Promise(resolve => setTimeout(resolve, ms));

function getRandomBetween(min = 20, max = 120, randomNumber = Math.random()) {
    return Math.floor(randomNumber * (max - min) + min)
}

// async for of loop
// async function draw(element) {
//     const text = element.textContent;
//     let soFar = '';
//     for (const letter of text) {
//         soFar += letter;
//         element.textContent = soFar;

//         // wait for some amount of time
//         const {
//             typeMin,
//             typeMax
//         } = element.dataset
//         const amountOfTimeToWait = getRandomBetween(typeMin, typeMax);
//         await wait(amountOfTimeToWait)
//     }
// }

// recursion 
function draw(element) {
    let index = 1;
    const text = element.textContent;
    const {
        typeMin,
        typeMax
    } = element.dataset;
    async function drawLetter() {
        element.textContent = text.slice(0, index);
        index += 1;
        const amountOfTimeToWait = getRandomBetween(typeMin, typeMax);
        // wait some time
        await wait(amountOfTimeToWait);
        // exit condition
        if (index <= text.length) {
            drawLetter();
        }
    }
    // when this function draw() runs, kik off drawLetter
    drawLetter();
}


document.querySelectorAll('[data-type]').forEach(draw);