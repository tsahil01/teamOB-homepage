"use client"

import { CircleCheck } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "framer-motion"

export function BeforeAfterCard() {
    const data = [
        {
            before: {
                title: "Most of the working hours are consumed by unproductive activities.",
                description:
                    "The average employee spends 2 hours a day on unproductive activities. This is a huge loss of time and money for the company.",
                points: ["Disjointed communication", "Inefficient processes", "Lack of visibility", "Poor collaboration"],
            },
        },
        {
            after: {
                title: "Increase productivity and efficiency with a single platform.",
                description:
                    "With a single platform, you can streamline your communication, processes, and collaboration. This will help you save time and money.",
                points: ["Centralized communication", "Automated processes", "Real-time visibility", "Seamless collaboration"],
            },
        },
    ]

    const cardVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    }

    return (
        <div className="container px-4 mx-auto py-20 p-4 border-t-2">
            <div className="text-center mb-12">
                <h2 className="text-blue-900 text-3xl font-bold tracking-tight mb-4">
                Convert extensive data into Meaningful Insights
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                    Teamob.ai offers everything you need to enhance collaboration, streamline workflows, and boost team productivity.
                </p>
            </div>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                <motion.div initial="hidden" animate="visible" variants={cardVariants} transition={{ duration: 0.5 }}>
                    <Card className="h-full overflow-hidden transition-shadow duration-300 bg-white shadow-lg hover:shadow-xl">
                        <CardHeader className="pb-4">
                            <div className="flex items-center justify-between mb-4">
                                <Badge className="px-3 py-1 text-sm font-semibold bg-red-100 text-red-800">BEFORE</Badge>
                                <span className="text-2xl font-bold text-gray-800">Teamob.ai</span>
                            </div>
                            <CardTitle className="mb-2 text-2xl font-bold leading-tight text-gray-900">
                                {data[0].before?.title}
                            </CardTitle>
                            <CardDescription className="text-base text-gray-600">{data[0].before?.description}</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <ul className="space-y-3">
                                {data[0].before?.points.map((text, index) => (
                                    <motion.li
                                        key={index}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                        className="flex items-center gap-3"
                                    >
                                        <CircleCheck className="flex-shrink-0 w-5 h-5 text-red-500" />
                                        <span className="text-gray-700">{text}</span>
                                    </motion.li>
                                ))}
                            </ul>
                        </CardContent>
                    </Card>
                </motion.div>

                {/* After Card */}
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={cardVariants}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <Card className="h-full overflow-hidden transition-shadow duration-300 bg-blue-900 shadow-lg hover:shadow-xl">
                        <CardHeader className="pb-4">
                            <div className="flex items-center justify-between mb-4">
                                <Badge className="px-3 py-1 text-sm font-semibold bg-green-100 text-green-800">AFTER</Badge>
                                <span className="text-2xl font-bold text-white">Teamob.ai</span>
                            </div>
                            <CardTitle className="mb-2 text-2xl font-bold leading-tight text-white">{data[1].after?.title}</CardTitle>
                            <CardDescription className="text-base text-blue-200">{data[1].after?.description}</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <ul className="space-y-3">
                                {data[1].after?.points.map((text, index) => (
                                    <motion.li
                                        key={index}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                        className="flex items-center gap-3"
                                    >
                                        <CircleCheck className="flex-shrink-0 w-5 h-5 text-green-400" />
                                        <span className="text-blue-100">{text}</span>
                                    </motion.li>
                                ))}
                            </ul>
                        </CardContent>
                    </Card>
                </motion.div>
            </div>
        </div>
    )
}

