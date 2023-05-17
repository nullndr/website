export function BlogWrapper({ children }: React.PropsWithChildren) {
  return (
    <div className="mx-3 mt-5">
      <div className="w-full">
        <div className="flex flex-col items-center">
          <div className="w-5/6 xl:w-1/2 2xl:w-1/3">{children}</div>
        </div>
      </div>
    </div>
  );
}
