import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { months } from "@/types/expense";

export default function MonthNavigator() {
  const currentMonthIndex = new Date().getMonth();
  console.log("currentMonthIndex", currentMonthIndex);
  const [monthIndex, setMonthIndex] = useState(currentMonthIndex);
  console.log("monthIndex foo ", monthIndex);

  const handlePrev = () => {
    setMonthIndex((prev) => (prev === 0 ? 11 : prev - 1));
  };

  const handleNext = () => {
    setMonthIndex((prev) => (prev === 11 ? 0 : prev + 1));
  };

  return (
    <div className="flex items-center gap-1 md:gap-2">
      <Button variant="outline" size="icon" onClick={handlePrev}>
        <ChevronLeft className="h-4 w-4" />
      </Button>

      <span className="min-w-[100px] md:min-w-[300px] text-center font-medium bg-blue-100 rounded py-1">
        {months[monthIndex]}
      </span>

      <Button variant="outline" size="icon" onClick={handleNext}>
        <ChevronRight className="h-4 w-4" />
      </Button>
    </div>
  );
}
