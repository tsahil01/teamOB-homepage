
import { Features } from "./features/feature-component";
import { HeroSection } from "./hero/hero";
import { Navbar } from "./nav/navbar";

export function Home() {
    return <>
        <div className="flex flex-col min-h-screen w-screen bg-primary/5">
            <main className="flex flex-col mx-auto mt-9">
                <Navbar />
                <HeroSection />
                <Features />
            </main>
        </div>
    </>
}