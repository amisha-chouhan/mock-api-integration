# JSONPlaceholder CRUD Demo (React + Vite)

This is a simple React app demonstrating REST API integration with **JSONPlaceholder**.  
It shows **GET**, **POST**, **PUT/UPDATE**, **DELETE** operations with **loading and error handling**.

## Features
- Fetch all posts from API
- Add new post
- Delete post
- Loading indicator & error handling
- Uses React hooks and functional components

## API
Base URL: [https://jsonplaceholder.typicode.com/posts](https://jsonplaceholder.typicode.com/posts)

Endpoints used:
- GET /posts
- POST /posts
- PUT /posts/:id
- DELETE /posts/:id

## Tech Stack
- React
- Vite
- Fetch API

## Run Locally
1. Clone the repo
```bash
git clone https://github.com/your-username/react-jsonplaceholder-crud.git
cd react-jsonplaceholder-crud

2. Install dependencies
```bash
npm install

3. Run dev server
```bash
npm run dev

4. Open in browser at http://localhost:5173
Deploy
You can deploy this app on Vercel or Netlify.

Build command: npm run build

Output directory: dist

Notes
JSONPlaceholder is a mock API; POST, PUT, DELETE requests are simulated but won't persist.



---

# 6️⃣ package.json scripts
```json
"scripts": {
  "dev": "vite",
  "build": "vite build",
  "preview": "vite preview"
}