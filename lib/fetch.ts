import blogs from '@/data/blogs.json'

export async function fetchPosts() {
    return  blogs.blogs
}