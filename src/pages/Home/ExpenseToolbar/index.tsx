import { Button } from "@/components/ui/button";
import { BarChart3, PieChart } from "lucide-react";
import { useNavigate } from "react-router-dom";
import MonthNavigator from "./MonthNavigator";

export default function ExpenseToolbar() {
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-between px-3 py-3 bg-background border-b shadow-sm">
      <MonthNavigator />
      <div className="flex items-center gap-3">
        <Button
          variant="ghost"
          size="icon"
          title="Summary View"
          onClick={() => navigate("/summary")}
        >
          <BarChart3 className="h-5 w-5" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          title="Pie Chart View"
          onClick={() => navigate("/chart")}
        >
          <PieChart className="h-5 w-5" />
        </Button>
      </div>
    </div>
  );
}
