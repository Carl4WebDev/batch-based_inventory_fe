import { useState } from "react";

export default function AddSRPModal({ onClose }: { onClose: () => void }) {
  const [store, setStore] = useState("");
  const [price, setPrice] = useState(0);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="w-full max-w-md rounded-lg bg-white p-6">
        <div className="mb-4 flex justify-between items-center">
          <h2 className="text-lg font-semibold text-blue-700">
            Add SRP
          </h2>
          <button
            onClick={onClose}
            className="text-blue-700 hover:text-blue-900"
          >
            ✕
          </button>
        </div>

        <div className="space-y-4">
          <div>
            <label className="text-sm text-blue-700">Store Name</label>
            <input
              className="w-full rounded border px-3 py-2"
              value={store}
              onChange={(e) => setStore(e.target.value)}
            />
          </div>

          <div>
            <label className="text-sm text-blue-700">SRP</label>
            <input
              type="number"
              className="w-full rounded border px-3 py-2"
              value={price}
              onChange={(e) => setPrice(Number(e.target.value))}
            />
          </div>

          <button className="w-full rounded bg-blue-600 py-2 text-white hover:bg-blue-700">
            Save
          </button>
        </div>
      </div>
    </div>
  );
}
