import { PlusSmIcon } from '@heroicons/react/solid'

export default function ExtensionButton({ action }) {
    return (
        <div className="pt-8 pb-4">
            <div className="relative">
                <div className="absolute inset-0 flex items-center" aria-hidden="true">
                    <div className="w-full border-t border-gray-300" />
                </div>
                <div className="relative flex justify-center">
                    <button
                        type="button"
                        className="inline-flex items-center shadow-sm px-4 py-1.5 border border-gray-300 text-sm leading-5 font-medium rounded-full text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        onClick={action}
                    >
                        <PlusSmIcon className="-ml-1.5 mr-1 h-5 w-5 text-gray-400" aria-hidden="true" />
                        <span>Toggle Duty Cycle Inputs</span>
                    </button>
                </div>
            </div>
        </div>
        
    )
}