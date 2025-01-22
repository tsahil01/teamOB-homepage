import { motion } from "framer-motion";
import { CardWithImg } from "./card-with-side-img/CardWithImg";
import { Something } from "./companies/companies-trust";
import { Features } from "./features/feature-component";
import { HeroSection } from "./hero/hero";
import { Navbar } from "./nav/navbar";
import { Partners } from "./partners/main";
import { BeforeAfterCard } from "./before-after-card/before-after-card";
// import { HeroSection2 } from "./hero/hero2";

export function Home() {
    return (
        <>
            <div className="flex flex-col min-h-screen bg-primary/5 mx-auto">
                <motion.main 
                    className="flex flex-col mx-auto mt-9 px-3" 
                    initial={{ opacity: 0, y: 20 }} 
                    animate={{ opacity: 1, y: 0 }} 
                    transition={{ duration: 0.5 }}
                >
                    <Navbar />
                    <HeroSection />
                    {/* <HeroSection2 /> */}
                    <Partners />
                    <Features />
                    <CardWithImg />
                    <BeforeAfterCard />
                    <Something />
                </motion.main>
            </div>
        </>
    );
}
