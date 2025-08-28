
# syed-portfolio
Starter React + Vite + Tailwind portfolio for Syed Akbar.

## Features
- React + Vite
- Tailwind CSS
- Auto-preview project cards (microlink.io)
- EmailJS contact form (dummy keys in repo - replace with your keys or set Railway env vars)

## Quick start
1. Install dependencies:
   ```bash
   npm install
   ```
2. Run dev server:
   ```bash
   npm run dev
   ```

## EmailJS setup
1. Sign up at https://www.emailjs.com/ and create service + template.
2. In development, create a `.env` file with:
   ```
   VITE_EMAILJS_SERVICE_ID=service_xxx
   VITE_EMAILJS_TEMPLATE_ID=template_xxx
   VITE_EMAILJS_USER_ID=user_xxx
   ```
3. In Railway, add these as environment variables (same names).

## Deploy to Railway
1. Push this repo to GitHub.
2. Create a new Railway project and connect the GitHub repo.
3. Set environment variables in Railway (EmailJS keys).
4. Deploy and note the `your-app.up.railway.app` URL.
5. In GoDaddy DNS, add a CNAME record:
   - Host: `portfolio`
   - Points to: `your-app.up.railway.app`
6. Visit `portfolio.syedakbar.co` after DNS propagation.

## Notes
- Microlink API is used to auto-generate preview screenshots. For private repos or blocked sites, screenshots may not appear. Replace with your own images by placing them in `src/assets` and updating `Projects.jsx`.
