"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { ArrowRight, Clock, Shield } from "lucide-react";

const HeroQuoteForm = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    postcode: "",
    propertyAge: "",
    thatchType: "",
    hasFireOrWoodburner: "",
  });

  const updateFormData = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const isValid = formData.postcode && formData.propertyAge && formData.thatchType && formData.hasFireOrWoodburner;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push("/quote");
  };

  return (
    <div className="bg-card rounded-2xl p-6 md:p-8 shadow-2xl border border-border">
      <div className="text-center mb-6">
        <h3 className="font-serif text-xl md:text-2xl font-bold text-foreground mb-2">
          Get a Quick Quote
        </h3>
        <p className="text-muted-foreground text-sm">
          Indicative pricing in under 2 minutes
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Postcode */}
        <div>
          <Label htmlFor="hero-postcode" className="text-foreground font-medium text-sm">
            Property Postcode
          </Label>
          <Input
            id="hero-postcode"
            placeholder="e.g., GL1 2AB"
            value={formData.postcode}
            onChange={(e) => updateFormData("postcode", e.target.value.toUpperCase())}
            className="mt-1.5"
          />
        </div>

        {/* Property Age */}
        <div>
          <Label className="text-foreground font-medium text-sm">Property Age</Label>
          <RadioGroup
            value={formData.propertyAge}
            onValueChange={(value) => updateFormData("propertyAge", value)}
            className="grid grid-cols-2 gap-2 mt-1.5"
          >
            {[
              { value: "pre-1900", label: "Pre-1900" },
              { value: "1900-1950", label: "1900-1950" },
              { value: "1950-2000", label: "1950-2000" },
              { value: "post-2000", label: "Post-2000" },
            ].map((option) => (
              <div key={option.value}>
                <RadioGroupItem value={option.value} id={`hero-${option.value}`} className="peer sr-only" />
                <Label
                  htmlFor={`hero-${option.value}`}
                  className="flex items-center justify-center p-2.5 text-xs border rounded-lg cursor-pointer peer-data-[state=checked]:border-foreground peer-data-[state=checked]:bg-foreground peer-data-[state=checked]:text-background hover:bg-muted transition-colors"
                >
                  {option.label}
                </Label>
              </div>
            ))}
          </RadioGroup>
        </div>

        {/* Thatch Type */}
        <div>
          <Label className="text-foreground font-medium text-sm">Thatch Type</Label>
          <RadioGroup
            value={formData.thatchType}
            onValueChange={(value) => updateFormData("thatchType", value)}
            className="grid grid-cols-3 gap-2 mt-1.5"
          >
            {[
              { value: "water-reed", label: "Water Reed" },
              { value: "wheat-reed", label: "Wheat Reed" },
              { value: "long-straw", label: "Long Straw" },
            ].map((option) => (
              <div key={option.value}>
                <RadioGroupItem value={option.value} id={`hero-thatch-${option.value}`} className="peer sr-only" />
                <Label
                  htmlFor={`hero-thatch-${option.value}`}
                  className="flex items-center justify-center p-2.5 text-xs border rounded-lg cursor-pointer peer-data-[state=checked]:border-foreground peer-data-[state=checked]:bg-foreground peer-data-[state=checked]:text-background hover:bg-muted transition-colors text-center"
                >
                  {option.label}
                </Label>
              </div>
            ))}
          </RadioGroup>
        </div>

        {/* Fire/Woodburner */}
        <div>
          <Label className="text-foreground font-medium text-sm">Open fire or woodburner?</Label>
          <RadioGroup
            value={formData.hasFireOrWoodburner}
            onValueChange={(value) => updateFormData("hasFireOrWoodburner", value)}
            className="grid grid-cols-2 gap-2 mt-1.5"
          >
            <div>
              <RadioGroupItem value="yes" id="hero-fire-yes" className="peer sr-only" />
              <Label
                htmlFor="hero-fire-yes"
                className="flex items-center justify-center p-2.5 text-xs border rounded-lg cursor-pointer peer-data-[state=checked]:border-foreground peer-data-[state=checked]:bg-foreground peer-data-[state=checked]:text-background hover:bg-muted transition-colors"
              >
                Yes
              </Label>
            </div>
            <div>
              <RadioGroupItem value="no" id="hero-fire-no" className="peer sr-only" />
              <Label
                htmlFor="hero-fire-no"
                className="flex items-center justify-center p-2.5 text-xs border rounded-lg cursor-pointer peer-data-[state=checked]:border-foreground peer-data-[state=checked]:bg-foreground peer-data-[state=checked]:text-background hover:bg-muted transition-colors"
              >
                No
              </Label>
            </div>
          </RadioGroup>
        </div>

        {/* Submit Button */}
        <Button
          type="submit"
          disabled={!isValid}
          className="w-full bg-foreground hover:bg-foreground/90 text-background font-semibold py-5 mt-2"
        >
          Get My Quote
          <ArrowRight className="w-4 h-4 ml-2" />
        </Button>
      </form>

      {/* Trust Indicators */}
      <div className="flex items-center justify-center gap-4 mt-4 pt-4 border-t border-border text-xs text-muted-foreground">
        <div className="flex items-center gap-1">
          <Clock className="w-3 h-3" />
          <span>2 min</span>
        </div>
        <div className="flex items-center gap-1">
          <Shield className="w-3 h-3" />
          <span>No obligation</span>
        </div>
      </div>
    </div>
  );
};

export default HeroQuoteForm;