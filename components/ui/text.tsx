import { cn } from '@/lib/utils'
import { cva, VariantProps } from 'cva'
import { ReactNode } from 'react'

const textStyles = cva([], {
    variants: {
        size: {
            small: 'text-sm',
            medium: 'text-md',
            large: 'text-lg'
        },

        weight: {
            light: 'font-light',
            normal: 'font-regular',
            medium: 'font-medium',
            semibold: 'font-semibold',
            bold: 'font-bold'
        }
    }
})

type TextStylesProps = VariantProps<typeof textStyles>

export interface TextProps extends React.HtmlHTMLAttributes<HTMLParagraphElement>{
    variant: `${NonNullable<TextStylesProps['size']>}/${NonNullable<TextStylesProps['weight']>}`,
    className? : string
    children?: ReactNode
}

export default function Text({variant, className, children, ...props}: TextProps) {
    const [size, weight] = variant.split("/") as [TextStylesProps['size'], TextStylesProps['weight']]
    return (
        <p className={cn([textStyles({size, weight}), className])} {...props}>{children}</p>
    )
}

