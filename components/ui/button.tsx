import { cva, VariantProps } from 'cva'

const buttonStyles = cva(['rounded-md', 'px-2', 'py-1', 'border-2', 'disabled:opacity-50', 'disabled:cursor-not-allowed'], {
    variants: {
        intents: {
            dark: [
                'text-white',
                'bg-black',
                'hover:bg-white',
                'hover:text-black',
                'hover:border-black'
            ],

            white: [
                'text-black',
                'bg-white',
                'hover:bg-black',
                'hover:text-white',
                'hover:border-white'
            ]
        },

        size: {
            small: ['text-sm'],
            regular: ['text-base']
        }
    },

    defaultVariants: {
        intents: "dark",
        size: "regular"
    }
})

type buttonStylesProps = VariantProps<typeof buttonStyles>

interface ButtonProps extends
    React.ButtonHTMLAttributes<HTMLButtonElement> {
        variant: `${NonNullable<buttonStylesProps['intents']>}/${NonNullable<buttonStylesProps['size']>}`
    }

export default function Button({variant='dark/regular', className, children, ...props}: ButtonProps) {

    const [intents, size] = variant.split('/') as [buttonStylesProps['intents'], buttonStylesProps['size'] ]

    return (
        <button className={buttonStyles({size, intents, className})} {...props}>
            {children}
        </button>
    )
}