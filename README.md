# 🚀 FasterUI - Modern Agency Website

A modern, responsive agency website built with React, featuring beautiful UI components, authentication forms, and a complete business showcase.

![FasterUI Agency Website](https://img.shields.io/badge/React-19.1.0-blue) ![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.1.10-38B2AC) ![Vite](https://img.shields.io/badge/Vite-6.0.0-646CFF)

## ✨ Features

### 🎨 **Modern Design**
- Clean, professional agency website design
- Responsive layout for all devices (mobile, tablet, desktop)
- Beautiful gradient backgrounds and modern UI elements
- Smooth animations and transitions

### 🔐 **Authentication System**
- **Login Form** with email/password validation
- **Signup Form** with comprehensive user registration
- Form validation with error handling
- Password visibility toggle
- Remember me functionality
- Forgot password link

### 📱 **Fully Responsive**
- Mobile-first design approach
- Adaptive layouts for different screen sizes
- Touch-friendly navigation
- Optimized images and content

### 🎯 **Key Sections**
- **Hero Banner** with call-to-action
- **Services Showcase** (Web Design, UI/UX, Responsive Design, E-commerce, Webflow, Custom Development)
- **Portfolio Gallery** with image carousel and navigation
- **Pricing Section** with service packages
- **FAQ Section** with expandable questions
- **Contact Form** with gradient background
- **Review Section** with user testimonials

## 🛠️ Technologies Used

### **Frontend Framework**
- **React 19.1.0** - Modern React with latest features
- **React Router 7.6.2** - Client-side routing

### **Styling & UI**
- **Tailwind CSS 4.1.10** - Utility-first CSS framework
- **DaisyUI 5.0.43** - Component library for Tailwind
- **Lucide React 0.524.0** - Beautiful icons

### **Build Tools**
- **Vite 6.0.0** - Fast build tool and dev server
- **ESLint** - Code linting and formatting

### **Additional Libraries**
- **Swiper 11.2.9** - Touch slider for carousels

## 📁 Project Structure

```
my-fast-app/
├── public/
├── src/
│   ├── component/
│   │   ├── Banar.jsx              # Hero banner section
│   │   ├── ContactForm.jsx        # Contact form with gradient
│   │   ├── FAQSection.jsx         # FAQ with expandable items
│   │   ├── LoginForm.jsx          # User login form
│   │   ├── Navbar.jsx             # Navigation with auth buttons
│   │   ├── PortfolioShowcase.jsx  # Portfolio with carousel
│   │   ├── PricingSection.jsx     # Pricing and services
│   │   ├── ReviewSection.jsx      # User reviews and ratings
│   │   ├── SignupForm.jsx         # User registration form
│   │   └── What_we_do.jsx         # Services showcase
│   ├── img/                       # Image assets
│   ├── assets/                    # Static assets
│   ├── AgencyWebsite.jsx          # Main website component
│   ├── App.jsx                    # App component
│   ├── main.jsx                   # Entry point with routing
│   └── index.css                  # Global styles
├── package.json                   # Dependencies and scripts
├── vite.config.js                 # Vite configuration
└── README.md                      # Project documentation
```

## 🚀 Getting Started

### **Prerequisites**
- Node.js (version 16 or higher)
- npm or yarn package manager

### **Installation**

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd my-fast-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

### **Available Scripts**

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Run ESLint
```

## 🎨 Component Details

### **Navbar Component**
- Fixed navigation with backdrop blur
- Responsive mobile menu
- Sign In/Sign Up buttons with routing
- Centered navigation links

### **Authentication Forms**
- **LoginForm**: Email/password login with validation
- **SignupForm**: Complete registration with form validation
- Both forms include error handling and loading states

### **Portfolio Showcase**
- Image carousel with auto-rotation
- Left/right navigation buttons
- Smooth transitions between slides
- Responsive image sizing

### **Services Section**
- Grid layout showcasing 6 main services
- Interactive cards with hover effects
- Icons and descriptions for each service
- Responsive design for all screen sizes

### **Contact Form**
- Beautiful gradient background
- Form validation and error handling
- Footer card with company information
- Social media links

## 🔧 Customization

### **Styling**
The project uses Tailwind CSS for styling. You can customize:
- Colors in `tailwind.config.js`
- Components in individual `.jsx` files
- Global styles in `src/index.css`

### **Content**
- Update text content in component files
- Replace images in `src/img/` directory
- Modify routing in `src/main.jsx`

### **Features**
- Add new components in `src/component/`
- Extend authentication functionality
- Add more pages and routes

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- **Mobile**: `< 640px`
- **Tablet**: `640px - 1024px`
- **Desktop**: `> 1024px`

All components adapt their layout, spacing, and typography for optimal viewing on any device.

## 🎯 Key Features Implemented

### **Navigation & Routing**
- ✅ React Router setup with multiple routes
- ✅ Navigation between Login/Signup forms
- ✅ Responsive navbar with mobile menu

### **Authentication**
- ✅ Login form with validation
- ✅ Signup form with comprehensive fields
- ✅ Form error handling and loading states
- ✅ Password visibility toggle

### **UI/UX**
- ✅ Modern gradient backgrounds
- ✅ Smooth animations and transitions
- ✅ Interactive hover effects
- ✅ Professional typography

### **Responsive Design**
- ✅ Mobile-first approach
- ✅ Adaptive layouts
- ✅ Touch-friendly interactions
- ✅ Optimized for all screen sizes

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Tailwind CSS** for the utility-first CSS framework
- **Lucide React** for beautiful icons
- **React Router** for client-side routing
- **Vite** for fast development and building

---

**Built with ❤️ using React and Tailwind CSS**

For questions or support, please open an issue in the repository.
