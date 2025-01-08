import { Navbar } from "./nav/navbar";

export function Home() {
    return <>
        <div className="flex flex-col h-screen w-screen">
            <main className="flex flex-col container mx-auto mt-9">
                <Navbar/>
            </main>
        </div>
    </>
}