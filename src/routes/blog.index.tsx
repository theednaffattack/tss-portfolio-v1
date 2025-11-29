import { allPosts } from 'content-collections' // This alias is typically set up by the adapter

function BlogPage() {
  return (
    <div>
      {allPosts.map((post) => (
        <div key={post._meta.path}>
          <h2>{post.title}</h2>
          {/* Render other post data */}
        </div>
      ))}
    </div>
  )
}
