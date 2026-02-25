import { Briefcase, Users, Globe, Award, Eye, Target } from "lucide-react";
import teamHero from "@/assets/team-hero.jpg";

const Index = () => {
    return (
        <div className="min-h-screen bg-background">
            {/* Title */}
            <section className="pt-12 pb-6 text-center">
                <h1 className="text-4xl md:text-5xl font-bold text-foreground">
                    Our Story, Vision & Values
                </h1>
            </section>

            {/* Hero Image */}
            <section className="max-w-7xl mx-auto px-6 lg:px-12 pb-10">
                <div className="rounded-2xl overflow-hidden">
                    <img
                        src={teamHero}
                        alt="Professional team collaborating in modern office"
                        className="w-full h-64 md:h-[360px] object-cover"
                    />
                </div>
            </section>

            {/* About Us & Our Approach */}
            <section className="max-w-7xl mx-auto px-6 lg:px-12 pb-12 grid md:grid-cols-2 gap-6">
                <GradientCard
                    title="About Us"
                    icon={<Users className="w-6 h-6" />}
                    text="As a leading premium recruitment agency, we are dedicated to connecting exceptional talent with world-class organizations. Our approach goes beyond just filling roles: we focus on aligning skills, cultural fit, and long-term growth. With a global network, industry expertise, and a commitment to excellence, we empower businesses to build high-performing, future-ready teams. We believe in the power of people to drive innovation and success."
                />
                <GradientCard
                    title="Our Approach"
                    icon={<Briefcase className="w-6 h-6" />}
                    text="We believe in a consultative and personalized approach. We listen to your unique challenges and aspirations, leveraging cutting-edge technology and market insights to deliver customized recruitment solutions. Whether you're a startup or an established enterprise, we guide you through every step of the hiring process with transparency and integrity. Our mission is to ensure a perfect match that fuels your success."
                />
            </section>

            {/* Impact Metrics */}
            <section className="bg-metrics py-8 px-6 lg:px-12">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-6 md:gap-0">
                    <h2 className="text-2xl font-bold text-foreground md:mr-12 whitespace-nowrap">
                        Impact Metrics
                    </h2>
                    <div className="flex-1 grid grid-cols-2 md:grid-cols-4 gap-6 w-full">
                        <MetricItem icon={<Briefcase className="w-5 h-5 text-primary" />} value="15,000+" label="Successful Hires" />
                        <MetricItem icon={<Users className="w-5 h-5 text-primary" />} value="98%" label="Client Retention" />
                        <MetricItem icon={<Globe className="w-5 h-5 text-primary" />} value="500+" label="Global Clients" />
                        <MetricItem icon={<Award className="w-5 h-5 text-primary" />} value="50+" label="Industry Awards" />
                    </div>
                </div>
            </section>

            {/* Vision & Mission */}
            <section className="max-w-7xl mx-auto px-6 lg:px-12 py-12 grid md:grid-cols-2 gap-6">
                <OutlineCard
                    title="Our Vision"
                    icon={<Eye className="w-6 h-6 text-primary" />}
                    text="Our vision is to become the most trusted global partner for recruitment and talent solutions. We aspire to set new standards of excellence by delivering innovative and impactful strategies that transform businesses and careers, shaping the future of work."
                />
                <OutlineCard
                    title="Our Mission"
                    icon={<Target className="w-6 h-6 text-primary" />}
                    text="Our mission is to connect businesses with the right talent through a transparent, customized, and results-driven process. We focus on ensuring high-quality matches that not only meet skill requirements but also align seamlessly with our clients' culture, goals, and long-term objectives."
                />
            </section>

            {/* Footer */}
            <footer className="bg-footer text-footer-foreground py-4 text-center text-sm">
                <div className="flex flex-wrap justify-center gap-2 items-center">
                    <a href="#" className="hover:text-primary-foreground transition-colors">Contact us</a>
                    <span>|</span>
                    <a href="#" className="hover:text-primary-foreground transition-colors">Careers</a>
                    <span>|</span>
                    <a href="#" className="hover:text-primary-foreground transition-colors">Privacy Policy</a>
                    <span>|</span>
                    <a href="#" className="hover:text-primary-foreground transition-colors">Terms & Conditions</a>
                    <span>|</span>
                    <span>© 2024 Premium Recruitment Agency. All rights reserved.</span>
                </div>
            </footer>
        </div>
    );
};

const GradientCard = ({ title, icon, text }: { title: string; icon: React.ReactNode; text: string }) => (
    <div className="rounded-xl p-6 text-primary-foreground" style={{ background: "var(--gradient-card-1)" }}>
        <div className="flex items-center justify-between mb-3">
            <h3 className="text-xl font-bold">{title}</h3>
            <div className="bg-primary-foreground/20 rounded-full p-2">{icon}</div>
        </div>
        <p className="text-sm leading-relaxed opacity-90">{text}</p>
    </div>
);

const MetricItem = ({ icon, value, label }: { icon: React.ReactNode; value: string; label: string }) => (
    <div className="flex flex-col items-center text-center gap-1">
        <div className="flex items-center gap-2">
            {icon}
            <span className="text-2xl md:text-3xl font-bold text-foreground">{value}</span>
        </div>
        <span className="text-sm text-muted-foreground">{label}</span>
    </div>
);

const OutlineCard = ({ title, icon, text }: { title: string; icon: React.ReactNode; text: string }) => (
    <div className="rounded-xl border-2 border-border p-6">
        <div className="flex items-center justify-between mb-3">
            <h3 className="text-xl font-bold text-foreground">{title}</h3>
            <div className="bg-secondary rounded-full p-2">{icon}</div>
        </div>
        <p className="text-sm leading-relaxed text-muted-foreground">{text}</p>
    </div>
);

export default Index;
