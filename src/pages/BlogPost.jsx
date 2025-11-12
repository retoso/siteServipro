import React from 'react';
import { useParams, Link } from 'react-router-dom';
import blogData from '../blogData';
import '../styles/BlogPost.css'; // Novo CSS dedicado para a página do post

const BlogPost = () => {
  const { slug } = useParams();
  const post = blogData.find(p => p.slug === slug);

  if (!post) {
    return (
      <div className="post-not-found">
        <h2>Post não encontrado</h2>
        <p>O artigo que você está procurando não existe ou foi movido.</p>
        <Link to="/blog">Voltar para o Blog</Link>
      </div>
    );
  }

  return (
    <article className="blog-post-page">
      <header className="post-header">
        <div className="post-header-image-container">
            <img src={post.imageUrl} alt={post.title} className="post-header-image" />
        </div>
        <div className="post-header-content">
            <h1 className="post-title">{post.title}</h1>
            <div className="post-meta">
            <span>Por {post.author}</span> | <span>{new Date(post.date).toLocaleDateString('pt-BR', {day: '2-digit', month: 'long', year: 'numeric'})}</span>
            </div>
        </div>
      </header>
      
      <main className="post-body">
        <div className="post-content" dangerouslySetInnerHTML={{ __html: post.content }} />
      </main>

      <footer className="post-footer">
        <Link to="/blog" className="back-to-blog-link">← Voltar para todos os posts</Link>
      </footer>
    </article>
  );
};

export default BlogPost;
