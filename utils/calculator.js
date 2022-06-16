/*
Calculations needed:

Pulses given:
    1. Period given -> return Prescaler & ARR | Done
    2. ARR and Period given  -> return Prescaler | Done
    3. Prescaler and Period given -> return ARR | Done
    4. ARR and Prescaler given  -> return Period | Done

Pulses not given:
    1. Period, Prescaler and RRR given -> return Pulses | Done


    
*/

const prescalerMax = 2 ** 16
const arrMax = 2 ** 32

export const getPrescalerAndARR = (pulsesInHz, periodInMs) => {
    console.log(pulsesInHz, periodInMs)
    let solutions = []
    for (let prescaler = 0; prescaler < prescalerMax; prescaler++) {
        const arr = (periodInMs * pulsesInHz) / (10 ** 3 * prescaler)
        if (arr <= arrMax && arr % 1 === 0){ 
            solutions.push({prescaler, arr})
        }
    }
    return solutions
}

export const getARR = (pulsesInHz, periodInMs, prescaler) => {
    /*
    let ticksInHz = pulsesInHz / prescaler
    let secondsPerTick = 1 / ticksInHz;
    let nsPerTick = 10**9 /ticksInHz;

    let arr = periodInNs / nsPerTick
    let directArr = periodInNs / ( 10**9 / (pulsesInHz / prescaler))
    let directerArr = (periodInNs * pulsesInHz) / ( 10**9 * prescaler)
    */

    return (periodInMs * pulsesInHz) / (10 ** 3 * prescaler)
}

export const getPrescaler = (pulsesInHz, periodInMs, arr) => {
    /*
    let nsPerTick = periodInNs / arr
    let sPerTick = nsPerTick / 10**9
    let ticksInHz = 1 / sPerTick

    let prescaler = pulsesInHz / ticksInHz
    let better1 = pulsesInHz / (1 / ((periodInNs / arr) / 10**9))
    let better2 = pulsesInHz / (10**9 / (periodInNs / arr))
    let better3 = (pulsesInHz * periodInNs) / (arr * 10**9)
    */

    return (periodInMs * pulsesInHz) / (10 ** 3 * arr)
}

export const getPeriodInSeconds = (pulsesInHz, prescaler, arr) => {
    /*
    let ticksInHz = pulsesInHz / prescaler
    let secondsPerTick = 1 / ticksInHz
    let period = secondsPerTick * arr
    let better = prescaler * arr / pulsesInHz
    */

    return prescaler * arr / pulsesInHz
}

export const getPulsesInHz = (periodInMs, arr, prescaler) => {
    /*
    let nsPerPulse = periodInNs / (arr * prescaler)
    let secondsPerPulse = nsPerPulse / 10 ** 9
    let pulsesInHz = 1 / secondsPerPulse

    let better1 = 1 / (periodInNs / (arr * prescaler * 10 ** 9))
    let better2 = (arr * prescaler * 10 ** 9) / periodInNs
    */

    return (arr * prescaler * 10 ** 3) / periodInMs
}

// Duty Cycle

export const getCCR = (arr, upDownMode, pwmMode, cyclePercent) => {
    // Up-Counting
    let arrCycle = Math.floor(arr * (cyclePercent/100))
    
    if (upDownMode === 0) { 
        if(pwmMode === 1) return arrCycle
        if(pwmMode === 2) return arr - arrCycle
    }
    // Down-Counting
    if (upDownMode === 1) {
        if(pwmMode === 1) return arrCycle
        if(pwmMode === 2) return arr - arrCycle - 1
    }

    
    // cycle = 80%
    // arr   = 100
    // 80%ARR= 80
    
    // Up-Counting
    //      Mode 1 => if CNT < CCR
    //      Mode 1: CCR = 80

    //      Mode 2 => if CNT >= CCR
    //      Mode 2: CCR = 20

    // Down-Counting
    //      Mode 1 => if CNT <= CCR
    //      Mode 1: CCR = 80

    //      Mode 2 => if CNT > CCR
    //      Mode 2: CCR = 10
    
}



// Testing

// let pulsesInHz = 10 ** 7
// let periodInNs = 62 * 1000000
// let arrMax = 2 ** 32

// let solutions = getPrescalerAndARR(pulsesInHz, periodInNs, arrMax)
// console.table(solutions)

// PWM

// let ARR = 10
// let cyclePercent = 80
// console.log(getCCR(ARR, 0, 1, cyclePercent))
// console.log(getCCR(ARR, 0, 2, cyclePercent))
// console.log(getCCR(ARR, 1, 1, cyclePercent))
// console.log(getCCR(ARR, 1, 2, cyclePercent))
