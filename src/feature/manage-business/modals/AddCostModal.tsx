import { useState } from "react";
import { useVoiceInput } from "../../../shared/hooks/useVoiceInput";

type CostItem = {
  product: string;
  quantity: number;
  price: number;
};

export default function AddCostModal({
  onClose,
}: {
  onClose: () => void;
}) {
  const [items, setItems] = useState<CostItem[]>([
    { product: "Onions", quantity: 4, price: 100 },
    { product: "Garlic", quantity: 2, price: 200 },
  ]);

  const updateItem = (
    index: number,
    field: keyof CostItem,
    value: string | number
  ) => {
    const updated = [...items];
    updated[index] = { ...updated[index], [field]: value };
    setItems(updated);
  };

  const addItem = () => {
    setItems([...items, { product: "", quantity: 0, price: 0 }]);
  };

  const getRowTotal = (item: CostItem) =>
    item.quantity * item.price;

  const batchTotal = items.reduce(
    (sum, item) => sum + getRowTotal(item),
    0
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="w-full max-w-3xl rounded-lg bg-white p-6">
        {/* Header */}
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-lg font-semibold text-blue-700">
            Add Batch Cost
          </h2>
          <button
            onClick={onClose}
            className="text-blue-700 hover:text-blue-900"
          >
            ✕
          </button>
        </div>

        {/* Label */}
        <div className="mb-2">
          <p className="text-sm font-medium text-blue-600 uppercase tracking-wide">
            Batch Items
          </p>
        </div>

        {/* Table */}
<div className="space-y-3">
  {items.map((item, index) => (
    <CostRow
      key={index}
      item={item}
      index={index}
      updateItem={updateItem}
      isLast={index === items.length - 1}
      addItem={addItem}
    />
  ))}
</div>


        {/* Footer */}
        <div className="mt-6 flex justify-between items-center border-t pt-4">
          <span className="text-sm text-gray-600">
            Total Batch Cost
          </span>
          <span className="text-lg font-bold text-blue-700">
            ₱{batchTotal}
          </span>
        </div>
      </div>
    </div>
  );
}

function CostRow({
  item,
  index,
  updateItem,
  isLast,
  addItem,
}: {
  item: CostItem;
  index: number;
  updateItem: (
    index: number,
    field: keyof CostItem,
    value: string | number
  ) => void;
  isLast: boolean;
  addItem: () => void;
}) {
  const voice = useVoiceInput((text) =>
    updateItem(index, "product", text)
  );

  const rowTotal = item.quantity * item.price;

  return (
    <div className="grid grid-cols-5 gap-2 items-center">
      {/* Product with voice */}
      <div className="flex gap-1">
        <input
          className="w-full rounded border px-2 py-1"
          placeholder="Product"
          value={item.product}
          onChange={(e) =>
            updateItem(index, "product", e.target.value)
          }
        />

        <button
          type="button"
          onClick={voice.start}
          className="rounded border border-blue-600 px-2 text-blue-600"
          title="Voice input"
        >
          🎤
        </button>
      </div>

      {/* Quantity */}
      <input
        type="number"
        className="rounded border px-2 py-1"
        placeholder="Qty"
        value={item.quantity}
        onChange={(e) =>
          updateItem(index, "quantity", Number(e.target.value))
        }
      />

      {/* Price */}
      <input
        type="number"
        className="rounded border px-2 py-1"
        placeholder="Price"
        value={item.price}
        onChange={(e) =>
          updateItem(index, "price", Number(e.target.value))
        }
      />

      {/* Total */}
      <div className="text-sm text-blue-700 font-medium">
        ₱{rowTotal}
      </div>

      {/* Add row */}
      {isLast && (
        <button
          onClick={addItem}
          className="rounded bg-blue-600 text-white px-3 py-1 hover:bg-blue-700"
        >
          +
        </button>
      )}
    </div>
  );
}
