import CommonTable from "@/components/ui/Table/index";
import type { Expense } from "@/types/expense";
import { expenses } from "@/constants/data";
import ConfirmDialog from "@/components/ConfirmDialog";
import { useState } from "react";

export default function ExpenseList() {
    const [open, setOpen] = useState(false);
    const [selectedRow, setSelectedRow] = useState<Expense | null>(null);

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
     setSelectedRow(row);
    setOpen(true);
  };

   const confirmEdit = () => {
    console.log("Edit Confirmed:", selectedRow);
  };


  return (
    <div className="pt-10">
      <h2 className="text-lg font-semibold  mb-3">
        Expense List
      </h2>
      <CommonTable
        data={expenses}
        columns={columns}
        onEdit={handleEdit}
        onDelete={handleDelete}
        isAction = {true}
      />
        <ConfirmDialog
        open={open}
        title="Delete Expense?"
        description="Are you sure you want to delete this recode?"
        confirmText="Yes, Edit"
        cancelText="No"
        onConfirm={confirmEdit}
        onOpenChange={setOpen}
      />
    </div>
  );
}
