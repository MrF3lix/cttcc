import { useState } from "react"
import { CalculatorForm } from "../components/calculator-form"
import { Result } from "../components/result"
import {calcARR, calcPrescaler, calcPrescalerARR, calcPulses, calcPeriod, calcCCR} from "../utils/calculator"
import {
    getCalculatorMode,
    CALC_PRESCALER_ARR,
    CALC_PRESCALER,
    CALC_ARR,
    CALC_PERIOD,
    CALC_PULSES,
    CALC_CCR
} from "../utils/calculator-mode"

const variables = {
    //Default
    'pulses': { displayName: 'Pulses', unit: 'Hz' },
    'prescaler': { displayName: 'Prescaler' },
    'arr': { displayName: 'ARR' },
    'ticks': { displayName: 'Ticks', unit: 'Hz' },
    'period': { displayName: 'Period', unit: 'ms' },
    // Duty Cycle
    'counting': { displayName: 'Counting Mode' },
    'comparison': { displayName: 'PWM Comparison' },
    'cycle': { displayName: 'Duty Cycle', unit: '%' },
    'ccr': { displayName: 'CCR' },
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
        let inputs = Object.keys(data).map(k => ({ ...variables[k], value: data[k] })).filter(i => i.value && i.value.length > 0)
        let output = undefined

        switch (mode) {
            case CALC_PRESCALER_ARR:
                res = calcPrescalerARR(data.pulses, data.period)
                output = [variables['prescaler'], variables['arr']]
                break
            case CALC_PRESCALER:
                res = calcPrescaler(data.pulses, data.period, data.arr)
                output = variables['prescaler']
                break
            case CALC_ARR:
                res = calcARR(data.pulses, data.period, data.prescaler)
                output = variables['arr']
                break
            case CALC_PERIOD:
                res = calcPeriod(data.pulses, data.prescaler, data.arr)
                output = variables['period']
                break
            case CALC_PULSES:
                res = calcPulses(data.period, data.arr, data.prescaler)
                output = variables['pulses']
                break
            
            case CALC_CCR:
                res = calcCCR(data.arr, data.comparison, data.cycle)
                output = variables['ccr']
                break
            
            default:
                setError("Could not find a value to calculate. Are you missing some input values?")
                break
        }

        setResult({ value: res, mode, inputs, output })
    }

    return (
        <div className="max-w-7xl mx-auto py-6 px-6 lg:px-8">
            <div className="text-center mt-16">
                <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                    <span className="block xl:inline">Timer/Counter </span>
                    <span className="block text-indigo-600 xl:inline">Calculator</span>
                </h1>
                <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">A simple calculator for all your CT2 questions considering Timers and Counters.</p>
                <p className="mt-1 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-1 md:text-xl md:max-w-3xl">By Felix Saaro and Niklas van der Heide</p>
            </div>
            <CalculatorForm onSubmit={onCalculateFormSubmit} error={error} />
            <Result result={result} />
        </div>
    )
}

export default Index