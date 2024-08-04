import React from "react";
import styles from "../styles/shared/card.module.scss";
import { cn } from "../utils/cn";

interface CardProps {
  variant?: "default" | "primary" | "secondary"; // Пока нету
  rounded?: "none" | "xs" | "sm" | "md" | "lg" | "xl" | "xxl";
  padding?: "xs" | "sm" | "md" | "lg" | "xl" | "xxl";
  text?: "xs" | "sm" | "md" | "lg" | "xl" | "xxl";
  className?: string;
  children: React.ReactNode;
}

const Card: React.FC<CardProps> = ({
  variant = "default",
  rounded = "md",
  padding = "md",
  text = "md",
  className,
  children,
}) => {
  return (
    <div
      className={cn(
        styles.card,
        styles[`bg-${variant}`],
        styles[`rounded-${rounded}`],
        styles[`p-${padding}`],
        styles[`text-${text}`],
        className && styles[className]
      )}
    >
      {children}
    </div>
  );
};

export { Card };
