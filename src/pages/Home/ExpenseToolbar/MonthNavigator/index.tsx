import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, RefreshCcw } from "lucide-react";
import { months } from "@/constants/data";
import { useMonthStore } from "@/store/monthStore";

export default function MonthNavigator() {

  const { selectedMonth, setSelectedMonth } = useMonthStore();

  const handlePrev = () => {
    setSelectedMonth(selectedMonth === 0 ? 11 : selectedMonth - 1);
  };

  const handleNext = () => {
    setSelectedMonth(selectedMonth === 11 ? 0 : selectedMonth + 1);
  };

    const handleResetToCurrentMonth = () => {
    const current = new Date().getMonth();
    setSelectedMonth(current);
  };
  
  return (
    <div className="flex items-center gap-1 md:gap-2">
      <Button variant="outline" size="icon" onClick={handlePrev}>
        <ChevronLeft className="h-4 w-4" />
      </Button>

      <span className="min-w-[100px] md:min-w-[300px] text-center font-medium bg-blue-100 rounded py-1">
        {months[selectedMonth]}
      </span>

      <Button variant="outline" size="icon" onClick={handleNext}>
        <ChevronRight className="h-4 w-4" />
      </Button>
        <Button variant="outline" size="icon" onClick={handleResetToCurrentMonth}>
        <RefreshCcw className="h-4 w-4" />
      </Button>
    </div>
  );
}
