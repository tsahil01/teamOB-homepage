import { Card } from "@/components/ui/card"
import { RightChartThree } from "./right-chart-three"

export function HeroSection() {
    return (
        <section className="container mx-auto py-20">
            <Card className="overflow-hidden bg-background/60 backdrop-blur supports-[backdrop-filter]:bg-background/60">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-12 p-8">
                    <div className="flex-1 text-center lg:text-left space-y-6">
                        <h1 className="text-4xl lg:text-6xl font-bold tracking-tighter text-blue-950 dark:text-blue-100">
                            Smart Employee Monitoring
                            <span className="text-blue-800 dark:text-blue-500"> Solution</span>
                        </h1>
                        <p className="text-muted-foreground text-lg max-w-[650px]">
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
                    <div className="flex-1 w-full max-w-[500px] aspect-square">
                        <RightChartThree />
                    </div>
                </div>
            </Card>
            <div className="absolute -z-10 top-0 right-0 w-72 h-72 bg-primary/20 rounded-full blur-3xl" />
            <div className="absolute -z-10 bottom-0 left-0 w-72 h-72 bg-secondary/20 rounded-full blur-3xl" />
        </section>
    )
}

