import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface StatCardProps {
  label: string;
  value: string | number;
  icon: LucideIcon;
  variant?: "default" | "gold" | "danger";
  delay?: number;
  suffix?: string;
}

export function StatCard({ label, value, icon: Icon, variant = "default", delay = 0, suffix }: StatCardProps) {
  const cardClass = variant === "gold" ? "glass-card-gold" : variant === "danger" ? "glass-card-danger" : "glass-card";
  const iconColor = variant === "gold" ? "text-accent" : variant === "danger" ? "text-destructive" : "text-primary";

  return (
    <motion.div
      className={`${cardClass} p-4`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
    >
      <div className="flex items-start justify-between mb-3">
        <span className="stat-label">{label}</span>
        <Icon className={`h-4 w-4 ${iconColor}`} />
      </div>
      <div className="flex items-baseline gap-1">
        <span className="stat-number">{value}</span>
        {suffix && <span className="text-sm text-muted-foreground font-mono">{suffix}</span>}
      </div>
    </motion.div>
  );
}
