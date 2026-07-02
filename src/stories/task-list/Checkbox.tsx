import type { ComponentProps } from "react";
import clsx from "clsx";

export type CheckboxProps = Omit<ComponentProps<"input">, "type"> & {
  label: string;
};

export const Checkbox = ({ label, className, ...props }: CheckboxProps) => {
  return (
    <label
      className={clsx(
        "inline-flex items-center gap-1.5 cursor-pointer select-none",
        props.disabled && "cursor-not-allowed opacity-50",
        className,
      )}
    >
      <input type="checkbox" className="sr-only peer" {...props} />
      <div className="after:top-0 after:left-0.5 after:absolute relative bg-slate-50 dark:bg-slate-700 dark:peer-checked:bg-primary-600 peer-checked:bg-primary-600 shadow-sm after:drop-shadow-sm border border-slate-500 peer-checked:border-primary-800 rounded peer-focus:ring-1 peer-focus:ring-primary-500 dark:ring-offset-slate-800 peer-focus:ring-offset-2 w-4 min-w-4 h-4 after:text-white after:text-xs peer-checked:after:content-['✔']" />
      <span className="font-medium text-sm">{label}</span>
    </label>
  );
};
