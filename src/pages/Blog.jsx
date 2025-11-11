import React from 'react';
import { Link } from 'react-router-dom';
import { posts } from '../blogData';
import '../styles/Blog.css';

const Blog = () => {
  return (
    <div className="blog-page">
      <header className="blog-header">
        <h1>Nosso Blog</h1>
        <p>Insights, tendências e novidades do mundo da automação, tecnologia e negócios. Conteúdo valioso para inspirar e transformar sua empresa.</p>
      </header>
      <main className="blog-list">
        {posts.map(post => (
          <Link to={`/blog/${post.id}`} key={post.id} className="post-card-link">
            <article className="post-card">
              <h2>{post.title}</h2>
              <p className="post-meta">Por {post.author} em {post.date}</p>
              <p className="post-excerpt">{post.excerpt}</p>
            </article>
          </Link>
        ))}
      </main>
    </div>
  );
};

export default Blog;
