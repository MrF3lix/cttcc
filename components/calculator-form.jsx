import { InputNumber } from "./form/input-number";
import { InputSelect } from "./form/input-select";
import ExtensionButton from "./extension-button";
import { useState } from "react";

export const CalculatorForm = ({onSubmit}) => {
    
    const [displayDCInputs, setDisplayDCInputs ]= useState(false)
    
    return (
        <form className="space-y-8 divide-y divide-gray-200"onSubmit={onSubmit}>
            <div className="space-y-8 divide-y divide-gray-200 sm:space-y-5">
                <div className="pt-8 space-y-6 sm:pt-10 sm:space-y-5">
                    <div>
                        <h3 className="text-lg leading-6 font-medium text-gray-900">Default Inputs</h3>
                        <p className="mt-1 max-w-2xl text-sm text-gray-500">Fill in all the given information and see
                            the magic happen.</p>
                    </div>
                    <div className="space-y-6 sm:space-y-5">
                        <InputNumber
                            label="Pulses [Hz]"
                            id="pulse"
                            description="Describes the incoming frequency from either the internal clock or an other timers."
                        />
                        <InputNumber
                            label="Prescaler"
                            id="prescaler"
                            description="Scales the incoming pulse by a defined value. Only every n-th pulse is sent to the counter."
                        />
                        <InputNumber
                            label="ARR"
                            id="arr"
                            description="Auto Reload Register. Defines after how many ticks the counter should reset the initial state."
                        />
                        <InputNumber
                            label="Ticks [Hz]"
                            id="ticks"
                            description="Ticks equal the output for the prescaler (Pulse/Prescaler)."
                        />
                        {/*<InputNumber
                            label="Tick [ns]"
                            defaultValue={100_000}
                            description="Time it takes for one tick."
                        />*/}
                        <InputNumber
                            label="Period [ms]"
                            id="period"
                            description="Time it takes to reach the overflow (Tick * AAR)"
                        />
                        <InputSelect
                            label="Mode"id="mode"
                            defaultValue={0}
                            options={[
                                {value: 0, label: 'Up Counting'},
                                {value: 1, label: 'Down Counting'}
                            ]}
                        />
                    </div>
                </div>

                <ExtensionButton action={() => setDisplayDCInputs(!displayDCInputs)} />

                {displayDCInputs &&
                    <div className="pt-8 space-y-6 sm:pt-10 sm:space-y-5">
                        <div>
                            <h3 className="text-lg leading-6 font-medium text-gray-900">Duty Cycle Inputs</h3>
                            <p className="mt-1 max-w-2xl text-sm text-gray-500">Fill in all the given information and see
                                the magic happen.</p>
                        </div>
                        <div className="space-y-6 sm:space-y-5">
                            <InputNumber
                                label="Duty Cycle [%]"id="duty-cycle"
                            />
                            <InputNumber
                                label="CCR"
                            id="cct"/>
                            <InputSelect
                                label="PWM Mode"id="pwm-mode"
                                defaultValue={0}
                                options={[
                                    {value: 0, label: 'Mode 1'},
                                    {value: 1, label: 'Mode 1'}
                                ]}
                            />
                        </div>
                    </div>
                }    
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
}