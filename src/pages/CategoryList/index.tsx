import { useState } from "react";
import CommonTable from "@/components/ui/Table/index";
import BottomSheet from "@/components/ui/BottomSheet";
import { Button } from "@/components/ui/button";
import AddEditCategoryForm from "@/pages/Home/ExpenseAction/AddEditCategoryForm";
import type { Category } from "@/types/category";
import ConfirmDialog from "@/components/ConfirmDialog";
import useCategoryStore from "@/store/categoryStore";

export default function CategoriesList() {
  const [isCategorySheetOpen, setIsCategorySheetOpen] = useState(false);
  const [currentCategory, setCurrentCategory] = useState<Category | null>(null);
  const [open, setOpen] = useState(false);
  const [selectedRow, setSelectedRow] = useState<Category | null>(null);
  const { categories, deleteCategory } = useCategoryStore();
  const columns = [
    { key: "category_id", label: "ID" },
    { key: "name", label: "Name" },
    { key: "amount", label: "Amount" },
  ] as const;

  const handleEdit = (row: Category) => {
    setCurrentCategory(row);
    setIsCategorySheetOpen(true);
  };

  const handleDelete = (row: Category) => {
    setSelectedRow(row);
    setOpen(true);
  };
  const confirmEdit = () => {
    console.log("selectedRoe", selectedRow);
    if (selectedRow?.category_id) {
      deleteCategory(selectedRow.category_id);
    } else {
      console.log("err");
    }
  };

  const handleCloseSheet = () => {
    setIsCategorySheetOpen(false);
    setCurrentCategory(null);
  };

  return (
    <div className="m-5">
      <div className="flex justify-between items-center mb-3">
        <h2 className="text-lg font-semibold">Category List</h2>
        <Button onClick={() => setIsCategorySheetOpen(true)}>
          Add Category
        </Button>
      </div>

      <CommonTable
        data={categories}
        columns={columns}
        onEdit={handleEdit}
        onDelete={handleDelete}
        isAction={true}
      />

      {/* Bottom Sheet for Adding/Editing Category */}
      <BottomSheet
        open={isCategorySheetOpen}
        onOpenChange={(open) => {
          if (!open) {
            handleCloseSheet();
          } else {
            setIsCategorySheetOpen(true);
          }
        }}
        title={currentCategory ? "Edit Category" : "Add New Category"}
        triggerText=""
        isShow={false}
      >
        <AddEditCategoryForm
          initialData={currentCategory || undefined}
          onClose={handleCloseSheet}
        />
      </BottomSheet>
      <ConfirmDialog
        open={open}
        title="Delete Category?"
        description="Are you sure you want to delete this record?"
        confirmText="Delete"
        cancelText="No"
        onConfirm={confirmEdit}
        onOpenChange={setOpen}
      />
    </div>
  );
}
