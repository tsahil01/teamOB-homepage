import { Users, Layers, TrendingUp, ClipboardList } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const features = [
  {
    title: "Team Management",
    description: "Effortlessly organize and manage your team for better collaboration.",
    icon: Users,
  },
  {
    title: "Project Organization",
    description: "Keep projects streamlined and on track with organized workflows.",
    icon: Layers,
  },
  {
    title: "Performance Insights",
    description: "Analyze team performance to make data-driven decisions.",
    icon: TrendingUp,
  },
  {
    title: "Task Tracking",
    description: "Monitor and track task progress to ensure timely completion.",
    icon: ClipboardList,
  },
];

export function Features() {
  return (
    <section className="container py-20 p-4 border-t-2">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold tracking-tight mb-4">
          Tools to Empower Your Team
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Teamob offers everything you need to enhance collaboration, streamline workflows, and boost team productivity.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature) => (
          <Card key={feature.title} className="border-2 bg-base">
            <CardHeader>
              <feature.icon className="h-10 w-10 text-primary mb-4" />
              <CardTitle>{feature.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>{feature.description}</CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
