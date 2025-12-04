// store/monthStore.ts
import { create } from "zustand";

interface MonthState {
  selectedMonth : number,
  setSelectedMonth : (monthIndex : number) => void;
}
export const useMonthStore = create<MonthState>((set) => ({
  selectedMonth: new Date().getMonth(),
  setSelectedMonth: (monthIndex) =>
    set({ selectedMonth: monthIndex }),
}));
