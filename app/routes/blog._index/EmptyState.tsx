export function EmptyState() {
  return (
    <div className="mx-5 flex flex-col items-center">
      <div className="font-bold">
        I haven't post anything yet! So here's a pic of my cat
      </div>
      <img src="/cat.jpg" className="rounded-md" />
    </div>
  );
}
