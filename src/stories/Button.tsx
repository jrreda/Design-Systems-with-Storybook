import type { ComponentProps } from "react";

import './button.css'
import clsx from "clsx";

export type ButtonProps = ComponentProps<"button"> & {
  variant?: "primary" | "secondary" | "destructive";
  size?: "small" | "medium" | "large";
};

export const Button = ({ variant = "primary", size = "medium", ...props }: ButtonProps) => {
  const className = clsx("button", variant, size);

  return <button className={className} {...props} />;
};
