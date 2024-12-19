import React from 'react';
import { cn } from '../../utils/cn';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
}

export default function Input({ className, error, ...props }: InputProps) {
  return (
    <input
      className={cn(
        'block w-full rounded-md shadow-sm',
        'focus:ring-2 focus:ring-blue-500 focus:border-blue-500',
        error
          ? 'border-red-300 text-red-900 placeholder-red-300'
          : 'border-gray-300 text-gray-900',
        className
      )}
      {...props}
    />
  );
}