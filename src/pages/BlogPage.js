import React from 'react';
import './BlogPage.css';
import blogImage1 from '../assets/blog-image-1.png';
import blogImage2 from '../assets/blog-image-2.png';
import blogImage3 from '../assets/blog-image-3.png';

function BlogPage() {
  const blogs = [
    {
      id: 1,
      title: 'Understanding React Hooks',
      content: 'React Hooks provide a powerful way to handle state and side effects in functional components...',
      image: blogImage1,
      mentor: 'Arasu',
    },
    {
      id: 2,
      title: 'Building Responsive Websites with CSS Grid',
      content: 'CSS Grid Layout is a two-dimensional layout system for the web. It lets you lay out items in rows and columns...',
      image: blogImage2,
      mentor: 'Akhil',
    },
    {
      id: 3,
      title: 'A Deep Dive into Node.js',
      content: 'Node.js is a runtime environment that allows you to execute JavaScript on the server side...',
      image: blogImage3,
      mentor: 'Aria',
    },
  ];

  return (
    <div className="blog-page">
      <h1>Our Blog</h1>
      <div className="blog-posts">
        {blogs.map(blog => (
          <div key={blog.id} className="blog-post">
            <img src={blog.image} alt={blog.title} className="blog-image" />
            <h2>{blog.title}</h2>
            <p>{blog.content}</p>
            <p>Join the session with {blog.mentor}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BlogPage;
