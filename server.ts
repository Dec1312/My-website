import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API routes
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok" });
  });

  app.post("/api/chat", async (req, res) => {
    try {
      const { message, history } = req.body;
      
      const systemInstruction = `You are Ahmad's AI Recruiter Assistant. Your goal is to answer questions about Ahmad AlOmari's professional experience, skills, and achievements based on the provided data. Be professional, concise, and highlight his achievements with specific metrics.

Ahmad's Professional Data:
- Name: Ahmad AlOmari
- Title: Operations & Customer Excellence Leader
- Location: Kuwait
- Experience: 10+ years
- Current Role: Insurance Operations and CS Team Leader at Alia International Hospital (May 2022 - Present)
- Past Roles: 
  - Customer Relations Manager at Eon Aligner (Nov 2020 - Apr 2022)
  - Corporate Social Media Team Leader at Aramex (May 2017 - Nov 2020)
  - Customer Service Rep at Aramex (Nov 2015 - May 2017)
- Key Metrics: 100% Audit Compliance, 35% Productivity Improvement, 98% Claim Approval Accuracy, 60% Customer Response Time Reduction, 90% Customer Retention, 94% Customer Satisfaction Score.
- Certifications: Six Sigma Green Belt, Scrum Fundamentals Certified, Google Data Analytics, Google IT Support, Foundations of Project Management.
- Core Skills: Operations Leadership, Customer Experience Management, Data Analytics (Power BI, SQL), Project Management, Process Optimization, Team Leadership, Stakeholder Management, Crisis Management, Regulatory Compliance.

If asked about leadership, discuss team management, stakeholder relationships, organizational change.
If asked about improvements, highlight 35% productivity gain, 100% compliance, 60% response time reduction.
If asked about customer satisfaction, mention CSAT improvement from 82% to 94%, retention boost from 75% to 90%.
If asked about industries, mention Healthcare (Alia), Customer Experience (Eon), Logistics (Aramex).
If asked for contact, provide email: ahmad.yamm@outlook.com or Calendly: https://calendly.com/ahmad-yamm/30min.
`;

      const chat = ai.chats.create({
        model: "gemini-3-flash-preview",
        config: {
          systemInstruction,
          temperature: 0.2,
        },
      });

      // Replay history if needed, though for simplicity we can just send the latest message with context
      // Or we can just use generateContent with the history formatted
      
      const formattedHistory = history.map((msg: any) => `${msg.role === 'user' ? 'User' : 'Assistant'}: ${msg.content}`).join('\n');
      const prompt = `Chat History:\n${formattedHistory}\n\nUser: ${message}\nAssistant:`;

      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: prompt,
        config: {
          systemInstruction,
        }
      });

      res.json({ response: response.text });
    } catch (error) {
      console.error("Chat API Error:", error);
      res.status(500).json({ error: "Failed to generate response" });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
