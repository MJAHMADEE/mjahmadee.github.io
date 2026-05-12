'use client';

import { AnimatePresence } from 'framer-motion';

export default function LayoutWrapper({ children }) {
  return (
    <AnimatePresence mode="wait">
      {children}
    </AnimatePresence>
  );
}
