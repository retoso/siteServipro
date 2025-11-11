import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { posts } from '../blogData';
import '../styles/Blog.css';

const BlogPost = () => {
  const { postId } = useParams();
  const post = posts.find(p => p.id === postId);

  if (!post) {
    return (
      <div className="blog-post-page">
        <div className="blog-post-container">
          <h2>Post não encontrado!</h2>
          <Link to="/blog">Voltar para o blog</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="blog-post-page">
      <div className="blog-post-container">
        <header className="blog-post-header">
          <h1>{post.title}</h1>
          <p className="blog-post-meta">
            Por {post.author} em {post.date}
          </p>
        </header>
        <main 
          className="blog-post-content" 
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
        <Link to="/blog" className="back-to-blog-link">← Voltar para todos os posts</Link>
      </div>
    </div>
  );
};

export default BlogPost;
