import type { ComponentProps } from "react";

import './button.css'
import clsx from "clsx";

export type ButtonProps = ComponentProps<"button"> & {
  variant: "primary" | "secondary" | "destructive";
};

export const Button = ({ variant, ...props }: ButtonProps) => {
  const className = clsx("button", variant);

  return <button className={className} {...props} />;
};
