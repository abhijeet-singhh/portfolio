import { cn } from "@/lib/utils";
import { motion } from "motion/react";

type TooltipProps = {
  label: string;
  className?: string;
};

const CustomTooltip = ({ label, className }: TooltipProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 15 }}
      transition={{ duration: 0.25 }}
      className={cn(
        "absolute top-[-25px] bg-muted-foreground text-white text-[12px] px-2 py-0.5 rounded-md whitespace-nowrap z-10",
        className,
      )}
    >
      {label}
    </motion.div>
  );
};

export { CustomTooltip };
