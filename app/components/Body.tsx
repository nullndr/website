export function Body({ children }: React.PropsWithChildren) {
  return (
    <body className="bg-[#222447] text-[#d6d6d6] font-['monospace']">
      {children}
    </body>
  );
}
