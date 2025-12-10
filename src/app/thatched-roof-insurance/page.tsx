import Link from "next/link";
import type { Metadata } from "next";
import { Shield, Home, CheckCircle, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "Thatched Roof Insurance | Specialist Cover & 2025 Requirements",
  description:
    "Specialist thatched roof insurance for UK homes: 1.8m chimney rules, Ecodesign stoves, insulated flues, fire barriers, sweeping proof, and rapid claims support.",
  keywords: [
    "thatched roof insurance",
    "thatched property insurance",
    "thatch insurance UK",
    "chimney regulations 2025",
    "Ecodesign stove insurance",
    "insulated flue thatch",
  ],
};

const bullets = [
  "Specialist underwriting for thatched homes across England, Wales, Scotland",
  "Aligned with 2025 chimney regulations: 1.8m stacks, Ecodesign stoves, insulated liners",
  "Fire barrier and Dorset Model guidance to keep homes insurable",
  "Rapid claims support with thatch-aware contractors",
  "Flexible cover: buildings, contents, or combined",
  "Optional extras: home emergency, legal, accidental damage",
];

const checklist = [
  "Chimney pot is 1.8m above the thatch ridge (or extension planned)",
  "Twin-wall insulated flue liner (or insulated backfill) for Ecodesign stoves",
  "HETAS/NACS sweeping certificates (pre-winter and mid-season for wood)",
  "CO alarms in rooms with solid fuel appliances",
  "Bird guard (not spark arrestor) fitted where required",
  "Fire barrier/membrane under thatch on new or major re-thatch projects",
];

export default function ThatchedRoofInsurancePage() {
  return (
    <div className="bg-background">
      <div className="container-custom py-12 md:py-16">
        <div className="max-w-5xl mx-auto">
          <p className="text-primary font-semibold text-sm uppercase tracking-wider">Thatched Roof Insurance</p>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mt-3 mb-4">
            Specialist Thatched Roof Insurance for 2025
          </h1>
          <p className="text-muted-foreground text-lg leading-relaxed mb-8">
            Protect your thatched home with cover designed around the latest 2025 requirements: Ecodesign-only stoves,
            1.8m chimney heights, insulated flues, sweeping proof, and Dorset Model fire barriers. Get compliant,
            reduce risk, and stay fully insurable.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-10">
            {bullets.map((item) => (
              <div key={item} className="flex items-start gap-3">
                <Shield className="w-5 h-5 text-primary mt-1" />
                <p className="text-foreground">{item}</p>
              </div>
            ))}
          </div>

          <div className="bg-muted rounded-2xl border border-border p-6 md:p-8 mb-10">
            <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">Pre-Quote Compliance Checklist</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {checklist.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5" />
                  <p className="text-foreground">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-6 mb-10">
            <div className="lg:col-span-2 space-y-4">
              <h3 className="font-serif text-xl font-semibold text-foreground">
                What shapes a thatched roof insurance quote?
              </h3>
              <p className="text-muted-foreground">
                Rebuild value, roof material (water reed, combed wheat, long straw), heat source (Ecodesign stove vs open
                fire), chimney height, flue insulation, sweeping frequency, and regional fire risk all influence price.
                Demonstrating compliance and maintenance reduces risk loading.
              </p>

              <h3 className="font-serif text-xl font-semibold text-foreground">Regional and local signals</h3>
              <p className="text-muted-foreground">
                We cover England, Wales, and Scotland. Rural and coastal areas with reliable fire cover and evidence of
                compliant installs (HETAS certificates, CCTV flue reports, sweep records) typically rate better. Mention
                your local chimney sweep cadence and any Dorset Model upgrades.
              </p>

              <h3 className="font-serif text-xl font-semibold text-foreground">Claims support that understands thatch</h3>
              <p className="text-muted-foreground">
                Rapid triage, approved thatch-aware contractors, and guidance on fire barriers during reinstatement help
                you return to “better than before.” We align with insurer warranties so you stay covered after a claim.
              </p>
            </div>
            <div className="bg-card border border-border rounded-2xl p-6 space-y-4">
              <div className="flex items-center gap-3">
                <Home className="w-5 h-5 text-primary" />
                <div>
                  <p className="font-semibold text-foreground">Ready to get covered?</p>
                  <p className="text-muted-foreground text-sm">Buildings, contents, or combined.</p>
                </div>
              </div>
              <Link
                href="/quote"
                className="inline-flex items-center justify-center rounded-lg bg-primary text-primary-foreground px-4 py-3 font-semibold hover:bg-primary/90 transition-colors w-full"
              >
                Start your thatched roof quote
              </Link>
              <Link
                href="/blog/thatched-roof-chimney-regulations"
                className="inline-flex items-center justify-center rounded-lg border border-border px-4 py-3 font-semibold hover:bg-muted transition-colors w-full"
              >
                Read chimney regulations 2025
              </Link>
              <a
                href="tel:01234567890"
                className="inline-flex items-center justify-center rounded-lg border border-border px-4 py-3 font-semibold hover:bg-muted transition-colors w-full"
              >
                <Phone className="w-4 h-4 mr-2" />
                Call a specialist
              </a>
            </div>
          </div>

          <div className="bg-card border border-border rounded-2xl p-6 md:p-8 space-y-4">
            <h3 className="font-serif text-xl font-semibold text-foreground">How to improve insurability in 2025</h3>
            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              <li>Extend short chimneys to 1.8m above ridge (brick or tall pot).</li>
              <li>Use twin-wall insulated liners for Ecodesign stoves; avoid bare brick heat transfer.</li>
              <li>Schedule HETAS/NACS sweeps pre-winter and mid-season; keep digital certificates.</li>
              <li>Fit CO alarms in all rooms with solid fuel; add bird guard (not spark arrestor).</li>
              <li>Install fire barriers/membranes on re-thatch; follow Dorset Model on major works.</li>
              <li>Burn only “Ready to Burn” wood (&lt;20% moisture); avoid wet or scavenged timber.</li>
              <li>Document upgrades (CCTV flue inspections, liners, stove installs) for insurers.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

