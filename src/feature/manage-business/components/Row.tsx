export default function Row({
  left,
  right,
}: {
  left: string;
  right: string;
}) {
  return (
    <div className="flex justify-between text-sm">
      <span>{left}</span>
      <span>{right}</span>
    </div>
  );
}
