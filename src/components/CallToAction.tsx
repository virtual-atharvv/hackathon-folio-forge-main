import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Mail, Linkedin, Github, ExternalLink, Handshake, Lightbulb, Users } from 'lucide-react';

const CallToAction = () => {
  const opportunities = [
    {
      icon: <Handshake className="h-6 w-6" />,
      title: 'Collaboration',
      description: 'Partner with us on exciting hackathons and innovative projects',
    },
    {
      icon: <Lightbulb className="h-6 w-6" />,
      title: 'Mentorship',
      description: 'Share your expertise or learn from our experiences',
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: 'Sponsorship',
      description: 'Support our team and get exposure to top-tier talent',
    },
  ];

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-secondary/20 to-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Let's <span className="bg-gradient-primary bg-clip-text text-transparent">Connect</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto">
            Ready to collaborate, innovate, or simply chat about technology? 
            We're always excited to connect with like-minded individuals and organizations.
          </p>

          {/* Opportunities */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {opportunities.map((opportunity, index) => (
              <Card 
                key={index}
                className="bg-card/30 backdrop-blur-sm border-border/50 hover:shadow-card transition-all duration-300 hover:scale-[1.02] animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 text-center">
                  <div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 bg-primary/20 rounded-full text-primary">
                    {opportunity.icon}
                  </div>
                  <h3 className="text-lg font-bold mb-2">{opportunity.title}</h3>
                  <p className="text-sm text-muted-foreground">{opportunity.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Main CTA */}
          <Card className="bg-gradient-to-r from-primary/10 to-accent/10 backdrop-blur-sm border-border/50 animate-fade-in">
            <CardContent className="p-8">
              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-4">Ready to Build Something Amazing?</h3>
                <p className="text-muted-foreground mb-6">
                  Whether you're looking for passionate developers, innovative solutions, or 
                  want to support the next generation of tech leaders, we'd love to hear from you.
                </p>
                
                <div className="flex flex-wrap justify-center gap-4 mb-6">
                  <Badge variant="outline">Available for Hackathons</Badge>
                  <Badge variant="outline">Open to Collaborations</Badge>
                  <Badge variant="outline">Seeking Mentorship</Badge>
                  <Badge variant="outline">Welcoming Sponsors</Badge>
                </div>
              </div>

              {/* Contact Buttons */}
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button 
                  variant="hero" 
                  size="lg"
                  onClick={() => window.open('mailto:darkwing.ananta@gmail.com', '_blank')}
                >
                  <Mail className="h-5 w-5 mr-2" />
                  Get In Touch
                </Button>
                <Button 
                  variant="hero" 
                  size="lg"
                  onClick={() => window.open('https://in.linkedin.com/in/abhishek-dixit-a22b192a1?trk=people-guest_people_search-card', '_blank')}
                >
                  <Linkedin className="h-5 w-5 mr-2" />
                  Follow Us
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Social Links */}
          <div className="mt-12 flex justify-center gap-6 animate-fade-in [animation-delay:0.3s]">
            <Button
              variant="glass"
              size="icon"
              onClick={() => window.open('https://github.com/artificialatharv', '_blank')}
              className="hover:text-primary"
            >
              <Github className="h-5 w-5" />
            </Button>
            <Button
              variant="glass"
              size="icon"
              onClick={() => window.open('https://in.linkedin.com/in/abhishek-dixit-a22b192a1?trk=people-guest_people_search-card', '_blank')}
              className="hover:text-primary"
            >
              <Linkedin className="h-5 w-5" />
            </Button>
            <Button
              variant="glass"
              size="icon"
              onClick={() => window.open('mailto:darkwing.ananta@gmail.com', '_blank')}
              className="hover:text-primary"
            >
              <Mail className="h-5 w-5" />
            </Button>
          </div>

          {/* Footer */}
          <div className="mt-16 pt-8 border-t border-border/50 text-center">
            <p className="text-sm text-muted-foreground">
              © 2025 ANANTA. Hail And Hardy to innovate.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
