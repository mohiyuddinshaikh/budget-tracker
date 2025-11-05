import { Button } from "@/components/ui/button";
import { PlusCircle, FolderPlus } from "lucide-react";

export default function ExpenseAction() {
  return (
    <div className="flex items-center justify-between px-3 py-3 bg-background border-b shadow-sm">
      <h2 className="text-lg font-semibold hidden md:block">Expense Actions</h2>
      <div className="flex items-center gap-3">
        <Button size="sm" className="flex items-center gap-2">
          <PlusCircle className="h-4 w-4" />
          Add Expense
        </Button>

        <Button size="sm" variant="outline" className="flex items-center gap-2">
          <FolderPlus className="h-4 w-4" />
          Add Category
        </Button>
      </div>
    </div>
  );
}
