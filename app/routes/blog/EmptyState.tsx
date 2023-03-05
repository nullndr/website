export function EmptyState() {
  return (
    <div className="mt-5 flex flex-col items-center">
      <div className="mb-5 font-bold">
        I haven't post anything yet! So here's a pic of my cat
      </div>
      <img src="/cat.jpg" className="rounded-md" />
    </div>
  );
}
