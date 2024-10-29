export function Title({ children }: React.PropsWithChildren) {
  return (
    <div className="mt-5">
      <h1 className="text-[#ffff00] text-2xl font-bold">{children}</h1>
    </div>
  );
}
