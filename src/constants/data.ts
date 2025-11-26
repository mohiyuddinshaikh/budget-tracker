import type { Category } from "@/types/category";
import type { Expense } from "@/types/expense";

export const categories: Category[] = [
      { category_id: "1", name: "Food", color: "bg-red-500", amount: 250 },
      { category_id: "2", name: "Transport", color: "bg-blue-500", amount: 120 },
      { category_id: "3", name: "Shopping", color: "bg-green-500", amount: 500 },
];

export const expenses: Expense[] = [
      {
            id: 1,
            category: "Food",
            category_id: "1",
            amount: 250,
            date: "2025-10-25",
            note: "Lunch at cafe",
      },
      {
            id: 2,
            category: "Transport",
            category_id: "2",
            amount: 120,
            date: "2025-10-26",
            note: "Uber ride",
      },
      {
            id: 3,
            category: "Shopping",
            category_id: "3",
            amount: 500,
            date: "2025-10-28",
            note: "Groceries",
      },
];

export const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
] as const;