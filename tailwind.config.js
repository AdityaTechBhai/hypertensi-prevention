/** @type {import('tailwindcss').Config} */
import tailwindPlugin from 'tailwindcss/plugin';
import tailwindAnimate from "tailwindcss-animate";
import { DEFAULT_CIPHERS } from 'tls';
import { LucideGrid2x2Plus } from 'lucide-react';

const presets = () => {
  const shapes = ['circle', 'ellipse'];
  const pos = {
    c: 'center',
    t: 'top',
    b: 'bottom',
    l: 'left',
    r: 'right',
    tl: 'top left',
    tr: 'top right',
    bl: 'bottom left',
    br: 'bottom right',
  };
  let result = {};
  for (const shape of shapes) {
    for (const [posName, posValue] of Object.entries(pos)) {
      result[`${shape}-${posName}`] = `${shape} at ${posValue}`;
    }
  }
  return result;
};

export default {
    darkMode: ["class"],
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'manrope': ['Manrope', 'sans-serif'],
      'archivo': ['Archivo', 'sans-serif']
    },
    extend: {
      container:{
        center: true,
        padding:{
          DEFAULT: "1rem",
          sm:"2rem",
          lg:"4rem",
          xl:"5rem",
          "2xl":"6rem",
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))'
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))'
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))'
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))'
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))'
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))'
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))'
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))'
        },
        blues: {
          50: '#eff9ff',
          100: '#def1ff',
          200: '#b6e6ff',
          300: '#75d4ff',
          400: '#2cbef7',
          500: '#00a4f4',
          600: '#0084d4',
          700: '#0069ab',
          800: '#00598d',
          900: '#064a74',
          950: '#042f4d',
        },
        neutrals: {
          50: '#f6f6f6',
          100: '#e7e7e7',
          200: '#d1d1d1',
          300: '#b0b0b0',
          400: '#888888',
          500: '#6d6d6d',
          600: '#5d5d5d',
          700: '#4f4f4f',
          800: '#454545',
          900: '#3d3d3d',
          950: '#000000',
        },
      }
    }
  },

  plugins: [
    tailwindAnimate,
    tailwindPlugin(function ({ matchUtilities, theme }) {
      const radialPositions = presets();
      matchUtilities(
        {
          'bg-radient': (value) => ({
            'background-image': `radial-gradient(${value}, var(--tw-gradient-stops))`,
          }),
        },
        { values: { ...theme('colors'), ...radialPositions } }
      );
    }),
  ],
};
