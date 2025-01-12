
import { RightChartThree } from "./right-chart-three";

export function HeroSection() {
    return <>
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 my-20 container mx-auto">
            <div className="flex-1 text-center lg:text-left">
                <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 dark:text-gray-50 mb-6">
                    Smart Employee Monitoring
                    <span className="text-blue-600"> Solution</span>
                </h1>
                <p className="text-gray-400 mb-8 max-w-[650px] text-lg text-muted-foreground">
                    Boost productivity and ensure transparency with our comprehensive employee monitoring system. Get real-time insights into workplace activities.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                    <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                        Start Free Trial
                    </button>
                    <button className="border border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-3 rounded-lg font-semibold transition-colors">
                        Watch Demo
                    </button>
                </div>
            </div>

            <div className="flex-1 overflow-auto">
                {/* <RightChart/> */}
                <RightChartThree />

                {/* Background Decorative Elements */}
                {/* <div className="absolute -z-10 top-0 right-0 w-72 h-72 dark:bg-green-950 rounded-full blur-3xl"></div>
                <div className="absolute -z-10 bottom-0 left-0 w-72 h-72 dark:bg-blue-950 rounded-full blur-3xl"></div> */}
            </div>
        </div>
    </>
}