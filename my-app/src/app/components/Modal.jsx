'use client';

import { createPortal } from 'react-dom';
import { useEffect, useState } from 'react';

export default function Modal({ children, onClose }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return createPortal(
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
      <div className="bg-white p-6 relative">
        <button className="absolute top-2 right-2 text-black" onClick={onClose}>
          ✕
        </button>
        {children}
      </div>
    </div>,
    document.body
  );
}
