import { motion } from "motion/react";
import { useState } from "react";

type TooltipProps = {
  label: string;
};

const CustomTooltip = ({ label }: TooltipProps) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 15 }}
      transition={{ duration: 0.25 }}
      className="absolute top-[-25px] bg-muted-foreground text-white text-[12px] px-2 py-0.5 rounded-md whitespace-nowrap z-10"
    >
      {label}
    </motion.div>
  );
};

export { CustomTooltip };
