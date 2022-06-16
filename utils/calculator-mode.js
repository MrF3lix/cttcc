export const getCalculatorMode = (input) => {

    if (hasPulsePeriodArr(input)) {
        return 0
    }

    if (hasPulsePeriodPrescaler(input)) {
        return 1
    }

    if (hasPulsePeriod(input)) {
        return 2
    }

    if (hasPulseArrPrescaler(input)) {
        return 3
    }

    if (hasPeriodArrPrescaler(input)) {
        return 4
    }

    return -1
}

const hasPulsePeriod = input => exist(input.pulse) && exist(input.period)
const hasPulsePeriodArr = input => exist(input.pulse) && exist(input.period) && exist(input.arr)
const hasPulsePeriodPrescaler = input => exist(input.pulse) && exist(input.period) && exist(input.prescaler)
const hasPulseArrPrescaler = input => exist(input.pulse) && exist(input.arr) && exist(input.prescaler)
const hasPeriodArrPrescaler = input => exist(input.pulse) && exist(input.period) && exist(input.prescaler)

const exist = val => val && val.length > 0
