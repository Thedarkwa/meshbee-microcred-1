import React from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { cn } from '@/lib/utils';

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  staggerChildren?: boolean;
  staggerDelay?: number;
}

export function ScrollReveal({
  children,
  className,
  delay = 0,
  staggerChildren = false,
  staggerDelay = 100,
}: ScrollRevealProps) {
  const { ref, isVisible, prefersReducedMotion } = useScrollReveal<HTMLDivElement>();

  const baseStyles: React.CSSProperties = prefersReducedMotion
    ? {}
    : {
        opacity: isVisible ? 1 : 0,
        transform: isVisible
          ? 'translateY(0) scale(1)'
          : 'translateY(12px) scale(0.97)',
        transition: `opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms, transform 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`,
      };

  if (staggerChildren) {
    return (
      <div
        ref={ref}
        className={className}
        style={{ opacity: prefersReducedMotion ? 1 : isVisible ? 1 : 0 }}
      >
        {React.Children.map(children, (child, index) => (
          <div
            style={
              prefersReducedMotion
                ? {}
                : {
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible
                      ? 'translateY(0) scale(1)'
                      : 'translateY(12px) scale(0.97)',
                    transition: `opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${delay + index * staggerDelay}ms, transform 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${delay + index * staggerDelay}ms`,
                  }
            }
          >
            {child}
          </div>
        ))}
      </div>
    );
  }

  return (
    <div
      ref={ref}
      className={cn(className)}
      style={baseStyles}
    >
      {children}
    </div>
  );
}

// Utility component for staggered grid items
interface StaggerItemProps {
  children: React.ReactNode;
  index: number;
  isVisible: boolean;
  prefersReducedMotion: boolean;
  baseDelay?: number;
  staggerDelay?: number;
  className?: string;
}

export function StaggerItem({
  children,
  index,
  isVisible,
  prefersReducedMotion,
  baseDelay = 0,
  staggerDelay = 100,
  className,
}: StaggerItemProps) {
  const delay = baseDelay + index * staggerDelay;

  return (
    <div
      className={className}
      style={
        prefersReducedMotion
          ? {}
          : {
              opacity: isVisible ? 1 : 0,
              transform: isVisible
                ? 'translateY(0) scale(1)'
                : 'translateY(12px) scale(0.97)',
              transition: `opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms, transform 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`,
            }
      }
    >
      {children}
    </div>
  );
}
