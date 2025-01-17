export function RightContent({ imgUrl }: { imgUrl: string }) {
    return (
      <div className="relative w-full max-w-md mx-auto lg:max-w-none flex justify-end">
        <img
          src={imgUrl || "/placeholder.svg"}
          alt="Featured Image"
          className="object-cover rounded-2xl"
        />
      </div>
    )
  }
  