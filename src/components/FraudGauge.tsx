import { motion } from "framer-motion";

interface FraudGaugeProps {
  score: number; // 0-100
}

export function FraudGauge({ score }: FraudGaugeProps) {
  const radius = 70;
  const circumference = Math.PI * radius;
  const fillPercent = score / 100;
  const strokeDashoffset = circumference * (1 - fillPercent);

  const color = score < 30 ? "hsl(142, 72%, 50%)" : score < 60 ? "hsl(45, 90%, 55%)" : "hsl(0, 72%, 55%)";
  const label = score < 30 ? "LOW" : score < 60 ? "MEDIUM" : "HIGH";

  return (
    <div className="flex flex-col items-center">
      <svg width="180" height="110" viewBox="0 0 180 110">
        {/* Background arc */}
        <path
          d="M 10 100 A 70 70 0 0 1 170 100"
          fill="none"
          stroke="hsl(220, 12%, 16%)"
          strokeWidth="12"
          strokeLinecap="round"
        />
        {/* Filled arc */}
        <motion.path
          d="M 10 100 A 70 70 0 0 1 170 100"
          fill="none"
          stroke={color}
          strokeWidth="12"
          strokeLinecap="round"
          strokeDasharray={circumference}
          initial={{ strokeDashoffset: circumference }}
          animate={{ strokeDashoffset }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          style={{ filter: `drop-shadow(0 0 8px ${color})` }}
        />
      </svg>
      <motion.div
        className="flex flex-col items-center -mt-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <span className="stat-number text-3xl" style={{ color }}>{score}</span>
        <span className="stat-label mt-1" style={{ color }}>{label} RISK</span>
      </motion.div>
    </div>
  );
}
