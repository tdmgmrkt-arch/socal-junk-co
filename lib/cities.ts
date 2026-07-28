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
  {
    slug: "anaheim-hills",
    name: "Anaheim Hills",
    county: "Orange County",
    landmarks: ["Anaheim Hills Golf Course", "Oak Canyon Nature Center", "Yorba Regional Park"],
  },
  {
    slug: "yorba-linda",
    name: "Yorba Linda",
    county: "Orange County",
    landmarks: ["the Richard Nixon Presidential Library", "Yorba Linda Town Center", "Black Gold Golf Club"],
  },
  {
    slug: "corona",
    name: "Corona",
    county: "Riverside County",
    landmarks: ["Downtown Corona", "Dos Lagos", "the Crossings at Corona"],
  },
  {
    slug: "lake-elsinore",
    name: "Lake Elsinore",
    county: "Riverside County",
    landmarks: ["Lake Elsinore", "the Historic Downtown district", "Diamond Stadium"],
  },
  {
    slug: "long-beach",
    name: "Long Beach",
    county: "Los Angeles County",
    landmarks: ["Downtown Long Beach", "Belmont Shore", "the Queen Mary"],
  },
  {
    slug: "perris",
    name: "Perris",
    county: "Riverside County",
    landmarks: ["Lake Perris", "the Perris Auto Speedway", "Downtown Perris"],
  },
  {
    slug: "murrieta",
    name: "Murrieta",
    county: "Riverside County",
    landmarks: ["Murrieta Hot Springs", "Town Square Park", "the Golden Triangle shopping area"],
  },
  {
    slug: "menifee",
    name: "Menifee",
    county: "Riverside County",
    landmarks: ["Menifee Town Center", "Wheatfield Park", "the Newport Road corridor"],
  },
]
