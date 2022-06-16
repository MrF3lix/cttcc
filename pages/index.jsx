import { useState } from "react"
import { CalculatorForm } from "../components/calculator-form"
import { Result } from "../components/result"
import { getARR, getPrescaler, getPrescalerAndARR, getPulsesInHz } from "../utils/calculator"
import {
    getCalculatorMode,
    CALC_PRESCALER_ARR,
    CALC_PRESCALER,
    CALC_ARR,
    CALC_PERIOD,
    CALC_PULSES
} from "../utils/calculator-mode"

const inputFields = {
    'pulse': { displayName: 'Pulses', unit: 'Hz' },
    'prescaler': { displayName: 'Prescaler' },
    'arr': { displayName: 'ARR' },
    'ticks': { displayName: 'Ticks', unit: 'Hz' },
    'period': { displayName: 'Period', unit: 'ms' },
}

const Index = () => {
    const [error, setError] = useState()
    const [result, setResult] = useState()

    const onCalculateFormSubmit = (e) => {
        e.preventDefault()
        setError()

        const formData = new FormData(e.target)
        const data = Object.fromEntries(formData)
        const mode = getCalculatorMode(data)

        let res = undefined
        let inputs = Object.keys(data).map(k => ({ ...inputFields[k], value: data[k] })).filter(i => i.value && i.value.length > 0)

        switch (mode) {
            case CALC_PRESCALER_ARR:
                res = getPrescalerAndARR(data.pulse, data.period)
                break
            case CALC_PRESCALER:
                res = getPrescaler(data.pulse, data.period, data.arr)
                break
            case CALC_ARR:
                res = getARR(data.pulse, data.period, data.prescaler)
                break
            case CALC_PERIOD:
                res = getPeriodInSeconds(data.pulse, data.prescaler, data.arr)
                break
            case CALC_PULSES:
                res = getPulsesInHz(data.period, data.arr, data.prescaler)
            default:
                setError("Could not find a value to calculate. Are you missing some input values?")
                break
        }

        setResult({ value: res, mode, inputs })
    }

    return (
        <div className="max-w-7xl mx-auto py-6 px-6 lg:px-8">
            <div className="text-center mt-24">
                <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                    <span className="block xl:inline">Timer/Counter </span>
                    <span className="block text-indigo-600 xl:inline">Calculator</span>
                </h1>
                <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">A simple to use calculator for all your CT2 exam questions considering Timers and Counters. By Felix Saaro and Niklas van der Heide</p>
            </div>
            <CalculatorForm onSubmit={onCalculateFormSubmit} error={error} />
            <Result result={result} />
        </div>
    )
}

export default Index