export function LinkWrapper({ children }: React.PropsWithChildren) {
  return (
    <div className="flex flex-col items-center">
      <div className="mt-5 hover:text-[#e6c2bf] font-bold text-2xl">
        {children}
      </div>
    </div>
  );
}
