# Epilepsies AI

A **retrieval-augmented generation (RAG)** question-answering interface over the NICE NG217 epilepsy guideline. Every answer is evidence-grounded and traceable to the exact source text.

## Overview

This is the frontend UI for Epilepsies AI, a clinical decision-support tool that answers questions about the NICE NG217 guideline (*Epilepsies in children, young people and adults*, 161 pages). The system retrieves relevant evidence chunks, generates grounded answers, and attaches traceable citations to each claim.

## Features

- **Landing page** with editorial-style layout, structural grid, and product showcase
- **Authentication** with sign-up and log-in flows (mock auth)
- **Chat interface** with streaming responses, typing indicators, and citation display
- **PDF document previewer** for source guideline inspection
- **Evidence table** showing retrieval sources and scores
- **Responsive design** across desktop, tablet, and mobile

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 19 |
| Build | Vite 8 |
| Styling | Tailwind CSS 4 |
| Routing | React Router DOM 7 |
| Icons | Lucide React |
| PDF | React PDF |
| Linting | OxLint |

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint
npm run lint
```

## Project Structure

```
src/
  components/       # Reusable UI components
    AuthForm.jsx        # Split-screen auth layout
    ChatInput.jsx       # Message input with file upload
    ChatWindow.jsx      # Scrollable message list
    MessageBubble.jsx   # Individual chat message
    AnswerCard.jsx      # Citation and answer display
    EvidenceTable.jsx   # Retrieval evidence table
    DocumentPreviewer.jsx # PDF preview overlay
    Navbar.jsx          # Fixed top navigation
    Footer.jsx          # Multi-column footer
    AnimatedProgressRing.jsx # SVG progress indicator
  pages/
    LandingPage.jsx     # Marketing landing page
    LoginPage.jsx       # Login form
    SignupPage.jsx      # Signup form
    ChatPage.jsx        # Main chat interface
  hooks/
    useScrollReveal.js  # IntersectionObserver scroll animations
    useCountUp.js       # Animated number counter
  utils/
    auth.jsx            # Mock authentication context
```

## Backend

The API backend is a separate FastAPI service. See the backend repository for setup instructions. This UI communicates with the backend via `POST /ask` endpoint.
