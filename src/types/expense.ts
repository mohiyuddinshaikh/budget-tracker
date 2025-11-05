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
];
const expenses: Expense[] = [
      {
            id: 1,
            category: "Food",
            amount: 250,
            date: "2025-10-25",
            note: "Lunch at cafe",
      },
      {
            id: 2,
            category: "Transport",
            amount: 120,
            date: "2025-10-26",
            note: "Uber ride",
      },
      {
            id: 3,
            category: "Shopping",
            amount: 500,
            date: "2025-10-28",
            note: "Groceries",
      },
];
export default expenses;

export interface Expense {
      id: number;
      category: string;
      amount: number;
      date: string;
      note: string;
}
