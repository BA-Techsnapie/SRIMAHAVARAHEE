module.exports = {
  content: ["./pages/*.{html,js}", "./index.html", "./*.html"],
  theme: {
    extend: {
      colors: {
        // Primary - Sacred Saffron
        primary: {
          50: "#FFF7ED", // saffron-50
          100: "#FFEDD5", // saffron-100
          200: "#FED7AA", // saffron-200
          300: "#FDBA74", // saffron-300
          400: "#FB923C", // saffron-400
          500: "#FF9933", // saffron-500
          600: "#EA580C", // saffron-600
          700: "#C2410C", // saffron-700
          800: "#9A3412", // saffron-800
          900: "#7C2D12", // saffron-900
          DEFAULT: "#FF9933", // saffron-500
        },
        
        // Secondary - Deep Maroon
        secondary: {
          50: "#FDF2F2", // maroon-50
          100: "#FCE7E7", // maroon-100
          200: "#FECACA", // maroon-200
          300: "#FCA5A5", // maroon-300
          400: "#F87171", // maroon-400
          500: "#800000", // maroon-500
          600: "#DC2626", // maroon-600
          700: "#B91C1C", // maroon-700
          800: "#991B1B", // maroon-800
          900: "#7F1D1D", // maroon-900
          DEFAULT: "#800000", // maroon-500
        },
        
        // Accent - Pure Gold
        accent: {
          50: "#FFFBEB", // gold-50
          100: "#FEF3C7", // gold-100
          200: "#FDE68A", // gold-200
          300: "#FCD34D", // gold-300
          400: "#FBBF24", // gold-400
          500: "#FFD700", // gold-500
          600: "#D97706", // gold-600
          700: "#B45309", // gold-700
          800: "#92400E", // gold-800
          900: "#78350F", // gold-900
          DEFAULT: "#FFD700", // gold-500
        },
        
        // Background & Surface
        background: "#FFFEF7", // warm-white
        surface: "#FFF8DC", // cream-100
        
        // Text Colors
        text: {
          primary: "#2D1810", // brown-900
          secondary: "#6B4E3D", // brown-600
        },
        
        // Status Colors
        success: {
          50: "#F0FDF4", // green-50
          100: "#DCFCE7", // green-100
          500: "#4F7942", // green-700
          DEFAULT: "#4F7942", // green-700
        },
        
        warning: {
          50: "#FFFBEB", // amber-50
          100: "#FEF3C7", // amber-100
          500: "#D4851F", // amber-600
          DEFAULT: "#D4851F", // amber-600
        },
        
        error: {
          50: "#FEF2F2", // red-50
          100: "#FEE2E2", // red-100
          500: "#B85450", // red-600
          DEFAULT: "#B85450", // red-600
        },
      },
      
      fontFamily: {
        'crimson': ['Crimson Text', 'serif'],
        'inter': ['Inter', 'sans-serif'],
        'poppins': ['Poppins', 'sans-serif'],
        'cinzel': ['Cinzel', 'serif'],
        'sans': ['Inter', 'sans-serif'],
        'serif': ['Crimson Text', 'serif'],
      },
      
      boxShadow: {
        'gentle': '0 4px 20px rgba(255, 153, 51, 0.1)',
        'deep': '0 8px 40px rgba(128, 0, 0, 0.15)',
        'primary': '0 4px 20px rgba(255, 153, 51, 0.1)',
        'primary-hover': '0 8px 40px rgba(255, 153, 51, 0.2)',
      },
      
      transitionDuration: {
        'gentle': '300ms',
        'quick': '200ms',
        'contemplative': '400ms',
      },
      
      transitionTimingFunction: {
        'gentle': 'ease-out',
      },
      
      borderColor: {
        'subtle': 'rgba(255, 153, 51, 0.2)',
      },
      
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
      },
    },
  },
  plugins: [],
}