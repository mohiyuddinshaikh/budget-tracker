import OpenAI from "openai";

export const client = new OpenAI({
  apiKey: process.env.VITE_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true, // VERY important for browser
});