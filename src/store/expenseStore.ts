import { expenses } from "@/constants/data";
import type { Expense } from "@/types/expense";
import {create} from "zustand";
import {devtools,persist} from "zustand/middleware";

interface ExpenseState{
  expenses: Expense[];
    addExpense: (expense: Omit<Expense, "id">) => void;
    updateExpense: (id: number, updated: Partial<Expense>) => void;
    deleteExpense: (id: number) => void
    
}


export const useExpenseStore = create<ExpenseState>()(
    devtools(
    persist(
      (set) => ({
        expenses: expenses,

        addExpense: (expense) =>
          set(
            (state) => ({
              expenses: [
                ...state.expenses,
                { id: Date.now(), ...expense },
              ],
            }),
            false,                   
            { type: "addExpense" }
          ),
          updateExpense : (id, expenseData) =>
            set((state) => ({
              expenses : state?.expenses?.map((exp) => exp?.id === id ? {...exp, ...expenseData} : exp)
            })),

          deleteExpense : (id) => 
          set(
          (state) => ({
            expenses: state?.expenses?.filter((exp) => exp?.id !== id),
          }),
          false,
          {type: "deleteExpense"}
        )

      }),
      {
        name: "expense-storage",
      }
    )
  )
);


 