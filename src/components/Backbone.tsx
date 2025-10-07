import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import abhishekPhoto from '@/assets/abhishek.png';

import { Crown, Trophy, Linkedin, Sparkles, Heart } from 'lucide-react';
const Backbone = () => {
  return <section id="backbone" className="py-24 bg-gradient-to-b from-secondary/20 to-background relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/10 to-primary/5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(var(--primary-rgb),0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(var(--accent-rgb),0.08),transparent_50%)]"></div>
      </div>
      
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="text-center mb-20">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Crown className="h-8 w-8 text-accent animate-pulse" />
            <h2 className="text-5xl md:text-6xl font-bold font-sans tracking-tight">
              The <span className="text-gradient-special">Backbone</span> of Our Team
            </h2>
            <Crown className="h-8 w-8 text-accent animate-pulse" />
          </div>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed font-medium">
            Behind every successful team stands an extraordinary leader who inspires, guides, and elevates everyone around them.
          </p>
        </div>

        {/* Main Backbone Card */}
        <div className="max-w-5xl mx-auto mb-16">
          <Card className="glass-card-premium border-2 border-primary/20 shadow-glow-primary backdrop-blur-xl animate-scale-in">
            <CardContent className="p-12 bg-card/50 backdrop-blur-sm">
              <div className="text-center">
                {/* Leader Badge */}
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full px-6 py-3 mb-8">
                  <Sparkles className="h-5 w-5 text-accent" />
                  <Badge variant="secondary" className="text-lg font-bold text-primary border-0">
                    Leader of Leaders
                  </Badge>
                  <Sparkles className="h-5 w-5 text-accent" />
                </div>

                {/* Avatar Placeholder */}
                <div className="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-br from-primary via-accent to-primary p-1 shadow-glow-primary">
                  <div className="w-full h-full rounded-full bg-card flex items-center justify-center overflow-hidden">
                    <img src={abhishekPhoto} alt="Mr. Abhishek Dixit" className="w-full h-full object-cover" />
                  </div>
                </div>

                {/* Name & Title */}
                <h3 className="text-4xl md:text-5xl font-bold text-foreground mb-4 font-sans tracking-tight">
                  Abhishek Dixit Sir
                </h3>
                
                <div className="flex items-center justify-center gap-2 mb-6">
                  <Trophy className="h-6 w-6 text-accent" />
                  <p className="text-xl md:text-2xl text-primary font-bold">
                    The Backbone of Team ANANTA
                  </p>
                </div>

                {/* Achievements */}
                <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-6 mb-8 border border-primary/20">
                  <h4 className="text-lg font-bold text-foreground mb-3 flex items-center justify-center gap-2">
                    <Trophy className="h-5 w-5 text-accent" />
                    Achievements
                  </h4>
                  <p className="text-lg text-muted-foreground font-medium">
                    Winner @ IIT Kanpur, IIT Jodhpur, IIT Guwahati | Eye-Controlled Mouse Innovator
                  </p>
                </div>

                {/* Quote */}
                <blockquote className="text-xl md:text-2xl italic text-muted-foreground mb-8 leading-relaxed max-w-4xl mx-auto font-medium">
                  <Heart className="h-6 w-6 text-accent inline mr-2" />
                  "He is the Backbone of team who upsurge us in Studies, motivates in order to win as well as learn and grasp"
                </blockquote>

                {/* LinkedIn Button */}
                <Button variant="glow" size="lg" className="text-lg px-8 py-4" onClick={() => window.open('https://in.linkedin.com/in/abhishek-dixit-a22b192a1?trk=people-guest_people_search-card', '_blank')}>
                  <Linkedin className="h-5 w-5 mr-3" />
                  Connect with Our Backbone
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Impact Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <Card className="glass-card border-primary/20 hover:shadow-glow-primary transition-all duration-500 animate-fade-in">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-6">
                <Crown className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-xl font-bold mb-4 text-primary">Leadership Excellence</h4>
              <p className="text-muted-foreground leading-relaxed">
                Guiding the team with visionary leadership and unwavering dedication to excellence.
              </p>
            </CardContent>
          </Card>

          <Card className="glass-card border-accent/20 hover:shadow-glow-accent transition-all duration-500 animate-fade-in [animation-delay:0.1s]">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-accent to-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-xl font-bold mb-4 text-accent">Motivation & Support</h4>
              <p className="text-muted-foreground leading-relaxed">
                Inspiring and uplifting every team member to achieve their highest potential.
              </p>
            </CardContent>
          </Card>

          <Card className="glass-card border-primary/20 hover:shadow-glow-primary transition-all duration-500 animate-fade-in [animation-delay:0.2s]">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-6">
                <Sparkles className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-xl font-bold mb-4 text-primary">Innovation Driver</h4>
              <p className="text-muted-foreground leading-relaxed">
                Fostering a culture of continuous learning and groundbreaking innovation.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Call to Action Quote */}
        <div className="text-center mt-20">
          <div className="glass-card-premium p-8 max-w-4xl mx-auto border border-primary/30 animate-scale-in [animation-delay:0.3s]">
            <p className="text-2xl md:text-3xl font-bold text-gradient-special mb-4">"Quite unstoppable effort lead to loud undeniable results."</p>
            <p className="text-lg text-muted-foreground font-medium">
              The foundation upon which Team ANANTA builds its dreams and achievements
            </p>
          </div>
        </div>
      </div>
    </section>;
};
export default Backbone;
