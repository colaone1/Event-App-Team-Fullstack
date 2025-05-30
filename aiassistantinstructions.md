# AI Assistant Instructions & Workflow Notes

## 1. PowerShell & Git Command Usage
- **Do NOT use `&&` to chain commands in PowerShell.**
  - Instead, run each command one by one:
    ```sh
    git add .
    git commit -m "Your message"
    git push origin main
    ```
- Chaining with `&&` works in Bash, but not in Windows PowerShell.

## 2. Husky & Git Hooks
- Husky is used for local Git hooks (e.g., pre-push, pre-commit).
- **Do NOT include a `prepare` script in `package.json` for deployment.**
  - Developers should run `npx husky install` manually after cloning.
- Hooks are in the `.husky/` directory and only run locally.
- Husky is not run in CI/CD or on Render.

## 3. Case Sensitivity in Imports
- **Linux servers (like Render) are case-sensitive.**
  - Always use the correct case in import/require paths (e.g., `require('../models/User')`, not `require('../Models/User')`).
- Double-check all import paths before deploying.

## 4. Deployment Workflow
- **Push all changes to GitHub before deploying to Render or Vercel.**
- If Render is building an old commit, make sure you have pushed to the correct branch (`main`).
- Use "Manual Deploy" or "Deploy latest commit" in Render after pushing.

## 5. Environment Variables
- Set all required environment variables in the Render and Vercel dashboards before deploying.
- Example for backend (Render): `MONGODB_URI`, `JWT_SECRET`, `CORS_ORIGIN`, `PORT`
- Example for frontend (Vercel): `NEXT_PUBLIC_API_URL`

---

*This file is for workflow and troubleshooting notes for anyone using an AI assistant or collaborating on this project.* 