/*
Calculations needed:

Pulses given:
    1. Period given -> return Prescaler & ARR | Done
    2. ARR and Period given  -> return Prescaler | Done
    3. Prescaler and Period given -> return ARR | Done
    3. ARR and Prescaler given  -> return Period | Done

*/

const prescalerMax = 2 ** 16

function getPrescalerAndARR(pulsesInHz, periodInNs, arrMax) {
    let solutions = []
    for (let prescaler = 0; prescaler < prescalerMax; prescaler++) {
        const arr = (periodInNs * pulsesInHz) / (10 ** 9 * prescaler)
        if (arr <= arrMax && arr % 1 == 0) solutions.push([prescaler, arr])
    }
    return solutions
}

function getARR(pulsesInHz, periodInNs, prescaler) {
    /*
    let ticksInHz = pulsesInHz / prescaler
    let secondsPerTick = 1 / ticksInHz;
    let nsPerTick = 10**9 /ticksInHz;

    let arr = periodInNs / nsPerTick
    let directArr = periodInNs / ( 10**9 / (pulsesInHz / prescaler))
    let directerArr = (periodInNs * pulsesInHz) / ( 10**9 * prescaler)
    */

    return (periodInNs * pulsesInHz) / (10 ** 9 * prescaler)
}

function getPrescaler(pulsesInHz, periodInNs, arr) {
    /*
    let nsPerTick = periodInNs / arr
    let sPerTick = nsPerTick / 10**9
    let ticksInHz = 1 / sPerTick

    let prescaler = pulsesInHz / ticksInHz
    let better1 = pulsesInHz / (1 / ((periodInNs / arr) / 10**9))
    let better2 = pulsesInHz / (10**9 / (periodInNs / arr))
    let better3 = (pulsesInHz * periodInNs) / (arr * 10**9)
    */

    return (periodInNs * pulsesInHz) / (10 ** 9 * arr)
}

function getPeriodInSeconds(pulsesInHz, prescaler, arr) {
    /*
    let ticksInHz = pulsesInHz / prescaler
    let secondsPerTick = 1 / ticksInHz
    let period = secondsPerTick * arr
    let better = prescaler * arr / pulsesInHz
    */

    return prescaler * arr / pulsesInHz
}


let solutions = getPrescalerAndARR(10 ** 7, 62 * 1000000, 2 ** 32)
console.table(solutions)
