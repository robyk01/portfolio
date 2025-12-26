import { useState, useEffect } from 'react'
import { client } from '../client'

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
    <main className="section">
      <h1>My Blog</h1>
      {posts.map((post) => (
        <article key={post.slug.current}>
          <h2>{post.title}</h2>
          <p>{new Date(post.publishedAt).toLocaleDateString()}</p>
        </article>
      ))}
    </main>
  )
}