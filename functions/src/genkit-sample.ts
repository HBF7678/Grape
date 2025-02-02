// Repository URL: https://github.com/HBF7678/Grape.git

// Import the Genkit core libraries and plugins.
import { genkit, z } from "genkit";
import { vertexAI } from "@genkit-ai/vertexai";

// Import models from the Vertex AI plugin. The Vertex AI API provides access to
// several generative models. Here, we import Gemini 1.5 Flash.
import { gemini15Flash } from "@genkit-ai/vertexai";

// From the Firebase plugin, import the functions needed to deploy flows using
// Cloud Functions.
import { firebaseAuth } from "@genkit-ai/firebase/auth";
import { onFlow } from "@genkit-ai/firebase/functions";

const ai = genkit({
  plugins: [
    vertexAI({ location: "us-central1" }),
  ],
});

// Define a simple flow that prompts an LLM to generate menu suggestions.
export const menuSuggestionFlow = onFlow(
  ai,
  {
    name: "menuSuggestionFlow",
    inputSchema: z.string(),
    outputSchema: z.string(),
    authPolicy: firebaseAuth((user: any) => { // Explicitly define user type
      // Additional policy requirements can be set here.
    }),
  },
  async (subject: string) => { // Explicitly define subject type
    const prompt = `Suggest an item for the menu of a ${subject} themed restaurant`;
    const llmResponse = await ai.generate({
      model: gemini15Flash,
      prompt: prompt,
      config: {
        temperature: 1,
      },
    });

    return llmResponse.text;
  }
);
