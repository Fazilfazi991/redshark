import React from 'react';
import { Star } from 'lucide-react';
import './Testimonials.css';

const testimonials = [
    {
        name: "Sarah Jenkins",
        role: "CMO, TechGlobal",
        text: "We scaled our content output by 400% in just two months. The quality is consistently excellent, and having a single PM makes it feel like an in-house team.",
        image: "" // Placeholder
    },
    {
        name: "Michael Chen",
        role: "Founder, StartUp X",
        text: "I was hesitant about 'freelancers' but these aren't random gig workers. They are true experts. They rebuilt our entire funnel and doubled our conversion rate.",
        image: ""
    },
    {
        name: "Elena Rodriguez",
        role: "Director of Marketing",
        text: "Best decision we made this year. We saved $45k compared to our previous agency and got better results. The transparency is refreshing.",
        image: ""
    }
];

const Testimonials = () => {
    return (
        <section className="testimonials-section">
            <div className="container">
                <h2 className="section-title text-center mb-4">What Our Clients Say</h2>

                <div className="testimonials-grid">
                    {testimonials.map((t, i) => (
                        <div key={i} className="testimonial-card">
                            <div className="stars">
                                {[...Array(5)].map((_, idx) => <Star key={idx} size={16} fill="var(--secondary)" className="star-icon" />)}
                            </div>
                            <p className="testimonial-text">"{t.text}"</p>
                            <div className="testimonial-author">
                                <div className="author-avatar"></div>
                                <div>
                                    <div className="author-name">{t.name}</div>
                                    <div className="author-role">{t.role}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
