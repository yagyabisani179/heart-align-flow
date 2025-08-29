import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input as UIInput } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Heart, ArrowLeft, Sparkles } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const InputPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    person1Name: "",
    person1Birthday: "",
    person2Name: "",
    person2Birthday: "",
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.person1Name || !formData.person1Birthday || !formData.person2Name || !formData.person2Birthday) {
      alert("Please fill in all fields");
      return;
    }

    // Navigate to results with form data
    navigate("/results", { state: formData });
  };

  const isFormValid = formData.person1Name && formData.person1Birthday && formData.person2Name && formData.person2Birthday;

  return (
    <div className="min-h-screen bg-gradient-soft py-8 px-4">
      <div className="container mx-auto max-w-2xl">
        {/* Header */}
        <div className="text-center mb-8 animate-fade-in-up">
          <Button asChild variant="ghost" className="mb-4">
            <Link to="/">
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>
          </Button>
          
          <div className="inline-flex items-center gap-2 bg-secondary/50 backdrop-blur-sm px-4 py-2 rounded-full mb-4">
            <Sparkles className="w-4 h-4 text-primary animate-heart-beat" />
            <span className="text-sm font-medium text-secondary-foreground">Step 1 of 2</span>
          </div>
          
          <h1 className="text-4xl font-bold mb-4 bg-gradient-romantic bg-clip-text text-transparent">
            Enter Your Details
          </h1>
          <p className="text-lg text-muted-foreground">
            Tell us about both people to discover your romantic compatibility
          </p>
        </div>

        {/* Form Card */}
        <Card className="shadow-romantic bg-card/80 backdrop-blur-sm border-border/50 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          <CardHeader className="text-center">
            <CardTitle className="flex items-center justify-center gap-2 text-2xl">
              <Heart className="w-6 h-6 text-primary animate-heart-beat" />
              Love Calculator
            </CardTitle>
            <CardDescription>
              Enter both names and birthdates to calculate zodiac compatibility
            </CardDescription>
          </CardHeader>
          
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Person 1 */}
              <div className="space-y-4 p-6 rounded-lg bg-gradient-dreamy/10 border border-border/30">
                <h3 className="text-lg font-semibold text-accent flex items-center gap-2">
                  <div className="w-8 h-8 bg-gradient-romantic rounded-full flex items-center justify-center text-primary-foreground text-sm font-bold">
                    1
                  </div>
                  First Person
                </h3>
                
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="person1Name" className="text-sm font-medium">Name</Label>
                    <UIInput
                      id="person1Name"
                      type="text"
                      placeholder="Enter first name"
                      value={formData.person1Name}
                      onChange={(e) => handleInputChange("person1Name", e.target.value)}
                      className="bg-background/50 border-border/50 focus:border-primary focus:ring-primary/20"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="person1Birthday" className="text-sm font-medium">Birthday</Label>
                    <UIInput
                      id="person1Birthday"
                      type="date"
                      value={formData.person1Birthday}
                      onChange={(e) => handleInputChange("person1Birthday", e.target.value)}
                      className="bg-background/50 border-border/50 focus:border-primary focus:ring-primary/20"
                    />
                  </div>
                </div>
              </div>

              {/* Person 2 */}
              <div className="space-y-4 p-6 rounded-lg bg-gradient-sunset/10 border border-border/30">
                <h3 className="text-lg font-semibold text-accent flex items-center gap-2">
                  <div className="w-8 h-8 bg-gradient-sunset rounded-full flex items-center justify-center text-primary-foreground text-sm font-bold">
                    2
                  </div>
                  Second Person
                </h3>
                
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="person2Name" className="text-sm font-medium">Name</Label>
                    <UIInput
                      id="person2Name"
                      type="text"
                      placeholder="Enter second name"
                      value={formData.person2Name}
                      onChange={(e) => handleInputChange("person2Name", e.target.value)}
                      className="bg-background/50 border-border/50 focus:border-primary focus:ring-primary/20"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="person2Birthday" className="text-sm font-medium">Birthday</Label>
                    <UIInput
                      id="person2Birthday"
                      type="date"
                      value={formData.person2Birthday}
                      onChange={(e) => handleInputChange("person2Birthday", e.target.value)}
                      className="bg-background/50 border-border/50 focus:border-primary focus:ring-primary/20"
                    />
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <div className="flex justify-center pt-4">
                <Button 
                  type="submit" 
                  variant="romantic" 
                  size="xl" 
                  disabled={!isFormValid}
                  className={`min-w-[200px] ${isFormValid ? 'animate-glow-pulse' : ''}`}
                >
                  <Heart className="w-5 h-5" />
                  Calculate Compatibility
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>

        {/* Fun Fact */}
        <div className="text-center mt-8 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <Card className="p-6 bg-secondary/30 backdrop-blur-sm border-border/30">
            <p className="text-sm text-muted-foreground">
              <Sparkles className="w-4 h-4 inline mr-2 text-primary" />
              Fun fact: Zodiac compatibility has been used for over 2,000 years to predict romantic harmony!
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default InputPage;