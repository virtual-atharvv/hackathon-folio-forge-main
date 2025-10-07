import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Trophy, Calendar, Users, Target } from 'lucide-react';

const achievements = [
  {
    year: '2025',
    event: 'TATA Hackathon',
    position: '1st Place',
    description: 'AI-powered healthcare solution that revolutionizes patient care through predictive analytics',
    tech: ['React', 'Python', 'TensorFlow', 'AWS'],
    participants: 500,
  },
  {
    year: '2025',
    event: 'Google Developer Challenge',
    position: '2nd Place',
    description: 'Sustainable energy management platform using IoT sensors and machine learning',
    tech: ['Flutter', 'Firebase', 'IoT', 'ML'],
    participants: 800,
  },
  {
    year: '2025',
    event: 'Microsoft Hackathon',
    position: '3rd Place',
    description: 'Educational platform connecting students with personalized learning experiences',
    tech: ['Next.js', 'Azure', 'GraphQL', 'AI'],
    participants: 1200,
  },
  {
    year: '2025',
    event: 'HackTheNorth',
    position: 'Best UI/UX',
    description: 'Social impact app for community volunteering and resource sharing',
    tech: ['React Native', 'Node.js', 'MongoDB', 'WebRTC'],
    participants: 600,
  },
  {
    year: '2025',
    event: 'DevFest Hackathon',
    position: 'People\'s Choice',
    description: 'Climate change visualization tool with real-time environmental data',
    tech: ['Vue.js', 'D3.js', 'Python', 'APIs'],
    participants: 400,
  },
];

const Achievements = () => {
  return (
    <section id="achievements" className="py-24 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our <span className="bg-gradient-primary bg-clip-text text-transparent">Journey</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From local hackathons to international competitions, we've consistently delivered 
            innovative solutions that make a real-world impact.
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gradient-to-b from-primary via-accent to-primary opacity-60" />

          <div className="space-y-12">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className={`flex items-center ${
                  index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                } animate-slide-up`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`flex-1 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                  <Card className="bg-card/50 backdrop-blur-sm border-border/50 hover:shadow-card transition-all duration-300 hover:scale-[1.02]">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <div className="flex items-center gap-2 mb-2">
                            <Trophy className="h-5 w-5 text-primary" />
                            <Badge variant="secondary">{achievement.position}</Badge>
                          </div>
                          <h3 className="text-xl font-bold text-foreground mb-1">
                            {achievement.event}
                          </h3>
                          <div className="flex items-center gap-4 text-sm text-muted-foreground">
                            <div className="flex items-center gap-1">
                              <Calendar className="h-4 w-4" />
                              {achievement.year}
                            </div>
                            <div className="flex items-center gap-1">
                              <Users className="h-4 w-4" />
                              {achievement.participants} participants
                            </div>
                          </div>
                        </div>
                        <Target className="h-8 w-8 text-accent opacity-60" />
                      </div>
                      
                      <p className="text-muted-foreground mb-4">
                        {achievement.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-2">
                        {achievement.tech.map((tech) => (
                          <Badge key={tech} variant="outline" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Timeline Node */}
                <div className="relative z-10">
                  <div className="w-4 h-4 bg-primary rounded-full border-4 border-background shadow-glow" />
                </div>

                <div className="flex-1" />
              </div>
            ))}
          </div>
        </div>

        {/* Summary Stats */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="animate-fade-in">
            <div className="text-3xl font-bold text-primary mb-2">15+</div>
            <div className="text-muted-foreground">Hackathons Participated</div>
          </div>
          <div className="animate-fade-in [animation-delay:0.1s]">
            <div className="text-3xl font-bold text-accent mb-2">8</div>
            <div className="text-muted-foreground">Awards Won</div>
          </div>
          <div className="animate-fade-in [animation-delay:0.2s]">
            <div className="text-3xl font-bold text-primary mb-2">3500+</div>
            <div className="text-muted-foreground">Total Competitors Faced</div>
          </div>
          <div className="animate-fade-in [animation-delay:0.3s]">
            <div className="text-3xl font-bold text-accent mb-2">100%</div>
            <div className="text-muted-foreground">Passion & Dedication</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
