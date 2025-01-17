import { CircleCheckBig } from "lucide-react";
import { Button } from "../ui/button";

export function LeftContent() {
  return (
    <div className="max-w-xl mx-auto lg:mx-0 text-center lg:text-left space-y-6">
      {/* Header */}
      <h2 className="text-blue-900 text-4xl font-extrabold tracking-tight">
        Streamline Your Workflow
      </h2>
      
      {/* Subtitle */}
      <p className="text-muted-foreground text-lg leading-relaxed">
        Teamob offers everything you need to enhance collaboration, streamline workflows, 
        and boost team productivity.
      </p>
      
      {/* Features List */}
      <div className="space-y-4">
        {[
          "Organize and manage your team.",
          "Human task management and automation.",
          "Document Processing with OCR",
        ].map((text, index) => (
          <div key={index} className="flex items-center gap-3">
            <CircleCheckBig className="text-blue-600 w-7 h-7" />
            <span className="text-muted-foreground text-base">{text}</span>
          </div>
        ))}
      </div>
      
      {/* Call-to-Action Button */}
      <div className="mt-8">
        <Button 
          size="lg" 
          className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 font-semibold rounded-full shadow-md transition-transform transform hover:scale-105"
        >
          Get Started
        </Button>
      </div>
    </div>
  );
}
