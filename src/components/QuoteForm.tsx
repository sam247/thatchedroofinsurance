"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { ArrowRight, ArrowLeft, CheckCircle } from "lucide-react";

interface FormData {
  // Step 1: Property Details
  propertyAge: string;
  rebuildValue: string;
  postcode: string;
  propertyType: string;
  
  // Step 2: Thatch Details
  thatchType: string;
  thatchAge: string;
  thatchCondition: string;
  
  // Step 3: Chimney & Heating
  heatSource: string;
  chimneySweptYearly: string;
  chimneyLined: string;
  chimneySweepFrequency: string;
  
  // Step 4: Cover Requirements
  coverType: string;
  contentsValue: string;
  optionalExtras: string[];
  
  // Step 5: Contact Details
  name: string;
  email: string;
  phone: string;
  preferredContact: string;
}

interface QuoteFormProps {
  onQuoteComplete: (data: FormData, quote: number) => void;
}

const QuoteForm = ({ onQuoteComplete }: QuoteFormProps) => {
  const [step, setStep] = useState(1);
  const totalSteps = 7;
  
  const [formData, setFormData] = useState<FormData>({
    propertyAge: "",
    rebuildValue: "",
    postcode: "",
    propertyType: "detached",
    thatchType: "",
    thatchAge: "",
    thatchCondition: "good",
    heatSource: "",
    chimneySweptYearly: "",
    chimneyLined: "yes",
    chimneySweepFrequency: "twice-yearly",
    coverType: "buildings-contents",
    contentsValue: "",
    optionalExtras: [],
    name: "",
    email: "",
    phone: "",
    preferredContact: "email",
  });

  const updateFormData = (field: keyof FormData, value: string | string[]) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const toggleExtra = (extra: string) => {
    setFormData(prev => ({
      ...prev,
      optionalExtras: prev.optionalExtras.includes(extra)
        ? prev.optionalExtras.filter(e => e !== extra)
        : [...prev.optionalExtras, extra]
    }));
  };

  const calculateQuote = (): number => {
    let basePrice = 800;
    
    // Rebuild value factor
    const rebuildValue = parseInt(formData.rebuildValue) || 300000;
    basePrice += (rebuildValue / 100000) * 150;
    
    // Property age factor
    if (formData.propertyAge === "pre-1700") basePrice += 200;
    else if (formData.propertyAge === "1700-1900") basePrice += 150;
    else if (formData.propertyAge === "1900-1950") basePrice += 100;
    
    // Thatch type factor
    if (formData.thatchType === "long-straw") basePrice += 150;
    else if (formData.thatchType === "combed-wheat") basePrice += 100;
    
    // Heating factors
    if (formData.heatSource === "open-fire") basePrice += 120;
    if (formData.heatSource === "woodburner") basePrice += 100;
    if (formData.chimneySweptYearly === "no") basePrice += 80;
    
    // Cover type
    if (formData.coverType === "buildings-only") basePrice *= 0.6;
    else if (formData.coverType === "contents-only") basePrice *= 0.4;
    
    // Contents value
    const contentsValue = parseInt(formData.contentsValue) || 50000;
    basePrice += (contentsValue / 25000) * 50;
    
    // Optional extras
    basePrice += formData.optionalExtras.length * 35;
    
    return Math.round(basePrice);
  };

  const handleNext = () => {
    if (step < totalSteps) {
      setStep(step + 1);
    } else {
      const quote = calculateQuote();
      onQuoteComplete(formData, quote);
    }
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  const isStepValid = (): boolean => {
    switch (step) {
      case 1:
        return !!formData.propertyAge && !!formData.rebuildValue && !!formData.postcode;
      case 2:
        return !!formData.propertyType;
      case 3:
        return !!formData.thatchType && !!formData.thatchAge;
      case 4:
        return !!formData.thatchCondition;
      case 5:
        return !!formData.heatSource && !!formData.chimneySweptYearly;
      case 6:
        return true; // All have defaults
      case 7:
        return !!formData.name && !!formData.email && !!formData.phone;
      default:
        return false;
    }
  };

  const propertyAgeOptions = [
    { value: "pre-1700", label: "Pre-1700" },
    { value: "1700-1900", label: "1700-1900" },
    { value: "1900-1950", label: "1900-1950" },
    { value: "post-1950", label: "Post-1950" },
  ];

  const thatchTypes = [
    { value: "water-reed", label: "Water Reed", description: "Most durable, 25-40 year lifespan" },
    { value: "combed-wheat", label: "Combed Wheat Reed", description: "Good durability, 20-30 years" },
    { value: "long-straw", label: "Long Straw", description: "Traditional look, 15-25 years" },
  ];

  const optionalExtras = [
    { value: "home-emergency", label: "Home Emergency Cover" },
    { value: "legal-expenses", label: "Legal Expenses Protection" },
    { value: "personal-accident", label: "Personal Accident Cover" },
    { value: "accidental-damage", label: "Accidental Damage" },
    { value: "garden-cover", label: "Garden Cover Enhancement" },
    { value: "cycle-cover", label: "Pedal Cycle Cover" },
  ];

  return (
    <div className="quote-step">
      {/* Progress Bar */}
      <div className="mb-6">
        <div className="flex justify-between mb-2">
          {[1, 2, 3, 4, 5, 6, 7].map((s) => (
            <div
              key={s}
              className={`flex items-center justify-center w-10 h-10 rounded-full text-sm font-semibold transition-colors ${
                s < step
                  ? "bg-success text-success-foreground"
                  : s === step
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground"
              }`}
            >
              {s < step ? <CheckCircle className="w-5 h-5" /> : s}
            </div>
          ))}
        </div>
        <div className="h-2 bg-muted rounded-full overflow-hidden">
          <div
            className="h-full bg-primary transition-all duration-300"
            style={{ width: `${((step - 1) / (totalSteps - 1)) * 100}%` }}
          />
        </div>
        <p className="text-xs text-muted-foreground text-center mt-1">Step {step} of {totalSteps}</p>
      </div>

      {/* Step 1: Property Basics */}
      {step === 1 && (
        <div className="space-y-4 animate-fade-in">
          <div>
            <h3 className="font-serif text-xl font-semibold text-foreground mb-1">Property Basics</h3>
            <p className="text-sm text-muted-foreground">Tell us about your thatched property.</p>
          </div>

          <div className="space-y-3">
            <div>
              <Label className="text-foreground font-medium text-sm">Property Age</Label>
              <RadioGroup
                value={formData.propertyAge}
                onValueChange={(value) => updateFormData("propertyAge", value)}
                className="grid grid-cols-2 gap-2 mt-1.5"
              >
                {propertyAgeOptions.map((option) => (
                  <div key={option.value}>
                    <RadioGroupItem
                      value={option.value}
                      id={option.value}
                      className="peer sr-only"
                    />
                    <Label
                      htmlFor={option.value}
                      className="flex items-center justify-center p-3 border-2 rounded-lg cursor-pointer text-sm peer-data-[state=checked]:border-primary peer-data-[state=checked]:bg-primary/5 hover:bg-muted transition-colors"
                    >
                      {option.label}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </div>

            <div>
              <Label htmlFor="rebuildValue" className="text-foreground font-medium text-sm">
                Estimated Rebuild Value (£)
              </Label>
              <Input
                id="rebuildValue"
                type="number"
                placeholder="e.g., 450000"
                value={formData.rebuildValue}
                onChange={(e) => updateFormData("rebuildValue", e.target.value)}
                className="mt-1.5 h-10"
              />
              <p className="text-xs text-muted-foreground mt-1">
                This is the cost to rebuild your property, not its market value.
              </p>
            </div>

            <div>
              <Label htmlFor="postcode" className="text-foreground font-medium text-sm">
                Property Postcode
              </Label>
              <Input
                id="postcode"
                placeholder="e.g., GL1 2AB"
                value={formData.postcode}
                onChange={(e) => updateFormData("postcode", e.target.value.toUpperCase())}
                className="mt-1.5 h-10"
              />
            </div>
          </div>
        </div>
      )}

      {/* Step 2: Property Type */}
      {step === 2 && (
        <div className="space-y-4 animate-fade-in">
          <div>
            <h3 className="font-serif text-xl font-semibold text-foreground mb-1">Property Type</h3>
            <p className="text-sm text-muted-foreground">What type of property is it?</p>
          </div>

          <div className="space-y-3">
            <div>
              <Label className="text-foreground font-medium text-sm">Property Type</Label>
              <RadioGroup
                value={formData.propertyType}
                onValueChange={(value) => updateFormData("propertyType", value)}
                className="flex gap-4 mt-1.5"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="detached" id="detached" />
                  <Label htmlFor="detached" className="text-sm">Detached</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="semi-detached" id="semi-detached" />
                  <Label htmlFor="semi-detached" className="text-sm">Semi-detached</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="terraced" id="terraced" />
                  <Label htmlFor="terraced" className="text-sm">Terraced</Label>
                </div>
              </RadioGroup>
            </div>
          </div>
        </div>
      )}

      {/* Step 3: Thatch Details */}
      {step === 3 && (
        <div className="space-y-4 animate-fade-in">
          <div>
            <h3 className="font-serif text-xl font-semibold text-foreground mb-1">Thatch Details</h3>
            <p className="text-sm text-muted-foreground">Information about your thatched roof.</p>
          </div>

          <div className="space-y-3">
            <div>
              <Label className="text-foreground font-medium text-sm">Type of Thatch</Label>
              <RadioGroup
                value={formData.thatchType}
                onValueChange={(value) => updateFormData("thatchType", value)}
                className="space-y-2 mt-1.5"
              >
                {thatchTypes.map((type) => (
                  <div key={type.value}>
                    <RadioGroupItem
                      value={type.value}
                      id={type.value}
                      className="peer sr-only"
                    />
                    <Label
                      htmlFor={type.value}
                      className="flex flex-col p-3 border-2 rounded-lg cursor-pointer peer-data-[state=checked]:border-primary peer-data-[state=checked]:bg-primary/5 hover:bg-muted transition-colors"
                    >
                      <span className="font-semibold text-sm">{type.label}</span>
                      <span className="text-xs text-muted-foreground">{type.description}</span>
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </div>

            <div>
              <Label htmlFor="thatchAge" className="text-foreground font-medium text-sm">
                Approximate Age of Current Thatch (years)
              </Label>
              <Input
                id="thatchAge"
                type="number"
                placeholder="e.g., 10"
                value={formData.thatchAge}
                onChange={(e) => updateFormData("thatchAge", e.target.value)}
                className="mt-1.5 h-10"
              />
            </div>
          </div>
        </div>
      )}

      {/* Step 4: Thatch Condition */}
      {step === 4 && (
        <div className="space-y-4 animate-fade-in">
          <div>
            <h3 className="font-serif text-xl font-semibold text-foreground mb-1">Thatch Condition</h3>
            <p className="text-sm text-muted-foreground">How would you describe the condition of your thatch?</p>
          </div>

          <div className="space-y-3">
            <div>
              <Label className="text-foreground font-medium text-sm">Condition of Thatch</Label>
              <RadioGroup
                value={formData.thatchCondition}
                onValueChange={(value) => updateFormData("thatchCondition", value)}
                className="flex flex-wrap gap-3 mt-1.5"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="excellent" id="excellent" />
                  <Label htmlFor="excellent" className="text-sm">Excellent</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="good" id="good" />
                  <Label htmlFor="good" className="text-sm">Good</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="fair" id="fair" />
                  <Label htmlFor="fair" className="text-sm">Fair</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="needs-work" id="needs-work" />
                  <Label htmlFor="needs-work" className="text-sm">Needs Work</Label>
                </div>
              </RadioGroup>
            </div>
          </div>
        </div>
      )}

      {/* Step 5: Heating Setup */}
      {step === 5 && (
        <div className="space-y-4 animate-fade-in">
          <div>
            <h3 className="font-serif text-xl font-semibold text-foreground mb-1">Heating Setup</h3>
            <p className="text-sm text-muted-foreground">Important fire safety information.</p>
          </div>

          <div className="space-y-3">
            <div>
              <Label className="text-foreground font-medium text-sm">Heating setup</Label>
              <RadioGroup
                value={formData.heatSource}
                onValueChange={(value) => updateFormData("heatSource", value)}
                className="flex flex-wrap gap-3 mt-1.5"
              >
                {[
                  { value: "woodburner", label: "Woodburner" },
                  { value: "open-fire", label: "Open fire" },
                  { value: "neither", label: "Neither" },
                ].map((option) => (
                  <div key={option.value} className="flex items-center space-x-2">
                    <RadioGroupItem value={option.value} id={`heat-${option.value}`} />
                    <Label htmlFor={`heat-${option.value}`} className="text-sm">{option.label}</Label>
                  </div>
                ))}
              </RadioGroup>
            </div>

            <div>
              <Label className="text-foreground font-medium text-sm">Is the chimney swept yearly?</Label>
              <RadioGroup
                value={formData.chimneySweptYearly}
                onValueChange={(value) => updateFormData("chimneySweptYearly", value)}
                className="flex gap-4 mt-1.5"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="yes" id="swept-yes" />
                  <Label htmlFor="swept-yes" className="text-sm">Yes</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="no" id="swept-no" />
                  <Label htmlFor="swept-no" className="text-sm">No</Label>
                </div>
              </RadioGroup>
            </div>

            {formData.heatSource !== "neither" && formData.heatSource !== "" && (
              <>
                <div>
                  <Label className="text-foreground font-medium text-sm">Is your chimney lined?</Label>
                  <RadioGroup
                    value={formData.chimneyLined}
                    onValueChange={(value) => updateFormData("chimneyLined", value)}
                    className="flex gap-4 mt-1.5"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="yes" id="lined-yes" />
                      <Label htmlFor="lined-yes" className="text-sm">Yes</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="no" id="lined-no" />
                      <Label htmlFor="lined-no" className="text-sm">No</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="unsure" id="lined-unsure" />
                      <Label htmlFor="lined-unsure" className="text-sm">Not Sure</Label>
                    </div>
                  </RadioGroup>
                </div>

                <div>
                  <Label className="text-foreground font-medium text-sm">How often is your chimney swept?</Label>
                  <RadioGroup
                    value={formData.chimneySweepFrequency}
                    onValueChange={(value) => updateFormData("chimneySweepFrequency", value)}
                    className="flex flex-wrap gap-4 mt-1.5"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="twice-yearly" id="twice" />
                      <Label htmlFor="twice" className="text-sm">Twice a year</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="annually" id="annually" />
                      <Label htmlFor="annually" className="text-sm">Annually</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="less-often" id="less" />
                      <Label htmlFor="less" className="text-sm">Less often</Label>
                    </div>
                  </RadioGroup>
                </div>
              </>
            )}
          </div>
        </div>
      )}

      {/* Step 6: Cover Requirements */}
      {step === 6 && (
        <div className="space-y-4 animate-fade-in">
          <div>
            <h3 className="font-serif text-xl font-semibold text-foreground mb-1">Cover Requirements</h3>
            <p className="text-sm text-muted-foreground">Choose the protection you need.</p>
          </div>

          <div className="space-y-3">
            <div>
              <Label className="text-foreground font-medium text-sm">Type of Cover</Label>
              <RadioGroup
                value={formData.coverType}
                onValueChange={(value) => updateFormData("coverType", value)}
                className="space-y-2 mt-1.5"
              >
                <div>
                  <RadioGroupItem value="buildings-contents" id="both" className="peer sr-only" />
                  <Label
                    htmlFor="both"
                    className="flex flex-col p-3 border-2 rounded-lg cursor-pointer peer-data-[state=checked]:border-primary peer-data-[state=checked]:bg-primary/5 hover:bg-muted transition-colors"
                  >
                    <span className="font-semibold text-sm">Buildings & Contents</span>
                    <span className="text-xs text-muted-foreground">Complete protection for your property and belongings</span>
                  </Label>
                </div>
                <div>
                  <RadioGroupItem value="buildings-only" id="buildings" className="peer sr-only" />
                  <Label
                    htmlFor="buildings"
                    className="flex flex-col p-3 border-2 rounded-lg cursor-pointer peer-data-[state=checked]:border-primary peer-data-[state=checked]:bg-primary/5 hover:bg-muted transition-colors"
                  >
                    <span className="font-semibold text-sm">Buildings Only</span>
                    <span className="text-xs text-muted-foreground">Cover for the structure and permanent fixtures</span>
                  </Label>
                </div>
                <div>
                  <RadioGroupItem value="contents-only" id="contents" className="peer sr-only" />
                  <Label
                    htmlFor="contents"
                    className="flex flex-col p-3 border-2 rounded-lg cursor-pointer peer-data-[state=checked]:border-primary peer-data-[state=checked]:bg-primary/5 hover:bg-muted transition-colors"
                  >
                    <span className="font-semibold text-sm">Contents Only</span>
                    <span className="text-xs text-muted-foreground">Protection for your belongings only</span>
                  </Label>
                </div>
              </RadioGroup>
            </div>

            {(formData.coverType === "buildings-contents" || formData.coverType === "contents-only") && (
              <div>
                <Label htmlFor="contentsValue" className="text-foreground font-medium text-sm">
                  Estimated Contents Value (£)
                </Label>
                <Input
                  id="contentsValue"
                  type="number"
                  placeholder="e.g., 50000"
                  value={formData.contentsValue}
                  onChange={(e) => updateFormData("contentsValue", e.target.value)}
                  className="mt-1.5 h-10"
                />
              </div>
            )}

            <div>
              <Label className="text-foreground font-medium text-sm">Optional Extras</Label>
              <p className="text-xs text-muted-foreground mb-2">Select any additional cover you'd like to include.</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {optionalExtras.map((extra) => (
                  <div
                    key={extra.value}
                    className={`flex items-center space-x-2 p-2 border rounded-lg cursor-pointer transition-colors ${
                      formData.optionalExtras.includes(extra.value)
                        ? "border-primary bg-primary/5"
                        : "hover:bg-muted"
                    }`}
                    onClick={() => toggleExtra(extra.value)}
                  >
                    <Checkbox
                      id={extra.value}
                      checked={formData.optionalExtras.includes(extra.value)}
                      onCheckedChange={() => toggleExtra(extra.value)}
                    />
                    <Label htmlFor={extra.value} className="cursor-pointer text-xs">
                      {extra.label}
                    </Label>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Step 7: Contact Details */}
      {step === 7 && (
        <div className="space-y-4 animate-fade-in">
          <div>
            <h3 className="font-serif text-xl font-semibold text-foreground mb-1">Your Details</h3>
            <p className="text-sm text-muted-foreground">How can we get in touch with you?</p>
          </div>

          <div className="space-y-3">
            <div>
              <Label htmlFor="name" className="text-foreground font-medium text-sm">Full Name</Label>
              <Input
                id="name"
                placeholder="e.g., John Smith"
                value={formData.name}
                onChange={(e) => updateFormData("name", e.target.value)}
                className="mt-1.5 h-10"
              />
            </div>

            <div>
              <Label htmlFor="email" className="text-foreground font-medium text-sm">Email Address</Label>
              <Input
                id="email"
                type="email"
                placeholder="e.g., john@example.com"
                value={formData.email}
                onChange={(e) => updateFormData("email", e.target.value)}
                className="mt-1.5 h-10"
              />
            </div>

            <div>
              <Label htmlFor="phone" className="text-foreground font-medium text-sm">Phone Number</Label>
              <Input
                id="phone"
                type="tel"
                placeholder="e.g., 07700 123456"
                value={formData.phone}
                onChange={(e) => updateFormData("phone", e.target.value)}
                className="mt-1.5 h-10"
              />
            </div>

            <div>
              <Label className="text-foreground font-medium text-sm">Preferred Contact Method</Label>
              <RadioGroup
                value={formData.preferredContact}
                onValueChange={(value) => updateFormData("preferredContact", value)}
                className="flex gap-4 mt-1.5"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="email" id="contact-email" />
                  <Label htmlFor="contact-email" className="text-sm">Email</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="phone" id="contact-phone" />
                  <Label htmlFor="contact-phone" className="text-sm">Phone</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="either" id="contact-either" />
                  <Label htmlFor="contact-either" className="text-sm">Either</Label>
                </div>
              </RadioGroup>
            </div>
          </div>

          <p className="text-xs text-muted-foreground">
            By clicking "Get Quote", you agree to our privacy policy. We'll use your details to provide your quote and may contact you about your enquiry.
          </p>
        </div>
      )}

      {/* Navigation Buttons */}
      <div className="flex justify-between mt-6 pt-4 border-t border-border">
        <Button
          variant="outline"
          onClick={handleBack}
          disabled={step === 1}
          className="gap-2 h-9 text-sm"
        >
          <ArrowLeft className="w-4 h-4" />
          Back
        </Button>
        <Button
          onClick={handleNext}
          disabled={!isStepValid()}
          className="bg-accent hover:bg-accent/90 text-accent-foreground gap-2 h-9 text-sm"
        >
          {step === totalSteps ? "Get Quote" : "Continue"}
          <ArrowRight className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
};

export default QuoteForm;