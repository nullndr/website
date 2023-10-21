export function BlogWrapper({ children }: React.PropsWithChildren) {
  return (
    <div className="flex flex-col items-center">
      <div className="w-5/6 xl:w-1/2 2xl:w-1/3">{children}</div>
    </div>
  );
}
