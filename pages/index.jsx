import { useState } from "react"
import { Title } from "../components/title"
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
    'pulses': { displayName: 'Pulses', unit: 'Hz' },
    'prescaler': { displayName: 'Prescaler' },
    'arr': { displayName: 'ARR' },
    'ticks': { displayName: 'Ticks', unit: 'Hz' },
    'period': { displayName: 'Period', unit: 'ms' },
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
            <Title/>
            <CalculatorForm onSubmit={onCalculateFormSubmit} error={error} />
            <Result result={result} />
        </div>
    )
}

export default Index