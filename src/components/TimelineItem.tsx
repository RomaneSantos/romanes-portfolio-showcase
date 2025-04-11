
import { cn } from "@/lib/utils";

interface TimelineItemProps {
  title: string;
  company: string;
  period: string;
  location: string;
  activities: string[];
  className?: string;
}

export default function TimelineItem({ 
  title, 
  company, 
  period, 
  location, 
  activities,
  className 
}: TimelineItemProps) {
  return (
    <div className={cn("timeline-item", className)}>
      <h3 className="text-lg font-bold text-tech-blue">{title}</h3>
      <div className="flex items-center text-sm mb-1">
        <span className="font-medium">{company}</span>
        <span className="mx-2">•</span>
        <span>{location}</span>
      </div>
      <p className="text-sm text-muted-foreground mb-3">{period}</p>
      <ul className="list-disc list-inside space-y-1">
        {activities.map((activity, index) => (
          <li key={index} className="text-sm text-foreground">{activity}</li>
        ))}
      </ul>
    </div>
  );
}
