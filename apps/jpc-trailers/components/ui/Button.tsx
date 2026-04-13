import Link from 'next/link'
import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

interface ButtonProps {
  href: string
  children: React.ReactNode
  variant?: 'solid' | 'outline'
  size?: 'md' | 'lg'
  className?: string
}

export default function Button({ 
  href, 
  children, 
  variant = 'solid', 
  size = 'md',
  className 
}: ButtonProps) {
  const baseStyles = "inline-flex items-center justify-center font-mono text-[10px] tracking-[0.2em] transition-all duration-300"
  
  const variants = {
    solid: "bg-[#E8500A] text-white hover:bg-white hover:text-black",
    outline: "border border-[#222222] text-[#F0F0F0] hover:border-[#E8500A]"
  }
  
  const sizes = {
    md: "px-8 py-4",
    lg: "px-12 py-6"
  }

  return (
    <Link 
      href={href} 
      className={cn(baseStyles, variants[variant], sizes[size], className)}
    >
      {children}
    </Link>
  )
}
