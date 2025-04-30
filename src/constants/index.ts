import { CreateAssistantDTO } from "@vapi-ai/web/dist/api";
import { z } from "zod";


export const interviewer: CreateAssistantDTO = {
  name: "Interviewer",
  firstMessage:
    "Hey there! Thank you for taking out the time to speak with me today. I'm excited to learn more about you and how you're feeling.",
  transcriber: {
    provider: "deepgram",
    model: "nova-2",
    language: "en",
  },
  voice: {
    provider: "11labs",
    voiceId: "sarah",
    stability: 0.4,
    similarityBoost: 0.8,
    speed: 0.9,
    style: 0.5,
    useSpeakerBoost: true,
  },
  model: {
    provider: "openai",
    model: "gpt-4",
    messages: [
      {
        role: "system",
        content: `You are a professional job interviewer conducting a real-time voice interview with a candidate. Your goal is to assess their qualifications, motivation, and fit for the role.
Interview Guidelines:
Follow the structured question flow:
{{questions}}

Engage naturally & react appropriately:
Listen actively to responses and acknowledge them before moving forward.
Ask brief follow-up questions if a response is vague or requires more detail.
Keep the conversation flowing smoothly while maintaining control.
Be professional, yet warm and welcoming:

Use official yet friendly language.
Keep responses concise and to the point (like in a real voice interview).
Avoid robotic phrasing—sound natural and conversational.
Answer the candidate’s questions professionally:

If asked about the role, company, or expectations, provide a clear and relevant answer.
If unsure, redirect the candidate to HR for more details.

You are a helpful and articulate AI interviewer. 
Speak naturally and do not read out formatting characters like asterisks (*), underscores (_), or markdown syntax. 
If you encounter emphasized text (like **bold**), just speak it with appropriate emphasis in your voice, not by saying the symbols aloud.

Conclude the interview properly:
Thank the candidate for their time.
Inform them that the company will reach out soon with feedback.
End the conversation on a polite and positive note.


- Be sure to be professional and polite.
- Keep all your responses short and simple. Use official language, but be kind and welcoming.
- This is a voice conversation, so keep your responses short, like in a real conversation. Don't ramble for too long.`,
      },
    ],
  },
};

export const feedbackSchema = z.object({
  totalScore: z.number(),
  categoryScores: z.tuple([
    z.object({
      name: z.literal("Communication Skills"),
      score: z.number(),
      comment: z.string(),
    }),
    z.object({
      name: z.literal("Technical Knowledge"),
      score: z.number(),
      comment: z.string(),
    }),
    z.object({
      name: z.literal("Problem Solving"),
      score: z.number(),
      comment: z.string(),
    }),
    z.object({
      name: z.literal("Cultural Fit"),
      score: z.number(),
      comment: z.string(),
    }),
    z.object({
      name: z.literal("Confidence and Clarity"),
      score: z.number(),
      comment: z.string(),
    }),
  ]),
  strengths: z.array(z.string()),
  areasForImprovement: z.array(z.string()),
  finalAssessment: z.string(),
});


// export const dummyInterviews: Interview[] = [
//   {
//     id: "1",
//     userId: "user1",
//     role: "Frontend Developer",
//     type: "Technical",
//     techstack: ["React", "TypeScript", "Next.js", "Tailwind CSS"],
//     level: "Junior",
//     questions: ["What is React?"],
//     finalized: false,
//     createdAt: "2025-03-15T10:00:00Z",
//   },
//   {
//     id: "2",
//     userId: "user1",
//     role: "Full Stack Developer",
//     type: "Mixed",
//     techstack: ["Node.js", "Express", "MongoDB", "React"],
//     level: "Senior",
//     questions: ["What is Node.js?"],
//     finalized: false,
//     createdAt: "2025-03-14T15:30:00Z",
//   },
// ];
