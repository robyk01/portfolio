import { useState, useEffect } from 'react'
import { client } from '../client'
import { Link } from 'react-router-dom'
import "./Blog.css"

import imageUrlBuilder from '@sanity/image-url'
const builder = imageUrlBuilder(client)
const urlFor = (source) => builder.image(source)

import { PortableText } from '@portabletext/react'


export default function Blog() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    const query = `*[_type == "post"] | order(publishedAt desc)`

    client.fetch(query)
      .then((data) => setPosts(data))
      .catch(console.error)
  }, [])

  return (
    <main className="section blog-page">
      <header className='blog-header'>
        <h1 className='blog-title'>My Blog</h1>
        <p className='blog-subtitle'>Notes on projects and things I'm learning</p>
      </header>

      <div className="blog-grid">
        {posts.map((post) => (
          <Link to={`/blog/${post.slug.current}`} key={post.slug.current}>
            <article className='post-card'>
                <h2>{post.title}</h2>

               <div className="post-meta">
                <time dateTime={post.publishedAt}>
                  {new Date(post.publishedAt).toLocaleDateString()}
                </time>
              </div>

              <div className="post-cta">
                Read <span>→</span>
              </div>

            </article>
          </Link>
        ))}
      </div>
    </main>
  )
}