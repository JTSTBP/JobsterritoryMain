import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import HexagonCard from "./HexagonCard";
import { useIsMobile } from "@/hooks/use-mobile";

import logistics from "@/assets/industry-logistics.png";
import healthcare from "@/assets/industry-healthcare.png";
import technology from "@/assets/industry-technology.png";
import media from "@/assets/industry-media.png";
import energy from "@/assets/industry-energy.png";
import finance from "@/assets/industry-finance.png";
import agriculture from "@/assets/industry-agriculture.png";
import transport from "@/assets/industry-transport.png";
import education from "@/assets/industry-education.png";

const industries = [
    { image: logistics, label: "Logistics", col: 1, row: 0 },
    { image: energy, label: "Energy", col: 3, row: 0 },
    { image: healthcare, label: "Healthcare", col: 0, row: 1 },
    { image: technology, label: "Technology", col: 2, row: 1 },
    { image: media, label: "Media", col: 1, row: 2 },
    { image: agriculture, label: "Agriculture", col: 3, row: 2 },
    { image: finance, label: "Finance", col: 0, row: 3 },
    { image: transport, label: "Transport", col: 2, row: 3 },
    { image: education, label: "Education", col: 1, row: 4 },
];

const useHexGrid = (hexW: number) => {
    const hexH = hexW * 1.15;
    const gap = Math.max(6, hexW * 0.08);
    const colStep = hexW + gap;
    const rowStep = hexH * 0.75 + gap;
    const oddColOffset = rowStep / 2;
    const gridW = colStep * 3 + hexW;
    const gridH = rowStep * 4 + hexH + oddColOffset;

    const centers = industries.map((ind) => {
        const isOddCol = ind.col % 2 === 1;
        const cx = ind.col * colStep + hexW / 2;
        const cy = ind.row * rowStep + (isOddCol ? oddColOffset : 0) + hexH / 2;
        return { cx, cy };
    });

    const connections: { x1: number; y1: number; x2: number; y2: number }[] = [];
    const maxDist = colStep * 1.6;
    for (let i = 0; i < centers.length; i++) {
        for (let j = i + 1; j < centers.length; j++) {
            const dx = centers[i].cx - centers[j].cx;
            const dy = centers[i].cy - centers[j].cy;
            if (Math.sqrt(dx * dx + dy * dy) < maxDist) {
                connections.push({ x1: centers[i].cx, y1: centers[i].cy, x2: centers[j].cx, y2: centers[j].cy });
            }
        }
    }

    return { hexH, colStep, rowStep, oddColOffset, gridW, gridH, centers, connections };
};

const IndustriesBanner = () => {
    const isMobile = useIsMobile();
    const hexW = isMobile ? 90 : 150;
    const { colStep, rowStep, oddColOffset, gridW, gridH, centers, connections } = useHexGrid(hexW);

    return (
        <section
            className="relative min-h-screen flex items-center overflow-hidden"
            style={{ background: "var(--hero-gradient)" }}
        >
            {/* Decorative background */}
            <div className="absolute right-[-15%] top-1/2 -translate-y-1/2 w-[80vw] h-[80vw] rounded-full opacity-20 pointer-events-none"
                style={{ background: "radial-gradient(circle, hsl(var(--primary) / 0.08) 0%, transparent 70%)" }}
            />
            <div className="absolute right-[-8%] top-1/2 -translate-y-1/2 w-[65vw] h-[65vw] rounded-full border border-primary/10 pointer-events-none" />
            <div className="absolute right-[0%] top-1/2 -translate-y-1/2 w-[50vw] h-[50vw] rounded-full border border-primary/8 pointer-events-none" />

            <div className="absolute top-20 right-[20%] w-3 h-3 rounded-full bg-primary/20 animate-pulse" />
            <div className="absolute top-40 right-[35%] w-2 h-2 rounded-full bg-primary/15 animate-pulse" style={{ animationDelay: "1s" }} />
            <div className="absolute bottom-32 right-[25%] w-2.5 h-2.5 rounded-full bg-primary/20 animate-pulse" style={{ animationDelay: "2s" }} />

            <div className="container mx-auto px-4 sm:px-6 lg:px-12 flex flex-col lg:flex-row items-center gap-8 md:gap-12 lg:gap-16 py-12 md:py-20">
                {/* Left content */}
                <div className="flex-1 max-w-xl z-10 text-center lg:text-left">
                    <span className="inline-block px-4 md:px-5 py-1.5 md:py-2 rounded-full border border-primary/40 text-xs md:text-sm font-semibold tracking-widest uppercase text-primary mb-6 md:mb-8">
                        Strategic Logistics & Beyond
                    </span>
                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.1] text-foreground mb-4 md:mb-6">
                        Industries
                        <br />
                        We Hire
                    </h1>
                    <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-8 md:mb-10 max-w-md mx-auto lg:mx-0">
                        Dominate your sector with elite talent. We provide specialized
                        recruitment and workforce solutions across 25+ key industries in
                        India.
                    </p>
                    <div className="flex flex-wrap gap-3 md:gap-4 justify-center lg:justify-start">
                        <Button size={isMobile ? "default" : "lg"} className="rounded-full px-6 md:px-8 gap-2 text-sm md:text-base font-semibold shadow-lg shadow-primary/30">
                            Get Started <ArrowRight className="w-4 h-4" />
                        </Button>
                        <Button
                            variant="outline"
                            size={isMobile ? "default" : "lg"}
                            className="rounded-full px-6 md:px-8 text-sm md:text-base font-semibold border-primary text-primary hover:bg-primary/5"
                        >
                            Explore Sectors
                        </Button>
                    </div>
                </div>

                {/* Right hexagonal honeycomb grid */}
                <div className="flex-1 flex justify-center lg:justify-end z-10 w-full overflow-hidden">
                    <div className="relative" style={{ width: gridW, height: gridH }}>
                        <svg className="absolute inset-0 pointer-events-none" width={gridW} height={gridH}>
                            {connections.map((c, i) => (
                                <line key={i} x1={c.x1} y1={c.y1} x2={c.x2} y2={c.y2}
                                    stroke="hsl(var(--primary) / 0.15)" strokeWidth="1.5" strokeDasharray="4 4" />
                            ))}
                            {centers.map((c, i) => (
                                <circle key={i} cx={c.cx} cy={c.cy} r={isMobile ? 2.5 : 4} fill="hsl(var(--primary) / 0.3)" />
                            ))}
                        </svg>

                        {industries.map((ind) => {
                            const isOddCol = ind.col % 2 === 1;
                            const x = ind.col * colStep;
                            const y = ind.row * rowStep + (isOddCol ? oddColOffset : 0);
                            return (
                                <div
                                    key={ind.label}
                                    className="absolute transition-transform duration-300 hover:scale-110 hover:z-20"
                                    style={{ left: x, top: y, filter: "drop-shadow(0 4px 12px hsl(var(--primary) / 0.15))" }}
                                >
                                    <HexagonCard image={ind.image} label={ind.label} size={hexW} />
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default IndustriesBanner;
