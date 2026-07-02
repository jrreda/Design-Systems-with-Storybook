import { cva, type VariantProps } from "class-variance-authority";

const variant = {
  primary: [
    "bg-indigo-200",
    "border-indigo-500",
    "text-indigo-900",
    "dark:bg-indigo-800",
    "dark:border-indigo-900",
    "dark:text-indigo-50",
  ],
  information: [
    "bg-sky-200",
    "border-sky-500",
    "text-sky-900",
    "dark:bg-sky-800",
    "dark:border-sky-900",
    "dark:text-sky-50",
  ],
  success: [
    "bg-green-200",
    "border-green-500",
    "text-green-900",
    "dark:bg-green-800",
    "dark:border-green-900",
    "dark:text-green-50",
  ],
  danger: [
    "bg-red-200",
    "border-red-500",
    "text-red-900",
    "dark:bg-red-800",
    "dark:border-red-900",
    "dark:text-red-50",
  ],
  warning: [
    "bg-amber-200",
    "border-amber-500",
    "text-amber-900",
    "dark:bg-amber-800",
    "dark:border-amber-900",
    "dark:text-amber-50",
  ],
};

export const variants = cva(
  ["p-4", "rounded-lg", "border", "shadow-md", "space-y-4"],
  {
    variants: {
      variant,
    },
  },
);

export type CalloutVariants = VariantProps<typeof variants>;
