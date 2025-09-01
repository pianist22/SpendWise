# Spendwise - AI-Powered Finance Tracking Platform

Welcome to **Spendwise**, a comprehensive full-stack finance tracking platform powered by Artificial Intelligence. Spendwise makes managing personal and multiple financial accounts simple, smart, and insightful by leveraging state-of-the-art technologies and AI-driven analytics.


Link: [SpendWise](https://spendwise.priyanshucode.xyz)
---

## Features

- **Multi-Account Management**  
  Create multiple financial accounts, and easily set any of them as your default account.

- **Monthly Budgeting & Analytics**  
  Set monthly budgets for your accounts and track real-time analytics with intuitive dashboards.

- **Transaction Management**  
  Add, update, and delete transactions effortlessly. Use AI-powered manual scanning of transaction receipts with Gemini API to automate data entry.

- **Real-Time Dashboard**  
  Get live and interactive analytics to monitor your financial health across all accounts.

- **Budget Alerts & Notifications**  
  Automatically receive budget alerts and notifications via email, powered by Inngest cron jobs running every 6 hours to keep you informed.

- **Monthly Financial Reports**  
  Receive AI-generated monthly financial reports and insights delivered directly to your email, helping you stay on top of your finances.

---

## Tech Stack

- **Frontend:** Next.js with Shadcn UI for sleek, responsive design.
- **Backend & Database:** Prisma ORM with SQL database for efficient, structured data management.
- **Authentication:** Clerk for secure user management and authentication.
- **Background Jobs & Alerts:** Inngest server for scheduled tasks and email alerts.
- **APIs & AI Integration:** Gemini API for AI-powered transaction scanning and AI insights.
- **Hosting & Realtime Backend:** Supabase for backend services and realtime capabilities.
- **Other:** Arcjet for optimized API orchestration.

---

## Getting Started

### Prerequisites
- Node.js (v16+ recommended)
- npm or yarn
- A configured SQL database supported by Prisma
- Clerk authentication setup
- API keys for Gemini API, Supabase, and Inngest

### Installation

1. Clone this repository:

- git clone https://github.com/pianist22/SpendWise.git
- cd spendwise

2. Install dependencies:
- npm install

3. Configure environment variables:  
Create a `.env` file with the following keys:
- DATABASE_URL=your_database_connection_string
- CLERK_API_KEY=your_clerk_api_key
- GEMINI_API_KEY=your_gemini_api_key
- INNGEST_API_KEY=your_inngest_api_key
- SUPABASE_URL=your_supabase_url
- SUPABASE_KEY=your_supabase_key

4. Run database migrations:
- npx prisma migrate deploy

5. Start the development server:
- npm run dev


6. Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Project Structure

- `/app` — Next.js app directory containing UI, pages, and API routes.
- `/components` — Reusable UI components, including Shadcn-based elements.
- `/actions` — Server actions for handling data logic (e.g., accounts, transactions).
- `/lib` — Utility functions and helper modules.
- `/hooks` — Custom React hooks.
- `/prisma` — Prisma schema and migration files.
- `/inngest` — Inngest workflow and cron job definitions.
- `/api` — API route handlers for backend logic and AI integration.

---

## AI Features

- **Transaction Scanning:** Upload or scan transaction receipts manually, and Spendwise uses Gemini API’s AI capabilities to parse and input transaction details automatically.
- **AI-Powered Insights:** Monthly financial reports are analyzed and generated with AI insights to give personalized budgeting recommendations and spending patterns.

---

## Background Jobs & Notifications

- **Budget Alerts:** Cron jobs on the Inngest server check monthly budgets every 6 hours and send timely alert emails when you approach or exceed budgets.
- **Financial Reports:** AI-powered monthly reports are automatically generated and emailed via Inngest workflows.

---

## Contributing

Contributions to Spendwise are welcome! Please fork the repo, make your feature branch, and submit a pull request. Ensure all tests pass and follow the coding standards used in the project.

---

## License

This project is licensed under the MIT License.

---

## Contact

For questions, suggestions, or support, please open an issue or contact:

**Priyanshu Saha**  
Email: priyanshusaha944@gmail.com  
GitHub: [pianist22](https://github.com/pianist22)

---

Thank you for choosing Spendwise — your intelligent finance companion powered by AI!
