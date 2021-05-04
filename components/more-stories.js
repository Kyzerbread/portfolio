import PostPreview from '../components/post-preview'
import Paper from '../components/paper'
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

export default function MoreStories({ posts }) {
  return (
    <section>

      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-16 lg:gap-x-32 gap-y-20 md:gap-y-32 mb-32">
        {posts.map(post => {
          let date = new Date(post.date);
          return (
            <div className="ml-2 mb-8 pl-4 post">
              <p className="text-lg text-indigo-500 font-bold"><a href={`/posts/${post.slug}`}>{post.title}</a></p>
              <p className="text-lg mb-2">{post.excerpt}</p>
              <p className="text-xs">{date.toLocaleDateString("en-US", options)}</p>
              {/* <p className="text-sm text-green-600"><a href={`/posts/${post.slug}`}>Continue reading</a></p> */}
            </div>
          )
        })}
      </div>
    </section>
  )
}
