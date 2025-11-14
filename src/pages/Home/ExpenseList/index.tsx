import { useState } from "react";
import CommonTable from "@/components/ui/Table/index";
import BottomSheet from "@/components/ui/BottomSheet";
import { Button } from "@/components/ui/button";
import AddEditExpenseForm from "../ExpenseAction/AddEditExpenseForm";
import type { Expense } from "@/types/expense";
import { expenses } from "@/constants/data";

export default function ExpenseList() {
  const [isExpenseSheetOpen, setIsExpenseSheetOpen] = useState(false);
  const [currentExpense, setCurrentExpense] = useState<Expense | null>(null);

  const columns = [
    { key: "category", label: "Category" },
    { key: "id", label: "ID" },
    { key: "amount", label: "Amount (₹)", align: "right" },
    { key: "date", label: "Date" },
    { key: "note", label: "Note" },
  ] as const;

  const handleEdit = (row: Expense) => {
    setCurrentExpense(row);
    setIsExpenseSheetOpen(true);
  };

  const handleDelete = (row: Expense) => {
    console.log("Delete row:", row);
  };

  const handleCloseSheet = () => {
    setIsExpenseSheetOpen(false);
    setCurrentExpense(null);
  };

  return (
    <div className="pt-10">
      <div className="flex justify-between items-center mb-3">
        <h2 className="text-lg font-semibold">Expense List</h2>
      </div>

      <CommonTable
        data={expenses}
        columns={columns}
        onEdit={handleEdit}
        onDelete={handleDelete}
        isAction={true}
      />

      {/* Bottom Sheet for Adding/Editing Expense */}
      <BottomSheet
        open={isExpenseSheetOpen}
        onOpenChange={(open) => {
          if (!open) {
            handleCloseSheet();
          } else {
            setIsExpenseSheetOpen(true);
          }
        }}
        title={currentExpense ? "Edit Expense" : "Add New Expense"}
        triggerText=""
        isShow={false}
      >
        <AddEditExpenseForm
          initialData={currentExpense}
          onClose={handleCloseSheet}
        />
      </BottomSheet>
    </div>
  );
}
