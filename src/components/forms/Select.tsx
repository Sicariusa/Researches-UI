import React from 'react';
import { cn } from '../../utils/cn';

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  error?: boolean;
  options: Array<{ value: string; label: string }>;
}

export default function Select({ className, error, options, ...props }: SelectProps) {
  return (
    <select
      className={cn(
        'block w-full rounded-md shadow-sm',
        'focus:ring-2 focus:ring-blue-500 focus:border-blue-500',
        error
          ? 'border-red-300 text-red-900'
          : 'border-gray-300 text-gray-900',
        className
      )}
      {...props}
    >
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
}