import { InputNumber } from "./form/input-number";
import { InputSelect } from "./form/input-select";
import ExtensionButton from "./extension-button";

export const CalculatorForm = () => (
    <form className="space-y-8 divide-y divide-gray-200">
        <div className="space-y-8 divide-y divide-gray-200 sm:space-y-5">
            <div className="pt-8 space-y-6 sm:pt-10 sm:space-y-5">
                <div>
                    <h3 className="text-lg leading-6 font-medium text-gray-900">Default Inputs</h3>
                    <p className="mt-1 max-w-2xl text-sm text-gray-500">Fill in all the given information and see the magic happen.</p>
                </div>
                <div className="space-y-6 sm:space-y-5">
                    <InputNumber
                        label="Pulses [Hz]"
                        defaultValue={84_000_000}
                        description="Describes the incoming frequency from either the internal clock or an other timers."
                    />
                    <InputNumber
                        label="Prescaler"
                        defaultValue={8_400}
                        description="Scales the incoming pulse by a defined value. Only every n-th pulse is sent to the counter."
                    />
                    <InputNumber
                        label="AAR"
                        defaultValue={2_000}
                        description="Auto Reload Register. Defines after how many ticks the counter should reset the initial state."
                    />
                    <InputNumber
                        label="Ticks [Hz]"
                        defaultValue={10_000}
                        description="Ticks equal the output for the prescaler (Pulse/Prescaler)."
                    />
                    <InputNumber
                        label="Period [ns]"
                        defaultValue={100_000}
                        description="Time it takes for one tick."
                    />
                    <InputNumber
                        label="Time to Overflow [ms"
                        defaultValue={200}
                        description="Time it takes for one tick."
                    />
                    <InputSelect
                        label="Mode"
                        defaultValue={0}
                        options={[
                            { value: 0, label: 'Up Counting' },
                            { value: 1, label: 'Down Counting' }
                        ]}
                    />
                </div>
            </div>
            
            <ExtensionButton/>
            
            <div className="pt-8 space-y-6 sm:pt-10 sm:space-y-5">
                <div>
                    <h3 className="text-lg leading-6 font-medium text-gray-900">Duty Cycle Inputs</h3>
                    <p className="mt-1 max-w-2xl text-sm text-gray-500">Fill in all the given information and see the magic happen.</p>
                </div>
                <div className="space-y-6 sm:space-y-5">
                    <InputNumber
                        label="Duty Cycle [%]"
                    />
                    <InputNumber
                        label="CCR"
                    />
                    <InputSelect
                        label="PWM Mode"
                        defaultValue={0}
                        options={[
                            { value: 0, label: 'Mode 1' },
                            { value: 1, label: 'Mode 1' }
                        ]}
                    />
                </div>
            </div>
        </div>
        <div className="pt-5">
            <button
                type="submit"
                className="justify-center py-2 px-10 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
                Calculate
            </button>
        </div>
    </form>
)