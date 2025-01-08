import * as React from "react"
import Autoplay from "embla-carousel-autoplay"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { RightChartOne } from "./right-chart-one"
import { RightChartThree } from "./right-chart-three"
import { RightChartTwo } from "./right-chart-two"

export function RightSide() {
  const plugin = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true })
  )

  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent className="shadow-lg ">
        <CarouselItem>
            <RightChartOne />
        </CarouselItem>
        <CarouselItem>
            <RightChartTwo />
        </CarouselItem>
        <CarouselItem>
            <RightChartThree />
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}
