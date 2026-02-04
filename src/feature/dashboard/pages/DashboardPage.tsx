export default function DashboardPage() {
  // mock batch-based summary data (prototype only)
  const revenue = 125_000;
  const cost = 82_000;
  const boLoss = 6_500;
  const netIncome = revenue - cost - boLoss;

  const chartData = [
    { label: "Revenue", value: revenue },
    { label: "Cost", value: cost },
    { label: "BO Loss", value: boLoss },
    { label: "Net", value: netIncome },
  ];

  const maxValue = Math.max(...chartData.map(d => d.value));

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-blue-700">
          Dashboard
        </h1>
        <p className="text-sm text-gray-500">
          Batch-based business overview
        </p>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <SummaryCard title="Total Revenue" value={`₱${revenue.toLocaleString()}`} />
        <SummaryCard title="Total Cost" value={`₱${cost.toLocaleString()}`} />
        <SummaryCard title="BO Loss" value={`₱${boLoss.toLocaleString()}`} />
        <SummaryCard
          title="Net Income"
          value={`₱${netIncome.toLocaleString()}`}
          highlight
        />
      </div>

      {/* Batch Insight */}
      <div className="rounded-lg border border-blue-100 bg-white p-6">
        <h2 className="mb-4 text-lg font-semibold text-blue-700">
          Batch Summary (Example)
        </h2>

        <div className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span className="text-gray-600">Latest Batch</span>
            <span className="text-blue-700 font-medium">
              Onions – Batch #042
            </span>
          </div>

          <div className="flex justify-between">
            <span className="text-gray-600">Quantity Purchased</span>
            <span className="font-medium">500 kg</span>
          </div>

          <div className="flex justify-between">
            <span className="text-gray-600">Remaining Stock</span>
            <span className="font-medium">120 kg</span>
          </div>

          <div className="flex justify-between">
            <span className="text-gray-600">Cost per Unit</span>
            <span className="font-medium">₱164</span>
          </div>
        </div>
      </div>

{/* Graph */}
<div className="rounded-lg border border-blue-100 bg-white p-6">
  <h2 className="mb-4 text-lg font-semibold text-blue-700">
    Financial Overview
  </h2>

  <div className="flex gap-6 items-end h-48">
    {chartData.map((item) => {
      const height = (item.value / maxValue) * 100;

      return (
        <div
          key={item.label}
          className="flex flex-col items-center flex-1"
        >
          {/* Bar container with fixed height */}
          <div className="flex items-end w-full h-40">
            <div
              className={`w-full rounded-t ${
                item.label === "Net"
                  ? "bg-blue-600"
                  : "bg-blue-300"
              }`}
              style={{ height: `${height}%` }}
            />
          </div>

          <span className="mt-2 text-sm text-gray-600">
            {item.label}
          </span>
          <span className="text-xs font-medium text-blue-700">
            ₱{item.value.toLocaleString()}
          </span>
        </div>
      );
    })}
  </div>
</div>

    </div>
  );
}

function SummaryCard({
  title,
  value,
  highlight = false,
}: {
  title: string;
  value: string;
  highlight?: boolean;
}) {
  return (
    <div
      className={`
        rounded-lg
        border
        p-5
        ${
          highlight
            ? "border-blue-600 bg-blue-600 text-white"
            : "border-blue-100 bg-white"
        }
      `}
    >
      <p
        className={`text-sm ${
          highlight ? "text-blue-100" : "text-gray-500"
        }`}
      >
        {title}
      </p>
      <p className="mt-2 text-xl font-bold">
        {value}
      </p>
    </div>
  );
}
