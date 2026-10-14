/* Lumen template: shared sample listings (fictional homes, fictional addresses).
   Used by search.html, listing.html, neighborhood.html and the home page. */
window.LISTINGS = [
  {
    id: 1, address: "28 Summit Ridge Road", neighborhood: "Hillcrest", price: 3450000, beds: 5, baths: 5, sqft: 4820,
    type: "Single Family", status: "For Sale", year: 2019, lot: "0.42 acres", garage: 3, hoa: 0, dom: 6, listed: "2026-10-09",
    x: 30, y: 30,
    description: "Set high on one of Hillcrest's quietest ridgelines, this contemporary residence opens almost entirely to the outdoors. Walls of glass slide away to a limestone pool terrace, an outdoor kitchen and a lawn framed by mature olive trees. Inside, white oak floors, plaster walls and soft northern light carry through a double-height living room, a chef's kitchen with a scullery and a primary suite with its own garden. A self-contained guest studio over the garage completes a home made equally for quiet weekdays and long summer evenings.",
    features: ["Heated saltwater pool and spa", "Chef's kitchen with scullery", "Primary suite with private garden", "Guest studio over garage", "Wide-plank white oak floors", "Whole-home audio and smart lighting", "Outdoor kitchen and fire pit", "EV-ready three-car garage"],
    images: ["img/listing-1.jpg", "img/kit-2.jpg", "img/liv-2.jpg", "img/bed-3.jpg", "img/bath-4.jpg", "img/din-3.jpg"]
  },
  {
    id: 2, address: "1140 Lakeshore Drive", neighborhood: "Lakeview", price: 2895000, beds: 4, baths: 4, sqft: 3960,
    type: "Single Family", status: "Open House", year: 2016, lot: "0.31 acres", garage: 2, hoa: 0, dom: 11, listed: "2026-10-04",
    x: 71, y: 25,
    description: "A clean-lined modern home on a gentle rise above the water, with a lap pool that runs the length of the garden. The main floor is one continuous room of kitchen, dining and living, warmed by a linear fireplace and opening to a covered terrace for year-round dining. Upstairs, four bedrooms include a primary suite with a soaking tub that looks straight out to the lake. Open house this Sunday, 1 to 4 pm.",
    features: ["25-meter lap pool", "Lake views from the primary suite", "Linear gas fireplace", "Covered terrace with heaters", "Walk-in pantry", "Home office with built-ins", "Solar panels with battery backup", "Landscaped, fully fenced garden"],
    images: ["img/listing-2.jpg", "img/liv-6.jpg", "img/kit-6.jpg", "img/bed-4.jpg", "img/bath-3.jpg"]
  },
  {
    id: 3, address: "402 Willow Lane", neighborhood: "Oak Park", price: 1975000, beds: 3, baths: 3, sqft: 2740,
    type: "Single Family", status: "Pending", year: 2021, lot: "0.24 acres", garage: 2, hoa: 0, dom: 18, listed: "2026-09-27",
    x: 52, y: 62,
    description: "A single-level modern home wrapped around a central courtyard, so nearly every room has a wall of glass and a view of green. Polished concrete floors, walnut millwork and clerestory windows give the interiors a calm, gallery-like quality. The kitchen anchors the plan with a long marble island, while the primary suite sits privately at the far end of the house with direct access to the pool.",
    features: ["Single-level living", "Central courtyard with olive tree", "Radiant-heated concrete floors", "Marble waterfall island", "Pool and outdoor shower", "Walnut built-ins throughout", "Drought-tolerant landscaping", "Attached two-car garage"],
    images: ["img/listing-3.jpg", "img/kit-1.jpg", "img/liv-4.jpg", "img/bed-2.jpg", "img/bath-5.jpg"]
  },
  {
    id: 4, address: "9 Ashford Place", neighborhood: "Hillcrest", price: 4150000, beds: 5, baths: 6, sqft: 5210,
    type: "Estate", status: "Sold", year: 1928, lot: "0.55 acres", garage: 2, hoa: 0, dom: 9, listed: "2026-06-14",
    x: 24, y: 38,
    description: "A 1920s Craftsman estate restored with real care: original box-beam ceilings, leaded glass and a quarter-sawn oak staircase, paired with a new kitchen, new systems and a primary suite carved from the old sleeping porch. Sold in nine days with multiple offers, represented by Maya Collins.",
    features: ["Original box-beam ceilings", "Restored leaded-glass windows", "Library with fireplace", "New kitchen with butler's pantry", "Sleeping-porch primary suite", "Detached studio", "Mature gardens and orchard", "Fully updated systems"],
    images: ["img/sold-1.jpg", "img/liv-2.jpg", "img/din-2.jpg", "img/bed-1.jpg", "img/bath-2.jpg"]
  },
  {
    id: 5, address: "615 Harbor View Road", neighborhood: "Lakeview", price: 3280000, beds: 6, baths: 5, sqft: 4690,
    type: "Single Family", status: "Sold", year: 2004, lot: "0.48 acres", garage: 3, hoa: 0, dom: 14, listed: "2026-05-30",
    x: 79, y: 34,
    description: "A shingle-style family home with a deep wraparound porch, a lawn that runs down toward the water and room for everyone: six bedrooms, a bunk room and a lower level with a media room and gym. Sold above asking, represented by Maya Collins.",
    features: ["Wraparound porch", "Water views", "Bunk room", "Lower-level media room", "Home gym", "Mudroom with lockers", "Three-car garage", "Irrigated lawn and gardens"],
    images: ["img/sold-2.jpg", "img/kit-5.jpg", "img/liv-1.jpg", "img/bed-5.jpg", "img/bath-1.jpg"]
  },
  {
    id: 6, address: "31 Magnolia Way", neighborhood: "Riverside", price: 2640000, beds: 4, baths: 4, sqft: 3420,
    type: "Single Family", status: "Sold", year: 1939, lot: "0.22 acres", garage: 1, hoa: 0, dom: 7, listed: "2026-07-08",
    x: 40, y: 80,
    description: "A classic cottage on a corner lot two blocks from the river path, thoughtfully expanded with a light-filled family room and a primary suite addition. Sold in one week, represented by Maya Collins.",
    features: ["Corner lot", "Family room addition", "Wood-burning fireplace", "Original hardwood floors", "Primary suite addition", "Detached garage with studio", "Walk to river path", "Raised vegetable beds"],
    images: ["img/sold-3.jpg", "img/liv-5.jpg", "img/kit-3.jpg", "img/bed-1.jpg", "img/bath-5.jpg"]
  },
  {
    id: 7, address: "208 Orchard Street", neighborhood: "Oak Park", price: 1895000, beds: 3, baths: 2, sqft: 2150,
    type: "Single Family", status: "Sold", year: 1910, lot: "0.19 acres", garage: 1, hoa: 0, dom: 12, listed: "2026-04-22",
    x: 58, y: 56,
    description: "A historic farmhouse behind a white picket fence, with a deep front porch, a new eat-in kitchen and a garden planted with heirloom fruit trees. Sold above list price, represented by Maya Collins.",
    features: ["Historic farmhouse", "Front porch with swing", "Eat-in kitchen", "Heirloom fruit trees", "Clawfoot tub", "Original pine floors", "Garden shed", "Walk to the village"],
    images: ["img/sold-4.jpg", "img/kit-4.jpg", "img/din-1.jpg", "img/bed-2.jpg", "img/bath-2.jpg"]
  },
  {
    id: 8, address: "54 Fieldstone Drive", neighborhood: "Westbrook", price: 1620000, beds: 4, baths: 3, sqft: 3050,
    type: "Single Family", status: "Sold", year: 2011, lot: "0.36 acres", garage: 2, hoa: 85, dom: 16, listed: "2026-03-18",
    x: 14, y: 64,
    description: "A stone-front home on a cul-de-sac with a flat, fenced backyard, a finished lower level and a kitchen that opens to the family room. Sold with multiple offers, represented by Maya Collins.",
    features: ["Cul-de-sac location", "Finished lower level", "Open kitchen and family room", "Stone fireplace", "Fenced, flat backyard", "Two-car garage", "Neighborhood trails", "Community playground"],
    images: ["img/sold-5.jpg", "img/kit-5.jpg", "img/liv-3.jpg", "img/bed-4.jpg", "img/bath-4.jpg"]
  },
  {
    id: 9, address: "12 Linden Row", neighborhood: "Downtown", price: 1345000, beds: 3, baths: 3, sqft: 2280,
    type: "Townhome", status: "Sold", year: 2018, lot: "Shared", garage: 2, hoa: 410, dom: 21, listed: "2026-02-26",
    x: 64, y: 47,
    description: "A modern end-unit townhome with a private roof deck, a two-car garage and a walk score most suburbs can only envy. Sold to a relocating buyer, represented by Maya Collins.",
    features: ["End unit", "Private roof deck", "Two-car garage", "Floor-to-ceiling windows", "Quartz kitchen", "Walk to dining and transit", "Low-maintenance living", "Pet friendly"],
    images: ["img/sold-6.jpg", "img/liv-6.jpg", "img/kit-3.jpg", "img/bed-3.jpg", "img/bath-3.jpg"]
  },
  {
    id: 10, address: "77 Larkspur Court", neighborhood: "Riverside", price: 2350000, beds: 4, baths: 4, sqft: 3380,
    type: "Single Family", status: "For Sale", year: 2023, lot: "0.21 acres", garage: 2, hoa: 0, dom: 3, listed: "2026-10-12",
    x: 33, y: 73,
    description: "Crisp white volumes, deep-set windows and a sculptural staircase define this new Riverside residence by a local design-build studio. The ground floor flows from a gallery entry to a kitchen with an integrated appliance wall and a dining room that opens to a sheltered courtyard. Upstairs, four bedrooms are arranged around a skylit landing, including a primary suite with a walk-in dressing room and a wet-room bath.",
    features: ["New construction (2023)", "Integrated appliance wall", "Skylit stair landing", "Wet-room primary bath", "Walk-in dressing room", "Sheltered courtyard", "Heat-pump HVAC and solar", "Two blocks to the river path"],
    images: ["img/ext-1.jpg", "img/kit-3.jpg", "img/liv-4.jpg", "img/bed-3.jpg", "img/bath-5.jpg", "img/din-3.jpg"]
  },
  {
    id: 11, address: "16 Chestnut Hill Road", neighborhood: "Hillcrest", price: 1785000, beds: 4, baths: 3, sqft: 2960,
    type: "Single Family", status: "For Sale", year: 1924, lot: "0.27 acres", garage: 1, hoa: 0, dom: 9, listed: "2026-10-06",
    x: 36, y: 22,
    description: "A storybook Craftsman bungalow on a tree-lined Hillcrest street, with a deep front porch made for long autumn afternoons. Original details remain where they matter: the fireplace, the built-in bookcases and the wide trim. The kitchen and baths have been fully renewed, and a rear addition adds a family room that opens to a private, deep garden.",
    features: ["Deep front porch", "Original fireplace and built-ins", "Renovated kitchen", "Family room addition", "Deep private garden", "Finished attic retreat", "New roof (2024)", "Walk to Hillcrest Village"],
    images: ["img/ext-2.jpg", "img/liv-5.jpg", "img/kit-4.jpg", "img/din-1.jpg", "img/bed-1.jpg", "img/bath-2.jpg"]
  },
  {
    id: 12, address: "77 Canal Street, Unit 2", neighborhood: "Downtown", price: 1195000, beds: 3, baths: 2, sqft: 1840,
    type: "Condo", status: "For Sale", year: 1895, lot: "Shared", garage: 1, hoa: 520, dom: 13, listed: "2026-10-02",
    x: 70, y: 52,
    description: "The parlor and garden levels of a restored 1890s brick rowhouse, reimagined as a light-filled duplex condominium. Twelve-foot ceilings, original marble mantels and tall windows sit alongside a modern kitchen and two contemporary baths. Private access to a walled rear garden, plus one deeded parking space, makes this a rare find downtown.",
    features: ["Duplex layout", "12-foot ceilings", "Original marble mantels", "Private walled garden", "Deeded parking space", "In-unit laundry", "Storage room", "Steps to cafes and transit"],
    images: ["img/ext-3.jpg", "img/liv-1.jpg", "img/kit-2.jpg", "img/bed-5.jpg", "img/bath-1.jpg"]
  },
  {
    id: 13, address: "5 Meadow Gate Lane", neighborhood: "Westbrook", price: 925000, beds: 3, baths: 2, sqft: 1980,
    type: "Single Family", status: "For Sale", year: 2008, lot: "0.29 acres", garage: 2, hoa: 60, dom: 20, listed: "2026-09-25",
    x: 18, y: 55,
    description: "A bright, cottage-style home on a generous lawn in a friendly Westbrook enclave. The open main floor connects the kitchen, dining area and living room, all brightened by a wall of windows to the back garden. Three bedrooms upstairs, a bonus room over the garage and access to neighborhood trails make it an easy first home or a smart right-size.",
    features: ["Open main floor", "Bonus room over garage", "Generous lawn", "Updated kitchen", "Primary with walk-in closet", "Neighborhood trails", "Two-car garage", "Move-in ready"],
    images: ["img/ext-4.jpg", "img/kit-1.jpg", "img/liv-3.jpg", "img/bed-2.jpg", "img/bath-4.jpg"]
  },
  {
    id: 14, address: "340 Porch Light Avenue", neighborhood: "Maple Heights", price: 1150000, beds: 4, baths: 3, sqft: 2640,
    type: "Single Family", status: "Open House", year: 1998, lot: "0.25 acres", garage: 2, hoa: 0, dom: 5, listed: "2026-10-10",
    x: 86, y: 64,
    description: "A classic Maple Heights home with a columned front porch, a sunny kitchen and a main-floor guest suite. The backyard is all lawn and shade trees, with a stone patio that is made for summer dinners. Fresh paint, refinished floors and new lighting mean you can simply move in. Open house Saturday, 11 am to 2 pm.",
    features: ["Columned front porch", "Main-floor guest suite", "Refinished hardwood floors", "Stone patio", "Mature shade trees", "Mudroom entry", "Two-car garage", "Near parks and schools"],
    images: ["img/ext-5.jpg", "img/kit-5.jpg", "img/din-2.jpg", "img/liv-3.jpg", "img/bed-4.jpg", "img/bath-3.jpg"]
  },
  {
    id: 15, address: "19 Cedar Hollow Drive", neighborhood: "Cedar Hollow", price: 1325000, beds: 4, baths: 3, sqft: 2890,
    type: "Single Family", status: "For Sale", year: 2006, lot: "0.33 acres", garage: 2, hoa: 120, dom: 24, listed: "2026-09-21",
    x: 88, y: 84,
    description: "A handsome brick-red Colonial on a quiet loop in Cedar Hollow, with a formal dining room, a family room with a fireplace and a kitchen that opens to a screened porch. Four bedrooms are upstairs, including a primary suite with a spa-like bath. A walk-out lower level offers space for a gym, a playroom or a home office.",
    features: ["Screened porch", "Formal dining room", "Family room fireplace", "Spa-like primary bath", "Walk-out lower level", "Community pool", "Two-car garage", "Quiet loop street"],
    images: ["img/ext-6.jpg", "img/din-1.jpg", "img/kit-6.jpg", "img/liv-2.jpg", "img/bed-5.jpg", "img/bath-1.jpg"]
  },
  {
    id: 16, address: "3 Overlook Terrace", neighborhood: "Hillcrest", price: 3995000, beds: 5, baths: 5, sqft: 4410,
    type: "Estate", status: "For Sale", year: 2014, lot: "0.61 acres", garage: 3, hoa: 0, dom: 15, listed: "2026-09-30",
    x: 20, y: 18,
    description: "Perched at the top of Hillcrest with long sunset views across the valley, this hillside estate was designed to make the most of its site. A great room with a stone fireplace opens to a west-facing terrace and an infinity-edge pool. The lower level holds a wine room, a media lounge and two guest suites, while the primary suite takes the entire upper floor.",
    features: ["Valley and sunset views", "Infinity-edge pool", "Stone great-room fireplace", "Wine room", "Media lounge", "Full-floor primary suite", "Gated motor court", "Three-car garage"],
    images: ["img/hood-2.jpg", "img/liv-1.jpg", "img/kit-6.jpg", "img/din-2.jpg", "img/bed-3.jpg", "img/bath-4.jpg"]
  },
  {
    id: 17, address: "88 Mill Race Road", neighborhood: "Riverside", price: 1640000, beds: 3, baths: 3, sqft: 2380,
    type: "Townhome", status: "Pending", year: 2022, lot: "Shared", garage: 2, hoa: 290, dom: 10, listed: "2026-10-01",
    x: 46, y: 86,
    description: "A design-forward infill townhome on a quiet Riverside lane, with timber cladding, oversized windows and a private rooftop terrace. The open main level is built around an island kitchen, and every bedroom has its own bath. Two-car garage and an EV charger included.",
    features: ["Private rooftop terrace", "Timber-clad exterior", "Island kitchen", "En-suite bedrooms", "EV charger", "Two-car garage", "Low HOA", "Steps from the river path"],
    images: ["img/hood-3.jpg", "img/kit-2.jpg", "img/liv-6.jpg", "img/bed-2.jpg", "img/bath-5.jpg"]
  },
  {
    id: 18, address: "1 Lantern Point", neighborhood: "Harbor Point", price: 5250000, beds: 5, baths: 6, sqft: 5900,
    type: "Estate", status: "For Sale", year: 2020, lot: "0.84 acres", garage: 3, hoa: 0, dom: 27, listed: "2026-09-18",
    x: 92, y: 23,
    description: "A restored mid-century modern estate at the quiet end of Harbor Point, set among mature palms and desert gardens with the mountains beyond. Walls of glass open the main living spaces to a deep terrace and a sun-washed pool, while interiors stay warm and calm: white oak, honed stone and a palette of soft neutrals. Five en-suite bedrooms, a gym, a sauna and a separate guest house make it a true retreat.",
    features: ["Restored mid-century architecture", "Pool and sun terrace", "Guest house", "Gym and sauna", "Five en-suite bedrooms", "Chef's kitchen and scullery", "Whole-home generator", "Gated entry"],
    images: ["img/hero.jpg", "img/liv-2.jpg", "img/kit-4.jpg", "img/din-3.jpg", "img/bed-4.jpg", "img/bath-2.jpg"]
  }
];

/* Shared helpers */
window.LUMEN = {
  money: function (n) { return "$" + Math.round(n).toLocaleString("en-US"); },
  short: function (n) { return n >= 1e6 ? "$" + parseFloat((n / 1e6).toFixed(2)) + "M" : "$" + Math.round(n / 1e3) + "K"; },
  badge: function (s) { return { "For Sale": "badge--sale", "Open House": "badge--open", "Pending": "badge--pending", "Sold": "badge--sold" }[s] || "badge--sale"; },
  esc: function (s) { return String(s).replace(/[&<>"']/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]; }); },
  card: function (l, opts) {
    opts = opts || {};
    var E = window.LUMEN.esc;
    return '<a class="listing' + (opts.cls ? " " + opts.cls : "") + '" href="listing.html?id=' + l.id + '" data-id="' + l.id + '">' +
      '<figure class="listing__media"><img src="' + l.images[0] + '" alt="' + E(l.address + ", " + l.neighborhood) + '" loading="lazy"><span class="badge ' + window.LUMEN.badge(l.status) + '">' + E(l.status) + '</span></figure>' +
      '<div class="listing__body"><p class="listing__price">' + window.LUMEN.money(l.price) + '</p>' +
      '<h3 class="listing__addr">' + E(l.address) + '</h3><p class="listing__city">' + E(l.neighborhood) + ' · ' + E(l.type) + '</p>' +
      '<ul class="listing__meta"><li>' + l.beds + ' Beds</li><li>' + l.baths + ' Baths</li><li>' + l.sqft.toLocaleString("en-US") + ' Sq.Ft.</li></ul>' +
      '<span class="text-link listing__view">View Home<i class="arrow" aria-hidden="true"></i></span></div></a>';
  }
};
