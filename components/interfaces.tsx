export interface HeaderI extends React.HtmlHTMLAttributes<HTMLHeadingElement> {
    className?: string
}

export interface InputI extends
    React.InputHTMLAttributes<HTMLInputElement> {
    className?: string
}

export interface DivI extends
    React.HtmlHTMLAttributes<HTMLDivElement> {
    className?: string
}

export interface UserProfileProps extends DivI {
    name: string,
    image: string
}

export interface BlogPostProps extends DivI {
    user: User,
    blog: Blog
}

export interface TagProps extends DivI{
    tag: string,
    className? : string
}

export interface StructureProps extends DivI {
    structure: StructureType,
    className?: string
}

type User = {
    name: string,
    image: string
}

export type StructureType = 'title' | 'tags' | 'image' | 'intro'

type Blog = {
    title: string,
    image: string,
    tags: string[],
    description: string,
    link: string
}