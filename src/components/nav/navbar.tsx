import { AlarmClockCheck, MoveRight } from "lucide-react";
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

const navElements = [
    {
        title: "Solutions",
        items: [
            {
                title: "Team Management",
                description: "Streamline your team's workflow and boost productivity.",
                href: "/solutions/team-management",
            },
            {
                title: "Time Tracking",
                description: "Track time efficiently across projects and teams.",
                href: "/solutions/time-tracking",
            },
            {
                title: "Resource Planning",
                description: "Optimize resource allocation and project scheduling.",
                href: "/solutions/resource-planning",
            }
        ]
    },
    {
        title: "Resources",
        items: [
            {
                title: "Documentation",
                description: "Detailed guides and API references.",
                href: "/resources/docs",
            },
            {
                title: "Case Studies",
                description: "Real-world success stories from our clients.",
                href: "/resources/case-studies",
            },
            {
                title: "Support",
                description: "Get help from our expert support team.",
                href: "/resources/support",
            }
        ]
    },
    {
        title: "About us",
    }
];

function ListItem({ title, description, href }: { title: string, description: string, href?: string }) {
    return <li>
        <NavigationMenuLink asChild>
            <a href={href} className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                <div className="text-sm font-medium leading-none">{title}</div>
                <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                    {description}
                </p>
            </a>
        </NavigationMenuLink>
    </li>
};

export function Navbar() {
    return (
        <nav className="flex flex-col sm:flex-row justify-between p-4 rounded-2xl border bg-primary/5 shadow-lg top-0 z-50">
            <div className="flex flex-row justify-start gap-4 w-full sm:w-auto">
                <div className="flex items-center gap-2">
                    <AlarmClockCheck className="h-8 w-8 text-blue-600" />
                    <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-blue-600 bg-clip-text text-transparent">
                        TeamOB
                    </span>
                </div>
                <NavigationMenu className="w-full sm:w-auto">
                    <NavigationMenuList>
                        {navElements.map((element) => (
                            <NavigationMenuItem key={element.title}>
                                <NavigationMenuTrigger className="bg-0">{element.title}</NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <ul className="grid w-full gap-3 p-4 sm:w-[300px] md:w-[500px] lg:w-[600px] sm:grid-cols-1 md:grid-cols-2">
                                        {element.items?.map((item) => (
                                            <ListItem key={item.title} {...item} />
                                        ))}
                                    </ul>
                                </NavigationMenuContent>
                            </NavigationMenuItem>
                        ))}
                    </NavigationMenuList>
                </NavigationMenu>
            </div>

            <div className="flex flex-row justify-between items-center gap-2 w-full sm:w-auto mt-4 sm:mt-0">
                <Button variant={"default"} size={"lg"} className="flex-row gap-2 bg-blue-600 hidden sm:flex text-white">
                    <div className="text-white">Get Started</div>
                    <MoveRight size={16} />
                </Button>
                <ThemeModeToggle />
            </div>
        </nav>
    );
}
