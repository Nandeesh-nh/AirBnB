let data = [
{
  title: "Modern Loft in Downtown",
  description: "Stay in the heart of the city in this stylish loft apartment. Perfect for urban explorers!",
  image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
  },
  price: 1200,
  location: "New York City",
  country: "United States",
  
  geometry: {
      type: "Point",
      coordinates: [-74.006, 40.7128] // Example coordinates for NYC
  },
  category: "city-escape"
},
{
  title: "Mountain Retreat",
  description: "Unplug and unwind in this peaceful mountain cabin. Surrounded by nature, it's a perfect place to recharge.",
  image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aG90ZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  },
  price: 1000,
  location: "Aspen",
  country: "United States",
  
  geometry: {
      type: "Point",
      coordinates: [-106.82, 39.19] // Example coordinates for Aspen
  },
  category: "adventure"
},
{
  title: "Historic Villa in Tuscany",
  description: "Experience the charm of Tuscany in this beautifully restored villa. Explore the rolling hills and vineyards.",
  image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  },
  price: 2500,
  location: "Florence",
  country: "Italy",
  
  geometry: {
      type: "Point",
      coordinates: [11.25, 43.77] // Example coordinates for Florence
  },
  category: "luxury"
},
{
  title: "Secluded Treehouse Getaway",
  description: "Live among the treetops in this unique treehouse retreat. A true nature lover's paradise.",
  image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
  },
  price: 800,
  location: "Portland",
  country: "United States",
  
  geometry: {
      type: "Point",
      coordinates: [-122.68, 45.52] // Example coordinates for Portland
  },
  category: "unique-stays"
},
{
  title: "Beachfront Paradise",
  description: "Step out of your door onto the sandy beach. This beachfront condo offers the ultimate relaxation.",
  image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
  },
  price: 2000,
  location: "Cancun",
  country: "Mexico",
  
  geometry: {
      type: "Point",
      coordinates: [-86.85, 21.17] // Example coordinates for Cancun
  },
  category: "beachside"
},
{
  title: "Rustic Cabin by the Lake",
  description: "Spend your days fishing and kayaking on the serene lake. This cozy cabin is perfect for outdoor enthusiasts.",
  image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1vdW50YWlufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  },
  price: 900,
  location: "Lake Tahoe",
  country: "United States",
  
  geometry: {
      type: "Point",
      coordinates: [-120.03, 38.93] // Example coordinates for Lake Tahoe
  },
  category: "adventure"
},
{
  title: "Luxury Penthouse with City Views",
  description: "Indulge in luxury living with panoramic city views from this stunning penthouse apartment.",
  image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1622396481328-9b1b78cdd9fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2t5JTIwdmFjYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
  },
  price: 3500,
  location: "Los Angeles",
  country: "United States",
  
  geometry: {
      type: "Point",
      coordinates: [-118.25, 34.05] // Example coordinates for Los Angeles
  },
  category: "luxury"
},
{
  title: "Ski-In/Ski-Out Chalet",
  description: "Hit the slopes right from your doorstep in this ski-in/ski-out chalet in the Swiss Alps.",
  image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1502784444187-359ac186c5bb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHNreSUyMHZhY2F0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  },
  price: 3000,
  location: "Verbier",
  country: "Switzerland",
  
  geometry: {
      type: "Point",
      coordinates: [7.23, 46.10] // Example coordinates for Verbier
  },
  category: "adventure"
},
{
  title: "Safari Lodge in the Serengeti",
  description: "Experience the thrill of the wild in a comfortable safari lodge. Witness the Great Migration up close.",
  image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fG1vdW50YWlufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  },
  price: 4000,
  location: "Serengeti National Park",
  country: "Tanzania",
  
  geometry: {
      type: "Point",
      coordinates: [34.80, -2.33] // Example coordinates for Serengeti National Park
  },
  category: "unique stays"
},
{
  title: "Historic Canal House",
  description: "Stay in a piece of history in this beautifully preserved canal house in Amsterdam's iconic district.",
  image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2FtcGluZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
  },
  price: 1800,
  location: "Amsterdam",
  country: "Netherlands",
  
  geometry: {
      type: "Point",
      coordinates: [4.90, 52.37] // Example coordinates for Amsterdam
  },
  category: "unique stays"
},
{
  title: "Private Island Retreat",
  description: "Have an entire island to yourself for a truly exclusive and unforgettable vacation experience.",
  image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1618140052121-39fc6db33972?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bG9kZ2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
  },
  price: 10000,
  location: "Fiji",
  country: "Fiji",
  
  geometry: {
      type: "Point",
      coordinates: [178.42, -17.77] // Example coordinates for Fiji
  },
  category: "luxury"
},
{
  title: "Charming Cottage in the Cotswolds",
  description: "Escape to the picturesque Cotswolds in this quaint and charming cottage with a thatched roof.",
  image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1602088113235-229c19758e9f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YmVhY2glMjB2YWNhdGlvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
  },
  price: 1200,
  location: "Cotswolds",
  country: "United Kingdom",
  
  geometry: {
      type: "Point",
      coordinates: [-1.77, 51.84] // Example coordinates for Cotswolds
  },
  category: "countryside"
},
{
  title: "Historic Brownstone in Boston",
  description: "Step back in time in this elegant historic brownstone located in the heart of Boston.",
  image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1533619239233-6280475a633a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHNreSUyMHZhY2F0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  },
  price: 2200,
  location: "Boston",
  country: "United States",
  
  geometry: {
      type: "Point",
      coordinates: [-71.06, 42.36] // Example coordinates for Boston
  },
  category: "city escape"
},
{
  title: "Beachfront Bungalow in Bali",
  description: "Relax on the sandy shores of Bali in this beautiful beachfront bungalow with a private pool.",
  image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1602391833977-358a52198938?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fGNhbXBpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
  },
  price: 1800,
  location: "Bali",
  country: "Indonesia",
  
  geometry: {
      type: "Point",
      coordinates: [115.23, -8.65] // Example coordinates for Bali
  },
  category: "beachside"
},
{
  title: "Mountain View Cabin in Banff",
  description: "Enjoy breathtaking mountain views from this cozy cabin in the Canadian Rockies.",
  image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1521401830884-6c03c1c87ebb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  },
  price: 1500,
  location: "Banff",
  country: "Canada",
  
  geometry: {
      type: "Point",
      coordinates: [-115.57, 51.17] // Example coordinates for Banff
  },
  category: "adventure"
},
{
  title: "Art Deco Apartment in Miami",
  description: "Step into the glamour of the 1920s in this stylish Art Deco apartment in South Beach.",
  image: {
      filename: "listingimage",
      url: "https://plus.unsplash.com/premium_photo-1670963964797-942df1804579?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  },
  price: 1600,
  location: "Miami",
  country: "United States",
  
  geometry: {
      type: "Point",
      coordinates: [-80.13, 25.76] // Example coordinates for Miami
  },
  category: "city escape"
},
{
  title: "Tropical Villa in Phuket",
  description: "Escape to a tropical paradise in this luxurious villa with a private infinity pool in Phuket.",
  image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1470165301023-58dab8118cc9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  },
  price: 3000,
  location: "Phuket",
  country: "Thailand",
  
  geometry: {
      type: "Point",
      coordinates: [98.30, 7.88] // Example coordinates for Phuket
  },
  category: "luxury"
},
{
  title: "Historic Castle in Scotland",
  description: "Live like royalty in this historic castle in the Scottish Highlands. Explore the rugged beauty of the area.",
  image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1585543805890-6051f7829f98?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGJlYWNoJTIwdmFjYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
  },
  price: 4000,
  location: "Scottish Highlands",
  country: "United Kingdom",
  
  geometry: {
      type: "Point",
      coordinates: [-4.40, 56.60] // Example coordinates for Scottish Highlands
  },
  category: "luxury"
},
{
  title: "Desert Oasis in Dubai",
  description: "Experience luxury in the middle of the desert in this opulent oasis in Dubai with a private pool.",
  image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1518684079-3c830dcef090?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZHViYWl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
  },
  price: 5000,
  location: "Dubai",
  country: "United Arab Emirates",
  
  geometry: {
      type: "Point",
      coordinates: [55.27, 25.20] // Example coordinates for Dubai
  },
  category: "luxury"
},
{
  title: "Rustic Log Cabin in Montana",
  description: "Unplug and unwind in this cozy log cabin surrounded by the natural beauty of Montana.",
  image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1586375300773-8384e3e4916f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  },
  price: 1100,
  location: "Montana",
  country: "United States",
  
  geometry: {
      type: "Point",
      coordinates: [-109.50, 46.92] // Example coordinates for Montana
  },
  category: "countryside"
},
{
  title: "Beachfront Villa in Greece",
  description: "Enjoy the crystal-clear waters of the Mediterranean in this beautiful beachfront villa on a Greek island.",
  image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dmlsbGF8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
  },
  price: 2500,
  location: "Mykonos",
  country: "Greece",
  
  geometry: {
      type: "Point",
      coordinates: [25.33, 37.45] // Example coordinates for Mykonos
  },
  category: "beachside"
},
{
  title: "Eco-Friendly Treehouse Retreat",
  description: "Stay in an eco-friendly treehouse nestled in the forest. It's the perfect escape for nature lovers.",
  image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1488462237308-ecaa28b729d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c2t5JTIwdmFjYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
  },
  price: 750,
  location: "Costa Rica",
  country: "Costa Rica",
  
  geometry: {
      type: "Point",
      coordinates: [-84.10, 10.00] // Example coordinates for Costa Rica
  },
  category: "countryside"
},
{
  title: "Historic Cottage in Charleston",
  description: "Experience the charm of historic Charleston in this beautifully restored cottage with a private garden.",
  image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1587381420270-3e1a5b9e6904?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  },
  price: 1600,
  location: "Charleston",
  country: "United States",
  
  geometry: {
      type: "Point",
      coordinates: [-79.93, 32.78] // Example coordinates for Charleston
  },
  category: "city escape"
},
{
  title: "Modern Apartment in Tokyo",
  description: "Explore the vibrant city of Tokyo from this modern and centrally located apartment.",
  image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1480796927426-f609979314bd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHRva3lvfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  },
  price: 2000,
  location: "Tokyo",
  country: "Japan",
  
  geometry: {
      type: "Point",
      coordinates: [139.69, 35.69] // Example coordinates for Tokyo
  },
  category: "city escape"
},
{
  title: "Lakefront Cabin in New Hampshire",
  description: "Spend your days by the lake in this cozy cabin in the scenic White Mountains of New Hampshire.",
  image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1578645510447-e20b4311e3ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDF8fGNhbXBpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
  },
  price: 1200,
  location: "New Hampshire",
  country: "United States",
  
  geometry: {
      type: "Point",
      coordinates: [-71.54, 43.71] // Example coordinates for New Hampshire
  },
  category: "countryside"
},
{
  title: "Luxury Villa in the Maldives",
  description: "Indulge in luxury in this overwater villa in the Maldives with stunning views of the Indian Ocean.",
  image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1439066615861-d1af74d74000?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bGFrZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
  },
  price: 6000,
  location: "Maldives",
  country: "Maldives",
  
  geometry: {
      type: "Point",
      coordinates: [73.50, 3.20] // Example coordinates for Maldives
  },
  category: "luxury"
},
{
  title: "Ski Chalet in Aspen",
  description: "Hit the slopes in style with this luxurious ski chalet in the world-famous Aspen ski resort.",
  image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGxha2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
  },
  price: 4000,
  location: "Aspen",
  country: "United States",
  
  geometry: {
      type: "Point",
      coordinates: [-106.82, 39.19] // Example coordinates for Aspen
  },
  category: "adventure"
},
{
  title: "Secluded Beach House in Costa Rica",
  description: "Escape to a secluded beach house on the Pacific coast of Costa Rica. Surf, relax, and unwind.",
  image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2glMjBob3VzZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
  },
  price: 1800,
  location: "Costa Rica",
  country: "Costa Rica",
  
  geometry: {
      type: "Point",
      coordinates: [-84.10, 10.00] // Example coordinates for Costa Rica
  },
  category: "beachside"
}]

module.exports = data;