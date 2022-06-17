export const InputCompare = ({ label, description, option1, option2, comparisons = [], ...rest }) => (
    <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
        <label className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">{label}</label>
        <div className="mt-1 sm:mt-0 sm:col-span-1 flex items-center">
            <p className="text-sm font-medium mr-2">{option1}</p>
            <select
                className="max-w-lg block focus:ring-indigo-500 focus:border-indigo-500 shadow-sm sm:max-w-xs sm:text-sm border-gray-300 rounded-md mx-2"
                {...rest}
            >
                {comparisons.map((comparison, i) => (
                    <option value={comparison.value} key={i}>{comparison.label}</option>
                ))}
            </select>
            <p className="text-sm font-medium ml-2">{option2}</p>
        </div>
        <div className="mt-1 sm:mt-0 sm:col-span-1">
            {description &&
                <p className="text-xs text-gray-500 font-light mt-1">{description}</p>
            }
        </div>
    </div>
)