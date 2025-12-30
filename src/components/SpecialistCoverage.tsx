import Link from "next/link";
import { Shield, Award, TrendingDown, CheckCircle } from "lucide-react";

const SpecialistCoverage = () => {
  return (
    <section className="section-padding bg-secondary">
      <div className="container-custom">
        {/* Why Choose Specialist Thatched Roof Insurance */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="text-center mb-12">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Specialist Expertise</span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
              Why Choose Specialist Thatched Roof Insurance?
            </h2>
            <p className="text-muted-foreground text-lg">
              Standard home insurance doesn't adequately cover the unique risks and requirements of thatched properties. Specialist insurance is essential.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-card border border-border rounded-xl p-6">
              <Shield className="w-8 h-8 text-primary mb-4" />
              <h3 className="font-serif text-xl font-semibold text-foreground mb-3">Unique Fire Risks</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Thatched roofs are highly combustible and require specialist fire safety measures. Standard policies often exclude or limit thatch-related fire damage.
              </p>
              <p className="text-muted-foreground text-sm">
                Learn about <Link href="/blog/thatched-roof-fire-risk-insurer-checks" className="text-primary font-semibold hover:underline">what insurers look for regarding fire risk</Link>.
              </p>
            </div>
            <div className="bg-card border border-border rounded-xl p-6">
              <Award className="w-8 h-8 text-primary mb-4" />
              <h3 className="font-serif text-xl font-semibold text-foreground mb-3">Specialist Rebuild Costs</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Rebuilding a thatched property requires specialist thatchers and traditional materials, costing significantly more than standard homes.
              </p>
              <p className="text-muted-foreground text-sm">
                Understand <Link href="/blog/thatched-roof-cost-perm2" className="text-primary font-semibold hover:underline">thatched roof costs per square metre</Link>.
              </p>
            </div>
            <div className="bg-card border border-border rounded-xl p-6">
              <TrendingDown className="w-8 h-8 text-primary mb-4" />
              <h3 className="font-serif text-xl font-semibold text-foreground mb-3">Limited Market Access</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Most mainstream insurers won't cover thatched properties. Specialist brokers have access to niche markets and better terms.
              </p>
              <p className="text-muted-foreground text-sm">
                Discover <Link href="/blog/reduce-thatched-cottage-insurance-cost" className="text-primary font-semibold hover:underline">ways to reduce thatched cottage insurance costs</Link>.
              </p>
            </div>
            <div className="bg-card border border-border rounded-xl p-6">
              <CheckCircle className="w-8 h-8 text-primary mb-4" />
              <h3 className="font-serif text-xl font-semibold text-foreground mb-3">Compliance Requirements</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Thatched properties have specific chimney, fire safety, and maintenance requirements that specialist insurers understand and support.
              </p>
              <p className="text-muted-foreground text-sm">
                Read our guide on <Link href="/blog/thatched-roof-chimney-regulations" className="text-primary font-semibold hover:underline">chimney regulations for thatched properties</Link>.
              </p>
            </div>
          </div>
        </div>

        {/* Coverage for Grade II Listed Properties */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="text-center mb-12">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Listed Properties</span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
              Specialist Coverage for Grade II Listed Thatched Properties
            </h2>
            <p className="text-muted-foreground text-lg">
              Many thatched properties are Grade II listed, requiring specialist insurance that understands listed building requirements and traditional restoration methods.
            </p>
          </div>
          <div className="bg-card border border-border rounded-2xl p-8">
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="font-serif text-xl font-semibold text-foreground mb-4">Listed Building Requirements</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Cover for repairs using traditional materials and methods</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Understanding of conservation officer involvement</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Extended rebuild timescales for listed properties</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Higher rebuild costs due to specialist trades</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-serif text-xl font-semibold text-foreground mb-4">Preparing for Quotes</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Getting insurance for a Grade II listed thatched property requires more preparation than standard home insurance. Our checklist helps you gather the right information.
                </p>
                <Link
                  href="/blog/grade-2-thatched-cottage-insruance-checklist"
                  className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
                >
                  View Grade II Insurance Checklist
                  <span>→</span>
                </Link>
              </div>
            </div>
            <div className="bg-muted rounded-lg p-6">
              <p className="text-foreground leading-relaxed mb-4">
                <strong>Important:</strong> Listed building status doesn't prevent you from getting comprehensive cover. We specialise in insuring Grade II listed thatched properties and understand the additional requirements for repairs using traditional materials and methods.
              </p>
              <p className="text-muted-foreground text-sm">
                Learn more about <Link href="/blog/why-is-thatched-cottage-insurance-expensive" className="text-primary font-semibold hover:underline">why thatched cottage insurance is expensive</Link> and how listed status affects premiums.
              </p>
            </div>
          </div>
        </div>

        {/* Competitive Quotes */}
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Competitive Pricing</span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
              Competitive Quotes for Thatched Properties
            </h2>
            <p className="text-muted-foreground text-lg">
              While thatched roof insurance is typically more expensive than standard home insurance, we work to secure competitive quotes through specialist markets and risk management.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-card border border-border rounded-xl p-6 text-center">
              <div className="text-3xl font-bold text-primary mb-2">30+</div>
              <div className="text-muted-foreground text-sm mb-4">Years Experience</div>
              <p className="text-foreground text-sm">Specialist knowledge helps secure better terms</p>
            </div>
            <div className="bg-card border border-border rounded-xl p-6 text-center">
              <div className="text-3xl font-bold text-primary mb-2">15k+</div>
              <div className="text-muted-foreground text-sm mb-4">Homes Protected</div>
              <p className="text-foreground text-sm">Proven track record with thatched properties</p>
            </div>
            <div className="bg-card border border-border rounded-xl p-6 text-center">
              <div className="text-3xl font-bold text-primary mb-2">4.9/5</div>
              <div className="text-muted-foreground text-sm mb-4">Customer Rating</div>
              <p className="text-foreground text-sm">Rated excellent by our customers</p>
            </div>
          </div>
          <div className="mt-8 bg-muted rounded-xl p-8">
            <h3 className="font-serif text-xl font-semibold text-foreground mb-4">Ways to Reduce Your Premium</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              While thatched roof insurance costs more than standard home insurance, you can reduce your premium by:
            </p>
            <ul className="space-y-2 text-muted-foreground mb-6">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <span>Investing in fire safety measures (regular chimney sweeping, lined flues, fire barriers)</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <span>Maintaining accurate rebuild values (not over or under-insuring)</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <span>Keeping good documentation of maintenance and improvements</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <span>Working with specialist brokers who understand thatched properties</span>
              </li>
            </ul>
            <Link
              href="/blog/reduce-thatched-cottage-insurance-cost"
              className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
            >
              Read our complete guide to reducing insurance costs
              <span>→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpecialistCoverage;

