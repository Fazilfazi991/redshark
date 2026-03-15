import React from 'react';
import { Star } from 'lucide-react';
import './Testimonials.css';
import loomelleImg from '../assets/loomelle-craft-logo.jpg';

const testimonials = [
    {
        name: "Loomelle Craft",
        role: "Client",
        text: "Loomelle Craft struggled with lead generation in the initial stage. After partnering with Sreyas and the team, we saw a clear improvement in business growth. Finding a reliable digital marketing agency in Kerala is tough, but this team truly delivers results.",
        image: loomelleImg
    },
    {
        name: "Lilly Berry Online",
        role: "E-commerce Brand",
        text: "We approached Redsharc for our brand Lilly Berry Online and our business Charutha. Since it was our first time starting an e-commerce business, we had many doubts about how things would work. But the team guided us very well, and we started seeing good results within the first week itself. In my experience, they are one of the best digital marketing agencies in Kerala. Highly recommended!",
        image: ""
    },
    {
        name: "Vihara Interiors",
        role: "Interior Design Company",
        text: "We are Vihara Interiors, located in Mavelikara, Kerala. We tried another agency before reaching out to this team but were not satisfied. For the past one and a half years, we have been collaborating with this team and the experience has been very good. They provide proper leads, handle our social media professionally, and we have also seen organic conversions. This is one of the best digital marketing teams in Kerala.",
        image: ""
    },
    {
        name: "Reji",
        role: "Business Owner",
        text: "Hi, I'm Reji. Earlier I had worked with three digital marketing agencies in Kerala, but I didn't receive any proper results. They mainly focused on posting content and running ads, but there were no real conversions. When I reached out to the Redsharc team, I noticed a clear change. They provided proper guidance in every meeting and explained what steps we should take next. It's really a good and supportive digital marketing agency in Kerala. Highly recommended!",
        image: ""
    },
    {
        name: "Dwarakayil Builders",
        role: "Construction & Real Estate",
        text: "Before we reached out to Redsharc, we worked with another team in Kerala, but they were very expensive and did not provide proper service. The Redsharc team is amazing! They did a great job, and we got better results and support throughout our digital marketing journey. Their social media marketing also helped us achieve more conversions. Highly recommended!",
        image: ""
    },
    {
        name: "Amaravathy Construction",
        role: "Construction Company",
        text: "We were looking for an agency for proper social media handling and social media marketing, and this team is doing a great job. This is not my first agency, so I can compare their work with others, and this team stands out. Thank you, and keep going, team!",
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
                                {t.image ? (
                                    <div className="author-avatar-wrapper">
                                        <img src={t.image} alt={t.name} className="author-avatar-img" />
                                    </div>
                                ) : (
                                    <div className="author-avatar"></div>
                                )}
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
