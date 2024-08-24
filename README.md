# TodoMaster

TodoMaster is a robust and user-friendly task management application built with Next.js and React. It empowers users to efficiently organize, prioritize, and accomplish their tasks with ease.

**Live Demo:** [https://todo-list-by-nub-sombat.vercel.app/](https://todo-list-by-nub-sombat.vercel.app/)

## Features

- **Task Management**: Create, edit, and delete todo items effortlessly.
- **Task Completion**: Mark tasks as complete or incomplete with a simple checkbox.
- **Sorting**: Tasks are automatically sorted by creation date for easy tracking.
- **User Authentication**: Secure registration and login system to protect user data.
- **Responsive Design**: Seamless experience across desktop and mobile devices.
- **Real-time Updates**: Instant reflection of changes without page reloads.

## Technology Stack

- **Frontend**: Next.js 14, React 18, TypeScript
- **Styling**: Tailwind CSS for responsive and customizable designs
- **Form Handling**: React Hook Form with Zod for efficient form management and validation
- **State Management**: React Hooks for local state management
- **Authentication**: Custom JWT-based authentication system
- **API Integration**: Custom `apiClient` function using native `fetch` API
- **Date Formatting**: date-fns for consistent date manipulation and formatting

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm (v6 or later)

### Installation

1. Clone the repository: 
git clone https://github.com/nubsombat/todo-list.git
2. Navigate to the project directory: 
cd todo-list
3. Install dependencies: 
npm install
4. Set up environment variables:
Create a `.env.local` file in the root directory and add: 
NEXT_PUBLIC_API_DOMAIN=https://candidate-assignment.neversitup.com
### Running the Application

1. Start the development server:
npm run dev
2. Open your browser and visit `http://localhost:3000`

## Project Structure
todo-list/
├── app/                 # Next.js app directory
│   ├── layout.tsx       # Root layout component
│   └── page.tsx         # Home page component
├── components/          # Reusable React components
│   ├── auth/            # Authentication-related components
│   ├── todo/            # Todo-related components
│   └── ui/              # UI components (buttons, cards, etc.)
├── hooks/               # Custom React hooks
├── lib/                 # Utility functions and libraries
├── public/              # Static assets
├── schemas/             # Zod schemas for form validation
├── services/            # API service functions
├── styles/              # Global styles
├── types/               # TypeScript type definitions
└── utils/               # Utility functions