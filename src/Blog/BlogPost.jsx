import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { client } from "../client";
import { PortableText } from "@portabletext/react";
import "./Blog.css"

import Prism from "prismjs"
import "prismjs/themes/prism-tomorrow.css";
import "prismjs/components/prism-python";
import { createImageUrlBuilder } from "@sanity/image-url";

const builder = createImageUrlBuilder(client);
const urlFor = (source) => builder.image(source);

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
        },
        image: ({ value }) => {
            if (!value?.asset) return null;

            return (
                <figure className="pt-image">
                    <img
                        src={urlFor(value).width(1400).fit("max").auto("format").url()}
                        alt={value?.alt || ""}
                        loading="lazy"
                    />
                    {value?.caption && <figcaption>{value.caption}</figcaption>}
                </figure>
            );
        }
    }
};

function BlogPost(){
    const [post, setPost] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    const { slug } = useParams();

    useEffect(() => {
        if (!slug) return;
        setLoading(true);
        setError(null);

        const query = `*[_type == "post" && slug.current == $slug][0]`

        client.fetch(query, {slug})
        .then((data) => {
            setPost(data);
            setLoading(false);
        })
        .catch((err) => {
            console.error("Failed to load blog post:", err);
            setError("Failed to load post.");
            setLoading(false);
        });
    }, [slug]);

    useEffect(() => {
        if (post) {
            Prism.highlightAll();
        }
    }, [post]);

    if (loading) {
        return (
            <main className="section blog-post">
                <div className="blog-post-skeleton">
                    <div className="skeleton-line" style={{ width: "30%", height: "18px", margin: "40px auto 20px" }}></div>
                    <div className="skeleton-line" style={{ width: "70%", height: "36px", margin: "0 auto 60px" }}></div>
                    <div className="skeleton-line" style={{ width: "100%", height: "20px" }}></div>
                    <div className="skeleton-line" style={{ width: "95%", height: "20px" }}></div>
                    <div className="skeleton-line" style={{ width: "90%", height: "20px" }}></div>
                    <div className="skeleton-line" style={{ width: "60%", height: "20px" }}></div>
                </div>
            </main>
        );
    }

    if (error || !post) {
        return (
            <main className="section blog-post">
                <div className="blog-state-msg">
                    <h2>Post Not Found</h2>
                    <p>{error || "The requested article could not be found."}</p>
                    <Link to="/blog">
                        <button>← Back to Blog</button>
                    </Link>
                </div>
            </main>
        );
    }

    return(
        <main className="section blog-post">
            <header className="blog-post-header">
                {post.publishedAt && (
                    <div className="blog-post-meta">
                        <time dateTime={post.publishedAt}>
                            {new Date(post.publishedAt).toLocaleDateString()}
                        </time>
                    </div>
                )}

                <h1 className="blog-post-title">{post.title}</h1>
            </header>

            <article className="blog-article">
                <PortableText value={post.body ?? []} components={portableTextComponents} />
            </article>
        </main>
    );
}

export default BlogPost;