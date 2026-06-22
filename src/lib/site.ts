// Centralized site data — lifted truck insurance

export const SITE = {
  name: "Lifted Truck Insurance",
  legalName: "Lifted Truck Insurance (by Contractors Choice Agency)",
  domain: "liftedtruckinsurance.com",
  url: "https://liftedtruckinsurance.com",
  tagline: "Insurance for Lifted & Modified Trucks",
  description:
    "Specialty insurance for lifted and modified trucks — agreed value, custom parts and accessories, show truck coverage, off-road rider, GAP coverage, physical damage, liability, and non-owner coverage. Programs for lifted 4x4s, suspension lifts, oversized tires, aftermarket builds, and show trucks. Licensed all 50 states.",
  phone: "844-967-5247",
  phoneHref: "tel:+18449675247",
  email: "josh@contractorschoiceagency.com",
  founded: 2005,
  npn: "8608479",
  address: {
    street: "12220 E Riggs Road, Suite #105",
    city: "Chandler",
    state: "AZ",
    zip: "85249",
    country: "US",
  },
  hours: "Mon–Fri 8am–5pm (MST)",
  claimsSla: "2-hour claims response",
  quoteSla: "15-minute quote turnaround",
  statesLicensed: "All 50 states",
} as const;

export const BRAND = {
  brandShort: "Lifted Truck",
  brandSub: "Insurance",
  tagline: "Insurance for Lifted & Modified Trucks",
  subTagline: "Agreed value, custom parts, show truck, and off-road coverage for modified 4x4s",
  nicheShort: "lifted truck",
  nicheShortCap: "Lifted Truck",
  nichePlural: "lifted trucks",
  nichePluralCap: "Lifted Trucks",
  operator: "truck owner",
  operatorCap: "Truck Owner",
  industry: "lifted truck builds",
  industryCap: "Lifted Truck Builds",
  audience: "truck enthusiasts",
  audienceCap: "Truck Enthusiasts",
  ownerTitle: "lifted truck owner",
  regionPill: "Texas · Arizona · Colorado",
  ctaMain: "Get a Lifted Truck Quote",
  ctaSecondary: "Talk to a Specialist",
} as const;

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Coverage", href: "/coverage" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
] as const;

export const SERVICES = [
  {
    slug: "agreed-value-coverage",
    title: "Agreed Value Coverage",
    description:
      "Lock in the full insured value of your lifted truck upfront — no depreciation, no argument at claim time. We document your build, agree on the amount, and pay that full value on a total loss. Essential for modified trucks worth more than their book value.",
    icon: "ShieldCheck",
  },
  {
    slug: "custom-parts-accessories",
    title: "Custom Parts & Accessories",
    description:
      "Coverage for every upgrade on your build — lift kits, oversized tires, aftermarket wheels, bumpers, bed covers, winches, and electronics. Standard auto policies exclude or cap aftermarket equipment; this rider covers your actual investment.",
    icon: "Wrench",
  },
  {
    slug: "show-truck-coverage",
    title: "Show Truck Coverage",
    description:
      "Specialized coverage for trucks you enter in shows, competitions, or exhibitions. Covers transit to and from events, damage at show venues, theft from parking areas, and the custom work that makes your rig a winner.",
    icon: "Trophy",
  },
  {
    slug: "off-road-rider",
    title: "Off-Road Use Rider",
    description:
      "Extends your coverage onto unimproved roads, trails, and off-road terrain. Standard auto policies exclude off-road use entirely. This rider covers physical damage and liability while crawling, trail riding, or competing off-pavement.",
    icon: "Mountain",
  },
  {
    slug: "gap-coverage",
    title: "GAP Coverage",
    description:
      "Covers the gap between your truck\u2019s insured value and your loan balance after a total loss. Critical for lifted trucks that depreciate below their loan payoff — especially when modifications aren\u2019t reflected in the loan amount.",
    icon: "DollarSign",
  },
  {
    slug: "physical-damage",
    title: "Physical Damage",
    description:
      "Comprehensive and collision coverage for your lifted truck, including your suspension system, wheels, tires, and all mounted accessories. We insure at stated value so your payout matches your build\u2019s actual worth.",
    icon: "Car",
  },
  {
    slug: "liability-coverage",
    title: "Liability Coverage",
    description:
      "Auto liability protection for your lifted truck — bodily injury and property damage you cause to others. We write liability limits that match the profile of a modified vehicle and the higher risk perception of lifted trucks.",
    icon: "Umbrella",
  },
  {
    slug: "non-owner-coverage",
    title: "Non-Owner Coverage",
    description:
      "Liability coverage when you occasionally drive a lifted truck you don\u2019t own — a friend\u2019s rig, a club vehicle, or a rental for an off-road trip. Fills the gap between the vehicle owner\u2019s policy and your personal coverage.",
    icon: "Users",
  },
] as const;

export const LOCATIONS = [
  {
    slug: "texas",
    name: "Texas",
    state: "TX",
    region: "Dallas · Houston · San Antonio",
    metaTitle: "Lifted Truck Insurance Texas | TX Modified Vehicle Coverage",
    metaDescription: "Lifted truck insurance in Texas — agreed value, custom parts, off-road rider, and show truck coverage for TX 4x4 owners. Fast quotes, A-rated carriers.",
    h1: "Lifted Truck Insurance in Texas",
    intro: "Texas has one of the largest lifted truck cultures in the country. From DFW car shows to Hill Country trail systems, Texas truck owners need coverage that reflects what their build is actually worth. We write agreed value, custom parts, and off-road programs for TX lifted truck owners of all kinds.",
  },
  {
    slug: "arizona",
    name: "Arizona",
    state: "AZ",
    region: "Phoenix · Tucson · Flagstaff",
    metaTitle: "Lifted Truck Insurance Arizona | AZ Modified 4x4 Coverage",
    metaDescription: "Arizona lifted truck insurance — agreed value, off-road rider, and custom parts coverage for AZ truck enthusiasts. Desert terrain, rock crawling, and show trucks.",
    h1: "Lifted Truck Insurance in Arizona",
    intro: "Arizona\u2019s desert terrain and rock crawling culture — from the Superstition Mountains to Sedona\u2019s trails — demand coverage that goes where you go. We write off-road riders, custom parts, and agreed value programs for Arizona lifted truck owners running everything from weekend warriors to built-up competition rigs.",
  },
  {
    slug: "colorado",
    name: "Colorado",
    state: "CO",
    region: "Denver · Colorado Springs · Durango",
    metaTitle: "Lifted Truck Insurance Colorado | CO 4x4 Off-Road Coverage",
    metaDescription: "Colorado lifted truck insurance — mountain trail coverage, off-road rider, agreed value, and custom parts for CO truck enthusiasts. Licensed all 50 states.",
    h1: "Lifted Truck Insurance in Colorado",
    intro: "Colorado\u2019s mountain passes, 4WD roads, and extensive trail systems are a lifted truck owner\u2019s paradise — and a serious risk environment. We write comprehensive programs for Colorado truck owners including off-road riders, suspension and lift coverage, and agreed value policies that account for your full build investment.",
  },
  {
    slug: "california",
    name: "California",
    state: "CA",
    region: "Southern CA · Bay Area · Sacramento",
    metaTitle: "Lifted Truck Insurance California | CA Modified Vehicle Programs",
    metaDescription: "California lifted truck insurance — agreed value, custom parts, show truck coverage for CA 4x4 owners. Specialty programs for modified vehicles.",
    h1: "Lifted Truck Insurance in California",
    intro: "California\u2019s strong truck show scene, desert off-road parks like Glamis, and active off-highway vehicle (OHV) community need specialty coverage that standard insurers won\u2019t write. We place agreed value and custom parts programs for California lifted truck owners through A-rated specialty carriers.",
  },
  {
    slug: "florida",
    name: "Florida",
    state: "FL",
    region: "Tampa · Orlando · Jacksonville",
    metaTitle: "Lifted Truck Insurance Florida | FL Modified Truck Coverage",
    metaDescription: "Florida lifted truck insurance — agreed value, custom parts, and show truck coverage for FL truck enthusiasts. Fast quotes from specialty carriers.",
    h1: "Lifted Truck Insurance in Florida",
    intro: "Florida\u2019s truck show circuit and off-road parks — from Ocala to the Everglades fringe trails — keep lifted truck owners busy year-round. We write specialty programs for Florida truck owners with agreed value, custom parts riders, and off-road coverage.",
  },
  {
    slug: "tennessee",
    name: "Tennessee",
    state: "TN",
    region: "Nashville · Memphis · Knoxville",
    metaTitle: "Lifted Truck Insurance Tennessee | TN Modified 4x4 Coverage",
    metaDescription: "Tennessee lifted truck insurance — Smoky Mountain trail coverage, agreed value, and custom parts for TN truck enthusiasts. A-rated specialty programs.",
    h1: "Lifted Truck Insurance in Tennessee",
    intro: "The Smoky Mountains and Tennessee\u2019s extensive trail systems draw lifted truck owners from across the Southeast. We write off-road riders and agreed value programs for Tennessee truck owners, ensuring your build is covered on the trail and at the show.",
  },
  {
    slug: "georgia",
    name: "Georgia",
    state: "GA",
    region: "Atlanta · Savannah · Augusta",
    metaTitle: "Lifted Truck Insurance Georgia | GA Modified Truck Programs",
    metaDescription: "Georgia lifted truck insurance — agreed value, custom parts, and off-road rider for GA truck enthusiasts. Licensed in all 50 states.",
    h1: "Lifted Truck Insurance in Georgia",
    intro: "Georgia\u2019s growing truck culture — from Atlanta car shows to North Georgia trail systems — needs coverage that standard carriers won\u2019t write. We place specialty agreed value and custom parts programs for Georgia lifted truck owners.",
  },
  {
    slug: "north-carolina",
    name: "North Carolina",
    state: "NC",
    region: "Charlotte · Raleigh · Asheville",
    metaTitle: "Lifted Truck Insurance North Carolina | NC 4x4 Coverage",
    metaDescription: "North Carolina lifted truck insurance — Blue Ridge trail coverage, agreed value, and custom parts for NC truck enthusiasts. Fast specialty quotes.",
    h1: "Lifted Truck Insurance in North Carolina",
    intro: "North Carolina\u2019s Blue Ridge Parkway access trails and the OHV parks scattered across the state make it a great state for lifted trucks — and a state where standard auto insurance consistently falls short for modified vehicles. We write specialty programs for NC truck owners.",
  },
] as const;

export const CREDENTIALS = [
  { label: "Licensed in all 50 states", icon: "MapPin" },
  { label: "Founded 2005 — 20+ years", icon: "CalendarCheck" },
  { label: "Modified vehicle specialists", icon: "Wrench" },
  { label: "15-minute quote turnaround", icon: "Timer" },
  { label: "2-hour claims response", icon: "Zap" },
  { label: "A.M. Best A+ carrier partners", icon: "Award" },
] as const;

export const SOCIAL = {
  facebook: "",
  instagram: "",
  linkedin: "",
  twitter: "",
} as const;

export const STATS = [
  { value: 800, suffix: "+", label: "Modified trucks insured nationwide", prefix: "" },
  { value: 20, suffix: "+", label: "Years insuring specialty vehicles", prefix: "" },
  { value: 15, suffix: " min", label: "Average quote turnaround", prefix: "" },
  { value: 50, suffix: "", label: "States licensed & writing", prefix: "" },
] as const;

export const TESTIMONIALS = [
  {
    quote: "My truck has a 6-inch lift, 37s, and about $15,000 in mods. My old insurer valued it at KBB stock price — a fraction of what I\u2019d actually lose in a total loss. Lifted Truck Insurance actually documented every mod and locked in the agreed value. That\u2019s what I needed.",
    name: "Brandon K.",
    role: "Lifted Truck Owner",
    location: "Texas",
  },
  {
    quote: "I hit a boulder on a trail ride and cracked my differential housing. My standard auto policy denied the claim immediately — off-road exclusion. These guys had written the off-road rider specifically for trail use. Claim paid, no argument.",
    name: "Rachel S.",
    role: "4x4 Enthusiast",
    location: "Arizona",
  },
  {
    quote: "I take my show truck to three or four events a year. Needed coverage for transit, display damage, and theft at the venue. Nobody else could write it. Lifted Truck Insurance had a show truck program that covered exactly that.",
    name: "Marcus T.",
    role: "Show Truck Competitor",
    location: "Colorado",
  },
] as const;
