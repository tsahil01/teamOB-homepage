import { Star, User } from "lucide-react"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { motion } from "framer-motion"

interface ReviewProps {
    name: string
    role: string
    company: string
    avatar: string
    rating: number
    review: string
}

const Review: React.FC<ReviewProps> = ({ name, role, company, avatar, rating, review }) => {
    return (
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <Card className="h-full overflow-hidden transition-shadow duration-300 bg-white shadow-lg hover:shadow-xl">
                <CardHeader className="flex flex-row items-center gap-4 pb-4">
                    <Avatar className="w-12 h-12">
                        <AvatarImage src={avatar} alt={name} />
                        <AvatarFallback>
                            <User className="w-6 h-6" />
                        </AvatarFallback>
                    </Avatar>
                    <div>
                        <h3 className="text-lg font-semibold text-gray-900">{name}</h3>
                        <p className="text-sm text-gray-600">
                            {role} at {company}
                        </p>
                    </div>
                </CardHeader>
                <CardContent>
                    <div className="flex items-center mb-2">
                        {[...Array(5)].map((_, i) => (
                            <Star key={i} className={`w-5 h-5 ${i < rating ? "text-yellow-400 fill-current" : "text-gray-300"}`} />
                        ))}
                    </div>
                    <p className="text-gray-700">{review}</p>
                </CardContent>
            </Card>
        </motion.div>
    )
}

export function UserReviews() {
    const reviews: ReviewProps[] = [
        {
            name: "Alice Johnson",
            role: "Project Manager",
            company: "Tech Innovators",
            avatar: "/placeholder.svg?height=100&width=100",
            rating: 5,
            review:
                "Teamob.ai has revolutionized our workflow. The centralized communication and real-time visibility have significantly boosted our team's productivity.",
        },
        {
            name: "Bob Smith",
            role: "Senior Developer",
            company: "CodeCraft Solutions",
            avatar: "/placeholder.svg?height=100&width=100",
            rating: 4,
            review:
                "The automated processes in Teamob.ai have saved us countless hours. It's been a game-changer for our development team.",
        },
        {
            name: "Carol Davis",
            role: "Marketing Director",
            company: "Brand Builders Inc.",
            avatar: "/placeholder.svg?height=100&width=100",
            rating: 5,
            review:
                "Seamless collaboration across departments was a challenge before, but Teamob.ai has made it effortless. Our campaigns are now more cohesive than ever.",
        },
    ]

    return (
        <div className="container px-4 mx-auto py-20 p-4 border-t-2">
            <div className="text-center mb-12">
                <h2 className="text-blue-900 text-3xl font-bold tracking-tight mb-4">
                    What Our Users Are Saying
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                    Hear from our satisfied customers who have transformed their teams with Teamob.ai.
                </p>
            </div>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                {reviews.map((review, index) => (
                    <Review key={index} {...review} />
                ))}
            </div>
        </div>
    )
}

