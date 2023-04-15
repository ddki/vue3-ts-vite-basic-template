import { defineConfig } from 'windicss/helpers'
import formsPlugin from 'windicss/plugin/forms'

export default defineConfig({
	content: ['./index.html', './src/**/*.{vue,ts,tsx}'],
	darkMode: 'class',
	safelist: 'p-3 p-4 p-5',
	theme: {
		extend: {
			colors: {
				teal: {
					100: '#096'
				}
			},
			zIndex: {
				'-1': '-1'
			},
			screens: {
				sm: '576px',
				md: '768px',
				lg: '992px',
				xl: '1200px',
				'2xl': '1600px'
			},
			boxShadow: {
				sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
				DEFAULT: '0 5px 15px 0 rgba(0, 0, 0, 0.35), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
				md: '0 1px 4px 0 rgba(0, 0, 0, 0.16), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
				lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
				xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
				'2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
				'3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
				inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
				none: 'none'
			}
		}
	},
	plugins: [formsPlugin]
})
