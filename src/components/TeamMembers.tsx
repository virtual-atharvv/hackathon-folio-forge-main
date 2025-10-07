import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, Linkedin } from 'lucide-react';
import atharvPhoto from '@/assets/atharv.jpg';
import varunPhoto from '@/assets/varun.jpg';
import ayushPhoto from '@/assets/ayush.jpg';
import kanakPhoto from '@/assets/kanak.jpg';
import saraPhoto from '@/assets/sara.jpg';

const teamMembers = [
  {
    name: 'Atharv Maurya',
    role: 'GENERATIVE AI EXPERT',
    objective: 'Building innovative solutions through collaborative hackathon experiences',
    expertise: ['Rust','React', 'Node.js', 'JavaScript', 'Problem Solving'],
    specialties: 'Generative AI',
    linkedin: 'https://www.linkedin.com/in/atharv-maurya-2b6295325',
    github: 'https://github.com/atharvmaurya',
    avatar: atharvPhoto,
    email: '07anonymous.ananta@gmail.com',
    contact: '+919580786050',
  },
  {
    name: 'Varun Dev Mishra',
    role: 'GENERATIVE AI EXPERT',
    objective: 'Creating engaging user experiences that solve real-world challenges',
    expertise: ['React', 'CSS', 'JavaScript', 'UI/UX Design'],
    specialties: 'Generative AI',
    linkedin: 'https://www.linkedin.com/in/varun-dev-mishra-485497382',
    github: 'https://github.com/darkwing-09',
    avatar: varunPhoto,
    email: 'darkwing.ananta@gmail.com',
    contact: '+916386577703',
  },
  {
    name: 'Kanak Gihar',
    role: 'Fullstack Developer & UI/UX Designer',
    objective: 'Leveraging artificial intelligence to create impactful technological solutions',
    expertise: ['Python', 'Machine Learning', 'Data Analysis', 'AI'],
    specialties: 'Artificial Intelligence, Machine Learning',
    linkedin: 'https://www.linkedin.com/in/kanak-gihar-58057b378',
    github: 'https://github.com/kanakgihar',
    avatar: kanakPhoto,
    email: 'aetherai.ananta@gmail.com',
    contact: '+917897888048',
  },
  {
    name: 'Ayush Katiyar',
    role: 'Backend Developer & System Architect',
    objective: 'Building robust backend systems that power innovative applications',
    expertise: ['Python', 'Node.js', 'Database Design', 'API Development'],
    specialties: 'Backend Development, System Architecture',
    linkedin: 'https://www.linkedin.com/in/ayush-katiyar-b20ab9382',
    github: 'https://github.com/ayushkatiyar',
    avatar: ayushPhoto,
    email: 'joe18.ananta@gmail.com',
    contact: '+918756586861',
  },
  {
    name: 'Sara Khan',
    role: 'Cybersecurity Specialist & Developer',
    objective: 'Ensuring secure and reliable solutions through advanced security practices',
    expertise: ['Cybersecurity', 'Penetration Testing', 'Security Analysis', 'Development'],
    specialties: 'Cybersecurity, Security Engineering',
    linkedin: 'https://www.linkedin.com/in/sara-khan-46676b377',
    github: '#',
    avatar: saraPhoto,
    email: 'cipher.ananta@gmail.com',
    contact: '+918604606885',
  },
];

const TeamMembers = () => {
  return (
    <section id="team" className="py-24 bg-gradient-to-b from-secondary/20 to-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Meet Our <span className="bg-gradient-primary bg-clip-text text-transparent">ANANTA Team</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A diverse group of passionate technologists united by our love for innovation, 
            problem-solving, and pushing the boundaries of what's possible with ANANTA.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <Card 
              key={index}
              className="bg-card/50 backdrop-blur-sm border-border/50 hover:shadow-card transition-all duration-300 hover:scale-[1.02] animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                {/* Avatar */}
                <div className="w-16 h-16 mx-auto mb-4 rounded-full overflow-hidden ring-2 ring-primary/20">
                  {typeof member.avatar === 'string' && member.avatar.startsWith('/') || member.avatar.includes('http') ? (
                    <img 
                      src={member.avatar} 
                      alt={`${member.name} profile`}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="flex items-center justify-center w-full h-full bg-gradient-primary text-white font-bold text-xl">
                      {member.avatar}
                    </div>
                  )}
                </div>

                {/* Name & Role */}
                <div className="text-center mb-4">
                  <h3 className="text-xl font-bold text-foreground mb-1">
                    {member.name}
                  </h3>
                  <p className="text-primary font-medium mb-2">
                    {member.role}
                  </p>
                  <Badge variant="outline" className="text-xs">
                    {member.specialties}
                  </Badge>
                </div>

                {/* Objective */}
                <div className="mb-4">
                  <p className="text-sm text-muted-foreground italic">
                    "{member.objective}"
                  </p>
                </div>

                {/* Expertise */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-foreground mb-2">Expertise</h4>
                  <div className="flex flex-wrap gap-1">
                    {member.expertise.map((skill) => (
                      <Badge key={skill} variant="secondary" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Links */}
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1"
                    onClick={() => window.open(member.linkedin, '_blank')}
                  >
                    <Linkedin className="h-4 w-4 mr-1" />
                    LinkedIn
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1"
                    onClick={() => window.open(member.github, '_blank')}
                  >
                    <Github className="h-4 w-4 mr-1" />
                    GitHub
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Team Culture */}
        <div className="mt-20 text-center">
          <div className="bg-card/30 backdrop-blur-sm border border-border/50 rounded-xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Our Culture</h3>
            <p className="text-muted-foreground mb-6">
              We believe in collaborative innovation, continuous learning, and making technology 
              accessible to everyone. Our diverse backgrounds and complementary skills create 
              a dynamic environment where breakthrough ideas flourish.
            </p>
            <div className="grid grid-cols-3 gap-4 text-sm">
              <div>
                <div className="font-semibold text-primary">Innovation</div>
                <div className="text-muted-foreground">Pushing boundaries</div>
              </div>
              <div>
                <div className="font-semibold text-accent">Collaboration</div>
                <div className="text-muted-foreground">Stronger together</div>
              </div>
              <div>
                <div className="font-semibold text-primary">Impact</div>
                <div className="text-muted-foreground">Making a difference</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamMembers;
