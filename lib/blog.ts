export type InlineFragment =
  | string
  | { text: string; href: string; external?: boolean }

export type ContentBlock =
  | { type: "p"; content: InlineFragment[] }
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "ul"; items: InlineFragment[][] }
  | { type: "ol"; items: InlineFragment[][] }
  | { type: "callout"; title: string; content: InlineFragment[] }
  | { type: "quote"; text: string; cite?: string }

export type RelatedLink = {
  label: string
  href: string
  description: string
}

export type ExternalSource = {
  label: string
  href: string
  publisher: string
}

export type BlogPost = {
  slug: string
  title: string
  description: string
  excerpt: string
  date: string // ISO
  readTime: number
  category: string
  author: {
    name: string
    role: string
  }
  image: string
  imageAlt: string
  tags: string[]
  content: ContentBlock[]
  relatedInternal: RelatedLink[]
  externalSources: ExternalSource[]
}

// Shared authors
const opAuthor = { name: "SoCal Junk Co Team", role: "Local Junk Removal Experts" }

export const blogPosts: BlogPost[] = [
  // ===================================================================
  // POST 1 — JULY 2026 (current month)
  // ===================================================================
  {
    slug: "summer-junk-removal-anaheim-heat-prep",
    title: "Summer Junk Removal in Anaheim: Prep Your Home Before Peak Heat Hits",
    description:
      "How Anaheim & Orange County homeowners can use early summer to clear clutter, prep garages for triple-digit heat, and keep hazardous items out of hot spaces. Local tips from SoCal Junk Co.",
    excerpt:
      "Anaheim summers hit hard and fast. Here's how to clear the clutter, prep your garage for triple-digit days, and safely offload the items that don't belong in a hot Southern California home.",
    date: "2026-07-08",
    readTime: 7,
    category: "Seasonal",
    author: opAuthor,
    image: "/blog/summer-cleanout.jpg",
    imageAlt: "Sunny Southern California home exterior with palm trees, ready for summer cleanout",
    tags: ["Summer", "Anaheim", "Garage Cleanout", "Seasonal Tips"],
    content: [
      {
        type: "p",
        content: [
          "By mid-July, Anaheim regularly sees temperatures north of 95°F, and inland Orange County neighborhoods like Anaheim Hills, Yorba Linda, and Orange can push past 100°F. That heat doesn't just make yard work miserable — it turns a cluttered garage into a fire and health hazard. If your garage, patio, or side yard is still holding onto stuff from spring, right now is the smartest window of the year to do a serious cleanout before the worst heat arrives.",
        ],
      },
      {
        type: "p",
        content: [
          "We've been hauling junk across Anaheim and Orange County since 2015, and every July our phone lines light up with the same three requests: garage cleanouts, patio furniture removal, and old propane/paint/chemical disposal. Here's how to think about your own summer prep — and where to draw the line between DIY and calling in ",
          {
            text: "professional junk removal",
            href: "/services",
          },
          ".",
        ],
      },
      { type: "h2", text: "Why Summer Clutter Is Different in Southern California" },
      {
        type: "p",
        content: [
          "In cooler climates, a messy garage is mostly a nuisance. In Anaheim, it's a genuine safety issue. Attached garages routinely hit 110–120°F on hot afternoons, and that heat does three things: it degrades chemicals (paint, pesticides, pool supplies), it dries out combustibles (stacked cardboard, old wood, brush), and it makes the space unusable for actual storage. The ",
          {
            text: "U.S. Environmental Protection Agency",
            href: "https://www.epa.gov/hw/household-hazardous-waste-hhw",
            external: true,
          },
          " specifically warns against storing household hazardous waste in high-heat environments, since containers can swell, leak, or off-gas.",
        ],
      },
      { type: "h2", text: "The Anaheim Summer Cleanout Checklist" },
      {
        type: "p",
        content: [
          "Work through your garage, patio, side yard, and shed in one weekend. Sort everything into four piles: keep, donate, recycle, junk. Here's what typically ends up in each for our Orange County customers:",
        ],
      },
      { type: "h3", text: "Donate (still usable)" },
      {
        type: "ul",
        items: [
          [
            "Patio furniture in decent shape — ",
            {
              text: "Habitat for Humanity ReStore Orange County",
              href: "https://www.habitatoc.org/restore/",
              external: true,
            },
            " accepts outdoor sets year-round",
          ],
          ["Bikes, sports equipment, and pool toys the kids outgrew"],
          ["Working power tools, extension cords, and yard tools"],
          ["Camping and beach gear you haven't used in two summers"],
        ],
      },
      { type: "h3", text: "Recycle (Anaheim curbside or drop-off)" },
      {
        type: "ul",
        items: [
          ["Cardboard from spring deliveries and Amazon boxes"],
          [
            "E-waste (old TVs, monitors, cables) — the ",
            {
              text: "City of Anaheim recycling program",
              href: "https://www.anaheim.net/1236/Recycling",
              external: true,
            },
            " has free drop-off options",
          ],
          ["Metal (old grills, patio umbrellas, broken tools) — scrap yards pay by the pound"],
          ["Green waste and palm fronds — Anaheim residents get a free green cart"],
        ],
      },
      { type: "h3", text: "Haul away (call us)" },
      {
        type: "ul",
        items: [
          ["Old refrigerators, freezers, and window AC units with refrigerant"],
          ["Water-damaged furniture and mattresses from winter storage"],
          ["Half-empty paint, stain, and solvent containers"],
          ["Broken hot tubs, above-ground pools, and playground sets"],
          ["Any accumulated junk pile that's now home to spiders, rodents, or vermin"],
        ],
      },
      { type: "h2", text: "Why We Recommend Doing This Before August" },
      {
        type: "p",
        content: [
          "August through October in Orange County is fire season. Cal Fire and Anaheim Fire & Rescue routinely issue defensible space reminders once inland temperatures spike, and cluttered garages, brush piles, and stacked yard waste are called out specifically. Getting your junk hauled off in early to mid-July means you're ahead of the rush — most local haulers, including us, book solid in September as everyone finally gets around to fall cleanup.",
        ],
      },
      {
        type: "callout",
        title: "Same-Day Service Available in Anaheim",
        content: [
          "We offer same-day and next-day junk removal appointments throughout Anaheim, Orange, Fullerton, Garden Grove, and surrounding Orange County cities. ",
          {
            text: "Get a free quote in under two minutes",
            href: "/contact",
          },
          " — or call (310) 218-7822.",
        ],
      },
      { type: "h2", text: "What Homeowners Get Wrong About Summer DIY Cleanouts" },
      {
        type: "p",
        content: [
          "Every summer we get calls from homeowners who tried to haul their own junk to the landfill and ran into problems. The three most common:",
        ],
      },
      {
        type: "ol",
        items: [
          [
            "Refrigerators, freezers, and AC units require refrigerant certification for disposal — you can't just dump them at ",
            {
              text: "OC Landfills",
              href: "https://oclandfills.com/",
              external: true,
            },
            " without proper handling.",
          ],
          ["Paint, chemicals, and hazardous waste can't be curbside-trashed. They require a hazardous waste collection event or drop-off appointment."],
          ["Mattresses and box springs carry a state recycling fee, and most landfills charge extra to accept them."],
        ],
      },
      {
        type: "p",
        content: [
          "This is where a full-service hauler earns its keep. When we take a truckload, we sort, we donate what we can, we recycle metal and electronics separately, and we make sure hazardous items reach the right facilities. Learn more about our ",
          {
            text: "eco-friendly disposal process",
            href: "/about",
          },
          " and why we divert about 75% of what we haul away from landfills.",
        ],
      },
      { type: "h2", text: "Ready to Beat the Heat?" },
      {
        type: "p",
        content: [
          "If your garage, patio, or side yard is stacked with stuff that needs to go, don't wait for triple-digit weekends. See our ",
          {
            text: "full list of services",
            href: "/services",
          },
          ", check our transparent ",
          {
            text: "pricing guide",
            href: "/pricing",
          },
          ", or ",
          {
            text: "book a free on-site quote",
            href: "/contact",
          },
          " — we serve all of Anaheim and the greater OC area.",
        ],
      },
    ],
    relatedInternal: [
      {
        label: "Residential Junk Removal",
        href: "/services",
        description: "Full-service home cleanouts across Orange County.",
      },
      {
        label: "Our Anaheim Service Areas",
        href: "/service-areas",
        description: "See every OC city we cover.",
      },
      {
        label: "Transparent Pricing",
        href: "/pricing",
        description: "No hidden fees. See what a summer cleanout costs.",
      },
    ],
    externalSources: [
      {
        label: "EPA Household Hazardous Waste Guide",
        href: "https://www.epa.gov/hw/household-hazardous-waste-hhw",
        publisher: "U.S. Environmental Protection Agency",
      },
      {
        label: "City of Anaheim Recycling & Waste Programs",
        href: "https://www.anaheim.net/1236/Recycling",
        publisher: "City of Anaheim",
      },
    ],
  },

  // ===================================================================
  // POST 2 — JUNE 2026
  // ===================================================================
  {
    slug: "moving-in-orange-county-junk-removal-checklist",
    title: "Moving in Orange County? The Pre-Move Junk Removal Checklist That Saves You Thousands",
    description:
      "Everything Orange County movers should throw out, donate, or recycle before hiring movers. Save on truck size, hourly labor, and storage — Anaheim junk removal experts explain.",
    excerpt:
      "Movers charge by weight, volume, and hours. Every pound of junk you don't move is money you keep. Here's the pre-move purge checklist we give our Orange County customers.",
    date: "2026-06-14",
    readTime: 8,
    category: "Moving",
    author: opAuthor,
    image: "/blog/moving-boxes.jpg",
    imageAlt: "Stacked moving boxes in an Orange County home ready for relocation",
    tags: ["Moving", "Orange County", "Cleanout", "Checklist"],
    content: [
      {
        type: "p",
        content: [
          "Orange County moves are expensive. According to the ",
          {
            text: "American Moving & Storage Association",
            href: "https://www.moving.org/",
            external: true,
          },
          ", the average local move for a 3-bedroom home runs $1,500–$2,500 — and long-distance jumps to $4,000+. What almost no one tells you: a huge chunk of that cost is transporting things you're going to throw away within six months of unboxing anyway.",
        ],
      },
      {
        type: "p",
        content: [
          "We've done pre-move cleanouts for hundreds of Anaheim, Fullerton, Orange, and Garden Grove families, and the pattern is the same every time. People pack out of habit. They box up broken lamps, mismatched Tupperware, textbooks from 2004, and treadmills that haven't been used since the pandemic — and pay movers to haul it all to a house where it will sit in a garage for another five years.",
        ],
      },
      { type: "h2", text: "The Three-Week Pre-Move Purge Timeline" },
      { type: "h3", text: "3 weeks out: The garage and storage" },
      {
        type: "p",
        content: [
          "Start where the biggest, heaviest items live. Garages and storage units are where 80% of unnecessary weight lives. Pull everything out, sort into keep / donate / haul, and be honest — if you haven't touched it in two years and it's not sentimental, it doesn't move with you.",
        ],
      },
      { type: "h3", text: "2 weeks out: Furniture and appliances" },
      {
        type: "p",
        content: [
          "Any furniture that doesn't fit the new floor plan or is showing serious wear should go. Same for extra appliances — the mini fridge in the garage, the second microwave, the treadmill that's now a coat rack. Movers charge per pound and per cubic foot. A single old sofa can add $100+ to your bill.",
        ],
      },
      { type: "h3", text: "1 week out: Bins, boxes, and the small stuff" },
      {
        type: "p",
        content: [
          "This is the sneaky one. Old paperwork, kitchen gadgets, kids' art projects, and closet clutter add up fast. Do a ruthless pass through every closet and drawer. Anything you're not sure about, ask yourself: would I buy this again today?",
        ],
      },
      { type: "h2", text: "What to Donate vs. What to Toss" },
      {
        type: "p",
        content: [
          "Orange County has excellent donation infrastructure. Before you throw anything usable in a dumpster, check what these organizations accept:",
        ],
      },
      {
        type: "ul",
        items: [
          [
            {
              text: "Goodwill Southern California",
              href: "https://goodwillsocal.org/",
              external: true,
            },
            " — 60+ locations across LA and OC. Takes clothes, small appliances, dishes, books.",
          ],
          [
            {
              text: "Habitat for Humanity ReStore",
              href: "https://www.habitatoc.org/restore/",
              external: true,
            },
            " — furniture, cabinetry, appliances, building materials. They'll often pick up large items free.",
          ],
          [
            {
              text: "Salvation Army Southern California",
              href: "https://socal.salvationarmy.org/",
              external: true,
            },
            " — furniture, clothing, household goods.",
          ],
          ["Local schools and shelters — often need books, art supplies, and kids' clothes."],
        ],
      },
      {
        type: "callout",
        title: "We Sort and Donate for You",
        content: [
          "When we haul a load, we don't take everything to the landfill. About 75% of what we pick up gets recycled or donated. If you're overwhelmed with a pre-move cleanout, we can handle the sorting so you don't have to. ",
          {
            text: "Get a free quote",
            href: "/contact",
          },
          ".",
        ],
      },
      { type: "h2", text: "The Items OC Movers Absolutely Won't Take" },
      {
        type: "p",
        content: [
          "Even if you wanted to move them, most licensed OC moving companies won't load these onto the truck. Plan to dispose of them separately:",
        ],
      },
      {
        type: "ul",
        items: [
          ["Propane tanks (grills, RV, camping)"],
          ["Fuels, oils, gasoline, kerosene"],
          ["Paint, aerosols, cleaning chemicals"],
          ["Fireworks, ammunition, explosives"],
          ["Fertilizer and pesticides"],
          ["Perishable food and open containers"],
          ["Live plants (long-distance moves)"],
        ],
      },
      {
        type: "p",
        content: [
          "The ",
          {
            text: "California Department of Resources Recycling and Recovery (CalRecycle)",
            href: "https://calrecycle.ca.gov/HomeHazWaste/",
            external: true,
          },
          " maintains a searchable directory of household hazardous waste facilities across the state, including several in Orange County.",
        ],
      },
      { type: "h2", text: "How Junk Removal Fits Into Your Moving Budget" },
      {
        type: "p",
        content: [
          "Here's the math we walk customers through. A typical pre-move cleanout with us runs $200–$600 depending on volume. That single truckload usually saves the average OC family a truck size upgrade with their movers (typically $300–$500) and 1–2 hours of moving labor ($200–$400). Do the cleanout, save more than it costs, and unpack into a clean space you'll actually enjoy. See our ",
          {
            text: "transparent pricing",
            href: "/pricing",
          },
          " to plan ahead.",
        ],
      },
      { type: "h2", text: "Book Your Pre-Move Cleanout Early" },
      {
        type: "p",
        content: [
          "Peak moving season in Orange County is May through August. If you're closing on a new place, ",
          {
            text: "get on our schedule",
            href: "/contact",
          },
          " at least 10 days before the move date so we can time the haul between your packing and your movers' arrival. We cover ",
          {
            text: "every OC city",
            href: "/service-areas",
          },
          " including Anaheim, Fullerton, Orange, Garden Grove, Santa Ana, and Irvine.",
        ],
      },
    ],
    relatedInternal: [
      {
        label: "Full Service List",
        href: "/services",
        description: "From single-item pickups to full-house cleanouts.",
      },
      {
        label: "Pricing",
        href: "/pricing",
        description: "Transparent pricing by volume — no surprises on move day.",
      },
      {
        label: "OC Service Areas",
        href: "/service-areas",
        description: "See our full Orange County coverage map.",
      },
    ],
    externalSources: [
      {
        label: "CalRecycle Household Hazardous Waste",
        href: "https://calrecycle.ca.gov/HomeHazWaste/",
        publisher: "CalRecycle",
      },
      {
        label: "Habitat for Humanity Orange County ReStore",
        href: "https://www.habitatoc.org/restore/",
        publisher: "Habitat for Humanity of Orange County",
      },
    ],
  },

  // ===================================================================
  // POST 3 — MAY 2026
  // ===================================================================
  {
    slug: "spring-cleaning-southern-california-toss-donate-recycle",
    title: "Spring Cleaning in Southern California: What to Toss, Donate, and Recycle in 2026",
    description:
      "A room-by-room spring cleaning guide for Anaheim & Orange County. What to donate, what to recycle at the curb, and when to call for professional junk removal.",
    excerpt:
      "A room-by-room spring cleaning breakdown for Anaheim homes: what's actually donatable, what needs special recycling, and where the line is between DIY and calling in a truck.",
    date: "2026-05-10",
    readTime: 6,
    category: "Seasonal",
    author: opAuthor,
    image: "/blog/spring-cleaning.jpg",
    imageAlt: "Spring cleaning supplies and organized boxes in a bright Southern California home",
    tags: ["Spring Cleaning", "Recycling", "Donation", "Anaheim"],
    content: [
      {
        type: "p",
        content: [
          "Spring cleaning in Southern California is different than the rest of the country. We don't shovel out from a winter of hibernation — we prep our homes for six months of nonstop indoor-outdoor living. Beach trips, patio dinners, backyard barbecues, and pool parties all require open floor space, functional garages, and clean patios. That means April and May are the two highest-volume months for junk removal in Anaheim, and we've built this checklist from thousands of hours in local homes.",
        ],
      },
      { type: "h2", text: "Room-by-Room Spring Cleaning" },
      { type: "h3", text: "Kitchen" },
      {
        type: "ul",
        items: [
          ["Small appliances you haven't used in 12 months (bread maker, waffle iron, third slow cooker)"],
          ["Chipped or mismatched dishes and Tupperware without lids"],
          ["Expired pantry items (check dates on spices, canned goods, oils)"],
          ["Cookbooks you never open — most recipes live on your phone now"],
        ],
      },
      { type: "h3", text: "Living areas" },
      {
        type: "ul",
        items: [
          ["Old electronics — TVs, DVD players, tangled cables, retired laptops"],
          ["Rugs, throw pillows, and decor that's faded or torn"],
          ["Magazines, catalogs, and unread mail piles"],
          ["Furniture that no longer fits the space or the family"],
        ],
      },
      { type: "h3", text: "Bedrooms & closets" },
      {
        type: "ul",
        items: [
          ["Clothes you haven't worn in 18 months (donate to Goodwill or the Salvation Army)"],
          ["Broken hangers, orphaned shoes, worn-out linens"],
          ["Old mattresses, box springs, and pillows (see mattress recycling below)"],
          ["Kids' outgrown clothes, toys, and school supplies"],
        ],
      },
      { type: "h3", text: "Garage, patio & yard" },
      {
        type: "ul",
        items: [
          ["Rusted patio furniture and broken umbrellas"],
          ["Old grills, propane tanks (drop at hazardous waste facility)"],
          ["Pool toys, deflated floats, cracked buckets"],
          ["Broken bikes, unused sports gear, unfinished projects"],
        ],
      },
      { type: "h2", text: "The Big Three: Mattresses, Electronics, and Appliances" },
      {
        type: "p",
        content: [
          "These are the items that trip up most DIY spring cleaners in Orange County.",
        ],
      },
      { type: "h3", text: "Mattresses & box springs" },
      {
        type: "p",
        content: [
          "California's ",
          {
            text: "Used Mattress Recovery and Recycling Act",
            href: "https://calrecycle.ca.gov/mattresses/",
            external: true,
          },
          " means every mattress sold in the state includes a recycling fee — and there are free drop-off locations across Anaheim and OC. Most retailers offer haul-away with new mattress purchase, but if you're not buying a replacement, we can pick it up as part of any junk load.",
        ],
      },
      { type: "h3", text: "Electronics (e-waste)" },
      {
        type: "p",
        content: [
          "TVs, monitors, laptops, printers, and cables are e-waste — they cannot go in curbside trash. The ",
          {
            text: "EPA's Sustainable Materials Management program",
            href: "https://www.epa.gov/smm-electronics",
            external: true,
          },
          " outlines proper e-waste handling. In Anaheim, Best Buy and Staples offer free small e-waste drop-off, and the city hosts periodic e-waste events. For volume (5+ items), a junk hauler is faster.",
        ],
      },
      { type: "h3", text: "Refrigerators, freezers, and window ACs" },
      {
        type: "p",
        content: [
          "These contain refrigerant that must be reclaimed by an EPA-certified technician before scrapping. We handle this on our end — you don't have to hunt down a specialist.",
        ],
      },
      {
        type: "callout",
        title: "One Truck, One Trip",
        content: [
          "If your spring cleanout pile has a mix of e-waste, furniture, mattresses, and appliances, don't drive across town four times. Book a single ",
          {
            text: "SoCal Junk Co pickup",
            href: "/contact",
          },
          " — we sort everything on the back end so you don't have to.",
        ],
      },
      { type: "h2", text: "The Sustainability Angle" },
      {
        type: "p",
        content: [
          "Spring cleaning shouldn't just be about filling a landfill. We divert roughly 75% of everything we haul — donating to ",
          {
            text: "Habitat ReStore",
            href: "https://www.habitatoc.org/restore/",
            external: true,
          },
          " and Goodwill, recycling metals and electronics, and only landfilling what truly can't be reused. Read more about ",
          {
            text: "our eco-friendly approach",
            href: "/about",
          },
          " and why customers pick us over the cheap operators.",
        ],
      },
      { type: "h2", text: "Ready for a Real Spring Reset?" },
      {
        type: "p",
        content: [
          "Whether it's a single garage cleanout or a whole-house purge, we serve every corner of Orange County. See our ",
          {
            text: "residential services",
            href: "/services",
          },
          " or ",
          {
            text: "request a free quote",
            href: "/contact",
          },
          ".",
        ],
      },
    ],
    relatedInternal: [
      {
        label: "Residential Junk Removal",
        href: "/services",
        description: "Room-by-room home cleanouts.",
      },
      {
        label: "About SoCal Junk Co",
        href: "/about",
        description: "Learn about our recycle-first process.",
      },
      {
        label: "Pricing",
        href: "/pricing",
        description: "See what a spring cleanout typically costs.",
      },
    ],
    externalSources: [
      {
        label: "CalRecycle Mattress Recycling Program",
        href: "https://calrecycle.ca.gov/mattresses/",
        publisher: "CalRecycle",
      },
      {
        label: "EPA Sustainable Management of Electronics",
        href: "https://www.epa.gov/smm-electronics",
        publisher: "U.S. Environmental Protection Agency",
      },
    ],
  },

  // ===================================================================
  // POST 4 — APRIL 2026 (Earth Day)
  // ===================================================================
  {
    slug: "earth-day-2026-anaheim-junk-diversion-recycling",
    title: "Earth Day 2026: How Anaheim Junk Removal Diverts 75% From Landfills",
    description:
      "How our Anaheim junk removal service diverts 75% of hauled material from landfills through donation, recycling, and responsible disposal. An Earth Day 2026 look at local waste.",
    excerpt:
      "Landfills aren't the only place junk goes. Here's exactly what happens to your old furniture, electronics, and appliances when we haul them away — and why it matters for Orange County.",
    date: "2026-04-19",
    readTime: 6,
    category: "Sustainability",
    author: opAuthor,
    image: "/blog/earth-day-recycling.jpg",
    imageAlt: "Recycling bins and sustainable waste sorting for Earth Day in Orange County",
    tags: ["Earth Day", "Sustainability", "Recycling", "Eco-Friendly"],
    content: [
      {
        type: "p",
        content: [
          "Earth Day 2026 falls on Wednesday, April 22, and this year's theme continues the ",
          {
            text: "Planet vs. Plastics",
            href: "https://www.earthday.org/",
            external: true,
          },
          " push — a call for a 60% reduction in plastic production by 2040. That mission hits close to home for a junk removal company. Every couch, cabinet, and appliance we pick up represents an environmental choice: does it go to a landfill, or does it get one more chapter?",
        ],
      },
      {
        type: "p",
        content: [
          "At SoCal Junk Co, we divert about 75% of every truckload from Orange County landfills. Here's how — and why we think it should be the industry standard.",
        ],
      },
      { type: "h2", text: "The 75% Breakdown: Where Your Junk Actually Goes" },
      { type: "h3", text: "About 30% — donation" },
      {
        type: "p",
        content: [
          "Sofas, dining sets, dressers, working appliances, kids' toys, tools, and building materials in decent shape go to Orange County donation partners: Habitat for Humanity ReStore, Goodwill Southern California, and the Salvation Army. That furniture then furnishes a low-income home, funds a job-training program, or gets sold to keep a nonprofit running.",
        ],
      },
      { type: "h3", text: "About 25% — recycling" },
      {
        type: "p",
        content: [
          "Metals (grills, tools, wire, appliances) go to scrap. Cardboard and paper to fiber recyclers. E-waste to certified processors. Mattresses to the ",
          {
            text: "California mattress recycling program",
            href: "https://calrecycle.ca.gov/mattresses/",
            external: true,
          },
          " where the steel, foam, cotton, and wood are all recovered separately.",
        ],
      },
      { type: "h3", text: "About 20% — reuse" },
      {
        type: "p",
        content: [
          "Construction debris (bricks, wood, tile) often has a second life. Yard waste becomes compost or mulch. Pallets and shipping crates get reused by local businesses.",
        ],
      },
      { type: "h3", text: "About 25% — landfill" },
      {
        type: "p",
        content: [
          "Some things simply can't be recycled or reused: broken particle board furniture, soiled mattresses, mixed-material items that can't be separated economically. We landfill only what has no better option.",
        ],
      },
      {
        type: "callout",
        title: "Why This Matters in Orange County",
        content: [
          "Orange County landfilled roughly 4 million tons of waste in 2023, according to CalRecycle's disposal reports. Every diverted truckload keeps a small but real slice of that out of the ground — and out of the methane emissions that come with buried organic waste.",
        ],
      },
      { type: "h2", text: "What Households Can Do Right Now" },
      {
        type: "p",
        content: [
          "You don't have to hire a hauler to make a dent. A few Earth Day habits that matter:",
        ],
      },
      {
        type: "ol",
        items: [
          [
            "Learn what's actually recyclable in your city. The ",
            {
              text: "City of Anaheim's recycling guide",
              href: "https://www.anaheim.net/1236/Recycling",
              external: true,
            },
            " has clear breakdowns of curbside and drop-off streams.",
          ],
          ["Donate before dumping. If it works or looks presentable, someone can use it."],
          ["Ask questions when you hire haulers. Cheap operators often haul straight to the landfill because it's fastest."],
          ["Compost yard waste. Anaheim residents get a free green cart specifically for this."],
          ["Repair before replacing. Reupholstery is often 30% of new furniture cost."],
        ],
      },
      { type: "h2", text: "Ask Your Hauler These Three Questions" },
      {
        type: "p",
        content: [
          "Not all junk removal companies are the same. If sustainability matters to you, before booking anyone, ask:",
        ],
      },
      {
        type: "ol",
        items: [
          ["What percentage of what you haul gets donated or recycled?"],
          ["Which local donation partners do you use?"],
          ["How do you handle e-waste and appliances with refrigerant?"],
        ],
      },
      {
        type: "p",
        content: [
          "If they can't answer, that's a red flag. Read more about ",
          {
            text: "how we do it differently",
            href: "/about",
          },
          " and see our full ",
          {
            text: "list of services",
            href: "/services",
          },
          ".",
        ],
      },
      { type: "h2", text: "Book a Green Cleanout This Month" },
      {
        type: "p",
        content: [
          "Celebrate Earth Day with a purge that actually helps. We serve ",
          {
            text: "all of Orange County",
            href: "/service-areas",
          },
          " — from Anaheim and Fullerton to Irvine and Costa Mesa. ",
          {
            text: "Request a free quote",
            href: "/contact",
          },
          " today.",
        ],
      },
    ],
    relatedInternal: [
      {
        label: "About Our Eco-Friendly Process",
        href: "/about",
        description: "Learn how we divert 75% of loads from landfills.",
      },
      {
        label: "All Services",
        href: "/services",
        description: "See what we haul across OC.",
      },
      {
        label: "Service Areas",
        href: "/service-areas",
        description: "Every OC city we cover.",
      },
    ],
    externalSources: [
      {
        label: "EarthDay.org — Planet vs. Plastics",
        href: "https://www.earthday.org/",
        publisher: "EARTHDAY.ORG",
      },
      {
        label: "CalRecycle Disposal Reporting",
        href: "https://calrecycle.ca.gov/lgcentral/reports/",
        publisher: "CalRecycle",
      },
    ],
  },

  // ===================================================================
  // POST 5 — MARCH 2026
  // ===================================================================
  {
    slug: "garage-cleanout-guide-orange-county-homeowners",
    title: "The Orange County Homeowner's Garage Cleanout Guide (2026)",
    description:
      "A proven 5-step garage cleanout system for Orange County homes. From Anaheim to Irvine — sort, donate, recycle, haul, and organize your garage before summer.",
    excerpt:
      "Most OC garages are storing $200 worth of usable space under $2,000 of stuff no one uses. Here's the 5-step system we walk our customers through every March.",
    date: "2026-03-15",
    readTime: 7,
    category: "How-To",
    author: opAuthor,
    image: "/blog/garage-cleanout.jpg",
    imageAlt: "Cluttered garage in an Orange County home ready for cleanout",
    tags: ["Garage", "How-To", "Organization", "Orange County"],
    content: [
      {
        type: "p",
        content: [
          "Ask any OC homeowner what one project has been on their to-do list the longest, and 8 out of 10 will say 'the garage.' It's the number one call we get in March, right when spring weather makes it bearable to work in there again. Here's the exact system we walk families through.",
        ],
      },
      { type: "h2", text: "Step 1 — Set the Boundary (Two Days, Not Two Weeks)" },
      {
        type: "p",
        content: [
          "The biggest mistake homeowners make is treating the garage as an ongoing project. It never ends. Block two days on the calendar — usually a Saturday and Sunday — and commit to finishing in that window. If you can't finish in two days, you have too much stuff to sort alone. That's when we come in.",
        ],
      },
      { type: "h2", text: "Step 2 — Empty Everything Onto the Driveway" },
      {
        type: "p",
        content: [
          "This is non-negotiable. You cannot reorganize a garage while items are still inside it. Pull it all out. Yes, all of it. Seeing everything laid out in daylight is what makes the sorting decisions obvious.",
        ],
      },
      {
        type: "callout",
        title: "Pro Tip: Start Early",
        content: [
          "Anaheim garages get hot fast, even in March. Start at 7 AM. By noon you'll want to be done with the heavy lifting.",
        ],
      },
      { type: "h2", text: "Step 3 — Sort Into Five Piles" },
      {
        type: "ul",
        items: [
          ["Keep and organize — used in the last 12 months, still functional"],
          ["Donate — usable, but you don't need it (bikes, tools, furniture, sports gear)"],
          ["Recycle — cardboard, metal, electronics, paint (with proper handling)"],
          ["Hazardous — chemicals, paint, oils, batteries, propane"],
          ["Junk — broken, water-damaged, missing parts, no clear owner"],
        ],
      },
      { type: "h2", text: "Step 4 — Handle the Hazardous Stuff Correctly" },
      {
        type: "p",
        content: [
          "This is where DIYers get in trouble. Old paint, motor oil, propane tanks, pool chemicals, pesticides, and batteries cannot go in your regular trash. Orange County residents can drop these free at official ",
          {
            text: "OC Waste & Recycling household hazardous waste collection centers",
            href: "https://oclandfills.com/household-hazardous-waste",
            external: true,
          },
          " — there are locations in Anaheim, Huntington Beach, Irvine, and San Juan Capistrano. Bring ID showing OC residency.",
        ],
      },
      { type: "h2", text: "Step 5 — Book the Haul Before You Reorganize" },
      {
        type: "p",
        content: [
          "Do not — under any circumstances — put items you plan to donate or throw away back into the garage 'for now.' They will stay there for another five years. Get the junk pile off the driveway the same day you sort. Schedule us for the afternoon of your cleanout so we haul straight from the driveway. See our ",
          {
            text: "residential services",
            href: "/services",
          },
          ".",
        ],
      },
      { type: "h2", text: "What Belongs in an OC Garage — and What Doesn't" },
      { type: "h3", text: "Belongs" },
      {
        type: "ul",
        items: [
          ["Cars (novel concept, we know)"],
          ["Tools you use quarterly or more often"],
          ["Sports/outdoor gear in current use"],
          ["Seasonal decor in labeled, sealed bins"],
          ["Yard equipment"],
        ],
      },
      { type: "h3", text: "Doesn't belong" },
      {
        type: "ul",
        items: [
          ["Paint (deteriorates fast in SoCal garage heat)"],
          ["Photos, books, textiles (heat & humidity ruin them)"],
          ["Electronics in original boxes (heat kills batteries)"],
          ["Anything you'd be sad to lose in a garage fire"],
          ["The elliptical you'll 'get back to next month'"],
        ],
      },
      { type: "h2", text: "The Financial Case for a Real Cleanout" },
      {
        type: "p",
        content: [
          "The average OC two-car garage is 400 square feet. Homes with usable garage storage sell for measurably more than homes where the buyer sees a hoarding situation. Even if you're not selling, that same 400 square feet costs you about $200/month in property value tied up in unusable space. Doing this once every few years is the highest-ROI weekend project a homeowner can do.",
        ],
      },
      { type: "h2", text: "Overwhelmed? We Do Full-Service Garage Cleanouts" },
      {
        type: "p",
        content: [
          "If the thought of pulling everything out onto the driveway makes you want to keep the door closed for another year, we get it. We do full-service cleanouts where our crew does the sorting for you — you just point at what to keep. ",
          {
            text: "Get a free on-site quote",
            href: "/contact",
          },
          " or check our ",
          {
            text: "pricing",
            href: "/pricing",
          },
          ".",
        ],
      },
    ],
    relatedInternal: [
      {
        label: "Residential Junk Removal",
        href: "/services",
        description: "Full-service garage and home cleanouts.",
      },
      {
        label: "Pricing",
        href: "/pricing",
        description: "See what a garage cleanout typically costs.",
      },
      {
        label: "Service Areas",
        href: "/service-areas",
        description: "OC coverage from Anaheim to Irvine.",
      },
    ],
    externalSources: [
      {
        label: "OC Waste & Recycling — Household Hazardous Waste",
        href: "https://oclandfills.com/household-hazardous-waste",
        publisher: "OC Waste & Recycling",
      },
      {
        label: "CalRecycle Home Hazardous Waste Facilities",
        href: "https://calrecycle.ca.gov/HomeHazWaste/",
        publisher: "CalRecycle",
      },
    ],
  },

  // ===================================================================
  // POST 6 — FEBRUARY 2026
  // ===================================================================
  {
    slug: "estate-cleanout-services-anaheim-compassionate-guide",
    title: "Estate Cleanout Services in Anaheim: A Compassionate Guide for Families",
    description:
      "How to approach an estate cleanout in Anaheim & Orange County after the loss of a loved one. Timelines, sorting strategies, valuables, donations, and when to hire professional help.",
    excerpt:
      "Clearing out a family home after a loss is one of the hardest jobs anyone will ever do. Here's how our Anaheim team helps families work through it — step by step, without pressure.",
    date: "2026-02-11",
    readTime: 8,
    category: "Estate Services",
    author: opAuthor,
    image: "/blog/estate-cleanout.jpg",
    imageAlt: "Family home interior during a compassionate estate cleanout in Anaheim",
    tags: ["Estate", "Cleanout", "Family", "Anaheim"],
    content: [
      {
        type: "p",
        content: [
          "Estate cleanouts are the most emotionally difficult jobs we do. A parent or grandparent passes, a family home needs to be cleared, and someone — usually one adult child — has to make hundreds of decisions about what to keep, what to donate, and what to let go. There is no rushing this, and any junk removal company that tries to rush you shouldn't be trusted with the job.",
        ],
      },
      {
        type: "p",
        content: [
          "We've handled estate cleanouts across Anaheim, Fullerton, Orange, Garden Grove, and Yorba Linda for a decade. What follows is our honest guide — including when a professional service is the right call, and when it's not.",
        ],
      },
      { type: "h2", text: "Give Yourself Time Before Anyone Touches Anything" },
      {
        type: "p",
        content: [
          "The first practical mistake families make is starting too soon. Unless a probate deadline or a sale timeline requires it, take at least 30 days before you begin sorting. Grief affects decision-making. Items that feel meaningless in week one can be irreplaceable in month six. And what feels urgent to keep in week one is often what you regret storing in year two.",
        ],
      },
      {
        type: "p",
        content: [
          "The ",
          {
            text: "AARP's guide to handling a loved one's estate",
            href: "https://www.aarp.org/home-family/friends-family/info-2020/cleaning-out-parents-home.html",
            external: true,
          },
          " has helpful timelines and family-communication frameworks that we recommend to every client who asks.",
        ],
      },
      { type: "h2", text: "Do the Legal Steps First" },
      {
        type: "ol",
        items: [
          ["Locate the will and any trust documents"],
          ["Identify the executor or trustee"],
          ["Check with an estate attorney before removing anything of potential value"],
          ["Photograph rooms before any sorting begins"],
          ["Notify all beneficiaries of the timeline"],
        ],
      },
      {
        type: "p",
        content: [
          "This protects the family and, honestly, protects us too. We won't touch a home until the executor confirms clearance to begin.",
        ],
      },
      { type: "h2", text: "The Four Categories of Estate Items" },
      { type: "h3", text: "1. Family keepsakes" },
      {
        type: "p",
        content: [
          "Photos, letters, jewelry, small heirlooms. Have every family member walk through and flag items in this category first. Not everything is expensive to be meaningful.",
        ],
      },
      { type: "h3", text: "2. Items with financial value" },
      {
        type: "p",
        content: [
          "Antiques, artwork, silver, coins, collectibles. If you're unsure of value, an estate sale company or appraiser is worth the fee. Do this before anyone donates or hauls.",
        ],
      },
      { type: "h3", text: "3. Donatable everyday items" },
      {
        type: "p",
        content: [
          "Furniture, kitchenware, clothing, tools, linens in usable shape. These go to ",
          {
            text: "Habitat for Humanity ReStore",
            href: "https://www.habitatoc.org/restore/",
            external: true,
          },
          ", ",
          {
            text: "Goodwill",
            href: "https://goodwillsocal.org/",
            external: true,
          },
          ", or the Salvation Army. We handle the drop-offs as part of a full-service estate cleanout so families don't have to.",
        ],
      },
      { type: "h3", text: "4. Junk" },
      {
        type: "p",
        content: [
          "Broken furniture, water-damaged items, expired chemicals, decades of accumulated basement or garage clutter. This is where our trucks earn their keep.",
        ],
      },
      { type: "h2", text: "How a Full-Service Estate Cleanout Works With Us" },
      {
        type: "ol",
        items: [
          ["Free on-site consultation with a family member — no pressure, no timeline demands"],
          ["Written estimate before any work begins"],
          ["Family walks through and flags anything to keep, sell, or set aside"],
          ["Our crew handles the sorting, hauling, donation drop-offs, and recycling"],
          ["Home is left broom-clean and ready for sale or next chapter"],
        ],
      },
      {
        type: "callout",
        title: "We Move at Your Pace",
        content: [
          "We do multi-day estate cleanouts. Some families want it done in one weekend. Others need three weeks and a room-by-room approach. Both are fine with us. ",
          {
            text: "Reach out for a private consultation",
            href: "/contact",
          },
          ".",
        ],
      },
      { type: "h2", text: "What We Never Do" },
      {
        type: "ul",
        items: [
          ["Rush a family through decisions"],
          ["Discard anything without written approval"],
          ["Charge for a walkthrough or consultation"],
          ["Take shortcuts on donation drop-offs to save time"],
          ["Treat a family home like a demolition job"],
        ],
      },
      { type: "h2", text: "Our Anaheim Estate Cleanout Team Is Here When You're Ready" },
      {
        type: "p",
        content: [
          "If your family is facing an estate cleanout in Anaheim or anywhere in Orange County, we're available for a free, no-pressure consultation whenever the time is right. Learn more about our ",
          {
            text: "estate cleanout service",
            href: "/services",
          },
          " or ",
          {
            text: "reach out privately",
            href: "/contact",
          },
          ". You can also read about ",
          {
            text: "who we are and how we work",
            href: "/about",
          },
          ".",
        ],
      },
    ],
    relatedInternal: [
      {
        label: "Estate & Hoarding Cleanouts",
        href: "/services",
        description: "Compassionate, no-pressure estate cleanout service.",
      },
      {
        label: "About Our Team",
        href: "/about",
        description: "Learn about the people behind SoCal Junk Co.",
      },
      {
        label: "Contact",
        href: "/contact",
        description: "Book a private consultation.",
      },
    ],
    externalSources: [
      {
        label: "AARP — Cleaning Out a Parent's Home",
        href: "https://www.aarp.org/home-family/friends-family/info-2020/cleaning-out-parents-home.html",
        publisher: "AARP",
      },
      {
        label: "Habitat for Humanity Orange County ReStore",
        href: "https://www.habitatoc.org/restore/",
        publisher: "Habitat for Humanity of Orange County",
      },
    ],
  },

  // ===================================================================
  // POST 7 — JANUARY 2026
  // ===================================================================
  {
    slug: "new-year-declutter-anaheim-home-2026",
    title: "New Year, New Space: How to Declutter Your Anaheim Home in 2026",
    description:
      "A realistic 2026 decluttering plan for Anaheim & Orange County homes. Habit-based, room-by-room, and paired with local donation and haul-away resources.",
    excerpt:
      "Forget the 30-day minimalism challenge. Here's a realistic, sustainable decluttering plan for Anaheim families in 2026 — plus the local donation and haul-away resources that make it stick.",
    date: "2026-01-14",
    readTime: 7,
    category: "Home Organization",
    author: opAuthor,
    image: "/blog/declutter-home.jpg",
    imageAlt: "Minimalist decluttered Anaheim living room in the new year",
    tags: ["Declutter", "New Year", "Anaheim", "Home"],
    content: [
      {
        type: "p",
        content: [
          "Every January, decluttering makes the resolution list. Every February, most of us have quietly given up. The problem isn't laziness — it's that popular decluttering advice assumes you have the time and energy of a Netflix host. In real Anaheim life, between work, kids, and everything else, you get maybe two hours a week to actually do this. Here's a system that respects that.",
        ],
      },
      { type: "h2", text: "The 2026 Realistic Decluttering Framework" },
      {
        type: "p",
        content: [
          "The premise: don't try to declutter your whole house. Try to declutter one drawer, one closet, one corner per week. Twelve weeks in and you've cleared a full room. Fifty-two weeks in and you've done the whole house — sustainably, without ever having to face a 'giant driveway sort day' that ruins a weekend.",
        ],
      },
      { type: "h2", text: "The Weekly Ritual (30 Minutes)" },
      {
        type: "ol",
        items: [
          ["Pick one area — a drawer, one shelf, one closet section"],
          ["Empty it completely"],
          ["Wipe it clean"],
          ["Only put back what you actively use, love, or need"],
          ["Everything else goes in a labeled bin: donate, recycle, trash"],
          ["Take donations to the car right away — do not leave them 'for later'"],
        ],
      },
      {
        type: "callout",
        title: "The 'Later' Trap",
        content: [
          "The single biggest reason declutter attempts fail: staging bags in the garage 'for donation' that never actually leave the garage. If you find yourself with more than one bag waiting, put them in the car right now.",
        ],
      },
      { type: "h2", text: "The 12-Week Rotation for Anaheim Homes" },
      { type: "h3", text: "Weeks 1–3: Kitchen" },
      {
        type: "ul",
        items: [
          ["Junk drawer, then utensil drawer, then Tupperware cabinet"],
          ["Pantry (check dates on everything)"],
          ["Small appliance shelf (donate anything not used in 6 months)"],
        ],
      },
      { type: "h3", text: "Weeks 4–6: Closets" },
      {
        type: "ul",
        items: [
          ["Master bedroom closet — one section at a time"],
          ["Linen closet (donate old towels to animal shelters)"],
          ["Kids' closets (bag outgrown clothes for Goodwill)"],
        ],
      },
      { type: "h3", text: "Weeks 7–9: Home office & paperwork" },
      {
        type: "ul",
        items: [
          ["Filing cabinet (shred anything older than 7 years, per IRS)"],
          ["Desk drawers"],
          ["Old electronics and cables (e-waste drop-off)"],
        ],
      },
      { type: "h3", text: "Weeks 10–12: Living areas" },
      {
        type: "ul",
        items: [
          ["Bookshelves (donate books to the ",
            {
              text: "OC Public Libraries book donation program",
              href: "https://ocpl.org/about/donations",
              external: true,
            },
            ")",
          ],
          ["Media console (donate old DVDs, CDs, gaming gear)"],
          ["Coffee table drawers, side tables"],
        ],
      },
      { type: "h2", text: "Where to Take Everything in Orange County" },
      {
        type: "p",
        content: [
          "Your donation and recycling map for 2026:",
        ],
      },
      {
        type: "ul",
        items: [
          [
            {
              text: "Goodwill Southern California",
              href: "https://goodwillsocal.org/",
              external: true,
            },
            " — clothes, kitchenware, small appliances",
          ],
          [
            {
              text: "Habitat ReStore",
              href: "https://www.habitatoc.org/restore/",
              external: true,
            },
            " — furniture, cabinets, building materials",
          ],
          [
            "OC Public Libraries — books in good condition",
          ],
          [
            "Best Buy — small electronics, batteries, ink cartridges",
          ],
          [
            {
              text: "OC Household Hazardous Waste Centers",
              href: "https://oclandfills.com/household-hazardous-waste",
              external: true,
            },
            " — paint, chemicals, batteries",
          ],
        ],
      },
      { type: "h2", text: "When It's Time for a Real Cleanout" },
      {
        type: "p",
        content: [
          "The 30-minute weekly ritual works great for maintenance. But if you're staring down a decade of accumulated stuff — a garage, a basement, a parent's home — a weekly drawer isn't going to cut it. That's when you call us. See our ",
          {
            text: "residential cleanout services",
            href: "/services",
          },
          ", check ",
          {
            text: "pricing",
            href: "/pricing",
          },
          ", and ",
          {
            text: "book a free quote",
            href: "/contact",
          },
          ".",
        ],
      },
      { type: "h2", text: "The Real Secret to Sticking With It" },
      {
        type: "p",
        content: [
          "Nothing stays decluttered without a rule. Adopt the 'one in, one out' rule for 2026: for every item you bring home, one item leaves. Do that and by January 2027, your Anaheim home will feel radically different without any single dramatic weekend of work.",
        ],
      },
    ],
    relatedInternal: [
      {
        label: "Residential Cleanout Services",
        href: "/services",
        description: "When the weekly ritual isn't enough.",
      },
      {
        label: "Pricing",
        href: "/pricing",
        description: "Transparent pricing for any cleanout size.",
      },
      {
        label: "About Us",
        href: "/about",
        description: "How we help OC homes reset.",
      },
    ],
    externalSources: [
      {
        label: "OC Public Libraries Donations",
        href: "https://ocpl.org/about/donations",
        publisher: "Orange County Public Libraries",
      },
      {
        label: "OC Household Hazardous Waste Program",
        href: "https://oclandfills.com/household-hazardous-waste",
        publisher: "OC Waste & Recycling",
      },
    ],
  },

  // ===================================================================
  // POST 8 — DECEMBER 2025
  // ===================================================================
  {
    slug: "post-holiday-junk-removal-anaheim-christmas-tree-packaging",
    title: "Post-Holiday Junk Removal: Anaheim's Guide to Trees, Packaging & Gift Debris",
    description:
      "Post-holiday cleanup in Anaheim & Orange County. Christmas tree recycling, gift box mountains, wrapping paper, packing peanuts, and how to reset your home for the new year.",
    excerpt:
      "By December 28th, most Anaheim homes look like a wrapping paper crime scene. Here's how to reset — from the tree at the curb to the mountain of Amazon boxes.",
    date: "2025-12-27",
    readTime: 6,
    category: "Seasonal",
    author: opAuthor,
    image: "/blog/holiday-junk.jpg",
    imageAlt: "Christmas tree and holiday packaging waste ready for pickup in Anaheim",
    tags: ["Holidays", "Christmas Tree", "Recycling", "December"],
    content: [
      {
        type: "p",
        content: [
          "The week between Christmas and New Year's is peak junk season in Anaheim. Trees dry out, gift boxes pile up, and half the appliances you got as gifts have replaced older ones that now need to go. It's also the week most people forget to actually schedule pickups before the year rolls over. Here's the practical breakdown.",
        ],
      },
      { type: "h2", text: "Christmas Trees: The 3-Day Rule" },
      {
        type: "p",
        content: [
          "Once a tree stops absorbing water, it dries fast — especially in SoCal's dry December air. A dry tree is a fire hazard, and Anaheim Fire & Rescue puts out at least a handful of Christmas tree fires every year. The rule: take your tree down within 3 days of it going dry.",
        ],
      },
      {
        type: "p",
        content: [
          "The ",
          {
            text: "City of Anaheim's Christmas tree recycling program",
            href: "https://www.anaheim.net/1236/Recycling",
            external: true,
          },
          " typically runs curbside collection during the first two weeks of January — check current dates on the city site. Trees are chipped into mulch and reused. Rules:",
        ],
      },
      {
        type: "ul",
        items: [
          ["Remove all lights, ornaments, tinsel, and tree stand"],
          ["Cut trees over 6 feet in half"],
          ["Flocked trees are usually not accepted (check with your hauler)"],
          ["Artificial trees are not curbside recyclable — donate or bag as trash"],
        ],
      },
      { type: "h2", text: "The Wrapping Paper & Gift Box Mountain" },
      {
        type: "p",
        content: [
          "Not all wrapping paper is recyclable. The ",
          {
            text: "EPA's guide on holiday recycling",
            href: "https://www.epa.gov/recycle/reduce-reuse-and-recycle-options-holidays",
            external: true,
          },
          " lays out what belongs where. The short version:",
        ],
      },
      {
        type: "ul",
        items: [
          ["Plain paper wrapping — recycle in curbside blue bin"],
          ["Foil, metallic, or plastic-coated wrap — trash (do not recycle)"],
          ["Tissue paper — technically compostable, but check curbside guidelines"],
          ["Cardboard boxes — flatten and recycle (never in the blue bin whole)"],
          ["Bubble wrap and packing peanuts — return to a UPS Store, they reuse them"],
        ],
      },
      {
        type: "callout",
        title: "The Amazon Box Situation",
        content: [
          "December Amazon deliveries produce roughly 3x more cardboard than any other month. Flatten every box, and if you exceed your curbside bin, we do bulk cardboard pickup. ",
          {
            text: "Get a free quote",
            href: "/contact",
          },
          ".",
        ],
      },
      { type: "h2", text: "The Gifts That Replaced Older Items" },
      {
        type: "p",
        content: [
          "This is the year's biggest source of hidden junk: gifts that replaced existing items. New TV? The old one needs to go. New coffee maker? So does the old one. New mattress? The old set becomes a state-fee-required disposal. New sofa? See you next year with the old couch on the curb.",
        ],
      },
      {
        type: "p",
        content: [
          "Don't let 'I'll deal with it later' turn into six months of clutter. Book a single haul in the first week of January while everything is still by the curb or in the garage from the swap. See our ",
          {
            text: "furniture and appliance removal service",
            href: "/services",
          },
          ".",
        ],
      },
      { type: "h2", text: "The New Year's Reset" },
      {
        type: "p",
        content: [
          "By January 5th or so, most Anaheim families are ready to be done with December. A clean living room, empty entryway, and clutter-free garage are the fastest way to feel like the new year has actually started. Here's the standard end-of-holidays haul we schedule for OC families:",
        ],
      },
      {
        type: "ol",
        items: [
          ["Tree removal (if curbside program has ended)"],
          ["Old TV, appliance, or furniture that a gift replaced"],
          ["Broken outdoor decorations"],
          ["Cardboard mountain from gift shipping"],
          ["Any lingering junk from November's Thanksgiving prep that never got hauled"],
        ],
      },
      { type: "h2", text: "Book Before the January Rush" },
      {
        type: "p",
        content: [
          "The first two weeks of January are our busiest of the entire year. Book ahead in late December to lock in your preferred slot. See ",
          {
            text: "pricing",
            href: "/pricing",
          },
          " or ",
          {
            text: "book a free quote",
            href: "/contact",
          },
          ". We serve ",
          {
            text: "all of Orange County",
            href: "/service-areas",
          },
          ".",
        ],
      },
    ],
    relatedInternal: [
      {
        label: "Furniture & Appliance Removal",
        href: "/services",
        description: "Haul the old sofa, TV, or fridge that a gift replaced.",
      },
      {
        label: "Pricing",
        href: "/pricing",
        description: "Transparent pricing for holiday cleanouts.",
      },
      {
        label: "Service Areas",
        href: "/service-areas",
        description: "OC coverage from Anaheim to Newport.",
      },
    ],
    externalSources: [
      {
        label: "EPA Reduce, Reuse, Recycle for the Holidays",
        href: "https://www.epa.gov/recycle/reduce-reuse-and-recycle-options-holidays",
        publisher: "U.S. Environmental Protection Agency",
      },
      {
        label: "City of Anaheim Recycling Programs",
        href: "https://www.anaheim.net/1236/Recycling",
        publisher: "City of Anaheim",
      },
    ],
  },

  // ===================================================================
  // POST 9 — NOVEMBER 2025
  // ===================================================================
  {
    slug: "thanksgiving-pre-holiday-cleanouts-orange-county",
    title: "Thanksgiving Prep: Junk Removal for Orange County Families Hosting Guests",
    description:
      "How to prep your Anaheim or OC home for Thanksgiving guests — from guest bedroom cleanouts to garage overflow. Local junk removal team explains the pre-Thanksgiving reset.",
    excerpt:
      "Hosting Thanksgiving in Anaheim? Two weeks out is the sweet spot for one big cleanout that turns your storage room back into a guest room. Here's the plan.",
    date: "2025-11-08",
    readTime: 6,
    category: "Seasonal",
    author: opAuthor,
    image: "/blog/thanksgiving-prep.jpg",
    imageAlt: "Warm autumn home interior in Orange County prepared for Thanksgiving guests",
    tags: ["Thanksgiving", "Holiday Prep", "Guests", "Cleanout"],
    content: [
      {
        type: "p",
        content: [
          "If you're hosting Thanksgiving this year, mid-November is our second-busiest cleanout window of the year (behind the January post-holiday rush). Guests are coming, guest rooms need to actually be guest rooms again, and the garage where you've been storing 'to-donate' bags for six months has to make room for coats and coolers.",
        ],
      },
      { type: "h2", text: "The Two-Week Pre-Thanksgiving Countdown" },
      { type: "h3", text: "14 days out — the guest room reset" },
      {
        type: "p",
        content: [
          "Most Anaheim families' guest rooms have quietly become storage rooms. Boxes of paperwork, kids' outgrown items, holiday decor from last year that never got put away. Now's the moment to reset it back to functional. Give yourself two weekends — one to sort, one to haul.",
        ],
      },
      { type: "h3", text: "10 days out — the entryway and living room" },
      {
        type: "p",
        content: [
          "You need coat space, shoe space, and enough seating for adults and a kids' table. Look critically at your entryway console, the shoe pile, and any furniture that eats space without serving anyone. If it doesn't earn its square footage, it goes.",
        ],
      },
      { type: "h3", text: "7 days out — the garage" },
      {
        type: "p",
        content: [
          "The garage matters even if guests never enter it. Overflow chairs, coolers, extra folding tables, kids' toys for cousins — it all lives here during Thanksgiving. If the garage is stuffed with junk, you can't stage the holiday.",
        ],
      },
      { type: "h3", text: "3 days out — the deep clean" },
      {
        type: "p",
        content: [
          "This is cleaning, not decluttering. If you've done the earlier steps well, this is short and satisfying. If you skipped them, this weekend becomes a nightmare.",
        ],
      },
      { type: "h2", text: "The 'Guest Room to Storage Room' Problem" },
      {
        type: "p",
        content: [
          "About 70% of the OC guest rooms we walk into for a Thanksgiving cleanout have the same issue: a bed you can't get to, buried under labeled bins, kids' outgrown clothing, and old paperwork. The fix isn't more bins — it's actually taking things out of the house.",
        ],
      },
      {
        type: "ul",
        items: [
          ["Outgrown kids' items → Goodwill or Habitat ReStore that same weekend"],
          ["Old paperwork older than 7 years → shred (Staples offers this)"],
          ["Broken furniture 'for a future project' → let it go"],
          ["Boxes of stuff you haven't opened in 3 years → open them, sort, act, don't reseal"],
        ],
      },
      {
        type: "callout",
        title: "One-Truck Thanksgiving Reset",
        content: [
          "Book a single 1/4- or 1/2-truck haul two weeks before Thanksgiving and get the guest room, entryway, and garage overflow cleared in one visit. It's the highest-ROI $200–$400 you'll spend all season. ",
          {
            text: "Get a free quote",
            href: "/contact",
          },
          ".",
        ],
      },
      { type: "h2", text: "The Sustainability Angle" },
      {
        type: "p",
        content: [
          "According to the ",
          {
            text: "USDA's holiday food waste research",
            href: "https://www.usda.gov/foodwaste",
            external: true,
          },
          ", Americans waste 30–40% of the food they buy for Thanksgiving. Add the wrapping, the paper plates, the disposable everything — and it adds up fast. A thoughtful pre-holiday cleanout isn't just about aesthetics. It's about starting the biggest-consumption six weeks of the year with a house you actually enjoy.",
        ],
      },
      { type: "h2", text: "Getting Ready to Host in Anaheim & OC" },
      {
        type: "p",
        content: [
          "We serve ",
          {
            text: "every city in Orange County",
            href: "/service-areas",
          },
          " and can do same-day or scheduled hauls throughout November. See our ",
          {
            text: "full service list",
            href: "/services",
          },
          " and ",
          {
            text: "pricing",
            href: "/pricing",
          },
          ", or book directly.",
        ],
      },
      { type: "h2", text: "One More Reason to Book Early" },
      {
        type: "p",
        content: [
          "November weekends fill up fast — especially the two before Thanksgiving. If you're a first-time host, don't leave the cleanout to the last week. That's when guests are supposed to be arriving, not when you should be loading a truck. ",
          {
            text: "Get on the calendar now",
            href: "/contact",
          },
          ".",
        ],
      },
    ],
    relatedInternal: [
      {
        label: "Residential Junk Removal",
        href: "/services",
        description: "Full home cleanouts for Thanksgiving hosting.",
      },
      {
        label: "Pricing",
        href: "/pricing",
        description: "Straightforward pricing for a pre-holiday reset.",
      },
      {
        label: "Contact",
        href: "/contact",
        description: "Get a free quote before the November rush.",
      },
    ],
    externalSources: [
      {
        label: "USDA Food Loss and Waste",
        href: "https://www.usda.gov/foodwaste",
        publisher: "U.S. Department of Agriculture",
      },
      {
        label: "Habitat for Humanity Orange County ReStore",
        href: "https://www.habitatoc.org/restore/",
        publisher: "Habitat for Humanity of Orange County",
      },
    ],
  },

  // ===================================================================
  // POST 10 — OCTOBER 2025
  // ===================================================================
  {
    slug: "fall-yard-waste-removal-southern-california-palm-fronds",
    title: "Fall Yard Waste Removal in Southern California: Palm Fronds, Leaves & Green Debris",
    description:
      "How Anaheim & OC homeowners should handle fall yard waste — palm fronds, leaves, brush. Free curbside programs, drop-offs, and when to book a haul.",
    excerpt:
      "SoCal fall yard waste isn't leaves — it's palm fronds. Here's how Anaheim homeowners should handle the season's biggest yard debris job, and when curbside pickup isn't enough.",
    date: "2025-10-19",
    readTime: 6,
    category: "Yard Waste",
    author: opAuthor,
    image: "/blog/fall-yard-waste.jpg",
    imageAlt: "Fallen palm fronds and autumn yard debris in a Southern California backyard",
    tags: ["Yard Waste", "Palm Fronds", "Fall", "Green Waste"],
    content: [
      {
        type: "p",
        content: [
          "Fall yard waste in Anaheim doesn't look like fall yard waste in the rest of the country. Ours is palm fronds. Old queen palms, Mexican fans, and king palms drop massive fronds every October and November — often 8–12 feet long — and they don't fit in the green bin the way maple leaves do. Add Santa Ana wind season, which usually kicks off in October, and one weekend can produce more yard debris than the previous three months combined.",
        ],
      },
      { type: "h2", text: "What Anaheim's Free Green Cart Program Covers" },
      {
        type: "p",
        content: [
          "Anaheim residents get a free green organics cart with weekly pickup. According to the ",
          {
            text: "city's recycling and waste page",
            href: "https://www.anaheim.net/1236/Recycling",
            external: true,
          },
          ", the cart accepts:",
        ],
      },
      {
        type: "ul",
        items: [
          ["Grass clippings and leaves"],
          ["Small tree and shrub trimmings (cut to fit)"],
          ["Small palm fronds"],
          ["Weeds, small brush, and garden trimmings"],
        ],
      },
      { type: "h2", text: "What It Doesn't Cover — and What to Do Instead" },
      {
        type: "ul",
        items: [
          ["Large palm fronds (over 4 feet)"],
          ["Tree stumps and thick logs"],
          ["Storm-blown branches over 4 inches thick"],
          ["Large brush piles from full tree removals"],
          ["Rocks, dirt, sod, and landscape debris"],
          ["Landscape rock, pavers, and concrete"],
        ],
      },
      {
        type: "p",
        content: [
          "These need to go to a bulk yard waste hauler — that's us — or a green-waste transfer station. The ",
          {
            text: "CalRecycle organic waste program",
            href: "https://calrecycle.ca.gov/organics/",
            external: true,
          },
          " maintains a directory of certified organic waste facilities across the state.",
        ],
      },
      { type: "h2", text: "The Santa Ana Wind Problem" },
      {
        type: "p",
        content: [
          "October Santa Anas are the reason we get so many yard-cleanup calls this time of year. A 60mph gust snaps palm fronds, breaks eucalyptus branches, and blows lawn furniture halfway down the block. If your yard just got hit, the fastest way back to normal is a single load haul — much faster than filling the green cart for four weeks in a row.",
        ],
      },
      {
        type: "callout",
        title: "Fire Season Matters Too",
        content: [
          "Piled brush and dry palm fronds are fuel. During red flag warnings, don't stockpile yard debris on the property — get it hauled. Cal Fire's ",
          {
            text: "defensible space guidelines",
            href: "https://readyforwildfire.org/prepare-for-wildfire/defensible-space/",
            external: true,
          },
          " specifically call out yard debris as a preventable fire risk.",
        ],
      },
      { type: "h2", text: "The Palm Frond Problem, Specifically" },
      {
        type: "p",
        content: [
          "Palm fronds are heavy, awkward, and covered in razor-sharp edges. Homeowners routinely underestimate them and end up with hand injuries. Long-time OC residents know the trick: never drag a frond by the tip — always fold and carry from the base. Better yet, let a hauler handle them.",
        ],
      },
      { type: "h2", text: "Combining Yard Debris With Other Junk" },
      {
        type: "p",
        content: [
          "If you're going to schedule a haul for yard debris, add anything else that's been sitting: patio furniture from summer, an old grill, dead pool equipment, kids' outgrown outdoor toys. One truck, one visit, one price. See our ",
          {
            text: "yard waste and outdoor cleanout services",
            href: "/services",
          },
          " and check ",
          {
            text: "pricing",
            href: "/pricing",
          },
          ".",
        ],
      },
      { type: "h2", text: "Book Your Fall Haul Before the Winds" },
      {
        type: "p",
        content: [
          "Late October and early November are our busiest yard-waste weeks. Book ahead so you're not scrambling after a Santa Ana event. We serve ",
          {
            text: "all of Orange County",
            href: "/service-areas",
          },
          " — Anaheim, Orange, Fullerton, Yorba Linda, Anaheim Hills, and everywhere in between. ",
          {
            text: "Get a free quote in two minutes",
            href: "/contact",
          },
          ".",
        ],
      },
    ],
    relatedInternal: [
      {
        label: "Yard Waste Removal",
        href: "/services",
        description: "Palm fronds, brush, and green debris hauling.",
      },
      {
        label: "Pricing",
        href: "/pricing",
        description: "Transparent pricing by load size.",
      },
      {
        label: "Anaheim Service Areas",
        href: "/service-areas",
        description: "Every OC city we cover.",
      },
    ],
    externalSources: [
      {
        label: "CalRecycle Organic Materials Management",
        href: "https://calrecycle.ca.gov/organics/",
        publisher: "CalRecycle",
      },
      {
        label: "Cal Fire — Defensible Space",
        href: "https://readyforwildfire.org/prepare-for-wildfire/defensible-space/",
        publisher: "Cal Fire / Ready for Wildfire",
      },
    ],
  },
]

export function getAllPosts(): BlogPost[] {
  return [...blogPosts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  )
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug)
}

export function getRelatedPosts(currentSlug: string, limit = 3): BlogPost[] {
  const current = getPostBySlug(currentSlug)
  if (!current) return []
  const others = blogPosts.filter((p) => p.slug !== currentSlug)
  // Prefer same-category posts, then recent
  const sameCategory = others.filter((p) => p.category === current.category)
  const remaining = others.filter((p) => p.category !== current.category)
  return [...sameCategory, ...remaining]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, limit)
}

export function formatPostDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })
}
