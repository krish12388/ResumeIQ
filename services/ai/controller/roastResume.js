import { GoogleGenAI } from "@google/genai";
import { z } from "zod";
import { zodToJsonSchema } from "zod-to-json-schema";
const genAI = new GoogleGenAI({ apiKey: process.env.GOOGLE_API_KEY2 });
const roastSchema = z.object({
  brutalSummary: z.string(),
  weaknesses: z.array(z.object({
    category: z.string(),
    issue: z.string(),
    severity: z.string(),
    impact: z.string(),
  })),
  badPhrases: z.array(z.string()),
  fix: z.array(z.string()),
});

export const roastResumeController = async ({ resumeText }) => {
  const prompt = `You are an AI roast master for resumes. Analyze the candidate's profile and provide a CRITICAL and BRUTAL roast.

Resume: ${resumeText}

Return ONLY a raw JSON object (no markdown, no backticks) with this EXACT structure:

{
  "weaknesses": [
    {
      "category": "e.g., Experience, Skills, Education, Presentation",
      "issue": "specific weakness in brutal detail",
      "severity": "HIGH",
      "impact": "why this is a major problem for getting hired"
    }
  ],
  "badPhrases": [
    "exact phrase from resume that sounds terrible"
  ],
  "brutalSummary": "A short paragraph that brutally tears apart this resume. Be savage. No mercy.",
  "fix": [
    "Specific, actionable advice on what MUST be fixed"
  ]
}

Rules:
- DO NOT hold back. Be savage. Be brutal. Call out every weakness.
- Output ONLY valid JSON, no markdown, no code blocks, no extra text.`;

  try {
    const response = await genAI.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
      config: {
        temperature: 0.3,
        topP: 0.9,
        topK: 40,
        responseMimeType: "application/json",
        responseSchema: {
          type: "OBJECT",
          properties: {
            weaknesses: {
              type: "ARRAY",
              items: {
                type: "OBJECT",
                properties: {
                  category: { type: "STRING" },
                  issue: { type: "STRING" },
                  severity: { type: "STRING" },
                  impact: { type: "STRING" },
                },
                required: ["category", "issue", "severity", "impact"],
              },
            },
            badPhrases: {
              type: "ARRAY",
              items: { type: "STRING" },
            },
            brutalSummary: { type: "STRING" },
            fix: {
              type: "ARRAY",
              items: { type: "STRING" },
            },
          },
          required: ["weaknesses", "badPhrases", "brutalSummary", "fix"], // ✅ removed title, matchScore, location
        },
      },
    });

    const raw = JSON.parse(response.text);

    const parsed = {
      weaknesses: raw.weaknesses || [],
      badPhrases: raw.badPhrases || [],
      brutalSummary: raw.brutalSummary || "",
      fix: raw.fix || [],
    };

    console.log("Roast generated:", parsed);
    return parsed;

  } catch (error) {
    console.error("Roast generation error:", error);
    throw new Error(error.message || "Failed to generate roast");
  }
};