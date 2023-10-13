import { TriggerClient } from "@trigger.dev/sdk";

export const client = new TriggerClient({
  id: "oct-13-2023-jFmd",
  apiKey: process.env.TRIGGER_API_KEY,
  apiUrl: process.env.TRIGGER_API_URL,
});
