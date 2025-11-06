import CommonTable from "@/components/ui/Table/index";
import type { Expense } from "@/types/expense";
import { expenses } from "@/constants/data";

export default function ExpenseList() {
  const columns = [
    { key: "category", label: "Category" },
    { key: "id", label: "ID" },
    { key: "amount", label: "Amount (₹)", align: "right" },
    { key: "date", label: "Date" },
    { key: "note", label: "Note" },
  ] as const;

  const handleEdit = (row: Expense) => {
    console.log("row", row);
  };

  const handleDelete = (row: Expense) => {
    console.log("row", row);
  };

  return (
    <div className="p-4">
      <h2 className="text-lg font-semibold hidden mb-3 md:block">
        Expense List
      </h2>
      <CommonTable
        data={expenses}
        columns={columns}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
    </div>
  );
}
