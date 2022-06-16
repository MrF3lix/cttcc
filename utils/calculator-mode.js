export const CALC_PRESCALER_ARR = 0
export const CALC_PRESCALER = 1
export const CALC_ARR = 2
export const CALC_PERIOD = 3
export const CALC_PULSES = 4
export const UNKNOWN_OPERATION = -1

export const getCalculatorMode = (input) => {
    if (hasPulsePeriodArr(input)) {
        return CALC_PRESCALER
    }

    if (hasPulsePeriodPrescaler(input)) {
        return CALC_ARR
    }

    if (hasPulsePeriod(input)) {
        return CALC_PRESCALER_ARR
    }

    if (hasPulseArrPrescaler(input)) {
        return CALC_PERIOD
    }

    if (hasPeriodArrPrescaler(input)) {
        return CALC_PULSES
    }

    return UNKNOWN_OPERATION
}

const hasPulsePeriod = input => exist(input.pulse) && exist(input.period)
const hasPulsePeriodArr = input => exist(input.pulse) && exist(input.period) && exist(input.arr)
const hasPulsePeriodPrescaler = input => exist(input.pulse) && exist(input.period) && exist(input.prescaler)
const hasPulseArrPrescaler = input => exist(input.pulse) && exist(input.arr) && exist(input.prescaler)
const hasPeriodArrPrescaler = input => exist(input.pulse) && exist(input.period) && exist(input.prescaler)

const exist = val => val && val.length > 0
