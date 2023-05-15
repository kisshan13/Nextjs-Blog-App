import { cn } from '@/lib/utils'
import { cva, VariantProps } from 'cva'
import { ReactNode } from 'react'

const headingStyles = cva([], {
    variants: {
        size: {
            small: 'text-sm',
            medium: 'text-md',
            big: 'text-3xl',
            tall: 'text-4xl'
        },

        weight: {
            light: 'font-light',
            regular: 'font-regular',
            normal: 'font-medium',
            semibold: 'font-semibold',
            bold: 'font-bold'
        }
    }
})

type HeadingStylesProps = VariantProps<typeof headingStyles>

interface HeadingProps extends React.HtmlHTMLAttributes<HTMLHeadingElement> {
    variants: `${NonNullable<HeadingStylesProps['size']>}/${NonNullable<HeadingStylesProps['weight']>}`,
    className?: string
}

export default function Heading({ variants, className, children, ...props }: HeadingProps) {
    let [size, weight] = variants.split('/') as [HeadingStylesProps['size'], HeadingStylesProps['weight']]

    return (
        <h1 className={cn([headingStyles({size, weight}), className])} {...props}>
            {children}
        </h1>
    )
}