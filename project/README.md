# Bradman Technologies - Fullstack Website

A modern, responsive website for Bradman Technologies built with React, Framer Motion, and Node.js/Express backend.

## 🚀 Features

### Frontend
- **Modern React with TypeScript** - Component-based architecture
- **Framer Motion Animations** - Smooth transitions and micro-interactions
- **Responsive Design** - Mobile-first approach with Tailwind CSS
- **Interactive Navigation** - Hamburger menu with smooth scrolling
- **Dynamic Content** - Services cards, portfolio masonry, testimonials carousel

### Backend
- **Node.js/Express API** - RESTful API endpoints
- **MongoDB Database** - Flexible document storage
- **JWT Authentication** - Secure admin authentication
- **Email Integration** - Contact form with email notifications
- **Input Validation** - Express-validator for data security
- **Rate Limiting** - Protection against abuse

## 🛠 Setup & Installation

### Prerequisites
- Node.js (v16 or higher)
- MongoDB (local or Atlas)
- Gmail account for email notifications

### 1. Install Dependencies
```bash
npm install
```

### 2. Environment Configuration
Copy `.env.example` to `.env` and configure:

```env
MONGODB_URI=mongodb://localhost:27017/bradman-tech
JWT_SECRET=your-super-secret-jwt-key-here
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
PORT=5000
```

### 3. Database Setup
```bash
# Seed initial data
node server/scripts/seedData.js
```

### 4. Start Development
```bash
# Frontend (Vite dev server)
npm run dev

# Backend (in separate terminal)
npm run server
```

## 📱 Pages & Sections

1. **Hero Section** - Animated landing with call-to-action
2. **About Us** - Company introduction with statistics
3. **Vision Map** - Animated timeline of company vision
4. **Why Choose Us** - Key differentiators with hover effects
5. **Services** - Interactive cards for all 10 service categories
6. **Portfolio** - Masonry grid of project showcases
7. **Trusted By** - Auto-scrolling client carousel
8. **Honours** - Client testimonials slider
9. **Careers** - Job categories with application info
10. **Contact** - Form with social media integration

## 🔧 API Endpoints

### Public Endpoints
- `GET /api/services` - Fetch all services
- `GET /api/portfolio` - Fetch portfolio items
- `GET /api/careers` - Fetch job listings
- `GET /api/clients` - Fetch client testimonials
- `POST /api/contact` - Submit contact form

### Admin Endpoints (Protected)
- `POST /api/admin/login` - Admin authentication
- `GET /api/admin/dashboard` - Dashboard statistics
- `POST /api/admin/services` - Create service
- `PUT /api/admin/services/:id` - Update service
- `DELETE /api/admin/services/:id` - Delete service

## 🎨 Design System

### Colors
- **Royal Blue** (#1E3A8A) - Primary brand color
- **Electric Purple** (#7C3AED) - Secondary accent
- **Bright Cyan** (#06B6D4) - Interactive elements
- **Soft White** (#F9FAFB) - Background
- **Dark Gray** (#111827) - Text

### Typography
- **Headings** - Bold with gradient text effects
- **Body Text** - Clean, readable with proper spacing
- **Buttons** - Rounded with hover animations

## 📱 Responsive Breakpoints
- **Mobile** - < 768px
- **Tablet** - 768px - 1024px  
- **Desktop** - > 1024px

## 🔐 Security Features
- Helmet.js for HTTP headers
- CORS configuration
- Rate limiting
- Input validation and sanitization
- JWT token authentication
- Password hashing with bcrypt

## 🚀 Production Deployment

### Frontend
```bash
npm run build
```
Deploy the `dist` folder to Netlify, Vercel, or similar.

### Backend
Deploy to Heroku, AWS, or DigitalOcean with:
- MongoDB Atlas connection
- Environment variables configured
- Process manager (PM2) for production

## 📄 License
© 2025 Bradman Technologies. All rights reserved.

## 🤝 Contributing
Please read our contributing guidelines before submitting pull requests.