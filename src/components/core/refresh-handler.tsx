"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

interface RefreshProps {
  interval?: number; // Optional prop, defaults to 60000
}

export function RefreshHandler({ interval = 60000 }: RefreshProps) {
  const router = useRouter();

  useEffect(() => {
    // Only set the interval if the window is active to save resources
    const timer = setInterval(() => {
      router.refresh();
    }, interval);

    return () => clearInterval(timer);
  }, [router, interval]); // Dependencies ensure it updates if you change the prop

  return null;
}
