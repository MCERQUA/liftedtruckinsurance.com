"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { FadeIn } from "@/components/animations/FadeIn";
import { SITE } from "@/lib/site";
import { US_STATES, QUOTE_SERVICE_TYPES, YEARS_OPTIONS, COPY } from "@/lib/content";
import { CheckCircle2, ShieldCheck, ArrowRight, Phone, Clock, Zap, MapPin } from "lucide-react";

const WEBHOOK_URL = `https://josh.jam-bot.com/social-api/api/leads/webhook/netlify?tenant=josh&site=${SITE.domain}`;

const trustItems = [
  { icon: ShieldCheck, title: COPY.quote.trustNicheTitle, desc: COPY.quote.trustNicheDesc },
  { icon: Zap, title: "~15-minute quotes", desc: "Real quotes from real markets, fast." },
  { icon: Clock, title: "2-hour claims response", desc: "When a loss hits, you reach a person." },
  { icon: MapPin, title: "All 50 states", desc: "Licensed nationwide — NPN #8608479." },
];

export default function QuotePage() {
  const [formData, setFormData] = useState({ traffic_source: "", landing_url: "",
    name: "", businessName: "", email: "", phone: "", state: "", serviceType: "", yearsInBusiness: "", message: "", "bot-field": "",
    date_of_birth: "",
    street_address: "",
    drivers_license_number: "",
    drivers_license_issue_date: "",
    drivers_license_expiration_date: "",
    driver_names: "",
    vehicle_year: "",
    vehicle_make: "",
    vehicle_model: "",
    vehicle_vin: "",
    vehicle_value: "",
    accessories_description: "",
    accessories_value: "",
    current_policy_number: "",
    current_policy_start_date: "",
    current_policy_expiration_date: "",
    current_coverage_limits: "",
    prior_auto_insurance: "",
    coverage_type: "",
    lienholderName: "",
    lienholderAddress: "",
    liftHeightInches: "",
    tireSize: "",
    suspensionDetails: "",
    garagingZip: "",
    annualMileage: "",
    vehicleUse: "",
    requestedLimits: "",
    desiredEffectiveDate: "",
    lossLast3Years: "",
    lossCount: "",
    lossDate: "",
    lossLineOfBusiness: "",
    lossAmountPaid: "",
    lossHistoryStatus: "",
    additionalDrivers: "",
    additionalVehicles: "",
    entityType: "",
    fein: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  useEffect(() => {
    try {
      const p = new URLSearchParams(window.location.search);
      let src = p.get("utm_source") || p.get("ref") || "";
      if (!src && document.referrer) { try { src = new URL(document.referrer).hostname; } catch { src = document.referrer; } }
      setFormData((f) => ({ ...f, traffic_source: src || "direct", landing_url: window.location.href }));
    } catch {}
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (formData["bot-field"]) return;
    setSubmitting(true);
    setError("");
    try {
      let stored = false;
      try {
        const res = await fetch(WEBHOOK_URL, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ form_name: "quote", source: SITE.domain, ...formData }) });
        // The webhook answers 200 with stored:false when it did not store the lead.
        if (res.ok) { const j = await res.json().catch(() => null); stored = !j || j.stored !== false; }
      } catch { /* fall through to Netlify Forms */ }
      if (!stored) {
        const fb = await fetch("/", { method: "POST", headers: { "Content-Type": "application/x-www-form-urlencoded" }, body: new URLSearchParams({ "form-name": "quote", ...formData }).toString() });
        if (!fb.ok) throw new Error(String(fb.status));
      }
      setSubmitted(true);
    } catch {
      setError(COPY.quote.errorMessage);
    } finally {
      setSubmitting(false);
    }
  };

  const inputClass = "w-full px-4 py-3 rounded-xl border border-adobe bg-cream/50 text-espresso placeholder-mocha/60 focus:outline-none focus:border-clay focus:ring-2 focus:ring-clay/20 transition-all text-sm";
  const labelClass = "block text-sm font-heading font-semibold text-espresso mb-1.5";

  return (
    <>
      <Navbar />
      <main>
        <section className="relative bg-warm-radial pt-32 pb-20 md:pt-40 md:pb-28">
          <div className="container-wide">
            <FadeIn className="text-center max-w-2xl mx-auto mb-12">
              <span className="pill-clay"><ShieldCheck className="h-3.5 w-3.5" /> Free quote</span>
              <h1 className="mt-5 font-heading font-extrabold text-espresso text-4xl md:text-5xl lg:text-6xl leading-[1.05] tracking-tight">
                {COPY.quote.h1Lead}{" "}
                <span className="bg-gradient-to-r from-clay via-clay-light to-gold-dark bg-clip-text text-transparent">{COPY.quote.h1Highlight}</span>
              </h1>
              <p className="mt-5 lead">{COPY.quote.lead}</p>
            </FadeIn>

            <div className="grid lg:grid-cols-3 gap-8">
              <div className="space-y-4">
                {trustItems.map((item) => (
                  <FadeIn key={item.title}>
                    <div className="flex gap-3 p-5 rounded-2xl bg-white border border-adobe shadow-card">
                      <span className="flex-shrink-0 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-clay/10 text-clay"><item.icon className="h-5 w-5" strokeWidth={2.2} /></span>
                      <div>
                        <p className="font-heading font-bold text-espresso text-sm">{item.title}</p>
                        <p className="text-mocha text-xs leading-relaxed mt-0.5">{item.desc}</p>
                      </div>
                    </div>
                  </FadeIn>
                ))}
                <FadeIn>
                  <div className="p-5 rounded-2xl bg-espresso text-cream text-center">
                    <p className="text-xs font-heading font-bold uppercase tracking-wider text-gold mb-2">Prefer to call?</p>
                    <a href={SITE.phoneHref} className="flex items-center justify-center gap-2 text-cream font-heading font-extrabold text-xl hover:text-gold-light transition-colors"><Phone className="h-5 w-5" />{SITE.phone}</a>
                    <p className="text-xs text-cream/60 mt-1">{SITE.hours}</p>
                  </div>
                </FadeIn>
              </div>

              <div className="lg:col-span-2">
                {submitted ? (
                  <FadeIn>
                    <div className="p-10 md:p-12 rounded-3xl bg-white border border-adobe shadow-card text-center">
                      <div className="w-16 h-16 rounded-full bg-sage/15 flex items-center justify-center mx-auto mb-4"><CheckCircle2 className="h-8 w-8 text-sage" /></div>
                      <h2 className="font-heading font-extrabold text-espresso text-2xl mb-3">Quote request received</h2>
                      <p className="text-mocha mb-2">Thank you! We'll review your operation and reach out within one business day with personalized quotes.</p>
                      <p className="text-sm text-mocha">Need it sooner? Call <a href={SITE.phoneHref} className="text-clay font-heading font-semibold">{SITE.phone}</a>.</p>
                      <Link href="/" className="btn-secondary mt-6 inline-flex">Back to home</Link>
                    </div>
                  </FadeIn>
                ) : (
                  <FadeIn>
                    <form name="quote" data-netlify="true" netlify-honeypot="bot-field" onSubmit={handleSubmit} className="rounded-3xl bg-white border border-adobe shadow-card p-7 md:p-9 space-y-5">
                      <input type="hidden" name="form-name" value="quote" />
                      <input type="hidden" name="traffic_source" id="__aeo_src" value={formData.traffic_source} readOnly />
                      <input type="hidden" name="landing_url" id="__aeo_url" value={formData.landing_url} readOnly />
                      <input name="bot-field" type="hidden" value={formData["bot-field"]} onChange={handleChange} className="hidden" />

                      <div className="grid sm:grid-cols-2 gap-4">
                        <div><label htmlFor="name" className={labelClass}>Full name *</label><input id="name" name="name" type="text" required value={formData.name} onChange={handleChange} placeholder="Jane Smith" className={inputClass} /></div>
                        <div><label htmlFor="businessName" className={labelClass}>Business name *</label><input id="businessName" name="businessName" type="text" required value={formData.businessName} onChange={handleChange} placeholder={COPY.quote.businessPlaceholder} className={inputClass} /></div>
                      </div>

                      <div className="grid sm:grid-cols-2 gap-4">
                        <div><label htmlFor="email" className={labelClass}>Email *</label><input id="email" name="email" type="email" required value={formData.email} onChange={handleChange} placeholder={COPY.quote.emailPlaceholder} className={inputClass} /></div>
                        <div><label htmlFor="phone" className={labelClass}>Phone *</label><input id="phone" name="phone" type="tel" required value={formData.phone} onChange={handleChange} placeholder={COPY.quote.phonePlaceholder} className={inputClass} /></div>
                      </div>

                      <div className="grid sm:grid-cols-2 gap-4">
                        <div><label htmlFor="state" className={labelClass}>Primary state *</label>
                          <select id="state" name="state" required value={formData.state} onChange={handleChange} className={inputClass}><option value="">Select a state…</option>{US_STATES.map((s) => (<option key={s} value={s}>{s}</option>))}</select>
                        </div>
                        <div><label htmlFor="yearsInBusiness" className={labelClass}>Years in business</label>
                          <select id="yearsInBusiness" name="yearsInBusiness" value={formData.yearsInBusiness} onChange={handleChange} className={inputClass}><option value="">Select…</option>{YEARS_OPTIONS.map((y) => (<option key={y} value={y}>{y}</option>))}</select>
                        </div>
                      </div>

                      <div><label htmlFor="serviceType" className={labelClass}>What do you need? *</label>
                        <select id="serviceType" name="serviceType" required value={formData.serviceType} onChange={handleChange} className={inputClass}><option value="">Select coverage…</option>{QUOTE_SERVICE_TYPES.map((s) => (<option key={s} value={s}>{s}</option>))}</select>
                      </div>

                      <div>
                        <label htmlFor="message" className={labelClass}>Tell us about your operation <span className="text-mocha/60 font-normal">(optional)</span></label>
                        <textarea id="message" name="message" rows={4} value={formData.message} onChange={handleChange} placeholder={COPY.quote.messagePlaceholder} className={`${inputClass} resize-none`} />
                      </div>

                      {error && <p className="text-red-600 text-sm font-medium">{error}</p>}

                      <div className="pt-2">
                        <p className="font-semibold mb-1">Driver, vehicle and current policy</p>
                        <p className="text-xs opacity-70 mb-3">Every driver and every vehicle or trailer must be listed or they are not covered. Have your licence, VINs and current insurance ID card handy - or email/text them to us and we will quote from those.</p>
                      </div>
                      <div>
                        <label htmlFor="date_of_birth" className={labelClass}>Date of birth</label>
                        <input id="date_of_birth" name="date_of_birth" type="date" value={formData.date_of_birth} onChange={handleChange} className={inputClass} />
                      </div>
                      <div>
                        <label htmlFor="street_address" className={labelClass}>Street address</label>
                        <input id="street_address" name="street_address" type="text" value={formData.street_address} onChange={handleChange} className={inputClass} />
                      </div>
                      <div>
                        <label htmlFor="drivers_license_number" className={labelClass}>Driver's license number</label>
                        <input id="drivers_license_number" name="drivers_license_number" type="text" value={formData.drivers_license_number} onChange={handleChange} className={inputClass} />
                      </div>
                      <div>
                        <label htmlFor="drivers_license_issue_date" className={labelClass}>Driver's license issue date</label>
                        <input id="drivers_license_issue_date" name="drivers_license_issue_date" type="date" value={formData.drivers_license_issue_date} onChange={handleChange} className={inputClass} />
                      </div>
                      <div>
                        <label htmlFor="drivers_license_expiration_date" className={labelClass}>Driver's license expiration date</label>
                        <input id="drivers_license_expiration_date" name="drivers_license_expiration_date" type="date" value={formData.drivers_license_expiration_date} onChange={handleChange} className={inputClass} />
                      </div>
                      <div>
                        <label htmlFor="driver_names" className={labelClass}>All drivers - name, date of birth and licence number</label>
                        <textarea id="driver_names" name="driver_names" rows={3} value={formData.driver_names} onChange={handleChange} className={`${inputClass} resize-none`} />
                      </div>
                      <div>
                        <label htmlFor="vehicle_year" className={labelClass}>Vehicle year</label>
                        <input id="vehicle_year" name="vehicle_year" type="text" value={formData.vehicle_year} onChange={handleChange} className={inputClass} />
                      </div>
                      <div>
                        <label htmlFor="vehicle_make" className={labelClass}>Vehicle make</label>
                        <input id="vehicle_make" name="vehicle_make" type="text" value={formData.vehicle_make} onChange={handleChange} className={inputClass} />
                      </div>
                      <div>
                        <label htmlFor="vehicle_model" className={labelClass}>Vehicle model</label>
                        <input id="vehicle_model" name="vehicle_model" type="text" value={formData.vehicle_model} onChange={handleChange} className={inputClass} />
                      </div>
                      <div>
                        <label htmlFor="vehicle_vin" className={labelClass}>VIN - every vehicle and trailer</label>
                        <textarea id="vehicle_vin" name="vehicle_vin" rows={3} value={formData.vehicle_vin} onChange={handleChange} className={`${inputClass} resize-none`} />
                      </div>
                      <div>
                        <label htmlFor="vehicle_value" className={labelClass}>Vehicle value</label>
                        <input id="vehicle_value" name="vehicle_value" type="text" value={formData.vehicle_value} onChange={handleChange} className={inputClass} />
                      </div>
                      <div>
                        <label htmlFor="accessories_description" className={labelClass}>Description of accessories</label>
                        <textarea id="accessories_description" name="accessories_description" rows={3} value={formData.accessories_description} onChange={handleChange} className={`${inputClass} resize-none`} />
                      </div>
                      <div>
                        <label htmlFor="accessories_value" className={labelClass}>Value of accessories</label>
                        <input id="accessories_value" name="accessories_value" type="text" value={formData.accessories_value} onChange={handleChange} className={inputClass} />
                      </div>
                      <div>
                        <label htmlFor="current_policy_number" className={labelClass}>Current policy number</label>
                        <input id="current_policy_number" name="current_policy_number" type="text" value={formData.current_policy_number} onChange={handleChange} className={inputClass} />
                      </div>
                      <div>
                        <label htmlFor="current_policy_start_date" className={labelClass}>Policy start date</label>
                        <input id="current_policy_start_date" name="current_policy_start_date" type="date" value={formData.current_policy_start_date} onChange={handleChange} className={inputClass} />
                      </div>
                      <div>
                        <label htmlFor="current_policy_expiration_date" className={labelClass}>Policy expiration date</label>
                        <input id="current_policy_expiration_date" name="current_policy_expiration_date" type="date" value={formData.current_policy_expiration_date} onChange={handleChange} className={inputClass} />
                      </div>
                      <div>
                        <label htmlFor="current_coverage_limits" className={labelClass}>Current coverage limits</label>
                        <input id="current_coverage_limits" name="current_coverage_limits" type="text" value={formData.current_coverage_limits} onChange={handleChange} className={inputClass} />
                      </div>
                      <div>
                        <label htmlFor="prior_auto_insurance" className={labelClass}>Prior auto insurance (any type, incl. a household member's)</label>
                        <input id="prior_auto_insurance" name="prior_auto_insurance" type="text" value={formData.prior_auto_insurance} onChange={handleChange} className={inputClass} />
                      </div>
                      <div>
                        <label htmlFor="coverage_type" className={labelClass}>Coverage type (Personal / Commercial)</label>
                        <input id="coverage_type" name="coverage_type" type="text" value={formData.coverage_type} onChange={handleChange} className={inputClass} />
                      </div>

                      <div>
                        <label htmlFor="lienholderName" className={labelClass}>Lienholder / loss payee name (optional)</label>
                        <input id="lienholderName" name="lienholderName" type="text" value={formData.lienholderName} onChange={handleChange} className={inputClass} />
                      </div>
                      <div>
                        <label htmlFor="lienholderAddress" className={labelClass}>Lienholder / loss payee address (optional)</label>
                        <input id="lienholderAddress" name="lienholderAddress" type="text" value={formData.lienholderAddress} onChange={handleChange} className={inputClass} />
                      </div>
                      <div>
                        <label htmlFor="liftHeightInches" className={labelClass}>Lift height in inches (optional)</label>
                        <input id="liftHeightInches" name="liftHeightInches" type="number" min="0" step="0.5" value={formData.liftHeightInches} onChange={handleChange} className={inputClass} />
                      </div>
                      <div>
                        <label htmlFor="tireSize" className={labelClass}>Tire size (optional)</label>
                        <input id="tireSize" name="tireSize" type="text" value={formData.tireSize} onChange={handleChange} className={inputClass} />
                      </div>
                      <div>
                        <label htmlFor="suspensionDetails" className={labelClass}>Suspension / lift kit details (optional)</label>
                        <textarea id="suspensionDetails" name="suspensionDetails" rows={3} value={formData.suspensionDetails} onChange={handleChange} className={`${inputClass} resize-none`} />
                      </div>
                      <div>
                        <label htmlFor="garagingZip" className={labelClass}>Garaging ZIP code (optional)</label>
                        <input id="garagingZip" name="garagingZip" type="text" inputMode="numeric" maxLength={10} value={formData.garagingZip} onChange={handleChange} className={inputClass} />
                      </div>
                      <div>
                        <label htmlFor="annualMileage" className={labelClass}>Estimated annual mileage (optional)</label>
                        <input id="annualMileage" name="annualMileage" type="number" min="0" value={formData.annualMileage} onChange={handleChange} className={inputClass} />
                      </div>
                      <div>
                        <label htmlFor="vehicleUse" className={labelClass}>Vehicle use (optional)</label>
                        <select id="vehicleUse" name="vehicleUse" value={formData.vehicleUse} onChange={handleChange} className={inputClass}><option value="">Select&hellip;</option><option value="Personal">Personal</option><option value="Commercial">Commercial</option><option value="Both personal and commercial">Both personal and commercial</option></select>
                      </div>
                      <div>
                        <label htmlFor="requestedLimits" className={labelClass}>Requested coverage limits (optional)</label>
                        <input id="requestedLimits" name="requestedLimits" type="text" value={formData.requestedLimits} onChange={handleChange} className={inputClass} />
                      </div>
                      <div>
                        <label htmlFor="desiredEffectiveDate" className={labelClass}>Desired effective date (optional)</label>
                        <input id="desiredEffectiveDate" name="desiredEffectiveDate" type="date" value={formData.desiredEffectiveDate} onChange={handleChange} className={inputClass} />
                      </div>
                      <fieldset>
                        <legend className={labelClass}>Any losses or claims in the last 3 years? (optional)</legend>
                        <div className="flex gap-6">
                          <label className="inline-flex items-center gap-2 text-sm text-espresso"><input type="radio" name="lossLast3Years" value="Yes" checked={formData.lossLast3Years === "Yes"} onChange={handleChange} /> Yes</label>
                          <label className="inline-flex items-center gap-2 text-sm text-espresso"><input type="radio" name="lossLast3Years" value="No" checked={formData.lossLast3Years === "No"} onChange={handleChange} /> No</label>
                        </div>
                      </fieldset>
                      {formData.lossLast3Years === "Yes" && (
                        <div className="space-y-5">
                      <div>
                        <label htmlFor="lossCount" className={labelClass}>Number of losses (optional)</label>
                        <input id="lossCount" name="lossCount" type="number" min="0" value={formData.lossCount} onChange={handleChange} className={inputClass} />
                      </div>
                      <div>
                        <label htmlFor="lossDate" className={labelClass}>Date of most recent loss (optional)</label>
                        <input id="lossDate" name="lossDate" type="date" value={formData.lossDate} onChange={handleChange} className={inputClass} />
                      </div>
                      <div>
                        <label htmlFor="lossLineOfBusiness" className={labelClass}>Line of business of the loss (optional)</label>
                        <input id="lossLineOfBusiness" name="lossLineOfBusiness" type="text" value={formData.lossLineOfBusiness} onChange={handleChange} className={inputClass} />
                      </div>
                      <div>
                        <label htmlFor="lossAmountPaid" className={labelClass}>Amount paid (optional)</label>
                        <input id="lossAmountPaid" name="lossAmountPaid" type="text" value={formData.lossAmountPaid} onChange={handleChange} className={inputClass} />
                      </div>
                      <div>
                        <label htmlFor="lossHistoryStatus" className={labelClass}>Claim status, open or closed (optional)</label>
                        <input id="lossHistoryStatus" name="lossHistoryStatus" type="text" value={formData.lossHistoryStatus} onChange={handleChange} className={inputClass} />
                      </div>
                        </div>
                      )}
                      <div>
                        <label htmlFor="additionalDrivers" className={labelClass}>Additional drivers: names and relationship (optional)</label>
                        <textarea id="additionalDrivers" name="additionalDrivers" rows={3} value={formData.additionalDrivers} onChange={handleChange} className={`${inputClass} resize-none`} />
                      </div>
                      <div>
                        <label htmlFor="additionalVehicles" className={labelClass}>Additional vehicles or trailers: year, make, model (optional)</label>
                        <textarea id="additionalVehicles" name="additionalVehicles" rows={3} value={formData.additionalVehicles} onChange={handleChange} className={`${inputClass} resize-none`} />
                      </div>
                      <div>
                        <label htmlFor="entityType" className={labelClass}>Business entity type, commercial buyers (optional)</label>
                        <select id="entityType" name="entityType" value={formData.entityType} onChange={handleChange} className={inputClass}><option value="">Select&hellip;</option><option value="Individual">Individual</option><option value="Sole proprietor">Sole proprietor</option><option value="LLC">LLC</option><option value="Corporation">Corporation</option><option value="Partnership">Partnership</option><option value="Other">Other</option></select>
                      </div>
                      <div>
                        <label htmlFor="fein" className={labelClass}>FEIN, commercial buyers only (optional)</label>
                        <input id="fein" name="fein" type="text" value={formData.fein} onChange={handleChange} className={inputClass} />
                      </div>

                      <button type="submit" disabled={submitting} className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-clay-gradient text-white font-heading font-bold rounded-full shadow-warm hover:shadow-warm-lg hover:-translate-y-0.5 transition-all disabled:opacity-60 disabled:cursor-not-allowed">
                        {submitting ? "Sending…" : "Request my free quote"}{!submitting && <ArrowRight className="h-5 w-5" />}
                      </button>
                      <p className="text-xs text-center text-mocha/70">No spam. No commitment. We'll only contact you about your quote.</p>
                    </form>
                  </FadeIn>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
