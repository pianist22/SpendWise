import { Inngest } from "inngest";

export const inngest = new Inngest({
  id: "spend-wise", // Unique app ID
  name: "Spend Wise",
  retryFunction: async (attempt) => ({
    delay: Math.pow(2, attempt) * 1000, // Exponential backoff
    maxAttempts: 2,
  }),
});