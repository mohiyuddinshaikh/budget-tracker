import { useState } from "react";
import CommonTable from "@/components/ui/Table/index";
import BottomSheet from "@/components/ui/BottomSheet";
import AddEditExpenseForm from "../ExpenseAction/AddEditExpenseForm";
import type { Expense } from "@/types/expense";
// import { expenses } from "@/constants/data";
import ConfirmDialog from "@/components/ConfirmDialog";
import { useExpenseStore } from "@/store/expenseStore";
import { useMonthStore } from "@/store/monthStore";

export default function ExpenseList() {
  const [isExpenseSheetOpen, setIsExpenseSheetOpen] = useState(false);
  const [currentExpense, setCurrentExpense] = useState<Expense | null>(null);
  const [open, setOpen] = useState(false);
  const [selectedRow, setSelectedRow] = useState<Expense | null>(null);

  const {expenses, deleteExpense}  = useExpenseStore();

    const { selectedMonth} = useMonthStore();

    const filteredExpenses = expenses.filter((exp) => {
    const expMonth = new Date(exp.date).getMonth();
    return expMonth === selectedMonth;
  });

  const columns = [
    { key: "id", label: "ID" },
    { key: "category", label: "Category" },
    { key: "category_id", label: "Category Id" },
    { key: "amount", label: "Amount (₹)", align: "right" },
    { key: "date", label: "Date" },
    { key: "note", label: "Note" },
  ] as const;

  const handleEdit = (row: Expense) => {
    setCurrentExpense(row);
    setIsExpenseSheetOpen(true);
  };

  const handleDelete = (row: Expense) => {
    setSelectedRow(row);
    setOpen(true);

  };

  const handleCloseSheet = () => {
    setIsExpenseSheetOpen(false);
    setCurrentExpense(null);
  };

  const confirmEdit = () => {
    deleteExpense(selectedRow?.id)
  };

  return (
    <div className="pt-10">
      <div className="flex justify-between items-center mb-3">
        <h2 className="text-lg font-semibold">Expense List</h2>
      </div>

      <CommonTable
        data={filteredExpenses}
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
      <ConfirmDialog
        open={open}
        title="Delete Expense?"
        description="Are you sure you want to delete this record?"
        confirmText="Delete"
        cancelText="No"
        onConfirm={confirmEdit}
        onOpenChange={setOpen}
      />
    </div>
  );
}
