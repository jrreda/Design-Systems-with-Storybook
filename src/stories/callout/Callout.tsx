import type { PropsWithChildren } from "react";
import { variants, type CalloutVariants } from "./Callout-variants";

type CalloutProps = PropsWithChildren<CalloutVariants & { title: string }>;

export const Callout = ({ children, title, variant }: CalloutProps) => {
  return (
    <div className={variants({ variant })}>
      <h2 className="font-semibold text-2xl">{title}</h2>
      <p>{children}</p>
    </div>
  );
};
