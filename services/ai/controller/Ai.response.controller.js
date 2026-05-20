import { GoogleGenAI } from "@google/genai";
import { z } from "zod";
import { zodToJsonSchema } from "zod-to-json-schema";
import {TinyFish} from '@tiny-fish/sdk';
import axios from 'axios';
const client = new TinyFish({ apiKey: process.env.TINYFISH_API_KEY });
const genAI = new GoogleGenAI({ apiKey: process.env.GOOGLE_API_KEY });

const interviewReportSchema = z.object({
  location: z.string().describe("The location of the job as described in the job description. Example - New York, USA or Remote etc.  "),
  matchScore: z
    .number()
    .describe(
      "A score between 0 and 100 indicating how well the candidate's profile matches the job description",
    ),
  technicalQuestions: z
    .array(
      z.object({
        question: z
          .string()
          .describe(
            "The technical question that can be asked in the interview",
          ),
        intention: z
          .string()
          .describe(
            "The intention of the interviewer behind asking this question",
          ),
        answer: z
          .string()
          .describe(
            "How to answer this question, what points to cover, what approach to take etc.",
          ),
      }),
    )
    .describe("Technical questions that can be asked in the interview"),
  behavioralQuestions: z
    .array(
      z.object({
        question: z
          .string()
          .describe(
            "The behavioral question that can be asked in the interview",
          ),
        intention: z
          .string()
          .describe(
            "The intention of the interviewer behind asking this question",
          ),
        answer: z
          .string()
          .describe(
            "How to answer this question, what points to cover, what approach to take etc.",
          ),
      }),
    )
    .describe("Behavioral questions that can be asked in the interview"),
  skillGaps: z
    .array(
      z.object({
        skill: z.string().describe("The skill which the candidate is lacking"),
        severity: z
          .enum(["low", "medium", "high"])
          .describe("How important this skill is for the job"),
        explanation: z.string().describe("The explanation for the skill gap"),
      }),
    )
    .describe("List of skill gaps in the candidate's profile"),
  preparationPlan: z
    .array(
      z.object({
        day: z.number().describe("The day number starting from 1"),
        focus: z.string().describe("The main focus area for this day"),
        tasks: z
          .array(z.string())
          .describe("List of tasks to complete on this day"),
      }),
    )
    .describe("A day-wise preparation plan for the candidate"),
  title: z
    .string()
    .describe(
      "The title of the job for which the interview report is generated",
    ),
});

// ✅ Key fix: pass { $refStrategy: "none" } to get a flat, inline schema
const geminiSchema = zodToJsonSchema(interviewReportSchema, {
  $refStrategy: "none",
});

const GenerateInterviewReportController = async ({
  jobDescription,
  resumeText,
  selfDescription,
}) => {
  const prompt = `You are an AI interview preparation assistant. Analyze the candidate's profile against the job description.

Job Description: ${jobDescription}
Resume: ${resumeText}
Self Description: ${selfDescription}

Return ONLY a raw JSON object (no markdown, no backticks) with EXACTLY this structure:
{ "location":"new Delhi",
  "matchScore": 85,
  "title": "Senior Backend Engineer",
  "technicalQuestions": [
    {
      "question": "exact field name: question",
      "intention": "exact field name: intention",
      "answer": "exact field name: answer"
    }
  ],
  "behavioralQuestions": [
    {
      "question": "exact field name: question",
      "intention": "exact field name: intention",
      "answer": "exact field name: answer"
    }
  ],
  "skillGaps": [
    {
      "skill": "exact field name: skill",
      "severity": "low or medium or high only"
      "explanation": "exact field name: explanation"
    }
  ],
  "preparationPlan": [
    {
      "day": 1,
      "focus": "exact field name: focus",
      "tasks": ["task 1", "task 2"]
    }
  ]
}

Rules:
- severity must be exactly "low", "medium", or "high" — no other values
- day must be a number, not a string
- tasks must be an array of strings
- Do not add any extra fields
- Do not wrap in markdown or code blocks`;

  try {
    const nativeGeminiSchema = {
      type: "OBJECT",
      properties: {
        location: {                    // ✅ add this
      type: "STRING",
      description: "The location of the job as described in the job description"
    },
        matchScore: {
          type: "NUMBER",
          description:
            "A score between 0 and 100 indicating how well the candidate's profile matches the job description",
        },
        title: {
          type: "STRING",
          description:
            "The title of the job for which the interview report is generated",
        },
        technicalQuestions: {
          type: "ARRAY",
          description: "Technical questions that can be asked in the interview",
          items: {
            type: "OBJECT",
            properties: {
              question: {
                type: "STRING",
                description:
                  "The technical question that can be asked in the interview",
              },
              intention: {
                type: "STRING",
                description:
                  "The intention of the interviewer behind asking this question",
              },
              answer: {
                type: "STRING",
                description:
                  "How to answer this question, what points to cover, what approach to take etc.",
              },
            },
            required: ["question", "intention", "answer"],
          },
        },
        behavioralQuestions: {
          type: "ARRAY",
          description:
            "Behavioral questions that can be asked in the interview",
          items: {
            type: "OBJECT",
            properties: {
              question: {
                type: "STRING",
                description:
                  "The behavioral question that can be asked in the interview",
              },
              intention: {
                type: "STRING",
                description:
                  "The intention of the interviewer behind asking this question",
              },
              answer: {
                type: "STRING",
                description:
                  "How to answer this question, what points to cover, what approach to take etc.",
              },
            },
            required: ["question", "intention", "answer"],
          },
        },
        skillGaps: {
          type: "ARRAY",
          description: "List of skill gaps in the candidate's profile",
          items: {
            type: "OBJECT",
            properties: {
              skill: {
                type: "STRING",
                description: "The skill which the candidate is lacking",
              },
              severity: {
                type: "STRING",
                enum: ["low", "medium", "high"],
                description: "How important this skill is for the job",
              },
              explanation: {
                type: "STRING",
                description: "The explanation for the skill gap",
              },
            },
            required: ["skill", "severity", "explanation"],
          },
        },
        preparationPlan: {
          type: "ARRAY",
          description: "A day-wise preparation plan for the candidate",
          items: {
            type: "OBJECT",
            properties: {
              day: {
                type: "NUMBER",
                description: "The day number starting from 1",
              },
              focus: {
                type: "STRING",
                description: "The main focus area for this day",
              },
              tasks: {
                type: "ARRAY",
                description: "List of tasks to complete on this day",
                items: { type: "STRING" },
              },
            },
            required: ["day", "focus", "tasks"],
          },
        },
      },
      required: [
        "location",
        "matchScore",
        "title",
        "technicalQuestions",
        "behavioralQuestions",
        "skillGaps",
        "preparationPlan",
      ],
    };

    const response = await genAI.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
      config: {
        temperature: 0.1,
        topP: 0.9,
        topK: 40,
        responseMimeType: "application/json",
        responseSchema: nativeGeminiSchema,
      },
    });

    const raw = JSON.parse(response.text);

    // Strip any extra fields Gemini adds, validate types
    const parsed = interviewReportSchema.safeParse(raw);

    if (!parsed.success) {
      console.error(
        "Schema mismatch issues:",
        JSON.stringify(parsed.error.issues, null, 2),
      );
      return {
        message: "Invalid response structure from AI",
        error: parsed.error.issues,
      };
    }

    console.log(parsed.data);
    return parsed.data;
  } catch (error) {
    console.log(error);
    return { message: "Internal Server Error", error: error.message };
  }
};


export const scrapeJobs = async (title, location) => {
  const query = `${title} jobs in ${location}`;
  
  console.log('JSearch query:', query);
  console.log('RapidAPI key:', process.env.RAPIDAPI_KEY ? '✅ loaded' : '❌ undefined');

  const { data } = await axios.get(
    'https://jsearch.p.rapidapi.com/search',
    {
      params: {
        query,
        page: '1',
        num_pages: '1',
        date_posted: 'all'
      },
      headers: {
        'x-rapidapi-key': process.env.RAPIDAPI_KEY,
        'x-rapidapi-host': 'jsearch.p.rapidapi.com',
      },
      timeout: 15000
    }
  );

  if (!data.data || data.data.length === 0) {
    return [];
  }

  return data.data.map(job => ({
    title: job.job_title,
    company: job.employer_name,
    location: `${job.job_city ?? ''}${job.job_country ? ', ' + job.job_country : ''}`,
    skills_required: job.job_required_skills ?? [],
    experience: job.job_experience_in_place_of_education ?? 'Not specified',
    salary: job.job_min_salary
      ? `${job.job_min_salary} - ${job.job_max_salary} ${job.job_salary_currency}`
      : 'Not disclosed',
    apply_url: job.job_apply_link,
    posted_date: job.job_posted_at_datetime_utc,
    logo: job.employer_logo ?? null,
    source: 'Indeed / LinkedIn / Glassdoor via JSearch'
  }));
};

export default GenerateInterviewReportController;
