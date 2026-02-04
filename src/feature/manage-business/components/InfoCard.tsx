export default function InfoCard({
  label,
  value,
  highlight = false,
}: {
  label: string;
  value: string;
  highlight?: boolean;
}) {
  return (
    <div
      className={`rounded border p-4 ${
        highlight
          ? "bg-blue-600 text-white border-blue-600"
          : "bg-white border-blue-100"
      }`}
    >
      <p className="text-sm opacity-80">{label}</p>
      <p className="text-lg font-bold">{value}</p>
    </div>
  );
}
