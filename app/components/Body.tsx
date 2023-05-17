import React from "react";

export function Body({ children }: React.PropsWithChildren) {
  return (
    <body className="bg-[#202020] text-[#d6d6d6] font-['monospace']">
      {children}
    </body>
  );
}
