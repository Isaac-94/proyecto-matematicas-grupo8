import React, { useEffect, useRef, useState } from 'react';
import { Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { FaArrowUp } from "react-icons/fa";

const FirstSection = React.lazy(() => import('../components/landing/FirstSection/FirstSection'));
const SecondSection = React.lazy(() => import('../components/landing/SecondSection/SecondSection'));
const Introduction = React.lazy(() => import('../components/landing/Introduccion/Introduccion'));
const Footer = React.lazy(() => import('../components/layouts/Footer/Footer'));
const Header = React.lazy(() => import('../components/layouts/header/Header'));
const Banner = React.lazy(() => import('../components/landing/Components/Banner/Banner'));

const Landing = () => {
    const navigate = useNavigate();
    const containerRef = useRef(null);
    const [showScrollTop, setShowScrollTop] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const containerScroll = containerRef.current?.scrollTop ?? 0;
            const windowScroll = window.scrollY || document.documentElement.scrollTop || 0;
            setShowScrollTop(Math.max(containerScroll, windowScroll) > 250);
        };

        const container = containerRef.current;
        window.addEventListener('scroll', handleScroll, { passive: true });
        container?.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll();

        return () => {
            window.removeEventListener('scroll', handleScroll);
            container?.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        const container = containerRef.current;
        if (container?.scrollTop > 0) {
            container.scrollTo({ top: 0, behavior: 'smooth' });
        }
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <Container ref={containerRef} fluid className="p-0 m-0 overflow-auto overflow-x-hidden" style={{ backgroundColor: "#F0F1EB" }}>
            <Header />
            <FirstSection navigate={navigate} />
            <Banner />
            <Introduction />
            <SecondSection />
            <Footer />

            {showScrollTop && (
                <button
                    type="button"
                    onClick={scrollToTop}
                    aria-label="Volver al inicio"
                    style={{
                        position: 'fixed',
                        right: '40px',
                        bottom: '40px',
                        width: '60px',
                        height: '60px',
                        borderRadius: '50%',
                        border: 'none',
                        backgroundColor: '#FFDB54',
                        color: 'black',
                        fontSize: '30px',
                        cursor: 'pointer',
                        boxShadow: '0 10px 24px rgba(0, 0, 0, 0.22)',
                        zIndex: 1200,
                        transition: 'transform 0.2s ease, opacity 0.2s ease',
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'translateY(-2px)';
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'translateY(0)';
                    }}
                >
                    <FaArrowUp />
                </button>
            )}
        </Container>
    );
}

export default Landing;