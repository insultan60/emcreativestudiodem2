/* Reyes Realty Group template preview: shared, fictional listing data.
   Every address, price and description below is invented for demonstration. */
window.LISTINGS = [
  {
    id: 1, address: "12 Summit Crest Way", neighborhood: "Hillcrest", price: 2395000,
    beds: 5, baths: 4.5, sqft: 4280, type: "Single Family", status: "For Sale",
    year: 2016, lot: "0.42 acres", garage: "3-car attached", hoa: 0, tax: 27400, days: 6, x: 22, y: 24,
    description: "A resort-style hillside retreat with a glass-walled great room that opens straight onto the pool terrace. Wide-plank oak floors, a chef's kitchen with a waterfall island and a main-level primary suite make everyday living feel effortless, while the lower level adds a media room and guest quarters.",
    features: ["Saltwater pool and spa", "Chef's kitchen with waterfall island", "Main-level primary suite", "Walls of folding glass doors", "Lower-level media room", "Owned solar with battery backup", "Smart-home lighting and climate", "City-light views from the terrace"],
    images: ["img/ext-6.jpg", "img/liv-8.jpg", "img/kit-1.jpg", "img/bed-6.jpg", "img/bath-4.jpg", "img/din-2.jpg"]
  },
  {
    id: 2, address: "87 Ridgeview Terrace", neighborhood: "Hillcrest", price: 1875000,
    beds: 4, baths: 3.5, sqft: 3450, type: "Single Family", status: "New Listing",
    year: 2019, lot: "0.31 acres", garage: "2-car attached", hoa: 0, tax: 21500, days: 2, x: 31, y: 33,
    description: "Clean modern lines, a dramatic double-height entry and a floating oak staircase set the tone in this newer Hillcrest build. The open kitchen, dining and living spaces flow to a private yard, and every bedroom has its own bath.",
    features: ["Floating oak staircase", "Open-plan kitchen and family room", "Quartz counters and paneled appliances", "Ensuite bath for every bedroom", "Private, fully fenced yard", "EV-ready garage", "Dual-zone climate control"],
    images: ["img/ext-5.jpg", "img/stair-1.jpg", "img/kit-5.jpg", "img/liv-11.jpg", "img/bed-4.jpg"]
  },
  {
    id: 3, address: "5 Shoreline Court", neighborhood: "Lakeview", price: 2950000,
    beds: 5, baths: 5, sqft: 4900, type: "Single Family", status: "For Sale",
    year: 2018, lot: "0.55 acres", garage: "3-car attached", hoa: 0, tax: 33900, days: 14, x: 80, y: 38,
    description: "Bright white architecture and an infinity-edge pool frame open-water views in one of Lakeview's most private cul-de-sacs. Inside, sun-filled entertaining rooms, a wine wall and a spa-like primary bath make it a true year-round escape.",
    features: ["Infinity-edge pool", "Panoramic lake views", "Temperature-controlled wine wall", "Spa-inspired primary bath", "Outdoor kitchen and fire pit", "Private dock access", "Whole-home water filtration", "Guest suite with separate entry"],
    images: ["img/ext-8.jpg", "img/int-glass.jpg", "img/liv-9.jpg", "img/kit-3.jpg", "img/bed-7.jpg", "img/bath-2.jpg"]
  },
  {
    id: 4, address: "210 Harbor Point, Unit 4B", neighborhood: "Lakeview", price: 865000,
    beds: 2, baths: 2, sqft: 1420, type: "Condo", status: "For Sale",
    year: 2012, lot: "N/A", garage: "2 assigned spaces", hoa: 640, tax: 9800, days: 21, x: 86, y: 56,
    description: "A turnkey corner residence with lake breezes, a private balcony and an easy lock-and-leave lifestyle. The updated kitchen opens to a light-filled living room, and the building offers a fitness studio, a lakeside lounge and secure parking.",
    features: ["Corner unit with balcony", "Updated kitchen with gas range", "In-unit washer and dryer", "Fitness studio and lakeside lounge", "Secure garage parking", "Pet-friendly building"],
    images: ["img/ext-4.jpg", "img/liv-12.jpg", "img/kit-2.jpg", "img/bed-3.jpg", "img/bath-1.jpg"]
  },
  {
    id: 5, address: "744 Elm Hollow Road", neighborhood: "Oak Park", price: 1195000,
    beds: 4, baths: 3, sqft: 2760, type: "Single Family", status: "For Sale",
    year: 1928, lot: "0.24 acres", garage: "Detached 2-car", hoa: 0, tax: 13700, days: 9, x: 51, y: 22,
    description: "Classic Oak Park character with a deep covered porch, original millwork and thoughtful modern updates. The renovated kitchen opens to a bright dining room, and the backyard is ready for summer dinners under the trees.",
    features: ["Deep covered front porch", "Original millwork and built-ins", "Renovated kitchen", "Formal dining room", "Finished basement", "Mature shade trees", "Walk to parks and schools"],
    images: ["img/ext-1.jpg", "img/din-1.jpg", "img/kit-4.jpg", "img/liv-3.jpg", "img/bed-5.jpg"]
  },
  {
    id: 6, address: "32 Sycamore Lane", neighborhood: "Oak Park", price: 1049000,
    beds: 3, baths: 2.5, sqft: 2140, type: "Townhome", status: "Coming Soon",
    year: 2021, lot: "0.08 acres", garage: "2-car attached", hoa: 285, tax: 11900, days: 1, x: 58, y: 30,
    description: "A nearly new end-unit townhome on a quiet, tree-lined street. Nine-foot ceilings, a generous kitchen island and a rooftop deck give it the feel of a single-family home with none of the upkeep.",
    features: ["End unit with extra windows", "Private rooftop deck", "Nine-foot ceilings", "Kitchen island with seating", "Attached two-car garage", "Low-maintenance landscaping"],
    images: ["img/ext-7.jpg", "img/liv-5.jpg", "img/kit-2.jpg", "img/bed-2.jpg"]
  },
  {
    id: 7, address: "100 Market Street, Unit 1203", neighborhood: "Downtown", price: 725000,
    beds: 2, baths: 2, sqft: 1180, type: "Condo", status: "For Sale",
    year: 2015, lot: "N/A", garage: "1 assigned space", hoa: 520, tax: 8300, days: 30, x: 50, y: 53,
    description: "High-floor living above the city with floor-to-ceiling glass and sunset views. Walk to restaurants, the market hall and the riverfront, then come home to a concierge building with a rooftop pool.",
    features: ["Floor-to-ceiling windows", "Rooftop pool and lounge", "24-hour concierge", "Quartz kitchen with breakfast bar", "Walk-in primary closet", "Bike storage"],
    images: ["img/ext-3.jpg", "img/liv-4.jpg", "img/kit-5.jpg", "img/bed-1.jpg", "img/bath-3.jpg"]
  },
  {
    id: 8, address: "18 Willowbank Drive", neighborhood: "Riverside", price: 1325000,
    beds: 4, baths: 3, sqft: 2980, type: "Single Family", status: "Pending",
    year: 2004, lot: "0.36 acres", garage: "3-car attached", hoa: 0, tax: 15200, days: 12, x: 44, y: 79,
    description: "Sunset views over the river from a sparkling pool and spa. The family room, kitchen and breakfast nook form one easy gathering space, and a first-floor bedroom makes this home ideal for guests or a home office.",
    features: ["Pool and spa with sunset views", "First-floor guest bedroom", "Open kitchen and family room", "Covered patio", "Three-car garage", "Walking trails nearby"],
    images: ["img/ext-2.jpg", "img/liv-7.jpg", "img/kit-1.jpg", "img/bed-6.jpg", "img/bath-2.jpg"]
  },
  {
    id: 9, address: "451 Meadowlark Lane", neighborhood: "Westbrook", price: 1590000,
    beds: 4, baths: 4, sqft: 3310, type: "Single Family", status: "For Sale",
    year: 2020, lot: "0.29 acres", garage: "2-car attached", hoa: 0, tax: 18300, days: 17, x: 15, y: 66,
    description: "A crisp, contemporary home set beneath a beautiful mature tree. Expansive windows pull in the garden, while the open kitchen, oversized island and indoor-outdoor dining space are built for entertaining.",
    features: ["Oversized kitchen island", "Indoor-outdoor dining", "Primary suite with spa bath", "Home office with built-ins", "Landscaped garden", "Tankless water heater"],
    images: ["img/valuation.jpg", "img/liv-10.jpg", "img/kit-3.jpg", "img/bed-4.jpg", "img/bath-4.jpg", "img/din-2.jpg"]
  },
  {
    id: 10, address: "9 Crestline Court", neighborhood: "Hillcrest", price: 3450000,
    beds: 6, baths: 6, sqft: 5600, type: "Single Family", status: "For Sale",
    year: 2009, lot: "0.78 acres", garage: "4-car attached", hoa: 0, tax: 39800, days: 26, x: 26, y: 15,
    description: "A gated Hillcrest estate on more than three-quarters of an acre, glowing at dusk above the valley. Formal and casual living spaces, a library, a gym and a guest wing make room for every chapter of life.",
    features: ["Gated, private estate", "Library with built-ins", "Home gym and sauna", "Separate guest wing", "Four-car garage", "Sweeping valley views", "Motor court", "Professionally landscaped grounds"],
    images: ["img/hood-hillcrest.jpg", "img/liv-6.jpg", "img/din-1.jpg", "img/kit-4.jpg", "img/bed-5.jpg", "img/bath-1.jpg"]
  },
  {
    id: 11, address: "418 Laurel Ridge Drive", neighborhood: "Hillcrest", price: 1485000,
    beds: 4, baths: 3, sqft: 2860, type: "Single Family", status: "Sold",
    year: 2011, lot: "0.27 acres", garage: "2-car attached", hoa: 0, tax: 17100, days: 11, x: 35, y: 21,
    description: "Sold in under two weeks with multiple offers. A warm, modern home under a canopy of mature trees, with a calm open-plan interior and a private yard that feels miles from the city.",
    features: ["Open-plan living", "Mature tree canopy", "Updated kitchen", "Private rear yard", "Primary suite with walk-in closet", "Two-car garage"],
    images: ["img/home-1.jpg", "img/liv-1.jpg", "img/kit-5.jpg", "img/bed-3.jpg"]
  },
  {
    id: 12, address: "27 Willow Crest Lane", neighborhood: "Westbrook", price: 2150000,
    beds: 5, baths: 4, sqft: 3940, type: "Single Family", status: "Sold",
    year: 2017, lot: "0.33 acres", garage: "3-car attached", hoa: 0, tax: 24800, days: 8, x: 21, y: 76,
    description: "Sold above asking. A striking modern home that glows at dusk, with soaring ceilings, a showpiece kitchen and seamless flow to the outdoor living room.",
    features: ["Soaring ceilings", "Showpiece kitchen", "Outdoor living room", "Five bedrooms", "Three-car garage"],
    images: ["img/home-2.jpg", "img/liv-11.jpg", "img/kit-1.jpg", "img/bed-7.jpg", "img/bath-3.jpg"]
  },
  {
    id: 13, address: "1102 Chestnut Avenue", neighborhood: "Oak Park", price: 1295000,
    beds: 4, baths: 3, sqft: 3120, type: "Single Family", status: "Sold",
    year: 1936, lot: "0.30 acres", garage: "Detached 2-car", hoa: 0, tax: 14900, days: 15, x: 63, y: 18,
    description: "Sold with three competing offers. A classic farmhouse with a wraparound porch, refreshed for modern life while keeping its original charm.",
    features: ["Wraparound porch", "Original hardwood floors", "Refreshed kitchen", "Large corner lot", "Detached garage"],
    images: ["img/home-3.jpg", "img/liv-3.jpg", "img/din-1.jpg", "img/bed-2.jpg"]
  },
  {
    id: 14, address: "63 Riverbend Court", neighborhood: "Riverside", price: 1749000,
    beds: 3, baths: 3, sqft: 2480, type: "Single Family", status: "Sold",
    year: 2019, lot: "0.22 acres", garage: "2-car attached", hoa: 0, tax: 20100, days: 19, x: 57, y: 84,
    description: "Sold off-market for a relocating family. Warm wood, clean lines and a riverside setting make this contemporary home feel calm and connected to nature.",
    features: ["Warm wood facade", "Riverside setting", "Open kitchen and living", "Covered terrace", "Energy-efficient build"],
    images: ["img/home-4.jpg", "img/liv-2.jpg", "img/kit-2.jpg", "img/bed-1.jpg", "img/bath-1.jpg"]
  },
  {
    id: 15, address: "9 Harbor View Terrace", neighborhood: "Lakeview", price: 3275000,
    beds: 5, baths: 5, sqft: 4610, type: "Single Family", status: "Sold",
    year: 2014, lot: "0.48 acres", garage: "3-car attached", hoa: 0, tax: 37600, days: 22, x: 76, y: 64,
    description: "Represented the buyer. A modern villa with a pool, outdoor kitchen and water views from nearly every room.",
    features: ["Pool and outdoor kitchen", "Water views", "Five ensuite bedrooms", "Gym and media room", "Three-car garage"],
    images: ["img/home-5.jpg", "img/int-glass.jpg", "img/liv-9.jpg", "img/kit-3.jpg", "img/bed-6.jpg", "img/bath-4.jpg"]
  },
  {
    id: 16, address: "245 Maple Grove Street", neighborhood: "Downtown", price: 985000,
    beds: 3, baths: 2, sqft: 1980, type: "Multi-Family", status: "Sold",
    year: 1924, lot: "0.12 acres", garage: "Off-street parking", hoa: 0, tax: 11300, days: 27, x: 41, y: 59,
    description: "Represented an investor client. A brick up-and-down duplex near downtown with strong rents, mature trees and room to add value over time.",
    features: ["Up-and-down duplex", "Separate utilities", "Mature trees", "Walk to downtown", "Strong rental history"],
    images: ["img/home-6.jpg", "img/liv-5.jpg", "img/kit-4.jpg", "img/bed-5.jpg"]
  }
];
