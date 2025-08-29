import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Heart, Sparkles, Users, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-romantic.jpg";

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-soft">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-dreamy opacity-30"></div>
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left animate-fade-in-up">
              <div className="inline-flex items-center gap-2 bg-secondary/50 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
                <Heart className="w-4 h-4 text-primary animate-heart-beat" />
                <span className="text-sm font-medium text-secondary-foreground">Find Your Perfect Match</span>
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-bold mb-6 bg-gradient-romantic bg-clip-text text-transparent leading-tight">
                Matchify
              </h1>
              
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Discover your romantic compatibility through the ancient wisdom of zodiac signs. 
                Find out if the stars align for your perfect love story.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button asChild variant="romantic" size="xl" className="animate-glow-pulse">
                  <Link to="/input">
                    <Heart className="w-5 h-5" />
                    Find My Match
                  </Link>
                </Button>
                
                <Button asChild variant="dreamy" size="xl">
                  <Link to="/history">
                    <Clock className="w-5 h-5" />
                    View History
                  </Link>
                </Button>
              </div>
            </div>
            
            <div className="relative animate-float">
              <div className="absolute inset-0 bg-gradient-romantic opacity-20 rounded-3xl blur-2xl"></div>
              <img 
                src={heroImage} 
                alt="Romantic couple silhouette under dreamy sunset"
                className="relative z-10 rounded-3xl shadow-romantic w-full max-w-lg mx-auto"
              />
              <div className="absolute -top-4 -right-4 bg-accent text-accent-foreground p-3 rounded-full shadow-soft animate-heart-beat">
                <Sparkles className="w-6 h-6" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-foreground">
              How Matchify Works
            </h2>
            <p className="text-lg text-muted-foreground">
              Simple steps to discover your romantic destiny
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 text-center hover:shadow-soft transition-all duration-300 hover:-translate-y-2 bg-card/50 backdrop-blur-sm border-border/50">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-romantic rounded-full mb-6 animate-float">
                <Users className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-card-foreground">Enter Details</h3>
              <p className="text-muted-foreground">
                Add both names and birthdates to calculate your unique zodiac compatibility
              </p>
            </Card>
            
            <Card className="p-8 text-center hover:shadow-soft transition-all duration-300 hover:-translate-y-2 bg-card/50 backdrop-blur-sm border-border/50 md:mt-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-sunset rounded-full mb-6 animate-float" style={{ animationDelay: '1s' }}>
                <Sparkles className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-card-foreground">Magic Happens</h3>
              <p className="text-muted-foreground">
                Our algorithm analyzes zodiac signs and generates your compatibility percentage
              </p>
            </Card>
            
            <Card className="p-8 text-center hover:shadow-soft transition-all duration-300 hover:-translate-y-2 bg-card/50 backdrop-blur-sm border-border/50">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-dreamy rounded-full mb-6 animate-float" style={{ animationDelay: '2s' }}>
                <Heart className="w-8 h-8 text-accent-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-card-foreground">Get Results</h3>
              <p className="text-muted-foreground">
                Receive your compatibility score with a personalized romantic message
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-romantic">
        <div className="container mx-auto max-w-2xl text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-primary-foreground">
            Ready to Find Your Soulmate?
          </h2>
          <p className="text-lg text-primary-foreground/90 mb-8">
            Join thousands of couples who discovered their cosmic connection through Matchify
          </p>
          <Button asChild variant="heart" size="xl">
            <Link to="/input">
              <Heart className="w-6 h-6" />
              Start Your Love Journey
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;