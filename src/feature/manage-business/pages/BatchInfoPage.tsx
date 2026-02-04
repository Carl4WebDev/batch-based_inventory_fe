import { useParams, Link } from "react-router-dom";
import { useState } from "react";

import { mockBatches } from "../data/mockBatches";
import AddSRPModal from "../modals/AddSRPModal";

import InfoCard from "../components/InfoCard";
import Section from "../components/Section";
import Row from "../components/Row";

import { exportToCSV } from "../../../shared/utils/exportToCSV";

import img1 from "../assets/img1.jpg"
import img2 from "../assets/img2.jpg"
import img3 from "../assets/img3.jpg"

export default function BatchInfoPage() {
  const { batchId } = useParams();
  const [showSRP, setShowSRP] = useState(false);

  const batch = mockBatches.find(b => b.id === batchId);
  if (!batch) return null;

  const avgSRP =
    batch.srp.reduce((sum, s) => sum + s.price, 0) /
    batch.srp.length;

  const soldQty = batch.items.reduce(
    (sum, i) => sum + i.quantity,
    0
  );

  const grossRevenue = avgSRP * soldQty;
  const netRevenue =
    grossRevenue - batch.totalCost - batch.bo.loss;

  const handleExport = () => {
    exportToCSV("batch_report.csv", [
      ["Batch", batch.name],
      ["Created At", batch.createdAt],
      ["Capital", batch.totalCost],
      ["Gross Revenue", grossRevenue],
      ["BO Loss", batch.bo.loss],
      ["Net Revenue", netRevenue],
    ]);
  };

  return (
    <div className="space-y-6">
      <Link to="/manage-business" className="text-sm text-blue-600">
        ← Back
      </Link>

     <div className="rounded-lg border border-blue-200 bg-blue-50 p-5">
  <h1 className="text-2xl font-bold text-blue-800">
    Batch Information
  </h1>

  <div className="mt-2 flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
    <p className="text-sm font-medium text-blue-700">
      {batch.name}
    </p>

    <p className="text-xs text-blue-600">
      Created: {batch.createdAt}
    </p>
  </div>
</div>


      <div className="flex flex-wrap gap-2">
        <button className="btn-outline">Edit</button>
        <button className="btn-outline">Delete</button>
        <button className="btn-outline">BO</button>
        <button
          onClick={() => setShowSRP(true)}
          className="btn-primary"
        >
          SRP
        </button>
        <button
          onClick={handleExport}
          className="btn-primary"
        >
          Export
        </button>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <InfoCard label="Capital" value={`₱${batch.totalCost}`} />
        <InfoCard label="Gross Revenue" value={`₱${grossRevenue}`} />
        <InfoCard label="BO Loss" value={`₱${batch.bo.loss}`} />
        <InfoCard
          label="Net Revenue"
          value={`₱${netRevenue}`}
          highlight
        />
      </div>

      <Section title="Batch Items">
        {batch.items.map((i, idx) => (
          <Row
            key={idx}
            left={i.product}
            right={`${i.quantity} × ₱${i.price}`}
          />
        ))}
      </Section>

      <Section title="Selling Price per Store">
        {batch.srp.map((s, idx) => (
          <Row key={idx} left={s.store} right={`₱${s.price}`} />
        ))}
      </Section>

     <Section title="Notes">
  <textarea
    value={batch.notes}
    onChange={() => {}}
    placeholder="Enter notes for this batch..."
    rows={4}
    className="
      w-full
      resize-none
      rounded
      border
      border-blue-100
      px-3
      py-2
      text-sm
      text-gray-700
      focus:outline-none
      focus:ring-1
      focus:ring-blue-600
    "
  />
</Section>

     <Section title="Documents">
  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
    {/* Hard-coded images for now */}
    <img
      src={img1}
      alt="Receipt"
      className="rounded border border-blue-100 object-cover"
    />

    <img
      src={img2}
      alt="Invoice"
      className="rounded border border-blue-100 object-cover"
    />

    <img
      src={img3}
      alt="Delivery"
      className="rounded border border-blue-100 object-cover"
    />
  </div>
</Section>


      {showSRP && <AddSRPModal onClose={() => setShowSRP(false)} />}
    </div>
  );
}
