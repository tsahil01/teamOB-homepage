"use client"

import { TrendingUp } from "lucide-react"
import { CartesianGrid, Line, LineChart, XAxis } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

const chartData = [
  { month: "January", productivity: 10, stress: 80 },
  { month: "February", productivity: 50, stress: 76 },
  { month: "March", productivity: 65, stress: 74 },
  { month: "April", productivity: 71, stress: 70 },
  { month: "May", productivity: 72, stress: 67 }, // Drop in productivity
  { month: "June", productivity: 80, stress: 62 },
  { month: "July", productivity: 85, stress: 59 },
  { month: "August", productivity: 90, stress: 56 },
  { month: "September", productivity: 86, stress: 53 }, // Drop in productivity
  { month: "October", productivity: 92, stress: 40 },
  { month: "November", productivity: 95, stress: 37 },
  { month: "December", productivity: 98, stress: 20 },
];

const chartConfig = {
  productivity: {
    label: "Productivity",
    color: "hsl(var(--chart-2))", // Use your own color here
  },
  stress: {
    label: "Stress",
    color: "hsl(var(--chart-1))", // Use your own color here
  },
} satisfies ChartConfig

export function RightChartThree() {
  return (
    <Card className="flex-col w-full h-full bg-primary/5 z-10">
      <CardHeader>
        <CardTitle>
          Productivity & Stress Levels
        </CardTitle>
        <CardDescription>
        Trends after using Teamob for 1 year
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <LineChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={true}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
            <Line
              dataKey="productivity"
              type="monotone"  // Monotone creates a smooth curve
              stroke={chartConfig.productivity.color}
              strokeWidth={7}
              dot={true}
            />
            <Line
              dataKey="stress"
              type="monotone"  // Monotone creates a smooth curve
              stroke={chartConfig.stress.color}
              strokeWidth={7}
              dot={true}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
      <CardFooter>
        <div className="flex w-full items-start gap-2 text-sm">
          <div className="grid gap-2">
            <div className="flex items-center gap-2 font-medium leading-none">
              Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
            </div>
            <div className="flex items-center gap-2 leading-none text-muted-foreground">
              Showing trends for productivity and stress levels over the last year after using Teamob.
            </div>
          </div>
        </div>
      </CardFooter>
    </Card>
  )
}
