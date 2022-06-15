import { CalculatorForm } from "../components/calculator-form"

const Index = () => (
  <div className="max-w-7xl mx-auto py-6 px-6 lg:px-8">
    <div className="text-center mt-24">
      <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
        <span className="block xl:inline">Timer/Counter </span>
        <span className="block text-indigo-600 xl:inline">Calculator</span>
      </h1>
      <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">A simple to use calculator for all your CT2 exam questions considering Timers and Counters. By Felix Saaro and Niklas van der Heide</p>
    </div>
    <CalculatorForm />
  </div>
)

export default Index