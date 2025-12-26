import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { client } from "../client";
import { PortableText } from "@portabletext/react";
import "./Blog.css"

function BlogPost(){
    const [post, setPost] = useState(null)

    const { slug } = useParams();

    useEffect(() => {
        if (!slug) return;

        const query = `*[_type == "post" && slug.current == $slug][0]`

        client.fetch(query, {slug})
        .then((data) => setPost(data))
        .catch(console.error)
    }, [slug])

    return(
        <main className="section blog-post">
            <Link to="/blog" className="blog-back">Back to blog</Link>

            <header className="blog-post-header">
                <h1 className="blog-post-title">{post?.title}</h1>

                {post?.publishedAt && (
                    <div className="blog-post-meta">
                        <time dateTime={post.publishedAt}>
                            {new Date(post.publishedAt).toLocaleDateString()}
                        </time>
                    </div>
                )}
            </header>

            <article className="blog-article">
                <PortableText value={post?.body} />
            </article>
        </main>
    );
}

export default BlogPost;