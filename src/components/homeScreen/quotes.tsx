"use client";
import { quotes } from "@/data/portfolio";
import { Container } from "../core/Container";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

export const Quotes = () => {
  const [quoteIdx, setQuoteIdx] = useState(0);

  useEffect(() => {
    setQuoteIdx(Math.floor(Math.random() * quotes.length));

    const interval = setInterval(() => {
      setQuoteIdx((prev) => (prev + 1) % quotes.length);
    }, 20000);

    return () => clearInterval(interval);
  }, []);

  const quote = quotes[quoteIdx];

  return (
    <Container
      className={cn("px-4 sm:px-6 lg:px-0 lg:mt-10 lg:mb-20 relative z-10")}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
        className="relative max-w-4xl mx-auto"
      >
        <div className="relative glass-card rounded-3xl border-border/90 p-6 sm:p-10 md:p-12 overflow-hidden text-center flex flex-col items-center justify-center min-h-60 border border-border">
          <FaQuoteLeft className="absolute top-6 left-6 sm:top-8 sm:left-8 size-8 sm:size-10 text-foreground/5 dark:text-foreground/10" />
          <FaQuoteRight className="absolute bottom-6 right-6 sm:bottom-8 sm:right-8 size-8 sm:size-10 text-foreground/5 dark:text-foreground/10" />

          <div className="relative z-10 w-full max-w-xl mx-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={quoteIdx}
                initial={{ opacity: 0, scale: 0.96, filter: "blur(8px)" }}
                animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                exit={{ opacity: 0, scale: 1.04, filter: "blur(8px)" }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="flex flex-col items-center gap-6"
              >
                <p className="text-lg sm:text-lg md:text-xl lg:text-2xl text-foreground font-medium italic leading-relaxed tracking-wide font-serif">
                  "{quote?.quote}"
                </p>

                <div className="flex items-center gap-3 text-muted-foreground">
                  <div className="h-px w-8 bg-border/80"></div>
                  <span className="font-semibold text-xs sm:text-sm uppercase tracking-widest text-primary/80">
                    {quote?.author}
                  </span>
                  <div className="h-px w-8 bg-border/80"></div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </motion.div>
    </Container>
  );
};
