import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import './FAQ.css';

interface FAQItem {
    question: string;
    answer: string | React.ReactNode;
}

interface FAQProps {
    title?: string;
    description?: string;
    items?: FAQItem[];
    className?: string;
}

const defaultFaqs: FAQItem[] = [
    { question: "How do you vet your freelancers?", answer: "We have a rigorous 3-stage process including portfolio review, technical challenge, and soft-skills interview. Only the top 3% make it in." },
    { question: "What is the turnaround time?", answer: "Most projects kick off within 48 hours. Small tasks are done in days, complex builds in weeks. We're generally 2x faster than traditional agencies." },
    { question: "Do I have to manage the freelancers?", answer: "No. You get a dedicated Project Manager who handles all coordination, quality control, and communication." },
    { question: "What if I'm not satisfied?", answer: "We offer a 14-day money-back guarantee. If the work doesn't meet the scope, we revise it or refund you." },
    { question: "Can I scale my team up or down?", answer: "Absolutely. That's our main advantage. Add 5 devs for a sprint, then scale back down. No penalties." }
];

const FAQ: React.FC<FAQProps> = ({ title = "Frequently Asked Questions", description, items = defaultFaqs, className = "" }) => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className={`faq-section ${className}`}>
            <div className="container" style={{ maxWidth: '800px' }}>
                {description && <p className="text-center mb-2" style={{ color: 'var(--text-muted)', fontSize: '1.2rem', fontWeight: 500 }}>{description}</p>}
                <h2 className="section-title text-center mb-4">{title}</h2>

                <div className="faq-list">
                    {items.map((faq, index) => (
                        <div key={index} className={`faq-item ${openIndex === index ? 'open' : ''}`} onClick={() => toggle(index)}>
                            <div className="faq-question">
                                {faq.question}
                                {openIndex === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                            </div>
                            <div className="faq-answer">
                                <div>{faq.answer}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
