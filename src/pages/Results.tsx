import { useEffect, useState } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Heart, ArrowLeft, RotateCcw, Sparkles, Star } from "lucide-react";

interface FormData {
  person1Name: string;
  person1Birthday: string;
  person2Name: string;
  person2Birthday: string;
}

const zodiacSigns = [
  "Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo",
  "Libra", "Scorpio", "Sagittarius", "Capricorn", "Aquarius", "Pisces"
];

const romanticLines = [
  "Your hearts beat in perfect harmony, like a cosmic symphony of love.",
  "The stars have aligned to bring two kindred spirits together.",
  "Your connection transcends earthly bonds, written in the stars above.",
  "Like twin flames, you ignite each other's deepest passions.",
  "Your love story is the kind that legends are made of.",
  "Together, you create a universe where only love exists.",
  "Your souls recognize each other from lifetimes of searching.",
  "In the vast cosmos, you found your perfect celestial match.",
  "Your love burns brighter than a thousand shooting stars.",
  "Destiny conspired to weave your hearts together in eternal bliss."
];

const getZodiacSign = (dateString: string) => {
  const date = new Date(dateString);
  const day = date.getDate();
  const month = date.getMonth() + 1;
  
  if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) return "Aries";
  if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) return "Taurus";
  if ((month === 5 && day >= 21) || (month === 6 && day <= 20)) return "Gemini";
  if ((month === 6 && day >= 21) || (month === 7 && day <= 22)) return "Cancer";
  if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) return "Leo";
  if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) return "Virgo";
  if ((month === 9 && day >= 23) || (month === 10 && day <= 22)) return "Libra";
  if ((month === 10 && day >= 23) || (month === 11 && day <= 21)) return "Scorpio";
  if ((month === 11 && day >= 22) || (month === 12 && day <= 21)) return "Sagittarius";
  if ((month === 12 && day >= 22) || (month === 1 && day <= 19)) return "Capricorn";
  if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) return "Aquarius";
  if ((month === 2 && day >= 19) || (month === 3 && day <= 20)) return "Pisces";
  
  return "Unknown";
};

const calculateCompatibility = (sign1: string, sign2: string) => {
  // Simplified compatibility matrix
  const compatibilityMatrix: { [key: string]: { [key: string]: number } } = {
    "Aries": { "Leo": 95, "Sagittarius": 90, "Gemini": 85, "Aquarius": 80, "Aries": 75 },
    "Taurus": { "Virgo": 95, "Capricorn": 90, "Cancer": 85, "Pisces": 80, "Taurus": 75 },
    "Gemini": { "Libra": 95, "Aquarius": 90, "Aries": 85, "Leo": 80, "Gemini": 75 },
    "Cancer": { "Scorpio": 95, "Pisces": 90, "Taurus": 85, "Virgo": 80, "Cancer": 75 },
    "Leo": { "Aries": 95, "Sagittarius": 90, "Gemini": 85, "Libra": 80, "Leo": 75 },
    "Virgo": { "Taurus": 95, "Capricorn": 90, "Cancer": 85, "Scorpio": 80, "Virgo": 75 },
    "Libra": { "Gemini": 95, "Aquarius": 90, "Leo": 85, "Sagittarius": 80, "Libra": 75 },
    "Scorpio": { "Cancer": 95, "Pisces": 90, "Virgo": 85, "Capricorn": 80, "Scorpio": 75 },
    "Sagittarius": { "Leo": 95, "Aries": 90, "Libra": 85, "Aquarius": 80, "Sagittarius": 75 },
    "Capricorn": { "Virgo": 95, "Taurus": 90, "Scorpio": 85, "Pisces": 80, "Capricorn": 75 },
    "Aquarius": { "Libra": 95, "Gemini": 90, "Sagittarius": 85, "Aries": 80, "Aquarius": 75 },
    "Pisces": { "Scorpio": 95, "Cancer": 90, "Capricorn": 85, "Taurus": 80, "Pisces": 75 }
  };

  const compatibility = compatibilityMatrix[sign1]?.[sign2] || 
                       compatibilityMatrix[sign2]?.[sign1] || 
                       Math.floor(Math.random() * 40) + 40; // Random between 40-80 for unmatched pairs
  
  return compatibility;
};

const Results = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const formData = location.state as FormData;
  
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [compatibility, setCompatibility] = useState(0);
  const [romanticLine, setRomanticLine] = useState("");
  const [zodiacInfo, setZodiacInfo] = useState({ sign1: "", sign2: "" });

  useEffect(() => {
    if (!formData) {
      navigate("/input");
      return;
    }

    // Simulate loading with progress
    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          setLoading(false);
          clearInterval(timer);
          return 100;
        }
        return prev + 5;
      });
    }, 100);

    // Calculate results
    const sign1 = getZodiacSign(formData.person1Birthday);
    const sign2 = getZodiacSign(formData.person2Birthday);
    const compatibilityScore = calculateCompatibility(sign1, sign2);
    const randomLine = romanticLines[Math.floor(Math.random() * romanticLines.length)];

    setZodiacInfo({ sign1, sign2 });
    setCompatibility(compatibilityScore);
    setRomanticLine(randomLine);

    return () => clearInterval(timer);
  }, [formData, navigate]);

  if (!formData) {
    return null;
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-soft flex items-center justify-center px-4">
        <Card className="w-full max-w-md p-8 text-center shadow-romantic bg-card/80 backdrop-blur-sm border-border/50">
          <div className="mb-6">
            <Heart className="w-16 h-16 text-primary animate-heart-beat mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-2 text-card-foreground">Calculating Love...</h2>
            <p className="text-muted-foreground">The stars are aligning for you</p>
          </div>
          
          <Progress value={progress} className="mb-4" />
          
          <div className="space-y-2 text-sm text-muted-foreground">
            <p>🔮 Reading zodiac signs...</p>
            <p>⭐ Analyzing cosmic compatibility...</p>
            <p>💫 Generating romantic insights...</p>
          </div>
        </Card>
      </div>
    );
  }

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
      <div className="container mx-auto max-w-3xl">
        {/* Header */}
        <div className="text-center mb-8 animate-fade-in-up">
          <Button asChild variant="ghost" className="mb-4">
            <Link to="/input">
              <ArrowLeft className="w-4 h-4" />
              Back to Input
            </Link>
          </Button>
          
          <div className="inline-flex items-center gap-2 bg-secondary/50 backdrop-blur-sm px-4 py-2 rounded-full mb-4">
            <Star className="w-4 h-4 text-primary animate-heart-beat" />
            <span className="text-sm font-medium text-secondary-foreground">Your Results</span>
          </div>
          
          <h1 className="text-4xl font-bold mb-4 bg-gradient-romantic bg-clip-text text-transparent">
            Cosmic Compatibility
          </h1>
        </div>

        {/* Results Cards */}
        <div className="space-y-6">
          {/* Main Compatibility Card */}
          <Card className="shadow-romantic bg-card/80 backdrop-blur-sm border-border/50 animate-fade-in-up">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl flex items-center justify-center gap-3 mb-4">
                <span className="text-2xl font-bold">{formData.person1Name}</span>
                <Heart className="w-8 h-8 text-primary animate-heart-beat" />
                <span className="text-2xl font-bold">{formData.person2Name}</span>
              </CardTitle>
              
              <div className="flex justify-center items-center gap-8 mb-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-romantic rounded-full flex items-center justify-center mb-2">
                    <Sparkles className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <p className="text-sm font-medium">{zodiacInfo.sign1}</p>
                </div>
                
                <div className="text-center">
                  <div className={`text-6xl font-bold ${getCompatibilityColor(compatibility)} animate-glow-pulse`}>
                    {compatibility}%
                  </div>
                  <p className="text-lg font-semibold text-primary mt-2">
                    {getCompatibilityMessage(compatibility)}
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-sunset rounded-full flex items-center justify-center mb-2">
                    <Star className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <p className="text-sm font-medium">{zodiacInfo.sign2}</p>
                </div>
              </div>
            </CardHeader>
            
            <CardContent className="text-center">
              <div className="bg-gradient-dreamy/20 rounded-lg p-6 mb-6">
                <h3 className="text-lg font-semibold mb-3 text-accent">Your Romantic Message:</h3>
                <p className="text-lg italic text-muted-foreground leading-relaxed">
                  "{romanticLine}"
                </p>
              </div>
              
              <Progress value={compatibility} className="mb-4 h-3" />
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                <Button asChild variant="romantic" size="lg">
                  <Link to="/input">
                    <RotateCcw className="w-5 h-5" />
                    Try Another Match
                  </Link>
                </Button>
                
                <Button asChild variant="dreamy" size="lg">
                  <Link to="/history">
                    <Heart className="w-5 h-5" />
                    Save to History
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Zodiac Details */}
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-6 bg-gradient-romantic/10 backdrop-blur-sm border-border/50 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <h3 className="text-xl font-semibold mb-3 text-card-foreground">{formData.person1Name} - {zodiacInfo.sign1}</h3>
              <p className="text-muted-foreground">
                Born on {new Date(formData.person1Birthday).toLocaleDateString('en-US', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}
              </p>
            </Card>
            
            <Card className="p-6 bg-gradient-sunset/10 backdrop-blur-sm border-border/50 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              <h3 className="text-xl font-semibold mb-3 text-card-foreground">{formData.person2Name} - {zodiacInfo.sign2}</h3>
              <p className="text-muted-foreground">
                Born on {new Date(formData.person2Birthday).toLocaleDateString('en-US', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}
              </p>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Results;