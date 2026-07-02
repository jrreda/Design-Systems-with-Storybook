import type { ComponentProps } from "react";
import clsx from "clsx";

type InputProps = ComponentProps<"input"> & {
  label: string;
  details?: string;
  required?: boolean;
  unlabeled?: boolean;
  disabled?: boolean;
};

export const Input = ({
  label,
  value,
  details,
  placeholder,
  required = false,
  unlabeled = false,
  disabled = false,
  ...props
}: InputProps) => {
  return (
    <label className="flex flex-col gap-1.5">
      <span
        className={clsx(
          "inline-flex items-center gap-1 font-medium text-sm",
          required &&
            "after:h-1.5 after:w-1.5 after:rounded-full after:bg-accent-500",
          unlabeled && "sr-only",
        )}
      >
        {label}
      </span>

      <input
        value={value}
        className="block gap-2 bg-white focus:bg-primary-50 disabled:bg-slate-50 dark:bg-slate-800 shadow shadow-sm px-3 py-1 rounded-md focus:outline-none ring-1 ring-slate-500 focus:ring-2 focus:ring-primary-600 ring-inset w-full text-sm disabled:cursor-not-allowed placeholder-slate-400 dark:placeholder-slate-300"
        placeholder={unlabeled ? label : placeholder}
        disabled={disabled}
        required={required}
        {...props}
      />
      {details && <span className="text-slate-500 text-xs">{details}</span>}
    </label>
  );
};
