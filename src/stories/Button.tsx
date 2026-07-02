import type { ComponentProps } from "react";
import { variants, type ButtonVariants } from './button-variants'

export type ButtonProps = ComponentProps<"button"> & ButtonVariants;

export const Button = ({ variant = "primary", size = "medium", ...props }: ButtonProps) => {
  return <button className={variants({ variant, size })} {...props} />;
};
