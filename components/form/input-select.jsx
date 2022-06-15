export const InputSelect = ({ label, description, options = [], value, setValue, ...rest }) => (
    <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
        <label htmlFor="counting" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">{label}</label>
        <div className="mt-1 sm:mt-0 sm:col-span-1">
            <select
                className="max-w-lg block focus:ring-indigo-500 focus:border-indigo-500 w-full shadow-sm sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                {...rest}
            >
                {options.map((option, i) => (
                    <option value={option.value} key={i}>{option.label}</option>
                ))}
            </select>
        </div>
        <div className="mt-1 sm:mt-0 sm:col-span-1">
            {description &&
                <p className="text-xs text-gray-500 font-light mt-1">{description}</p>
            }
        </div>
    </div>
)