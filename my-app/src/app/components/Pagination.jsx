import { motion, AnimatePresence } from 'framer-motion';

export default function Pagination({ id, children, className = '' }) {
  return (
    <div className="relative w-full min-h-[400px]">
      <AnimatePresence mode="wait">
        <motion.div
          key={id}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className={className}
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
