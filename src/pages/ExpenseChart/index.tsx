import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { categories, expenses } from "@/constants/data";
import CommonTable from "@/components/ui/Table";

type TooltipContext = {
  label: string;
  raw: number;
  dataset: {
    data: number[];
  };
};

// Register ChartJS components
ChartJS.register(ArcElement, Tooltip, Legend);

export default function ExpenseChart() {
  const categoryTotals = expenses.reduce<Record<string, number>>(
    (acc, expense) => {
      acc[expense.category] = (acc[expense.category] || 0) + expense.amount;
      return acc;
    },
    {}
  );

  // Prepare data for the chart
  const chartData = {
    labels: Object.keys(categoryTotals),
    datasets: [
      {
        data: Object.values(categoryTotals),
        backgroundColor: Object.keys(categoryTotals).map((categoryName) => {
          const category = categories.find((cat) => cat.name === categoryName);
          // Map Tailwind color classes to their hex values
          const colorMap: Record<string, string> = {
            "bg-red-500": "#ef4444",
            "bg-blue-500": "#3b82f6",
            "bg-green-500": "#22c55e",
            "bg-yellow-500": "#eab308",
            "bg-purple-500": "#a855f7",
            "bg-pink-500": "#ec4899",
            "bg-indigo-500": "#6366f1",
            "bg-teal-500": "#14b8a6",
            "bg-orange-500": "#f97316",
            "bg-amber-500": "#f59e0b",
          };
          return (category?.color && colorMap[category.color]) || "#cccccc";
        }),
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "bottom" as const,
        labels: {
          boxWidth: 12,
          padding: 8,
          font: {
            size: 12,
          },
        },
      },
      tooltip: {
        callbacks: {
          label: function (context: TooltipContext) {
            const label = context.label || "";
            const value = context.raw || 0;
            const total = context.dataset.data.reduce((a, b) => a + b, 0);
            const percentage = Math.round((value / total) * 100);
            return `${label}: ${percentage} %`;
          },
        },
      },
    },
    layout: {
      padding: 8,
    },
  };

  const columns = [
    { key: "id", label: "ID" },
    { key: "name", label: "Name" },
    { key: "amount", label: "Amount" },
  ] as const;

  return (
    <div className="p-3 mt-3 bg-white rounded-lg  w-full max-w-md mx-auto">
      <h2 className="text-md font-semibold mb-2 text-center">
        Expenses by Category
      </h2>
      <div className="h-48">
        <Pie data={chartData} options={options} />
      </div>
      <h2 className="text-lg font-semibold hidden mb-3 md:block mt-3">
        Category List
      </h2>
      <CommonTable
        data={categories}
        columns={columns}
        isAction = {false}
      />
    </div>
  );
}
