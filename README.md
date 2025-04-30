**InterviewPal👾** is a full-stack AI-powered voice assistant webapp that conducts real-time mock interviews, providing instant feedback and score — all without the need for human interaction. It's designed to help users practice and prepare for real-life interviews at their convenience, choosing the type and difficulty of interview they want!

## 🔎 About the Project

InterviewPal enables users to:
- Engage in AI-led mock interviews anytime.
- Receive real-time grading and feedback based on their answers.
- Customize the type of interview based on roles or topics.
- Improve communication and response skills in a realistic interview setting.

No human interviewer is required — the AI voice assistant handles everything from asking questions to evaluating responses.



## 🚀 Tech Stack

This project utilizes the following technologies:

- **Frontend**: Next.js, React.js, TypeScript  
- **Voice Assistant**: Vapi API 
- **AI & NLP**:
  - **GPT-4**: For conducting interviews
  - **Gemini AI & Gemini Flash**: For generating feedback and performance analysis
- **Backend / Realtime Data**: Firebase & Firestore 
- **Validation**: Zod


## 🔄 Workflow

1. **User initiates the interview** through the web interface.
2. The **Vapi-powered AI voice assistant** communicates with the user.
3. Interview questions are generated and managed using **GPT-4 via API**.
4. Once the interview concludes:
   - Responses are analyzed using **Gemini Flash** for scoring and feedback.
   - Data is stored and fetched in real-time using **Firebase**.
5. Final feedback and improvement suggestions are shown to the user in a detailed report.



## 🛠 Features

- Voice-based mock interview simulation
- Dynamic question generation based on role
- Instant scoring and performance analytics
- Zero human dependency — fully automated
- Realtime data updates and response evaluation


## Getting Started

First, run the development server:

```bash
npm run dev
```
