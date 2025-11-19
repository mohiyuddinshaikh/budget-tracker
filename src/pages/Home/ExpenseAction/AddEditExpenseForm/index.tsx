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

import { categories } from "@/constants/data";
import { useExpenseStore } from "@/store/expenseStore";
import type { Expense } from "@/types/expense";

interface AddEditExpenseFormProps {
  initialData?: Expense | null;
  onClose: () => void;
}

export default function AddEditExpenseForm({
  initialData,
  onClose,
}: AddEditExpenseFormProps) {

  const {addExpense, updateExpense} = useExpenseStore();

  const [formData, setFormData] = useState({
    category_id: initialData?.category_id || "",
    category:initialData?.category || "",
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

const handleCategoryChange = (category_id: string) => {
    const selected = categories?.find((c) => c?.category_id === category_id);

    if (selected) {
      setFormData((prev) => ({
        ...prev,
        category_id: selected?.category_id,
        category: selected?.name,
      }));
    }
  };



  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const payload = {
      ...formData,
      amount: Number(formData.amount),
    };

    if (initialData) {
    updateExpense(initialData?.id, payload);
    } else {
      addExpense(payload);
    }
    onClose();
  };


  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="category">Category</Label>
      <Select
          onValueChange={handleCategoryChange}
          value={formData?.category_id}
        >
          <SelectTrigger>
            <SelectValue placeholder="Select Category" />
          </SelectTrigger>

          <SelectContent>
            {categories?.map((cat) => (
              <SelectItem key={cat?.category_id} value={cat?.category_id}>
                {cat?.name}
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
