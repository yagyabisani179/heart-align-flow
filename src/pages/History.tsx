import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, ArrowLeft, Clock, Trash2, Star } from "lucide-react";
import { Link } from "react-router-dom";

// Mock data for demonstration - in real app this would come from database
const mockHistory = [
  {
    id: 1,
    person1Name: "Emma",
    person2Name: "James",
    compatibility: 92,
    zodiac1: "Pisces",
    zodiac2: "Scorpio",
    date: "2024-01-15",
    romanticLine: "Your souls recognize each other from lifetimes of searching."
  },
  {
    id: 2,
    person1Name: "Sarah",
    person2Name: "Michael",
    compatibility: 78,
    zodiac1: "Leo",
    zodiac2: "Aries",
    date: "2024-01-10",
    romanticLine: "Together, you create a universe where only love exists."
  },
  {
    id: 3,
    person1Name: "Lisa",
    person2Name: "David",
    compatibility: 65,
    zodiac1: "Gemini",
    zodiac2: "Virgo",
    date: "2024-01-05",
    romanticLine: "Your connection transcends earthly bonds, written in the stars above."
  }
];

const History = () => {
  const getCompatibilityColor = (score: number) => {
    if (score >= 85) return "text-green-600";
    if (score >= 70) return "text-primary";
    if (score >= 50) return "text-orange-500";
    return "text-red-500";
  };

  const getCompatibilityMessage = (score: number) => {
    if (score >= 85) return "Soulmates! ✨";
    if (score >= 70) return "Great Match! 💕";
    if (score >= 50) return "Good Chemistry! 💖";
    return "Work at it! 💪";
  };

  return (
    <div className="min-h-screen bg-gradient-soft py-8 px-4">
      <div className="container mx-auto max-w-4xl">
        {/* Header */}
        <div className="text-center mb-8 animate-fade-in-up">
          <Button asChild variant="ghost" className="mb-4">
            <Link to="/">
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>
          </Button>
          
          <div className="inline-flex items-center gap-2 bg-secondary/50 backdrop-blur-sm px-4 py-2 rounded-full mb-4">
            <Clock className="w-4 h-4 text-primary animate-heart-beat" />
            <span className="text-sm font-medium text-secondary-foreground">Your Love Journey</span>
          </div>
          
          <h1 className="text-4xl font-bold mb-4 bg-gradient-romantic bg-clip-text text-transparent">
            Compatibility History
          </h1>
          <p className="text-lg text-muted-foreground">
            All your past romantic connections and cosmic discoveries
          </p>
        </div>

        {/* History Cards */}
        {mockHistory.length > 0 ? (
          <div className="space-y-6">
            {mockHistory.map((entry, index) => (
              <Card 
                key={entry.id} 
                className="shadow-soft bg-card/80 backdrop-blur-sm border-border/50 hover:shadow-romantic transition-all duration-300 hover:-translate-y-1 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="flex items-center gap-3">
                      <span className="text-xl">{entry.person1Name}</span>
                      <Heart className="w-6 h-6 text-primary animate-heart-beat" />
                      <span className="text-xl">{entry.person2Name}</span>
                    </CardTitle>
                    
                    <div className="flex items-center gap-3">
                      <div className="text-center">
                        <div className={`text-2xl font-bold ${getCompatibilityColor(entry.compatibility)}`}>
                          {entry.compatibility}%
                        </div>
                        <p className="text-xs text-primary font-semibold">
                          {getCompatibilityMessage(entry.compatibility)}
                        </p>
                      </div>
                      
                      <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-destructive">
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <div className="grid md:grid-cols-3 gap-4 mb-4">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-gradient-romantic rounded-full flex items-center justify-center">
                        <Star className="w-4 h-4 text-primary-foreground" />
                      </div>
                      <div>
                        <p className="font-medium text-sm">{entry.person1Name}</p>
                        <p className="text-xs text-muted-foreground">{entry.zodiac1}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-gradient-sunset rounded-full flex items-center justify-center">
                        <Star className="w-4 h-4 text-primary-foreground" />
                      </div>
                      <div>
                        <p className="font-medium text-sm">{entry.person2Name}</p>
                        <p className="text-xs text-muted-foreground">{entry.zodiac2}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-muted-foreground" />
                      <p className="text-sm text-muted-foreground">
                        {new Date(entry.date).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'short',
                          day: 'numeric'
                        })}
                      </p>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-dreamy/20 rounded-lg p-4">
                    <p className="text-sm italic text-muted-foreground">
                      "{entry.romanticLine}"
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <Card className="text-center p-12 shadow-romantic bg-card/80 backdrop-blur-sm border-border/50 animate-fade-in-up">
            <div className="mb-6">
              <Heart className="w-16 h-16 text-muted-foreground mx-auto mb-4 animate-float" />
              <h2 className="text-2xl font-bold mb-2 text-card-foreground">No History Yet</h2>
              <p className="text-muted-foreground">
                Start your romantic journey by calculating your first compatibility match!
              </p>
            </div>
            
            <Button asChild variant="romantic" size="lg">
              <Link to="/input">
                <Heart className="w-5 h-5" />
                Find Your First Match
              </Link>
            </Button>
          </Card>
        )}

        {/* CTA Section */}
        <div className="text-center mt-12 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
          <Card className="p-8 bg-gradient-romantic text-primary-foreground shadow-romantic">
            <h2 className="text-2xl font-bold mb-4">
              Ready for Another Love Story?
            </h2>
            <p className="text-primary-foreground/90 mb-6">
              Discover new romantic possibilities with another compatibility check
            </p>
            <Button asChild variant="heart" size="lg">
              <Link to="/input">
                <Heart className="w-5 h-5" />
                Calculate New Match
              </Link>
            </Button>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default History;