import { clsx, ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(inputClass: ClassValue[]) {
    return twMerge(clsx(inputClass))
}