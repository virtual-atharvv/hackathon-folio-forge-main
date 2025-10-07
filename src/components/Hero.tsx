import { Button } from '@/components/ui/button';
import { ArrowRight, Zap } from 'lucide-react';
import infinityImage from '@/assets/infinity.png';
const Hero = () => {
  return <section id="home" className="min-h-screen flex items-center bg-gradient-hero relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img src={infinityImage} alt="ANANTA Team" className="w-full h-full object-cover opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/50 to-transparent" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-4xl">
          <div className="flex items-center gap-3 mb-6 animate-fade-in">
            <Zap className="h-8 w-8 text-primary animate-glow" />
            <span className="text-primary font-semibold text-lg">ANANTA</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-slide-up">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Innovation
            </span>
            <br />
            Through Code
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl animate-slide-up [animation-delay:0.2s]">
            We are a passionate team of developers, designers, and innovators who transform ideas into reality through hackathons. Our mission is to push boundaries, solve real-world problems, and inspire the next generation of tech leaders.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 animate-slide-up [animation-delay:0.4s]">
            <Button variant="hero" size="lg" onClick={() => document.getElementById('team')?.scrollIntoView({
            behavior: 'smooth'
          })}>
              Meet Our Team
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="glass" size="lg" onClick={() => document.getElementById('achievements')?.scrollIntoView({
            behavior: 'smooth'
          })}>
              View Achievements
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 animate-fade-in [animation-delay:0.6s]">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">8+</div>
              <div className="text-sm text-muted-foreground">Hackathons</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent">5</div>
              <div className="text-sm text-muted-foreground">Awards Won</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">5</div>
              <div className="text-sm text-muted-foreground">Team Members</div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 right-20 w-32 h-32 bg-primary/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 left-20 w-48 h-48 bg-accent/10 rounded-full blur-3xl animate-pulse [animation-delay:2s]" />
    </section>;
};
export default Hero;