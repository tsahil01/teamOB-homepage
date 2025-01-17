import { InfiniteMovingCards } from "../ui/infinite-moving-cards";

export function Partners() {
    return (
        <div className="container py-10">
            <div className="rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden">
                <InfiniteMovingCards
                    items={testimonials}
                    direction="right"
                    speed="fast"
                />
            </div>
        </div>
    );
}






const testimonials = [
    {
        imgUrl: "https://www.teamob.ai/images/brand-img1.jpg"
    },
    {
        imgUrl: "https://www.teamob.ai/images/brand-img2.jpg"
    },
    {
        imgUrl: "https://www.teamob.ai/images/brand-img3.jpg"
    },
    {
        imgUrl: "https://www.teamob.ai/images/brand-img4.jpg"
    },
    {
        imgUrl: "https://www.teamob.ai/images/brand-img5.jpg"
    },
    {
        imgUrl: "https://www.teamob.ai/images/brand-img06.jpg"
    },
    {
        imgUrl: "https://www.teamob.ai/images/brand-img07.jpg"
    }
];
