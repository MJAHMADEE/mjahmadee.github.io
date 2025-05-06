import '../styles/globals.css';
import { AnimatePresence } from 'framer-motion';

export const metadata = {
  title: 'Nima Ahmadi - Portfolio',
  description: 'CTO at MediversAI | AI & Robotics Engineer'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AnimatePresence mode="wait">{children}</AnimatePresence>
      </body>
    </html>
  );
}
