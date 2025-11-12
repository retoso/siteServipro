import React from 'react';
import { Link } from 'react-router-dom';
import blogData from '../blogData';
import '../styles/Blog.css'; // Novo CSS para o layout de cards

const Blog = () => {
  return (
    <div className="blog-page">
      <header className="blog-header">
        <h1>Nosso Blog</h1>
        <p>Insights, dicas e novidades sobre automação, IA e eficiência para o seu negócio.</p>
      </header>

      <div className="blog-list-container">
        {blogData.map((post, index) => (
          <article key={index} className="blog-post-card">
            <Link to={`/blog/${post.slug}`} className="card-link">
              <div className="card-image-container">
                <img src={post.imageUrl} alt={post.title} className="card-image" />
              </div>
              <div className="card-content">
                <h2 className="card-title">{post.title}</h2>
                <p className="card-excerpt">{post.excerpt}</p>
                <div className="card-footer">
                  <span className="card-author">Por {post.author}</span>
                  <span className="card-date">{new Date(post.date).toLocaleDateString('pt-BR', {day: '2-digit', month: 'long', year: 'numeric'})}</span>
                </div>
              </div>
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Blog;
