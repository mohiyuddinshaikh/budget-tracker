"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import useCategoryStore from "@/store/categoryStore";


interface AddEditExpenseFormProps {
  initialData?: {
    id?: number;
    category_id?: string;
    category: string;
    amount: string | number;
    date: string;
    note: string;
  } | null;
  onClose: () => void;
}

export default function AddEditExpenseForm({
  initialData,
  onClose,
}: AddEditExpenseFormProps) {
  const {categories} = useCategoryStore();
  console.log("initialData exp foo", initialData);
  const [formData, setFormData] = useState({
    category: initialData?.category_id || "",
    amount: initialData?.amount.toString() || "",
    date: initialData?.date || "",
    note: initialData?.note || "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (value: string) => {
    setFormData((prev) => ({ ...prev, category: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    onClose();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="category">Category</Label>
        <Select onValueChange={handleSelectChange} value={formData.category}>
          <SelectTrigger>
            <SelectValue placeholder="Select a category" />
          </SelectTrigger>
          <SelectContent>
            {categories?.map((category) => (
              <SelectItem
                key={category.category_id}
                value={category.category_id}
              >
                {category.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="amount">Amount</Label>
        <Input
          id="amount"
          name="amount"
          type="number"
          value={formData.amount}
          onChange={handleChange}
          placeholder="0.00"
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="date">Date</Label>
        <Input
          id="date"
          name="date"
          type="date"
          value={formData.date}
          onChange={handleChange}
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="note">Note (Optional)</Label>
        <Textarea
          id="note"
          name="note"
          value={formData.note}
          onChange={handleChange}
          placeholder="Add a note about this expense"
          rows={3}
        />
      </div>

      <Button type="submit" className="w-full">
        Add Expense
      </Button>
    </form>
  );
}
