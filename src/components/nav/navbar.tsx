import { AlarmClockCheck, MoveRight, Menu, KeySquare, BookOpen, Users, FileText, HelpCircle } from 'lucide-react'; // Add more icons as needed
import { Button } from "../ui/button";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { ThemeModeToggle } from "../mode-toggle";
import { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const navElements = [
    {
        title: "Solutions",
        icon: KeySquare,
        items: [
            {
                title: "Team Management",
                icon: FileText, // Add icon for the item
                description: "Streamline your team's workflow and boost productivity.",
                href: "#"
            },
            {
                title: "Time Tracking",
                icon: HelpCircle, // Add icon for the item
                description: "Track time efficiently across projects and teams.",
                href: "#"
            },
            {
                title: "Resource Planning",
                icon: FileText, // Add icon for the item
                description: "Optimize resource allocation and project scheduling.",
                href: "#"
            }
        ]
    },
    {
        title: "Resources",
        icon: BookOpen,
        items: [
            {
                title: "Documentation",
                icon: FileText, // Add icon for the item
                description: "Detailed guides and API references.",
                href: "#"
            },
            {
                title: "Case Studies",
                icon: HelpCircle, // Add icon for the item
                description: "Real-world success stories from our clients.",
                href: "#"
            },
            {
                title: "Support",
                icon: HelpCircle, // Add icon for the item
                description: "Get help from our expert support team.",
                href: "#"
            }
        ]
    },
    {
        title: "About us",
        icon: Users,
        items: [
            {
                title: "Company",
                icon: FileText, // Add icon for the item
                description: "Learn more about our mission and values.",
                href: "#"
            },
            {
                title: "Careers",
                icon: FileText, // Add icon for the item
                description: "Join our team and help us build the future.",
                href: "#"
            },
            {
                title: "Contact",
                icon: HelpCircle, // Add icon for the item
                description: "Get in touch with our sales and support teams.",
                href: "#"
            }
        ],
    }
];

function ListItem({ title, description, href, icon }: { title: string, description: string, href?: string, icon: JSX.Element }) {
    return (
        <li>
            <NavigationMenuLink asChild>
                <a href={href} className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                    <div className="flex items-center gap-2">
                        {icon && <span className="h-4 w-4">{icon}</span>} {/* Render icon */}
                        <div className="text-sm font-medium leading-none">{title}</div>
                    </div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        {description}
                    </p>
                </a>
            </NavigationMenuLink>
        </li>
    );
}

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="flex flex-col lg:flex-row justify-between p-4 rounded-2xl bg-primary/5 shadow-lg top-0 z-50">
            <div className="flex flex-row justify-between items-center w-full lg:w-auto">
                <div className="flex items-center gap-2">
                    <AlarmClockCheck className="h-8 w-8 text-blue-600" />
                    <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-blue-600 bg-clip-text text-transparent">
                        TeamOB
                    </span>
                </div>
                <div className="flex items-center gap-2 lg:hidden">
                    <ThemeModeToggle />
                    <Sheet open={isOpen} onOpenChange={setIsOpen}>
                        <SheetTrigger asChild>
                            <Button variant="outline" size="icon">
                                <Menu className="h-6 w-6" />
                                <span className="sr-only">Toggle menu</span>
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                            <nav className="flex flex-col gap-4">
                                {navElements.map((element) => (
                                    <div key={element.title} className="flex flex-col gap-2">
                                        <h2 className="text-lg font-semibold flex items-center gap-2">
                                            <element.icon className="h-5 w-5 text-blue-600" />
                                            {element.title}
                                        </h2>
                                        {element.items && (
                                            <ul className="grid gap-2">
                                                {element.items.map((item) => (
                                                    <ListItem
                                                        key={item.title}
                                                        title={item.title}
                                                        description={item.description}
                                                        href={item.href}
                                                        icon={<item.icon className="h-4 w-4 text-muted-foreground" />} // Render item icon here
                                                    />
                                                ))}
                                            </ul>
                                        )}
                                    </div>
                                ))}
                                <Button variant={"default"} size={"lg"} className="flex-row gap-2 bg-blue-600 text-white mt-4">
                                    <div className="text-white">Get Started</div>
                                    <MoveRight size={16} />
                                </Button>
                            </nav>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>

            <div className="hidden lg:flex flex-row items-center gap-4 mt-4 lg:mt-0">
                <NavigationMenu>
                    <NavigationMenuList>
                        {navElements.map((element) => (
                            <NavigationMenuItem key={element.title}>
                                <NavigationMenuTrigger className="flex items-center gap-2 bg-base">
                                    <element.icon className="h-5 w-5 text-blue-600" />
                                    {element.title}
                                </NavigationMenuTrigger>
                                {element.items && (
                                    <NavigationMenuContent>
                                        <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] lg:w-[600px] lg:grid-cols-2">
                                            {element.items.map((item) => (
                                                <ListItem
                                                    key={item.title}
                                                    title={item.title}
                                                    description={item.description}
                                                    href={item.href}
                                                    icon={<item.icon className="h-4 w-4 text-muted-foreground" />} // Render item icon here
                                                />
                                            ))}
                                        </ul>
                                    </NavigationMenuContent>
                                )}
                            </NavigationMenuItem>
                        ))}
                    </NavigationMenuList>
                </NavigationMenu>
                <Button variant={"default"} size={"lg"} className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 font-semibold transition-colors">
                    <div className="text-white">Get Started</div>
                    <MoveRight size={16} />
                </Button>
                <ThemeModeToggle />
            </div>
        </nav>
    );
}
