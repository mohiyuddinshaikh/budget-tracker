import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function ExpenseSummary() {
  const aiSummary = `In Novmber, you spent a total of ₹ 3000.
  Most of your spending was on travel, which shows your lifestyle priorities.
  Try monitoring this category next month to optimize your budget and savings.`;

  return (
    <div>
      <Card className="bg-blue-50 border-blue-200 m-5">
        <CardHeader>
          <CardTitle>Summary</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-700 leading-relaxed">{aiSummary}</p>
        </CardContent>
      </Card>
    </div>
  );
}
