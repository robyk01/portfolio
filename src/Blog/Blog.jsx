import { useState, useEffect, useCallback } from 'react'
import { client } from '../client'
import { Link } from 'react-router-dom'
import "./Blog.css"

export default function Blog() {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const fetchPosts = useCallback(() => {
    setLoading(true)
    setError(null)
    const query = `*[_type == "post"] | order(publishedAt desc)`

    client.fetch(query)
      .then((data) => {
        setPosts(data || [])
        setLoading(false)
      })
      .catch((err) => {
        console.error("Failed to load blog posts:", err)
        setError("Unable to load posts. Please try again.")
        setLoading(false)
      })
  }, [])

  useEffect(() => {
    fetchPosts()
  }, [fetchPosts])

  return (
    <main className="section blog-page">
      <header className='blog-header'>
        <h1 className='blog-title'>My Blog</h1>
        <p className='blog-subtitle'>Notes on projects and things I'm learning</p>
      </header>

      <div className="blog-grid">
        {loading && (
          <>
            <div className="skeleton-card" aria-hidden="true">
              <div className="skeleton-title"></div>
              <div className="skeleton-meta"></div>
            </div>
            <div className="skeleton-card" aria-hidden="true">
              <div className="skeleton-title" style={{ width: '45%' }}></div>
              <div className="skeleton-meta"></div>
            </div>
            <div className="skeleton-card" aria-hidden="true">
              <div className="skeleton-title" style={{ width: '70%' }}></div>
              <div className="skeleton-meta"></div>
            </div>
          </>
        )}

        {!loading && error && (
          <div className="blog-state-msg">
            <p>{error}</p>
            <button onClick={fetchPosts}>Retry</button>
          </div>
        )}

        {!loading && !error && posts.length === 0 && (
          <div className="blog-state-msg">
            <p>No blog posts published yet. Stay tuned!</p>
          </div>
        )}

        {!loading && !error && posts.map((post) => (
          <Link to={`/blog/${post.slug?.current}`} key={post.slug?.current || post._id}>
            <article className='post-card'>
              <h2>{post.title}</h2>

              {post.publishedAt && (
                <div className="post-meta">
                  <time dateTime={post.publishedAt}>
                    {new Date(post.publishedAt).toLocaleDateString()}
                  </time>
                </div>
              )}
            </article>
          </Link>
        ))}
      </div>
    </main>
  )
}