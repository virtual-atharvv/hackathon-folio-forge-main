import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Award, Linkedin, Star, Quote } from 'lucide-react';
import sameerPhoto from '@/assets/sameer-sir.jpg';

const Mentorship = () => {
  return (
    <section id="mentorship" className="py-24 bg-gradient-to-b from-background to-secondary/20 relative overflow-hidden">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/10 to-primary/5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(var(--primary-rgb),0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(var(--accent-rgb),0.08),transparent_50%)]"></div>
      </div>
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
            <h2 className="text-5xl md:text-6xl font-bold font-sans tracking-tight">
              Our <span className="text-gradient-special">Mentor & Guide</span>
            </h2>
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
          </div>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed font-medium">
            Under the wise guidance of our respected mentor, we continue to grow, learn, 
            and push the boundaries of innovation in technology and beyond.
          </p>
        </div>

        {/* Mentor Profile - Enhanced */}
        <div className="max-w-5xl mx-auto mb-16">
          <Card className="glass-card-premium border-2 border-primary/20 shadow-glow-primary backdrop-blur-xl animate-scale-in">
            <CardContent className="p-12 lg:p-16 bg-card/30 backdrop-blur-sm">
              <div className="flex flex-col lg:flex-row items-center gap-12">
                {/* Enhanced Mentor Image */}
                <div className="w-40 h-40 lg:w-48 lg:h-48 rounded-full bg-gradient-to-br from-primary via-accent to-primary p-1 shadow-glow-primary flex-shrink-0">
                  <div className="w-full h-full rounded-full overflow-hidden bg-card">
                    <img 
                      src={sameerPhoto} 
                      alt="Mr. Sameer Awasthi" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Enhanced Mentor Info */}
                <div className="flex-1 text-center lg:text-left">
                  <div className="mb-6">
                    <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full px-6 py-3 mb-6">
                      <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
                      <Badge variant="secondary" className="text-lg font-bold text-primary border-0">
                        Head of Department
                      </Badge>
                      <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                    </div>
                    <h3 className="text-4xl lg:text-5xl font-bold text-foreground mb-3 font-sans tracking-tight">
                      Mr. Sameer Awasthi Sir
                    </h3>
                    <p className="text-2xl text-primary font-bold mb-6">
                      Professor & HOD - Our Guiding Light
                    </p>
                  </div>

                  <div className="space-y-6 mb-8">
                    <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-6 border border-primary/20">
                      <p className="text-lg text-muted-foreground leading-relaxed font-bold text-2xl lg:text-4xl mb-6 tracking-tight">
                        An accomplished educator and visionary leader who has been instrumental in shaping 
                        our technical foundation, fostering innovation, and guiding our journey towards excellence 
                        in the ever-evolving world of technology.
                      </p>
                    </div>
                    <blockquote className="text-xl lg:text-2xl text-muted-foreground italic leading-relaxed font-medium">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-1 h-8 bg-gradient-to-b from-primary to-accent rounded-full text-white bg-dark"></div>
                        <span>"His wisdom and mentorship have been the cornerstone of our growth and success."</span>
                      </div>
                    </blockquote>
                  </div>

                  <Button
                    variant="glow"
                    size="lg"
                    className="text-lg px-8 py-4"
                    onClick={() => window.open('#', '_blank')}
                  >
                    <Linkedin className="h-5 w-5 mr-3" />
                    Connect with Our Mentor
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Mentorship Impact - Enhanced */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16">
          <Card className="glass-card border-primary/20 hover:shadow-glow-primary transition-all duration-500 animate-fade-in">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-6">
                <Star className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-xl font-bold mb-4 text-primary">Technical Excellence</h4>
              <p className="text-muted-foreground leading-relaxed">
                Providing deep technical insights and best practices that elevate our solutions 
                to industry standards and beyond.
              </p>
            </CardContent>
          </Card>

          <Card className="glass-card border-accent/20 hover:shadow-glow-accent transition-all duration-500 animate-fade-in [animation-delay:0.1s]">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-accent to-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-xl font-bold mb-4 text-accent">Strategic Thinking</h4>
              <p className="text-muted-foreground leading-relaxed">
                Guiding our team to think beyond immediate solutions and consider long-term 
                impact and scalability.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Enhanced Testimonial */}
        <div className="max-w-4xl mx-auto mb-16">
          <Card className="glass-card-premium border border-primary/30 animate-scale-in [animation-delay:0.2s]">
            <CardContent className="p-8 lg:p-12 text-center bg-card/20 backdrop-blur-sm">
              <Quote className="h-12 w-12 text-accent mx-auto mb-6 opacity-80" />
              <blockquote className="text-xl lg:text-2xl italic text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed font-medium">
                "Under Mr. Awasthi's mentorship, we've learned that true innovation comes from 
                understanding both the technical possibilities and the human needs. His guidance 
                has transformed us from individual contributors to a cohesive team of problem-solvers."
              </blockquote>
              <div className="text-lg text-primary font-bold">- Team ANANTA</div>
            </CardContent>
          </Card>
        </div>

        {/* Enhanced Mentorship Values */}
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold mb-4 font-sans tracking-tight">
              <span className="text-gradient-special">Values We've Learned</span>
            </h3>
            <p className="text-lg text-muted-foreground font-medium">
              The wisdom and principles that guide our journey to excellence
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="glass-card border-primary/20 hover:shadow-glow-primary transition-all duration-500 animate-fade-in">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-white">01</span>
                </div>
                <h4 className="text-xl font-bold mb-4 text-primary">Innovation Mindset</h4>
                <p className="text-muted-foreground leading-relaxed">
                  Always question the status quo and look for better solutions that push the boundaries of possibility.
                </p>
              </CardContent>
            </Card>
            
            <Card className="glass-card border-accent/20 hover:shadow-glow-accent transition-all duration-500 animate-fade-in [animation-delay:0.1s]">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-accent to-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-white">02</span>
                </div>
                <h4 className="text-xl font-bold mb-4 text-accent">Collaborative Excellence</h4>
                <p className="text-muted-foreground leading-relaxed">
                  Great solutions emerge from diverse perspectives working together towards a common vision.
                </p>
              </CardContent>
            </Card>
            
            <Card className="glass-card border-primary/20 hover:shadow-glow-primary transition-all duration-500 animate-fade-in [animation-delay:0.2s]">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-white">03</span>
                </div>
                <h4 className="text-xl font-bold mb-4 text-primary">Continuous Learning</h4>
                <p className="text-muted-foreground leading-relaxed">
                  Stay curious and embrace new technologies, methodologies, and challenges with enthusiasm.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mentorship;
