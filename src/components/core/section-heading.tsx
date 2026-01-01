import React from "react";

interface SectionHeadingProps {
  subHeading: string;
  heading: string;
}

const SectionHeading = ({ subHeading, heading }: SectionHeadingProps) => {
  return (
    <div>
      <p className="text-muted-foreground text-sm">{subHeading}</p>
      <h2 className="text-2xl font-bold">{heading}</h2>
    </div>
  );
};

export { SectionHeading };
