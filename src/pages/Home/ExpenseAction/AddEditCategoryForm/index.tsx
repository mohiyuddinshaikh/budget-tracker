import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { useNavigate } from "react-router-dom";
import type { Category } from "@/types/category";

interface AddEditCategoryFormProps {
  initialData?: Category | null;
  onClose: () => void;
}

export default function AddEditCategoryForm({
  initialData,
  onClose,
}: AddEditCategoryFormProps) {
  const [categoryName, setCategoryName] = useState("");
  const navigate = useNavigate();
  console.log(" foos", initialData);

  useEffect(() => {
    if (initialData) {
      console.log("initial 1", initialData);
      setCategoryName(initialData.name || "");
    }
  }, [initialData]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("categoryName", categoryName);
    onClose();
  };

  return (
    <div className="space-y-6">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="category">Category Name</Label>
          <Input
            id="category"
            type="text"
            placeholder="Enter category name"
            value={categoryName}
            onChange={(e) => setCategoryName(e.target.value)}
            required
          />
        </div>
        <div className="flex justify-end gap-2 pt-2">
          <Button type="submit" disabled={!categoryName.trim()}>
            Save Category
          </Button>
        </div>
      </form>
      {/*  "View All" button */}
      <div className="flex justify-end pt-4 border-t">
        <Button variant="outline" onClick={() => navigate("/categories")}>
          View All Categories
        </Button>
      </div>
    </div>
  );
}
