import { LeftContent } from "./LeftContent"
import { RightContent } from "./RightContent"

export function CardWithImg() {
  const img = "https://www.teamob.ai/images/TeamOB%20-%20A%20BPM%20Suite%20(BPMS).png"

  return (
    <section className="container p-4 border-t-2">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
        <LeftContent />
        <RightContent imgUrl={img} />
      </div>
    </section>
  )
}



