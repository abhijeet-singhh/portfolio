"use client";

import React, { useEffect, useState } from "react";
import { StarIcon } from "@phosphor-icons/react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

interface GitHubRepository {
  stargazers_count: number;
}

const StarButton = () => {
  const [starCount, setStarCount] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const fetchStarCount = async () => {
      try {
        setIsLoading(true);
        setHasError(false);

        const response = await fetch(
          "https://api.github.com/repos/abhijeet-singhh/portfolio",
          {
            headers: {
              Accept: "application/vnd.github.v3+json",
            },
          },
        );

        if (!response.ok) {
          throw new Error();
        }

        const repo: GitHubRepository = await response.json();
        setStarCount(repo.stargazers_count);
      } catch {
        setHasError(true);
      } finally {
        setIsLoading(false);
      }
    };

    fetchStarCount();
  }, []);

  return (
    <a
      href="https://github.com/abhijeet-singhh/portfolio"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed top-3 right-3 px-3 py-0.5 border border-border bg-muted hidden md:flex items-center gap-2 rounded-[8px] transition-all duration-200 w-fit z-10"
    >
      <StarIcon className="size-4" aria-hidden />
      <span className="text-sm">Star</span>

      <span className="bg-muted rounded-xl px-1.5 py-0.5 text-xs font-medium min-w-[24px] flex justify-center">
        {isLoading ? (
          <AiOutlineLoading3Quarters className="animate-spin size-[16px] p-0.5" />
        ) : hasError ? (
          "—"
        ) : (
          starCount
        )}
      </span>
    </a>
  );
};

export { StarButton };
