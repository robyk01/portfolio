import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { client } from "../client";
import { PortableText } from "@portabletext/react";
import "./Blog.css"

import Prism from "prismjs"
import "prismjs/themes/prism-tomorrow.css";
import "prismjs/components/prism-python";

const portableTextComponents = {
    types: {
        code: ({value}) => {
            const code = value?.code ?? "";
            const language = value?.language ?? "";
            const filename = value?.filename;

            return (
                <figure className="pt-code">
                    {filename && <figcaption className="pt-code__filename">{filename}</figcaption>}
                    <pre className={`language-${language}`}>
                        <code className={`language-${language}`}>{code}</code>
                    </pre>
                </figure>
            );
        }
    }
};

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

    useEffect(() => {
        Prism.highlightAll();
    }, [post]);

    return(
        <main className="section blog-post">

            <header className="blog-post-header">
                {post?.publishedAt && (
                    <div className="blog-post-meta">
                        <time dateTime={post.publishedAt}>
                            {new Date(post.publishedAt).toLocaleDateString()}
                        </time>
                    </div>
                )}

                <h1 className="blog-post-title">{post?.title}</h1>
            </header>

            <article className="blog-article">
                <PortableText value={post?.body ?? []} components={portableTextComponents} />
            </article>
        </main>
    );
}

export default BlogPost;