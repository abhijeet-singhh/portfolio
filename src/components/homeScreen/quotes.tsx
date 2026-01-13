"use client";
import { quotes } from "@/data/portfolio";
import { Container } from "../core/Container";
import { FaQuoteLeft } from "react-icons/fa";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

const Quotes = () => {
  const [quote, setQuote] = useState(quotes[0]);

  useEffect(() => {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    setQuote(randomQuote);
  }, []);

  return (
    <Container className={cn("mt-20 px-6", "lg:px-0")}>
      <div className="flex flex-col items-center rounded-xl border border-dashed border-border p-5">
        <div>
          <FaQuoteLeft className="size-12 text-zinc-200 dark:text-[#1f1f1f]" />
        </div>
        <div className="mt-7">
          {quote && (
            <div className="flex flex-col items-center gap-7">
              <p className="text-center text-foreground/95 text-2xl font-semibold italic">
                {quote.quote}
              </p>
              <div className="text-muted-foreground">
                <span className="font-bold text-zinc-300 dark:text-zinc-700">
                  ―――
                </span>
                <span className="mx-3 font-bold text-sm text-zinc-400 dark:text-zinc-500">
                  {quote.author}
                </span>
                <span className="font-bold text-zinc-300 dark:text-zinc-700">
                  ―――
                </span>
              </div>
            </div>
          )}
        </div>
      </div>
    </Container>
  );
};
export { Quotes };
