import { useState } from "react";
import { Link } from "react-router-dom";
import AddCostModal from "../modals/AddCostModal";
import { mockBatches } from "../data/mockBatches";

export default function MngBusinessPage() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="space-y-6">
      {/* Label */}
      <div>
        <p className="text-sm font-medium text-blue-600 uppercase tracking-wide">
          Batch-Based Cost Management
        </p>
      </div>

      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-blue-700">
          Manage Business
        </h1>

        <button
          onClick={() => setShowModal(true)}
          className="rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
        >
          + Add Cost
        </button>
      </div>

      {/* Batch List */}
      <div className="space-y-3">
        {mockBatches.map((batch) => (
          <Link
            key={batch.id}
            to={`/manage-business/${batch.id}`}
          >
            <div className="rounded border border-blue-100 bg-white p-4 hover:bg-blue-50 cursor-pointer">
              <p className="font-medium text-blue-700">
                {batch.name}
              </p>
              <p className="text-sm text-gray-600">
                Total Cost: ₱{batch.totalCost}
              </p>
            </div>
          </Link>
        ))}
      </div>

      {showModal && (
        <AddCostModal onClose={() => setShowModal(false)} />
      )}
    </div>
  );
}
