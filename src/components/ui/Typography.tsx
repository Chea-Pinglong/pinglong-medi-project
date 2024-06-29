import React, { FC, ReactNode } from "react";

interface TypographyProps {
  children: ReactNode;
  className?: string;
  align?: "left" | "center" | "right" | "justify";
  fontSize?: "sm" | "base" | "lg" | "xl" | "5xl" | "32" | "58"
  variant?: "normal" | "medium" | "semibold" | "extrabold";
}

const Typography: FC<TypographyProps> = ({
  children,
  className = "",
  align = "center",
  fontSize = "base",
  variant = "normal",
}) => {

  const typographyAlignment = (align: string) =>{
    switch (align) {
        case "left":
          return "text-left";
        case "center":
          return "text-center";
        case "right":
          return "text-right";
        case "justify":
          return "text-justify";
        default:
          return "text-center";
      }
  }

  const typographyVariant = (variant: string) =>{
    switch (variant) {
        case "normal":
          return "font-normal";
        case "medium":
          return "font-medium";
        case "semibold":
          return "font-semibold";
        case "extrabold":
          return "font-extrabold";
        default:
          return "text-normal";
      }
  }

  const typographySize = (size: string) =>{
    switch(size){
        case "sm":
            return "text-sm"
        case "base":
            return "text-base"
        case "lg":
            return "text-lg"
        case "xl":
            return "text-xl"
        case "5xl":
            return "text-5xl"
        case "32":
            return "text-[32px]"
        case "58":
            return "text-[58px]"
        default:
            return "text-base"
    }
  }

  const alignClass = `text-${align}`;
  const fontSizeClass = `text-${fontSize}`;
  const variantClass = `font-${variant}`;

  return (
    <p
      className={`${alignClass} ${fontSizeClass} ${variantClass} ${className}`}
    >
      {children}
    </p>
  );
};

export { Typography };
 