import React from 'react';
import { cn } from '../../utils/cn';

interface LoadingSpinnerProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export default function LoadingSpinner({ className, size = 'md' }: LoadingSpinnerProps) {
  const sizeClasses = {
    sm: 'h-4 w-4',
    md: 'h-6 w-6',
    lg: 'h-8 w-8'
  };

  return (
    <div className={cn('relative', className)}>
      <div className={cn(
        'animate-spin rounded-full border-2 border-gray-300 border-t-white',
        sizeClasses[size]
      )} />
    </div>
  );
}