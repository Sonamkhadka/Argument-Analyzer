import { AnalysisRequest, AnalysisResult, OpenRouterModel } from "@shared/schema";
import { apiRequest } from "./queryClient";
import { saveHistoryItem } from "./localStorage";

/**
 * Sends an argument to the backend for analysis by the selected AI model
 * 
 * @param text - The argument text to analyze
 * @param model - The AI model to use (openai, deepseek, gemini, or openrouter)
 * @param openRouterModel - The specific OpenRouter model to use (required when model is "openrouter")
 * @returns The analysis result from the AI model
 */
export async function analyzeArgument(
  text: string, 
  model: string, 
  openRouterModel?: OpenRouterModel
): Promise<AnalysisResult> {
  try {
    const payload: AnalysisRequest = {
      text,
      model: model as "openai" | "deepseek" | "gemini" | "openrouter",
    };

    // Add openRouterModel to the payload if provided
    if (model === "openrouter" && openRouterModel) {
      payload.openRouterModel = openRouterModel;
    }

    const response = await apiRequest("POST", "/api/analyze", payload);
    const result = await response.json() as AnalysisResult;
    
    // Save the result to localStorage with the full model information
    const modelToSave = model === "openrouter" && openRouterModel 
      ? `openrouter-${openRouterModel}` 
      : model;
    
    saveHistoryItem(text, result, modelToSave);
    
    return result;
  } catch (error) {
    console.error("Error analyzing argument:", error);
    
    if (error instanceof Response) {
      const errorText = await error.text();
      throw new Error(errorText || "Failed to analyze argument");
    }
    
    throw error;
  }
}
