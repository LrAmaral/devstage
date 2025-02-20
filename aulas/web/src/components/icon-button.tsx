import type { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

interface IconButtonProps extends ComponentProps<'button'> {
  children: React.ReactNode
  className?: string
}

export default function IconButton({ className, ...props }: IconButtonProps) {
  return (
    <button
      className={twMerge(
        'p-2 bg-gray-500 text-blue-500 rounded-md cursor-pointer transition-colors duration-300 hover:bg-blue hover:text-gray-900f',
        className,
      )}
      {...props}
    />
  )
}
