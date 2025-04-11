
import { cn } from "@/lib/utils";

interface SkillCardProps {
  title: string;
  skills: string[];
  className?: string;
}

export default function SkillCard({ title, skills, className }: SkillCardProps) {
  return (
    <div className={cn("bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-all duration-300", className)}>
      <h3 className="text-lg font-bold mb-4 text-tech-blue">{title}</h3>
      <div className="flex flex-wrap">
        {skills.map((skill, index) => (
          <span key={index} className="skill-tag">{skill}</span>
        ))}
      </div>
    </div>
  );
}
