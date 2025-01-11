import React from "react";

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {}

function Badge({ className = "", ...props }: BadgeProps) {
  const baseStyles =
    "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-offset-2";


  return <div className={baseStyles} {...props} />;
}

export { Badge };
