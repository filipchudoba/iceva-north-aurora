import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				'aurora-drift': {
					'0%, 100%': { transform: 'translateX(-10px) translateY(-5px) scale(1)' },
					'25%': { transform: 'translateX(10px) translateY(5px) scale(1.05)' },
					'50%': { transform: 'translateX(15px) translateY(-10px) scale(0.95)' },
					'75%': { transform: 'translateX(-5px) translateY(10px) scale(1.02)' }
				},
				'aurora-shimmer': {
					'0%, 100%': { filter: 'hue-rotate(0deg) brightness(1)' },
					'25%': { filter: 'hue-rotate(15deg) brightness(1.1)' },
					'50%': { filter: 'hue-rotate(-10deg) brightness(0.9)' },
					'75%': { filter: 'hue-rotate(20deg) brightness(1.05)' }
				},
				'aurora-pulse': {
					'0%, 100%': { opacity: '0.8', transform: 'scale(1)' },
					'50%': { opacity: '1', transform: 'scale(1.02)' }
				},
				'fade-in': {
					'0%': { opacity: '0', transform: 'translateY(20px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-10px)' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'aurora-drift': 'aurora-drift 8s ease-in-out infinite',
				'aurora-shimmer': 'aurora-shimmer 4s ease-in-out infinite',
				'aurora-pulse': 'aurora-pulse 3s ease-in-out infinite',
				'fade-in': 'fade-in 0.6s ease-out',
				'float': 'float 3s ease-in-out infinite'
			},
			backgroundImage: {
				'aurora-primary': 'var(--aurora-primary)',
				'aurora-secondary': 'var(--aurora-secondary)',
				'aurora-subtle': 'var(--aurora-subtle)',
				'aurora-glow': 'var(--aurora-glow)'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;

extend: {
  animation: {
    aurora: 'auroraMove 8s ease-in-out infinite',
  },
  keyframes: {
    auroraMove: {
      '0%, 100%': { transform: 'translateY(0) scale(1)' },
      '50%': { transform: 'translateY(-20px) scale(1.05)' },
    },
  },
}
