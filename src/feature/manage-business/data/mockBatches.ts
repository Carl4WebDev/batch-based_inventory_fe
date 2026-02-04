export const mockBatches = [
  {
    id: "batch-001",
    name: "Onions & Garlic – Jan 2026",
    createdAt: "2026-01-12 09:45 AM",
    totalCost: 800,
    bo: {
      quantity: 1,
      loss: 100,
    },
    items: [
      { product: "Onions", quantity: 4, price: 100 },
      { product: "Garlic", quantity: 2, price: 200 },
    ],
    srp: [
      { store: "Felcris Supermarket", price: 120 },
      { store: "ABC Convenience", price: 130 },
    ],
    notes: "Delivered in good condition. Minor spoilage on onions.",
    documents: ["delivery_receipt.jpg", "invoice_0126.pdf"],
  },
];
