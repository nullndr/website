export function Title({ children }: React.PropsWithChildren) {
  return (
    <div className="mt-5 mx-5 lg:mx-0 text-xl sm:text-3xl text-[#ffff00] font-bold">
      <span>{children}</span>
    </div>
  );
}
