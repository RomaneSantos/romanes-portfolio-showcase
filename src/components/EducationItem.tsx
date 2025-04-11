
import { cn } from "@/lib/utils";

interface EducationItemProps {
  degree: string;
  institution: string;
  period: string;
  location: string;
  content?: string[];
  className?: string;
}

export default function EducationItem({ 
  degree, 
  institution, 
  period, 
  location, 
  content,
  className 
}: EducationItemProps) {
  return (
    <div className={cn("timeline-item", className)}>
      <h3 className="text-lg font-bold text-tech-blue">{degree}</h3>
      <div className="flex items-center text-sm mb-1">
        <span className="font-medium">{institution}</span>
        <span className="mx-2">•</span>
        <span>{location}</span>
      </div>
      <p className="text-sm text-muted-foreground mb-3">{period}</p>
      {content && (
        <div className="text-sm">
          <p className="font-semibold mb-1">Conteúdo:</p>
          <ul className="list-disc list-inside space-y-1">
            {content.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
