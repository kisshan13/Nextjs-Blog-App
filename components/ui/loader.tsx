import { VariantProps, cva } from "cva";
import { cn } from "@/lib/utils";

const loaderStyles = cva(['rounded-full border-t-2 animate-spin'], {
    variants: {
        size: {
            small: 'w-5 h-5',
            medium: 'w-8 h-8',
            large: 'w-10 h-10'
        },

        color: {
            black: 'border-black',
            white: 'border-white'
        }
    }
})

type LoaderStyleProps = VariantProps<typeof loaderStyles>

interface LoaderProps extends React.HTMLProps<HTMLDivElement> {
    variants: `${NonNullable<LoaderStyleProps['size']>}/${NonNullable<LoaderStyleProps['color']>}`, 
    className?: string
}

export default function Loader({variants, className, ...props}: LoaderProps) {

    const [size, color] = variants.split('/') as [LoaderStyleProps['size'], LoaderStyleProps['color']]

    return (
        <div className={cn([loaderStyles({size, color}), className])} {...props}>
        </div>
    )
}