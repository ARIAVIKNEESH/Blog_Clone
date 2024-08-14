import React from 'react';
import './HomePage.css';
import heroImage from '../assets/hero-bg.avif';
import postImage1 from '../assets/post-image-2.webp';
import postImage2 from '../assets/post-FSD.png';
import postImage3 from '../assets/post-image1.jpeg';

function HomePage() {
  const featuredPosts = [
    {
      id: 1,
      title: 'Exploring the Latest in AI Technology',
      excerpt: 'Artificial Intelligence is transforming industries around the world. Discover the latest trends and how they are being applied in various sectors...',
      image: postImage1,
      link: '#',
    },
    {
      id: 2,
      title: 'A Guide to Responsive Web Design',
      excerpt: 'Learn how to create web pages that look great on all devices with this comprehensive guide to responsive web design...',
      image: postImage2,
      link: '#',
    },
    {
      id: 3,
      title: 'Why JavaScript is Still the King of Web Development',
      excerpt: 'JavaScript continues to dominate the web development landscape. Here’s why it remains the most popular programming language...',
      image: postImage3,
      link: '#',
    },
  ];

  return (
    <div className="home-page">
      <section className="hero">
        <img src={heroImage} alt="Hero" className="hero-image" />
        <div className="hero-content">
          <h1>Welcome to Our Tech Blog</h1>
          <p>Stay updated with the latest trends, tutorials, and insights in the world of technology.</p>
        </div>
      </section>
      <section className="featured-posts">
        <h2>Featured Posts</h2>
        <div className="posts">
          {featuredPosts.map(post => (
            <div key={post.id} className="post">
              <img src={post.image} alt={post.title} className="post-image" />
              <h3>{post.title}</h3>
              <p>{post.excerpt}</p>
              <a href={post.link} className="read-more">Read More</a>
            </div>
          ))}
        </div>
      </section>
      <section className="about-blog">
        <h2>About Our Blog</h2>
        <p>
          Our blog is a hub for tech enthusiasts, developers, and learners. We cover a wide range of topics, including web development, AI, software engineering, and more. Whether you're a beginner or an experienced professional, you'll find valuable content here.
        </p>
        <a href="/about" className="learn-more">Learn More About Us</a>
      </section>
    </div>
  );
}

export default HomePage;
