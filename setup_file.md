# 🚀 Portfolio Setup Guide - Multi-Page Application

## 📁 Complete File Structure

```
PORTFOLIO/
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── api/
│   │   ├── assets/
│   │   ├── components/
│   │   │   ├── ContactForm.jsx
│   │   │   ├── Footer.jsx
│   │   │   ├── Navbar.jsx
│   │   │   └── ProjectCard.jsx
│   │   ├── context/
│   │   ├── layouts/
│   │   ├── pages/
│   │   │   ├── Contact.jsx
│   │   │   ├── Home.jsx
│   │   │   └── Projects.jsx
│   │   ├── routes/
│   │   │   └── Index.jsx (optional)
│   │   ├── utils/
│   │   ├── App.css
│   │   ├── App.jsx
│   │   ├── index.css
│   │   └── main.jsx
│   ├── .gitignore
│   ├── eslint.config.js
│   ├── index.html
│   ├── package.json
│   ├── package-lock.json
│   ├── postcss.config.js
│   ├── tailwind.config.js
│   └── vite.config.js
│
└── backend/
    ├── main.py
    ├── requirements.txt
    ├── .env
    └── .env.example
```

---

## 🎯 Step-by-Step Setup

### 1️⃣ Create Frontend Project

```bash
# Create Vite project
npm create vite@latest frontend -- --template react

# Navigate to frontend
cd frontend

# Install dependencies
npm install

# Install additional packages
npm install react-router-dom lucide-react

# Install Tailwind CSS
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

### 2️⃣ Copy All Files

Copy the following files to your project:

#### Configuration Files (Root of frontend/)
- `package.json`
- `vite.config.js`
- `tailwind.config.js`
- `postcss.config.js`
- `index.html`

#### Source Files (src/)
- `main.jsx`
- `App.jsx`
- `App.css`
- `index.css`

#### Components (src/components/)
- `Navbar.jsx`
- `Footer.jsx`
- `ProjectCard.jsx`
- `ContactForm.jsx`

#### Pages (src/pages/)
- `Home.jsx`
- `Projects.jsx`
- `Contact.jsx`

### 3️⃣ Run Frontend

```bash
# From frontend directory
npm run dev
```

Your app will be available at `http://localhost:5173`

---

## 🐍 Backend Setup

### 1️⃣ Create Backend Directory

```bash
# From project root
mkdir backend
cd backend
```

### 2️⃣ Create Virtual Environment

```bash
# Create virtual environment
python -m venv venv

# Activate it
# Windows:
venv\Scripts\activate

# macOS/Linux:
source venv/bin/activate
```

### 3️⃣ Create Files

Create these files in the `backend/` directory:

**requirements.txt:**
```txt
fastapi==0.109.0
uvicorn[standard]==0.27.0
pydantic[email]==2.5.3
python-dotenv==1.0.0
python-multipart==0.0.6
```

**main.py:** (Use the backend code from the artifacts)

**.env.example:**
```env
SMTP_SERVER=smtp.gmail.com
SMTP_PORT=587
SENDER_EMAIL=your-email@gmail.com
SENDER_PASSWORD=your-app-password-here
RECEIVER_EMAIL=your-email@gmail.com
```

### 4️⃣ Install Dependencies

```bash
pip install -r requirements.txt
```

### 5️⃣ Configure Environment

```bash
# Copy .env.example to .env
cp .env.example .env

# Edit .env with your actual credentials
# For Gmail: Use App Password from https://myaccount.google.com/apppasswords
```

### 6️⃣ Run Backend

```bash
python main.py
```

Backend will be available at `http://localhost:5000`

---

## 🎨 Customization Checklist

### Personal Information
- [ ] Update "Your Name" in `Home.jsx`, `Footer.jsx`, and `index.html`
- [ ] Update email, phone, location in `Contact.jsx`
- [ ] Update social media links (GitHub, LinkedIn) in all files

### Content
- [ ] Replace project data in `Projects.jsx`
- [ ] Update skills in `Home.jsx`
- [ ] Customize About section in `Home.jsx`
- [ ] Update meta tags in `index.html`

### Styling (Optional)
- [ ] Change color scheme in `tailwind.config.js`
- [ ] Customize animations in `App.css`
- [ ] Add your own images/assets

### Functionality
- [ ] Test contact form with your email
- [ ] Update project images/screenshots
- [ ] Add more pages if needed

---

## 🌐 Deployment

### Frontend (Vercel)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
cd frontend
vercel
```

### Frontend (Netlify)

```bash
# Build
npm run build

# Deploy with Netlify CLI
npm i -g netlify-cli
netlify deploy --prod --dir=dist
```

### Backend (Railway)

1. Push code to GitHub
2. Go to railway.app
3. Click "New Project" → "Deploy from GitHub repo"
4. Select your repository
5. Add environment variables from your `.env` file
6. Deploy automatically

### Backend (Render)

1. Go to render.com
2. Click "New +" → "Web Service"
3. Connect GitHub repository
4. Configure:
   - **Build Command:** `pip install -r requirements.txt`
   - **Start Command:** `uvicorn main:app --host 0.0.0.0 --port $PORT`
5. Add environment variables
6. Deploy

### Update API URL After Deployment

After deploying backend, update the API URL in `ContactForm.jsx`:

```javascript
const response = await fetch('https://your-backend-url.com/api/contact', {
  // ...
});
```

---

## 🔧 Troubleshooting

### Port Already in Use

**Frontend (5173):**
```bash
# Kill process on port 5173
# Windows
netstat -ano | findstr :5173
taskkill /PID <PID> /F

# macOS/Linux
lsof -ti:5173 | xargs kill -9
```

**Backend (5000):**
```bash
# Windows
netstat -ano | findstr :5000
taskkill /PID <PID> /F

# macOS/Linux
lsof -ti:5000 | xargs kill -9
```

### CORS Issues
- Make sure backend is running on `http://localhost:5000`
- Check CORS settings in `backend/main.py`
- Verify frontend is accessing correct URL

### Email Not Sending
- Use Gmail App Password (not regular password)
- Enable 2FA on Google account
- Check `.env` file has correct credentials
- Verify SMTP settings

### Build Errors
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
npm run build
```

---

## 📦 Additional Features to Add

### 1. Blog Section (Optional)
```bash
# Create new page
touch src/pages/Blog.jsx
```

Add route in `App.jsx`:
```javascript
<Route path="/blog" element={<Blog />} />
```

### 2. Dark/Light Mode Toggle
Install and configure a theme system

### 3. Animation Library
```bash
npm install framer-motion
```

### 4. Form Validation
```bash
npm install react-hook-form zod
```

---

## 📚 Resources

- [React Router Documentation](https://reactrouter.com/)
- [Tailwind CSS Documentation](https://tailwindcss.com/)
- [FastAPI Documentation](https://fastapi.tiangolo.com/)
- [Vite Documentation](https://vitejs.dev/)

---

## ✅ Final Checklist

- [ ] All files created and in correct locations
- [ ] Dependencies installed (npm install)
- [ ] Backend virtual environment activated
- [ ] Environment variables configured
- [ ] Frontend running on port 5173
- [ ] Backend running on port 5000
- [ ] Contact form tested and working
- [ ] All personal information updated
- [ ] Project images/content customized
- [ ] Build command tested (`npm run build`)
- [ ] Ready for deployment

---

## 🎉 You're Ready!

Your portfolio is now set up and ready to use. Customize the content, deploy it, and share it with the world!

For any issues, check the troubleshooting section above or refer to the documentation links.

Good luck! 🚀