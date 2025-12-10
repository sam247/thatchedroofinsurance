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
    heatSource: "",
    chimneySweptYearly: "",
  });

  const updateFormData = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const isValid = formData.postcode && formData.heatSource && formData.chimneySweptYearly;

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

        {/* Heat source */}
        <div>
          <Label className="text-foreground font-medium text-sm">Heating setup</Label>
          <RadioGroup
            value={formData.heatSource}
            onValueChange={(value) => updateFormData("heatSource", value)}
            className="grid grid-cols-3 gap-2 mt-1.5"
          >
            {[
              { value: "woodburner", label: "Woodburner" },
              { value: "open-fire", label: "Open fire" },
              { value: "neither", label: "Neither" },
            ].map((option) => (
              <div key={option.value}>
                <RadioGroupItem value={option.value} id={`hero-heat-${option.value}`} className="peer sr-only" />
                <Label
                  htmlFor={`hero-heat-${option.value}`}
                  className="flex items-center justify-center p-2.5 text-xs border rounded-lg cursor-pointer peer-data-[state=checked]:border-foreground peer-data-[state=checked]:bg-foreground peer-data-[state=checked]:text-background hover:bg-muted transition-colors text-center"
                >
                  {option.label}
                </Label>
              </div>
            ))}
          </RadioGroup>
        </div>

        {/* Chimney swept */}
        <div>
          <Label className="text-foreground font-medium text-sm">Is the chimney swept yearly?</Label>
          <RadioGroup
            value={formData.chimneySweptYearly}
            onValueChange={(value) => updateFormData("chimneySweptYearly", value)}
            className="grid grid-cols-2 gap-2 mt-1.5"
          >
            <div>
              <RadioGroupItem value="yes" id="hero-swept-yes" className="peer sr-only" />
              <Label
                htmlFor="hero-swept-yes"
                className="flex items-center justify-center p-2.5 text-xs border rounded-lg cursor-pointer peer-data-[state=checked]:border-foreground peer-data-[state=checked]:bg-foreground peer-data-[state=checked]:text-background hover:bg-muted transition-colors"
              >
                Yes
              </Label>
            </div>
            <div>
              <RadioGroupItem value="no" id="hero-swept-no" className="peer sr-only" />
              <Label
                htmlFor="hero-swept-no"
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