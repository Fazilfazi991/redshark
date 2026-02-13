import React from 'react';
import { BarChart, PieChart, Activity, TrendingUp, Target, Users } from 'lucide-react';
import './MarketingVisual.css';

const MarketingVisual = () => {
    return (
        <div className="marketing-visual-container">
            <div className="iso-scene">
                {/* Main Dashboard Platform */}
                <div className="iso-platform">
                    <div className="platform-face face-top">
                        <div className="grid-lines"></div>

                        {/* 3D Bar Chart */}
                        <div className="bar-group">
                            <div className="iso-bar bar-1"><div className="bar-face top"></div><div className="bar-face front"></div><div className="bar-face side"></div></div>
                            <div className="iso-bar bar-2"><div className="bar-face top"></div><div className="bar-face front"></div><div className="bar-face side"></div></div>
                            <div className="iso-bar bar-3"><div className="bar-face top"></div><div className="bar-face front"></div><div className="bar-face side"></div></div>
                            <div className="iso-bar bar-4"><div className="bar-face top"></div><div className="bar-face front"></div><div className="bar-face side"></div></div>
                        </div>

                        {/* Floating Cards */}
                        <div className="float-card card-analytics">
                            <Activity size={24} color="#ce1111" />
                            <div className="card-line"></div>
                            <div className="card-line short"></div>
                        </div>

                        <div className="float-card card-users">
                            <Users size={24} color="#000000" />
                            <div className="card-line"></div>
                        </div>
                    </div>
                    <div className="platform-face face-front"></div>
                    <div className="platform-face face-side"></div>
                </div>

                {/* Floating Icons Orbiting */}
                <div className="floating-icon icon-1"><Target size={32} color="#ffffff" /></div>
                <div className="floating-icon icon-2"><TrendingUp size={32} color="#ce1111" /></div>

                {/* Decorative Elements */}
                <div className="glow-sphere"></div>
            </div>
        </div>
    );
};

export default MarketingVisual;
