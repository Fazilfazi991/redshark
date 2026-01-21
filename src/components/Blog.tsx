import React from 'react';
import './Blog.css';

const Blog = () => {
    return (
        <section className="blog-section">
            <div className="container">
                <h2 className="section-title text-center mb-5">Latest Insights</h2>
                <div className="text-center mb-5">
                    <p className="section-subtitle">Trends, strategies, and success stories.</p>
                </div>

                <div className="blog-grid">
                    <div className="blog-card">
                        <div className="blog-image">
                            <div className="placeholder-img" style={{ background: 'linear-gradient(45deg, #1a1a1a, #2a2a2a)' }}></div>
                        </div>
                        <div className="blog-content">
                            <span className="blog-tag">Strategy</span>
                            <h3>The Future of AI in Digital Marketing</h3>
                            <p>AI is not just a buzzword. Discover how we use machine learning to predict consumer behavior.</p>
                            <a href="#" className="read-more">Read Article →</a>
                        </div>
                    </div>
                    <div className="blog-card">
                        <div className="blog-image">
                            <div className="placeholder-img" style={{ background: 'linear-gradient(45deg, #2a2a2a, #3a3a3a)' }}></div>
                        </div>
                        <div className="blog-content">
                            <span className="blog-tag">Case Study</span>
                            <h3>How we scaled a SaaS to $1M ARR</h3>
                            <p>A deep dive into the growth hacks and paid acquisition channels that drove massive results.</p>
                            <a href="#" className="read-more">Read Article →</a>
                        </div>
                    </div>
                    <div className="blog-card">
                        <div className="blog-image">
                            <div className="placeholder-img" style={{ background: 'linear-gradient(45deg, #1a1a1a, #000000)' }}></div>
                        </div>
                        <div className="blog-content">
                            <span className="blog-tag">SEO</span>
                            <h3>SEO in 2026: What's Changing?</h3>
                            <p>Google's latest core update has shifted the landscape. Here is what you need to know to stay ranked.</p>
                            <a href="#" className="read-more">Read Article →</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Blog;
