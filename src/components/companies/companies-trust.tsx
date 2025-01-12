import { StickyScroll } from "../ui/sticky-scroll-reveal";

const content = [
    {
        title: "Workforce Productivity Insights",
        description:
            "Gain actionable insights into your workforce's performance. Our platform helps you monitor team activity, identify inefficiencies, and optimize productivity. Make data-driven decisions to enhance employee engagement and drive business growth.",
        content: (<img
            src="https://leapmax.ai/wp-content/uploads/2024/08/Workforce-Productivity.webp"
            width={300}
            height={300}
            className="h-full w-full object-cover"
            alt="workforce productivity insights"
        />
        ),
    },
    {
        title: "Real-time Performance Monitoring",
        description:
            "Track your team's performance in real-time. Monitor progress, evaluate efficiency, and adjust workflows on the fly. With our platform, you can eliminate bottlenecks and ensure your team is always on the path to success.",
        content: (<img
            src="https://cdn.elearningindustry.com/wp-content/uploads/2022/09/10-Ways-To-Improve-Employee-Productivity-In-The-Workplace.jpg"
            width={300}
            height={300}
            className="h-full w-full object-cover"
            alt="real-time performance monitoring"
        />
        ),
    },
    {
        title: "Optimized Scheduling",
        description:
            "Ensure the right resources are in place at the right time. Our platform helps optimize scheduling, ensuring your workforce is always aligned with business needs. Minimize errors and reduce inefficiencies with smarter scheduling.",
        content: (<img
            src="https://www.idfcfirstbank.com/content/dam/idfcfirstbank/images/blog/finance/how-to-build-the-right-workforce-for-your-small-business-717x404.jpg"
            width={300}
            height={300}
            className="h-full w-full object-cover"
            alt="optimized scheduling"
        />
        ),
    },
    {
        title: "Reducing Absenteeism & Turnover",
        description:
            "Combat absenteeism and reduce turnover by gaining deeper insights into employee wellness and engagement. Our platform helps you proactively address staffing challenges and create a more resilient, efficient workforce.",
        content: (<img
            src="https://techbullion.com/wp-content/uploads/2023/02/Employee-Absenteeism.png"
            width={300}
            height={300}
            className="h-full w-full object-cover"
            alt="reducing absenteeism and turnover"
        />
        ),
    },
];

export function Something() {
    return (
        <div className="container py-20 border-t-2">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold tracking-tight mb-4">
                    Powerful Workforce Solutions
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                    Boost productivity, streamline operations, and reduce costs with TeamOB's all-in-one workforce management platform.</p>
            </div>
            <StickyScroll content={content} />
        </div>
    );
}



