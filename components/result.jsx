import { CALC_PRESCALER_ARR } from "../utils/calculator-mode"

export const Result = ({ result }) => {
    if (!result) return <></>

    return (
        <div className="mt-20">

            <div className="my-5">
                <h3 className="text-lg leading-6 font-medium text-gray-900">Inputs</h3>
                <p className="mt-1 max-w-2xl text-sm text-gray-500">Used inputs for this calculation</p>
            </div>
            <div className="my-5">
                <div className="border-t border-gray-200 py-5 sm:p-0 mt-2">
                    <dl className="sm:divide-y sm:divide-gray-200">
                        {result.inputs.map((input, i) => (

                            <div key={i} className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-sm font-medium text-gray-500">{input.displayName} {input.unit && <>[{input.unit}]</>}</dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{input.value} {input.unit && <>{input.unit}</>}</dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>
            <div className="my-5">
                <h3 className="text-lg leading-6 font-medium text-gray-900">Results</h3>
                <p className="mt-1 max-w-2xl text-sm text-gray-500">This is the latest calculated result.</p>
            </div>

            <div className="my-5">
                {result.mode === CALC_PRESCALER_ARR &&
                    <table className="min-w-full divide-y divide-gray-300">
                        <thead className="bg-gray-50">
                            <tr className="divide-x divide-gray-200">
                                {result.output.map((col, i) => (
                                    <th key={i} scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">
                                        {col.displayName} {col.unit && <>[{col.unit}]</>}
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {result.value.map((row, i) => (
                                <tr key={i} className="divide-x divide-gray-200">
                                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{row.prescaler}</td>
                                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{row.arr}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                }
                {result.mode !== CALC_PRESCALER_ARR &&
                    <div className="border-t border-gray-200 py-5 sm:p-0 mt-2">
                        <dl className="sm:divide-y sm:divide-gray-200">
                            <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-sm font-medium text-gray-500">{result.output.displayName} {result.output.unit && <>[{result.output.unit}]</>}</dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{result.value} {result.output.unit && <>{result.output.unit}</>}</dd>
                            </div>
                        </dl>
                    </div>
                }
            </div>
        </div>
    )
}