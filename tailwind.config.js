/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class',
    content: ['./pages/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './app/**/*.{ts,tsx}', './src/**/*.{ts,tsx}'],
    prefix: '',
    safelist: [
        'bg-primary-dark',
        'text-primary-dark',
        'bg-typography-dark',
        'text-typography-dark',
        'bg-accent',
        'bg-accent-light',
        'bg-accent-dark',
    ],
    theme: {
        container: {
            center: true,
            padding: '2rem',
            screens: {
                '2xl': '1400px',
            },
        },
        extend: {
            colors: {
                primary: {
                    light: '#4A90E2',
                    DEFAULT: '#0057B7',
                    dark: '#003F87',
                },
                secondary: {
                    light: '#FFE066',
                    DEFAULT: '#FFD700',
                    dark: '#CCAC00',
                },
                accent: {
                    light: '#E6FF66',
                    DEFAULT: '#CCFF00',
                    dark: '#99CC00',
                },
                typography: {
                    DEFAULT: '#212529',
                    dark: '#f8f9fa',
                },
                background: {
                    light: '#ffffff',
                    dark: '#242424',
                },
                foreground: '#f8f9fa',
                border: 'hsl(var(--border))',
                input: 'hsl(var(--input))',
                ring: 'hsl(var(--ring))',
                destructive: {
                    DEFAULT: 'hsl(var(--destructive))',
                    foreground: 'hsl(var(--destructive-foreground))',
                },
                muted: {
                    DEFAULT: 'hsl(var(--muted))',
                    foreground: 'hsl(var(--muted-foreground))',
                },
                popover: {
                    DEFAULT: 'hsl(var(--popover))',
                    foreground: 'hsl(var(--popover-foreground))',
                },
                card: {
                    DEFAULT: 'hsl(var(--card))',
                    foreground: 'hsl(var(--card-foreground))',
                },
            },
            backgroundImage: {
                'background-image': "url('home.png')",
            },
            borderRadius: {
                lg: `var(--radius)`,
                md: `calc(var(--radius) - 2px)`,
                sm: 'calc(var(--radius) - 4px)',
            },
            keyframes: {
                'accordion-down': {
                    from: { height: '0' },
                    to: { height: 'var(--radix-accordion-content-height)' },
                },
                'accordion-up': {
                    from: { height: 'var(--radix-accordion-content-height)' },
                    to: { height: '0' },
                },
            },
            animation: {
                'accordion-down': 'accordion-down 0.2s ease-out',
                'accordion-up': 'accordion-up 0.2s ease-out',
            },
        },
    },
    plugins: [require('tailwindcss-animate')],
};
