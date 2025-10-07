import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Achievements from '@/components/Achievements';
import TeamMembers from '@/components/TeamMembers';
import Backbone from '@/components/Backbone';
import Mentorship from '@/components/Mentorship';
import CallToAction from '@/components/CallToAction';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-hero text-foreground">
      <Navigation />
      <Hero />
      <section id="about" className="py-32 section-premium">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-5xl md:text-7xl font-bold mb-12 font-sans tracking-tight">
            Who We <span className="text-gradient">Are - ANANTA</span>
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-5xl mx-auto leading-relaxed font-medium mb-20">
            ANANTA represents the future of collaborative innovation. We are a passionate team 
            of developers, designers, and technologists who thrive in the fast-paced, creative 
            environment of hackathons.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="glass-card p-10 animate-fade-in interactive">
              <h3 className="text-2xl font-bold text-primary mb-6">Innovation</h3>
              <p className="text-muted-foreground leading-relaxed">We push boundaries and challenge conventional thinking to create breakthrough solutions.</p>
            </div>
            <div className="glass-card p-10 animate-fade-in [animation-delay:0.1s] interactive">
              <h3 className="text-2xl font-bold text-accent mb-6">Collaboration</h3>
              <p className="text-muted-foreground leading-relaxed">Together, we achieve more than the sum of our parts through seamless teamwork.</p>
            </div>
            <div className="glass-card p-10 animate-fade-in [animation-delay:0.2s] interactive">
              <h3 className="text-2xl font-bold text-primary mb-6">Impact</h3>
              <p className="text-muted-foreground leading-relaxed">Every solution we build aims to make a meaningful difference in the world.</p>
            </div>
          </div>
        </div>
      </section>
      <Achievements />
      <TeamMembers />
      <Backbone />
      <Mentorship />
      <CallToAction />
    </div>
  );
};

export default Index;