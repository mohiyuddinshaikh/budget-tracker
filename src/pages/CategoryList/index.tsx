import CommonTable from "@/components/ui/Table/index";
import { categories } from "@/constants/data";
import type { Category } from "@/types/category";


export default function CategoriesList() {
  const columns = [
    { key: "id", label: "ID" },
    { key: "name", label: "Name" },
    { key: "amount", label: "Amount" },
  ] as const;

  const handleEdit = (row: Category) => {
    console.log("row", row);
  };

  const handleDelete = (row: Category) => {
    console.log("row", row);
  };

  return (
    <div className="p-8">
      <h2 className="text-lg font-semibold hidden mb-3 md:block">
        Category List
      </h2>
      <CommonTable
        data={categories}
        columns={columns}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
    </div>
  );
}
