/* Haven template: shared listing data (fictional homes, fictional streets).
   Used by index.html, search.html, listing.html and neighborhood.html. */
(function (w) {
  var KIT = ["img/kit-1.jpg", "img/kit-2.jpg", "img/kit-3.jpg", "img/kit-4.jpg", "img/kit-5.jpg", "img/kit-6.jpg", "img/kit-7.jpg", "img/kit-8.jpg", "img/kit-9.jpg"];
  var LIV = ["img/liv-1.jpg", "img/liv-2.jpg", "img/liv-3.jpg", "img/liv-4.jpg", "img/liv-5.jpg", "img/liv-6.jpg"];
  var BED = ["img/bed-1.jpg", "img/bed-2.jpg", "img/bed-3.jpg", "img/bed-4.jpg"];
  var BATH = ["img/bath-1.jpg", "img/bath-2.jpg", "img/bath-3.jpg", "img/bath-4.jpg", "img/bath-5.jpg", "img/bath-6.jpg"];
  var DIN = ["img/din-1.jpg", "img/din-2.jpg", "img/din-3.jpg", "img/office-1.jpg"];

  function g(cover, k, l, b, ba, extra) {
    var a = [cover, LIV[l], KIT[k], BED[b], BATH[ba]];
    if (extra != null) a.splice(3, 0, DIN[extra]);
    return a;
  }

  w.LISTINGS = [
    { id: 1, address: "2140 Ridgeview Terrace", neighborhood: "Hillcrest", price: 1895000, beds: 4, baths: 3, sqft: 3120, type: "Single Family", status: "For Sale", year: 2019, lot: "0.31 acres", garage: "2-car attached", hoa: 0, dom: 6, x: 47, y: 37,
      description: "A light-filled modern home on one of Hillcrest's quiet upper streets. Walls of glass open the main floor to a heated pool and a terrace with valley views. The chef's kitchen anchors an open great room, and the primary suite has its own balcony, a spa bath and a dressing room.",
      features: ["Heated saltwater pool and spa", "Chef's kitchen with 48\" range", "Floor-to-ceiling sliding glass walls", "Primary suite with private balcony", "Smart home lighting and climate", "Wide-plank white oak floors", "Solar panels, owned", "EV charger in garage"],
      images: g("img/listing-1.jpg", 0, 0, 0, 2, 0) },
    { id: 2, address: "88 Shoreline Drive", neighborhood: "Lakeview", price: 1250000, beds: 5, baths: 4, sqft: 2980, type: "Single Family", status: "For Sale", year: 2006, lot: "0.27 acres", garage: "2-car attached", hoa: 0, dom: 12, x: 73, y: 27,
      description: "Two stories of easy indoor-outdoor living a short walk from the lake path. The palm-lined backyard has a pool, an outdoor kitchen and room to host. Inside, a family room with a fireplace flows into a bright kitchen with a big island and seating for six.",
      features: ["Pool with outdoor kitchen", "Five bedrooms, two on the main floor", "Kitchen island with seating", "Family room with gas fireplace", "Walk to the lake path", "Laundry room with sink", "Dual-zone central air"],
      images: g("img/listing-2.jpg", 2, 2, 1, 0, 1) },
    { id: 3, address: "415 Maple Hollow Lane", neighborhood: "Oak Park", price: 985000, beds: 4, baths: 3, sqft: 2640, type: "Single Family", status: "For Sale", year: 1998, lot: "0.42 acres", garage: "2-car detached", hoa: 0, dom: 18, x: 22, y: 25,
      description: "A shingle-style home with a deep wraparound porch on a tree-shaded Oak Park lane. The updated kitchen opens to a breakfast room, and a finished lower level adds a playroom and guest suite. The backyard is flat, fenced and close to the neighborhood elementary school.",
      features: ["Wraparound covered porch", "Updated kitchen with breakfast room", "Finished lower level with guest suite", "Flat, fully fenced backyard", "Mudroom with built-in cubbies", "Hardwood floors throughout", "Near parks and schools"],
      images: g("img/listing-3.jpg", 7, 5, 2, 3, 2) },
    { id: 4, address: "7 Juniper Court", neighborhood: "Westbrook", price: 1425000, beds: 4, baths: 4, sqft: 3050, type: "Single Family", status: "For Sale", year: 2015, lot: "0.36 acres", garage: "3-car attached", hoa: 85, dom: 9, x: 14, y: 66,
      description: "A crisp contemporary home at the end of a quiet cul-de-sac near the Westbrook golf club. Every bedroom has its own bath, the main floor has a home office, and the wide lawn is ready for games and gatherings.",
      features: ["Cul-de-sac location", "Every bedroom en suite", "Main-floor home office", "Quartz kitchen with walk-in pantry", "Covered patio with ceiling heaters", "Three-car garage", "Near the golf club"],
      images: g("img/listing-4.jpg", 5, 3, 3, 1, 3) },
    { id: 5, address: "1236 Willow Bend Road", neighborhood: "Riverside", price: 749000, beds: 3, baths: 2, sqft: 1960, type: "Townhouse", status: "For Sale", year: 2021, lot: "0.08 acres", garage: "1-car attached", hoa: 210, dom: 4, x: 80, y: 80,
      description: "A warm, timber-clad townhome a block from the river trail. The open main level has high ceilings and a kitchen built for cooking, and the rooftop deck is perfect for evening sunsets. Low-maintenance living with room to grow.",
      features: ["Rooftop deck with river views", "High ceilings on the main level", "Gas cooktop and wall oven", "Primary suite with walk-in closet", "Low-maintenance landscaping", "Steps from the river trail"],
      images: g("img/listing-5.jpg", 4, 4, 0, 5) },
    { id: 6, address: "500 Gallery Row, Unit PH2", neighborhood: "Downtown", price: 2350000, beds: 3, baths: 3, sqft: 2410, type: "Condo", status: "For Sale", year: 2020, lot: "N/A", garage: "2 deeded spaces", hoa: 1150, dom: 21, x: 58, y: 64,
      description: "A penthouse residence above the arts district with a private pool terrace and city views in every direction. Full-service building amenities include a concierge, fitness center and residents' lounge, all a short walk to galleries and restaurants.",
      features: ["Private pool terrace", "Panoramic city views", "Concierge and doorman", "Fitness center and residents' lounge", "Two deeded parking spaces", "Private elevator entry", "Wine storage"],
      images: g("img/listing-6.jpg", 1, 0, 3, 2, 1) },
    { id: 7, address: "34 Hawthorne Street", neighborhood: "Hillcrest", price: 879000, beds: 3, baths: 2, sqft: 1780, type: "Single Family", status: "For Sale", year: 1924, lot: "0.16 acres", garage: "1-car detached", hoa: 0, dom: 3, x: 41, y: 45,
      description: "A classic craftsman bungalow with a front porch made for summer evenings, two blocks from the Saturday market on Main. Original details meet an updated kitchen and baths, and the backyard has a garden and a detached garage with a workshop.",
      features: ["Restored front porch", "Original built-ins and trim", "Updated kitchen with gas range", "Garden beds and fruit trees", "Detached garage with workshop", "Walk to Main Street shops"],
      images: g("img/ext-1.jpg", 6, 5, 2, 5) },
    { id: 8, address: "1902 Bluebell Lane", neighborhood: "Oak Park", price: 1095000, beds: 4, baths: 3, sqft: 2450, type: "Single Family", status: "Pending", year: 1908, lot: "0.29 acres", garage: "2-car detached", hoa: 0, dom: 14, x: 28, y: 17,
      description: "A storybook Victorian with a sweeping front porch and a gabled roofline on one of Oak Park's prettiest blocks. High ceilings, tall windows and a renovated kitchen make it as livable as it is charming.",
      features: ["Wraparound Victorian porch", "Ten-foot ceilings", "Renovated kitchen with farmhouse sink", "Formal dining room", "Clawfoot tub in hall bath", "Mature trees and gardens"],
      images: g("img/ext-2.jpg", 8, 5, 1, 4, 0) },
    { id: 9, address: "61 Crestline Drive", neighborhood: "Hillcrest", price: 1349000, beds: 4, baths: 3.5, sqft: 2860, type: "Single Family", status: "New", year: 2023, lot: "0.22 acres", garage: "2-car attached", hoa: 0, dom: 1, x: 52, y: 32,
      description: "Newly built and never lived in. Clean lines, a dark garage door and big windows give this home a quiet modern presence, and the open plan inside is designed around a marble kitchen island. Upstairs, four bedrooms include a primary suite with a soaking tub.",
      features: ["New construction, builder warranty", "Marble kitchen island", "Soaking tub in primary bath", "Upstairs laundry room", "Energy-efficient windows", "Prewired for solar and EV"],
      images: g("img/ext-3.jpg", 0, 1, 0, 0, 1) },
    { id: 10, address: "220 Orchard Way", neighborhood: "Westbrook", price: 1150000, beds: 4, baths: 3, sqft: 2900, type: "Single Family", status: "For Sale", year: 1912, lot: "0.81 acres", garage: "2-car detached", hoa: 0, dom: 25, x: 20, y: 74,
      description: "A white farmhouse on nearly an acre, framed by old shade trees and a covered front porch. Inside, the home blends original character with a big modern kitchen and a family room that opens to the yard.",
      features: ["Nearly one acre", "Covered front porch", "Large eat-in kitchen", "Family room with wood stove", "Mature shade trees", "Room for a pool or garden"],
      images: g("img/ext-4.jpg", 7, 4, 2, 1, 2) },
    { id: 11, address: "718 Linden Avenue", neighborhood: "Hillcrest", price: 925000, beds: 3, baths: 2.5, sqft: 2100, type: "Single Family", status: "For Sale", year: 1950, lot: "0.19 acres", garage: "1-car attached", hoa: 0, dom: 11, x: 38, y: 38,
      description: "A gray-shingled colonial with a welcoming porch and flowering shrubs, on a street known for its spring blooms. Light-filled rooms, a renovated kitchen and a fenced backyard make it an easy fit for families.",
      features: ["Covered porch with flower beds", "Renovated kitchen", "Fireplace in the living room", "Fenced backyard with patio", "Walk to Hillcrest Elementary", "Updated windows"],
      images: g("img/ext-5.jpg", 3, 2, 3, 3) },
    { id: 12, address: "9 Fernwood Close", neighborhood: "Oak Park", price: 1180000, beds: 4, baths: 3, sqft: 2560, type: "Single Family", status: "Pending", year: 1936, lot: "0.25 acres", garage: "2-car attached", hoa: 0, dom: 8, x: 17, y: 30,
      description: "A Tudor-style home with steep gables and autumn color all around. Arched doorways, a stone fireplace and a sunny breakfast nook bring character to every room, and the primary suite was added in a careful recent renovation.",
      features: ["Tudor architecture", "Stone wood-burning fireplace", "Arched doorways", "Sunny breakfast nook", "Renovated primary suite", "Private, landscaped yard"],
      images: g("img/ext-6.jpg", 8, 5, 1, 2, 3) },
    { id: 13, address: "47 Stonegate Road", neighborhood: "Westbrook", price: 1675000, beds: 5, baths: 4, sqft: 3600, type: "Single Family", status: "For Sale", year: 2004, lot: "0.48 acres", garage: "3-car attached", hoa: 120, dom: 16, x: 10, y: 58,
      description: "A stone-front estate with columned porches and generous rooms throughout. A two-story foyer leads to formal and casual living spaces, a kitchen with a large center island, and a lower level with a theater and gym.",
      features: ["Stone facade with columned porch", "Two-story foyer", "Lower-level theater and gym", "Kitchen with center island", "Five bedrooms, four full baths", "Three-car garage"],
      images: g("img/ext-7.jpg", 5, 3, 0, 4, 1) },
    { id: 14, address: "3310 Meadow Ridge Road", neighborhood: "Riverside", price: 689000, beds: 3, baths: 2, sqft: 2050, type: "Single Family", status: "For Sale", year: 1994, lot: "0.62 acres", garage: "2-car attached", hoa: 0, dom: 30, x: 86, y: 72,
      description: "A brick ranch on a wide, manicured lawn with one-level living. Vaulted ceilings, a bright kitchen and a large primary suite make this an easy home for downsizers and first-time buyers alike.",
      features: ["Single-level living", "Vaulted great room ceiling", "Manicured front lawn", "Large primary suite", "Screened back porch", "Oversized two-car garage"],
      images: g("img/ext-8.jpg", 6, 2, 2, 5) },
    { id: 15, address: "29 Chestnut Street", neighborhood: "Oak Park", price: 1040000, beds: 4, baths: 3, sqft: 2700, type: "Single Family", status: "Sold", year: 1890, lot: "0.33 acres", garage: "2-car detached", hoa: 0, dom: 7, x: 25, y: 33,
      description: "A historic white colonial with black shutters, carefully restored and updated. Sold over asking after one weekend of showings, with multiple offers.",
      features: ["Historic colonial", "Restored original windows", "Updated kitchen and baths", "Two fireplaces", "Sold over asking"],
      images: g("img/ext-9.jpg", 2, 3, 3, 1, 0) },
    { id: 16, address: "612 Summit Avenue", neighborhood: "Hillcrest", price: 1310000, beds: 4, baths: 3, sqft: 2880, type: "Single Family", status: "Sold", year: 1928, lot: "0.55 acres", garage: "2-car attached", hoa: 0, dom: 5, x: 50, y: 47,
      description: "A columned Greek Revival home on a large Hillcrest lot. Sold in five days after a staging and marketing plan that drew strong interest from the first open house.",
      features: ["Greek Revival architecture", "Large, private lot", "Formal living and dining rooms", "Screened porch", "Sold in five days"],
      images: g("img/ext-10.jpg", 4, 0, 0, 2, 2) },
    { id: 17, address: "1504 Harbor Lane", neighborhood: "Lakeview", price: 865000, beds: 3, baths: 2, sqft: 1840, type: "Single Family", status: "Sold", year: 1932, lot: "0.21 acres", garage: "1-car detached", hoa: 0, dom: 9, x: 68, y: 20,
      description: "A brick cottage near the water with gardens on every side. The sellers moved up to a larger home nearby, and the sale closed on their timeline.",
      features: ["Brick cottage", "Cottage gardens", "Steps to the lake", "Updated kitchen"],
      images: g("img/ext-11.jpg", 1, 4, 1, 3) },
    { id: 18, address: "5 Willowmere Lane", neighborhood: "Lakeview", price: 795000, beds: 2, baths: 2, sqft: 1450, type: "Single Family", status: "For Sale", year: 1910, lot: "0.18 acres", garage: "Off-street parking", hoa: 0, dom: 19, x: 78, y: 30,
      description: "A stone cottage with a slate roof and a garden straight out of a storybook. Exposed beams, a cozy fireplace and a sunny kitchen make it a perfect weekend retreat or full-time home near the lake.",
      features: ["Stone cottage with slate roof", "Exposed ceiling beams", "Wood-burning fireplace", "English-style garden", "Short walk to the lake", "Detached studio"],
      images: g("img/ext-12.jpg", 3, 5, 0, 4, 2) },
    { id: 19, address: "300 Gallery Row, Unit 6B", neighborhood: "Downtown", price: 615000, beds: 2, baths: 2, sqft: 1180, type: "Condo", status: "For Sale", year: 2017, lot: "N/A", garage: "1 deeded space", hoa: 540, dom: 13, x: 63, y: 70,
      description: "A sunny corner condo with a deep balcony in one of Downtown's best-run buildings. An open kitchen and living area, two bedroom suites and a deeded parking space make city life simple.",
      features: ["Corner unit with balcony", "Open kitchen and living area", "Two bedroom suites", "In-unit laundry", "Rooftop terrace", "Deeded parking space"],
      images: g("img/ext-13.jpg", 1, 1, 3, 0, 1) }
  ];

  /* ---------- shared helpers ---------- */
  function money(n) { return "$" + Math.round(n).toLocaleString("en-US"); }
  function esc(s) { return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;"); }
  function badge(s) { return s === "For Sale" ? "" : '<span class="sold' + (s === "Sold" ? "" : " st-" + s.toLowerCase()) + '">' + esc(s === "New" ? "New Listing" : s) + "</span>"; }
  function i(id) { return '<svg class="i"><use href="#' + id + '"/></svg>'; }
  /* One card markup used everywhere (search, similar homes, neighborhood). */
  function card(p, opts) {
    opts = opts || {};
    return '<a class="prop pcard" href="listing.html?id=' + p.id + '" data-id="' + p.id + '">' +
      '<div class="ph"><img src="' + p.images[0] + '" alt="' + esc(p.address + ", " + p.neighborhood) + '" loading="lazy">' + badge(p.status) + "</div>" +
      '<div class="loc"><p>' + esc(p.neighborhood) + '</p><span class="ptype">' + esc(p.type) + "</span></div>" +
      '<p class="price">' + money(p.price) + "</p>" +
      '<p class="addr">' + esc(p.address) + "</p>" +
      '<div class="specs"><span>' + i("bed") + p.beds + " Beds</span><span>" + i("bath") + p.baths + " Baths</span><span>" + i("ruler") + p.sqft.toLocaleString("en-US") + " SqFt</span></div>" +
      (opts.noLink ? "" : '<span class="tlink">View Details ' + i("arrow") + "</span>") +
      "</a>";
  }
  w.HAVEN = { money: money, esc: esc, card: card, badge: badge };
})(typeof window !== "undefined" ? window : globalThis);
