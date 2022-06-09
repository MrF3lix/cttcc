const Form = () => (
    <form class="space-y-8 divide-y divide-gray-200">
        <div class="space-y-8 divide-y divide-gray-200 sm:space-y-5">

        
            <div class="pt-8 space-y-6 sm:pt-10 sm:space-y-5">

                <div>
                    <h3 class="text-lg leading-6 font-medium text-gray-900">Default Inputs</h3>
                    <p class="mt-1 max-w-2xl text-sm text-gray-500">Fill in all the given information and see the magic happen.</p>
                </div>

                <div class="space-y-6 sm:space-y-5">

                    <div class="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                        <label for="first-name" class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"> Pulses </label>
                        <div class="mt-1 sm:mt-0 sm:col-span-2">
                            <input type="number" name="pulses" id="pulses" class="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"></input>
                        </div>
                    </div>

                    <div class="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                        <label for="last-name" class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"> Prescaler </label>
                        <div class="mt-1 sm:mt-0 sm:col-span-2">
                            <input type="number" name="Prescaler" id="Prescaler" class="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"></input>
                        </div>
                    </div>

                    <div class="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                        <label for="last-name" class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"> Ticks </label>
                        <div class="mt-1 sm:mt-0 sm:col-span-2">
                            <input type="number" name="ticks" id="ticks" class="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"></input>
                        </div>
                    </div>

                    <div class="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                        <label for="last-name" class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"> Period </label>
                        <div class="mt-1 sm:mt-0 sm:col-span-2">
                            <input type="number" name="period" id="period" class="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"></input>
                        </div>
                    </div>

                    <div class="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                        <label for="counting" class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"> Mode </label>
                        <div class="mt-1 sm:mt-0 sm:col-span-2">
                            <select id="mode-counting" name="mode-counting" class="max-w-lg block focus:ring-indigo-500 focus:border-indigo-500 w-full shadow-sm sm:max-w-xs sm:text-sm border-gray-300 rounded-md">
                                <option>Up-Counting</option>
                                <option>Down-Counting</option>
                            </select>
                        </div>
                    </div>

                </div>
            </div>

            <div class="pt-8 space-y-6 sm:pt-10 sm:space-y-5">

                <div>
                    <h3 class="text-lg leading-6 font-medium text-gray-900">Duty Cycle Inputs</h3>
                    <p class="mt-1 max-w-2xl text-sm text-gray-500">Fill in all the given information and see the magic happen.</p>
                </div>

                <div class="space-y-6 sm:space-y-5">

                    <div class="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                        <label for="first-name" class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"> Duty Cicle in % </label>
                        <div class="mt-1 sm:mt-0 sm:col-span-2">
                            <input type="number" name="duty-cicle" id="duty-cicle" class="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"></input>
                        </div>
                    </div>

                    <div class="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                        <label for="last-name" class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"> CCR </label>
                        <div class="mt-1 sm:mt-0 sm:col-span-2">
                            <input type="number" name="ccr" id="ccr" class="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"></input>
                        </div>
                    </div>

                    <div class="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                        <label for="country" class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"> PWM Mode </label>
                        <div class="mt-1 sm:mt-0 sm:col-span-2">
                            <select id="mode-ccr" name="mode-ccr" autocomplete="country-name" class="max-w-lg block focus:ring-indigo-500 focus:border-indigo-500 w-full shadow-sm sm:max-w-xs sm:text-sm border-gray-300 rounded-md">
                                <option>PWM Mode 1</option>
                                <option>PWM Mode 2</option>
                            </select>
                        </div>
                    </div>

                </div>
            </div>

        </div>


        <div class="pt-5">
            <div class="">
                <button type="submit" class="ml-3 justify-center py-2 px-10 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Calculate</button>
            </div>
        </div>
    </form>

)

export default Form