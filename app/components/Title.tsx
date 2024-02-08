export function Title({ children }: React.PropsWithChildren) {
  return (
    <div className="mt-5 flex flex-col items-center">
      <div className="text-[#ffff00] font-bold text-2xl">
        <span>{children}</span>
      </div>
    </div>
  );
}
