export default function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded border border-blue-100 bg-white p-6">
      <h2 className="mb-3 text-sm font-medium text-blue-600 uppercase">
        {title}
      </h2>
      {children}
    </div>
  );
}
