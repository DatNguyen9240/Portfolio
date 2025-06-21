'use client';

import type { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  variant?: 'default' | 'outline';
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
}

export function Button({
  children,
  variant = 'default',
  className = '',
  onClick,
  type = 'button',
}: ButtonProps) {
  const baseClasses = 'px-8 py-2 rounded-full transition-colors font-medium';

  const variantClasses = {
    default:
      'bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white',
    outline:
      'border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 bg-transparent',
  };

  return (
    <button
      type={type}
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
