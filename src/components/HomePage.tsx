
import { CardWithImg } from "./card-with-side-img/CardWithImg";
import { Something } from "./companies/companies-trust";
import { Features } from "./features/feature-component";
import { HeroSection } from "./hero/hero";
import { Navbar } from "./nav/navbar";
import { Partners } from "./partners/main";

export function Home() {
    return <>
        <div className="flex flex-col min-h-screen bg-primary/5 mx-auto">
            <main className="flex flex-col mx-auto mt-9 px-3">
                <Navbar />
                <HeroSection />
                <Partners />
                <Features />
                <CardWithImg />
                <Something />
            </main>
        </div>
    </>
}