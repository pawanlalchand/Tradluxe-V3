import '@fontsource-variable/open-sans';
import '@fontsource-variable/playfair-display';
import '@fontsource/great-vibes';
import './globals.css';

export const metadata = {
  title: 'Tradluxe - Redefining Wholesale Luxury Experiences',
  description: "Singapore's premier wholesale trading company, connecting global suppliers and premium buyers with elegance and precision.",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>{children}</body>
    </html>
  )
}
