import BlogCard from "@/components/blog/blog-card"
import SearchBar from "@/components/search-bar"
import { fetchPosts } from "@/lib/fetch"

const user = {
  name: 'Kishan',
  image: '/image'
}

const blog = {
  title: 'This is a title',
  image: '/image here',
  tags: ['hey', 'hii'],
  description: 'This is a great description',
  link: '/login'
}

export default async function Home() {

  const blogs = await fetchPosts()

  return (
    <>
      <main>
        <div className=" xl:w-4/5 mx-auto py-2 px-4">
          <SearchBar className=" mt-12 " />
          <div className=" rounded bg-black opacity-50 h-1 my-3"></div>
          <div className="blogs mt-7">
            {
              blogs.map((blogs) => (
                <BlogCard user={blogs.user} blog={blogs.blog} />
              ))
            }
          </div>
        </div>
      </main>
    </>
  )
}
