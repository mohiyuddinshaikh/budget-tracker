import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import useCategoryStore from "@/store/categoryStore";

export default function ExpenseSummary() {
  const { categories } = useCategoryStore();


  const [summary, setSummary] = useState("Loading summary...");

useEffect(() => {
  getSummary();
}, []);


const getSummary = async () => {
    try {

  const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`,
    },
     body: JSON.stringify({
        model: "llama-3.1-8b-instant",
        messages: [
          {
            role: "user",
            content: `
              You are an AI that creates short, friendly expense summaries.

              Here is the user's spending data as an array of objects:
              ${JSON.stringify(categories)}

              Your task:
              1. Calculate the total amount spent.
              2. Identify the highest spending category.
              3. Write a friendly, positive 1–2 sentence summary.
              4. Do NOT give advice.
              5. Return ONLY the summary text.
            `
          }
        ]
      })
  });

  const data = await response.json();
  console.log(data,'archga');
     const aiText = data?.choices?.[0]?.message?.content ?? "No summary found";
    setSummary(aiText);
}catch (error) {
    console.error(error);
    setSummary("Failed to load summary.");
  }
};




  

  return (
    <div>
      <Card className="bg-blue-50 border-blue-200 m-5">
        <CardHeader>
          <CardTitle>Summary</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-700 leading-relaxed">
            {summary}
          </p>
        </CardContent>
      </Card>
    </div>
  );
}


