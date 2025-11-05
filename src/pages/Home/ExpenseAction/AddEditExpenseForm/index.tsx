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

export default function AddEditExpenseForm({ categories, onSubmit }) {
  const [formData, setFormData] = useState({
    category: "",
    amount: "",
    date: "",
    note: "",
  });

  const handleChange = () => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSelectChange = (value: string) => {
    setFormData({ ...formData, category: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSubmit) onSubmit(formData);
    console.log("Expense Submitted:", formData);
    setFormData({ category: "", amount: "", date: "", note: "" });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 p-4 border rounded-lg shadow-sm bg-white"
    >
      {/* Category */}
      <div className="space-y-1">
        <Label>Category</Label>
        <Select onValueChange={handleSelectChange} value={formData.category}>
          <SelectTrigger>
            <SelectValue placeholder="Select category" />
          </SelectTrigger>
          <SelectContent>
            {categories.map((cat, index) => (
              <SelectItem key={index} value={cat}>
                {cat}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Amount */}
      <div className="space-y-1">
        <Label>Amount</Label>
        <Input
          type="number"
          name="amount"
          value={formData.amount}
          onChange={handleChange}
          placeholder="Enter amount"
        />
      </div>

      {/* Date */}
      <div className="space-y-1">
        <Label>Date</Label>
        <Input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
        />
      </div>

      {/* Note */}
      <div className="space-y-1">
        <Label>Note</Label>
        <Textarea
          name="note"
          value={formData.note}
          onChange={handleChange}
          placeholder="Add a note (optional)"
        />
      </div>

      {/* Submit Button */}
      <div className="flex justify-end">
        <Button type="submit">Save Expense</Button>
      </div>
    </form>
  );
}
