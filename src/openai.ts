import OpenAI from "openai";
import { OPENAI_API_KEY } from "./constants/data";

export const client = new OpenAI({
  apiKey: OPENAI_API_KEY,
  dangerouslyAllowBrowser: true, // VERY important for browser
});