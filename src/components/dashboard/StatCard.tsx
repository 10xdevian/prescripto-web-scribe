
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface StatCardProps {
  title: string;
  value: string | number;
  icon: LucideIcon;
  trend?: number;
  trendLabel?: string;
  className?: string;
  iconClassName?: string;
}

export default function StatCard({
  title,
  value,
  icon: Icon,
  trend,
  trendLabel = "from last month",
  className,
  iconClassName,
}: StatCardProps) {
  const isTrendPositive = trend && trend > 0;
  const isTrendNegative = trend && trend < 0;
  
  return (
    <div className={cn("bg-white p-6 rounded-xl shadow-sm border border-gray-100", className)}>
      <div className="flex justify-between items-start">
        <div>
          <p className="text-sm font-medium text-gray-500">{title}</p>
          <h3 className="text-2xl font-bold mt-1">{value}</h3>
        </div>
        <div className={cn("p-3 rounded-full", iconClassName || "bg-prescripto-100 text-prescripto-600")}>
          <Icon className="h-6 w-6" />
        </div>
      </div>
      
      {trend !== undefined && (
        <div className="mt-3 flex items-center text-sm">
          <span 
            className={cn(
              "font-medium mr-1",
              isTrendPositive && "text-green-600",
              isTrendNegative && "text-red-600",
              !isTrendPositive && !isTrendNegative && "text-gray-500"
            )}
          >
            {isTrendPositive && "+"}{trend}%
          </span>
          <span className="text-gray-500">{trendLabel}</span>
        </div>
      )}
    </div>
  );
}
