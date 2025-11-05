"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { useNavigate } from "react-router-dom";

export default function AddEditCategoryForm() {
  const [categoryName, setCategoryName] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setCategoryName("");
  };

  return (
    <div className="max-w-md mx-auto p-4 border rounded-lg shadow-sm bg-white space-y-6">
      <h2 className="text-lg font-semibold">Category</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-1">
          <Label htmlFor="category">Category Name</Label>
          <Input
            id="category"
            type="text"
            placeholder="Enter category name"
            value={categoryName}
            onChange={(e) => setCategoryName(e.target.value)}
          />
        </div>

        <div className="flex justify-end">
          <Button type="submit">Save</Button>
        </div>
      </form>

      {/* Bottom "View All" button */}
      <div className="flex justify-center pt-4 border-t">
        <Button variant="outline" onClick={() => navigate("/categories")}>
          View All Categories
        </Button>
      </div>
    </div>
  );
}
