

export function HeroSection2() {
    return <>
        <div className="flex flex-col items-center justify-between gap-12 mt-20 mb-10 container mx-auto">
            <div className="flex-1 text-center items-center justify-center lg:text-center">
                <h1 className="text-4xl lg:text-6xl font-bold text-blue-950 dark:text-gray-50 mb-6">
                    Smart Employee Monitoring
                    <span className="text-blue-600"> Solution</span>
                </h1>
                <p className="text-gray-400 mb-8 mx-auto text-center max-w-2xl text-lg text-muted-foreground">
                    Boost productivity and ensure transparency with our comprehensive employee monitoring system. Get real-time insights into workplace activities.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-cebter">
                    <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                        Start Free Trial
                    </button>
                    <button className="border border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-3 rounded-lg font-semibold transition-colors">
                        Watch Demo
                    </button>
                </div>
            </div>
        </div>
    </>
}