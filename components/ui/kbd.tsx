import * as React from "react";

function cn(...classes: Array<string | undefined>) {
  return classes.filter(Boolean).join(" ");
}

function Kbd({ className, ...props }: React.ComponentProps<"kbd">) {
  return (
    <kbd
      className={cn(
        "bg-background text-foreground pointer-events-none inline-flex h-6 min-w-6 items-center justify-center rounded border px-1.5 font-mono text-xs font-medium shadow-sm",
        className,
      )}
      {...props}
    />
  );
}

function KbdGroup({ className, ...props }: React.ComponentProps<"span">) {
  return (
    <span
      className={cn("inline-flex items-center gap-1", className)}
      {...props}
    />
  );
}

export { Kbd, KbdGroup };
