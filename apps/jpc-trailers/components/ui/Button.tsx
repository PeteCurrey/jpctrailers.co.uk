import Link from 'next/link'
import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

interface ButtonProps {
  href?: string
  onClick?: () => void
  type?: 'button' | 'submit' | 'reset'
  children: React.ReactNode
  variant?: 'solid' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  className?: string
  disabled?: boolean
}

export default function Button({ 
  href, 
  onClick,
  type = 'button',
  children, 
  variant = 'solid', 
  size = 'md',
  className,
  disabled
}: ButtonProps) {
  const baseStyles = "inline-flex items-center justify-center font-mono text-[10px] tracking-[0.2em] transition-all duration-300 disabled:opacity-50"
  
  const variants = {
    solid: "bg-[#E8500A] text-white hover:bg-white hover:text-black",
    outline: "border border-[#222222] text-[#F0F0F0] hover:border-[#E8500A]"
  }
  
  const sizes = {
    sm: "px-4 py-2",
    md: "px-8 py-4",
    lg: "px-12 py-6"
  }

  const combinedClasses = cn(baseStyles, variants[variant], sizes[size], className)

  if (href) {
    return (
      <Link href={href} className={combinedClasses}>
        {children}
      </Link>
    )
  }

  return (
    <button 
      type={type}
      onClick={onClick} 
      className={combinedClasses}
      disabled={disabled}
    >
      {children}
    </button>
  )
}


