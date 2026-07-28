export type CityInfo = {
  slug: string
  name: string
  county: string
  landmarks: string[]
}

// Add a new city by adding one entry here — the page at
// /service-areas/[slug] is generated automatically from this list.
export const cities: CityInfo[] = [
  {
    slug: "irvine",
    name: "Irvine",
    county: "Orange County",
    landmarks: ["Woodbridge", "Northwood", "the Irvine Business Complex", "UC Irvine"],
  },
  {
    slug: "santa-ana",
    name: "Santa Ana",
    county: "Orange County",
    landmarks: ["Downtown Santa Ana", "the Civic Center area", "the South Coast Metro border"],
  },
  {
    slug: "huntington-beach",
    name: "Huntington Beach",
    county: "Orange County",
    landmarks: ["Downtown Main Street", "Bolsa Chica", "Huntington Harbour"],
  },
  {
    slug: "fullerton",
    name: "Fullerton",
    county: "Orange County",
    landmarks: ["Downtown Fullerton", "Cal State Fullerton", "the Fullerton Arboretum area"],
  },
  {
    slug: "garden-grove",
    name: "Garden Grove",
    county: "Orange County",
    landmarks: ["Little Saigon", "the Historic Main Street district"],
  },
  {
    slug: "costa-mesa",
    name: "Costa Mesa",
    county: "Orange County",
    landmarks: ["South Coast Plaza", "the SoCo/Eastside Costa Mesa arts district"],
  },
  {
    slug: "orange",
    name: "Orange",
    county: "Orange County",
    landmarks: ["Old Towne Orange", "Chapman University"],
  },
  {
    slug: "anaheim",
    name: "Anaheim",
    county: "Orange County",
    landmarks: ["the Anaheim Resort District", "Downtown Anaheim", "the Platinum Triangle"],
  },
]
