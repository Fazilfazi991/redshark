import React, { useEffect, useRef, useState } from 'react';
import './ScrollReveal.css';

interface ScrollRevealProps {
    children: React.ReactNode;
    animation?: 'fade-up' | 'fade-in' | 'slide-left' | 'slide-right' | 'zoom-in';
    delay?: number;
    duration?: number;
    className?: string;
}

const ScrollReveal: React.FC<ScrollRevealProps> = ({
    children,
    animation = 'fade-up',
    delay = 0,
    duration = 0.6,
    className = ''
}) => {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
            }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, []);

    const style = {
        transitionDelay: `${delay}ms`,
        transitionDuration: `${duration}s`
    };

    return (
        <div
            ref={ref}
            className={`reveal-item ${animation} ${isVisible ? 'visible' : ''} ${className}`}
            style={style}
        >
            {children}
        </div>
    );
};

export default ScrollReveal;
