import { useState } from "react";
import { PlusCircle, FolderPlus } from "lucide-react";
import BottomSheet from "@/components/ui/BottomSheet";
import AddEditExpenseForm from "./AddEditExpenseForm";
import AddEditCategoryForm from "./AddEditCategoryForm";

export default function ExpenseAction() {
  const [openSheet, setOpenSheet] = useState<"expense" | "category" | null>(
    null
  );

  return (
    <div className="flex items-center justify-between px-3 py-3 bg-background border-b shadow-sm">
      <h2 className="text-lg font-semibold hidden md:block">Expense Actions</h2>

      <div className="flex items-center gap-3">
        {/* Add Expense */}
        <BottomSheet
          open={openSheet === "expense"}
          onOpenChange={(open) => setOpenSheet(open ? "expense" : null)}
          title="Add New Expense"
          triggerText="Add Expense"
          triggerIcon={<PlusCircle className="h-4 w-4" />}
        >
          <AddEditExpenseForm   onClose={() => setOpenSheet(null)}
 />
        </BottomSheet> 

        {/* Add Category */}
        <BottomSheet
          open={openSheet === "category"}
          onOpenChange={(open) => setOpenSheet(open ? "category" : null)}
          title="Add New Category"
          triggerText="Add Category"
          triggerIcon={<FolderPlus className="h-4 w-4" />}
        >
          <AddEditCategoryForm   onClose={() => setOpenSheet(null)}
 />
        </BottomSheet>
      </div>
    </div>
  );
}
