# Github Repository Finder
A modern React application for searching and filtering GitHub repositories by username. Built with Next.js, TypeScript, and Tailwind CSS.
## Description
### Project Overview
This project is a web application that allows users to search for GitHub repositories by entering a username. The application fetches repository data using the GitHub GraphQL API and presents it in a clean, user-friendly interface. Users can filter repositories by name and programming language, making it easy to find specific projects.

**Project Goal:** Provide an intuitive interface for exploring GitHub repositories with powerful filtering capabilities.

## Installation
### Prerequisites
- [Node.js](https://nodejs.org/) (version 18 or higher)
- [npm](https://www.npmjs.com/) (comes with Node.js)
- [Git](https://git-scm.com/downloads) for cloning the repository
- A GitHub Personal Access Token (for API access)

### Required Dependencies
- **Next.js** - React framework for production
- **React 19** - UI library
- **TypeScript** - Type safety and better development experience
- **Tailwind CSS** - Utility-first CSS framework
- **Storybook** - Component development
- **Vitest** - Testing framework
- **Playwright** - End-to-end testing

### Installation Process
1. **Clone the repository:**
   ```bash
   git clone <SSH-URL>
   cd repo-folder
   ```


2. **Install dependencies:**
   ```bash
   cd application
   npm install
   ```

3. **Set up environment variables:**
   - Create a `.env.local` file inside of the application folder
   - Add your GitHub Personal Access Token:
   ```bash
   NEXT_PUBLIC_GITHUB_TOKEN=your_github_token_here
   ```
   - **Important:** Keep your token secure and never commit it to version control by adding it to .gitignore

4. **Start the development server:**

Inside of application folder:
   ```bash
   npm run dev
   ```

5. **Open your browser:**
   - Navigate to `http://localhost:3000`
   - The application should now be running
