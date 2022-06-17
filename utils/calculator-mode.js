export const UNKNOWN_OPERATION = -1
// Default
export const CALC_PRESCALER_ARR = 0
export const CALC_PRESCALER = 1
export const CALC_ARR = 2
export const CALC_PERIOD = 3
export const CALC_PULSES = 4
// Duty Cycle
export const CALC_CCR = 5

export const getCalculatorMode = (input) => {
    
    // Duty Cycle
    
    if (hasAllDefault){
        if (hasModeCompCycle(input) && !exists(input.ccr)) {
            return CALC_CCR
        }
        
    }

    // Default
    
    if (hasPulsePeriodArr(input) && !exists(input.prescaler)) {
        return CALC_PRESCALER
    }

    if (hasPulsePeriodPrescaler(input) && !exists(input.arr)) {
        return CALC_ARR
    }

    if (hasPulsePeriod(input) && !exists(input.prescaler) && !exists(input.arr)) {
        return CALC_PRESCALER_ARR
    }

    if (hasPulseArrPrescaler(input) && !exists(input.period)) {
        return CALC_PERIOD
    }

    if (hasPeriodArrPrescaler(input) && !exists(input.pulses)) {
        return CALC_PULSES
    }
    
    return UNKNOWN_OPERATION
}

const hasPulsePeriod = input => exists(input.pulses) && exists(input.period)
const hasPulsePeriodArr = input => exists(input.pulses) && exists(input.period) && exists(input.arr)
const hasPulsePeriodPrescaler = input => exists(input.pulses) && exists(input.period) && exists(input.prescaler)
const hasPulseArrPrescaler = input => exists(input.pulses) && exists(input.arr) && exists(input.prescaler)
const hasPeriodArrPrescaler = input => exists(input.period) && exists(input.arr) && exists(input.prescaler)

const hasAllDefault = input => exists(input.pulses) && exists(input.prescaler) && exists(input.arr) && exists(input.period) 
const hasModeCompCycle = input => exists(input.counting) && exists(input.comparison) && exists(input.cycle)


const exists = val => val && val.length > 0
