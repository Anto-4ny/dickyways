document.addEventListener("DOMContentLoaded", () => {
  const urlParams = new URLSearchParams(window.location.search);
  const placeKey = urlParams.get("place");

  const destinations = {
    "nairobi": {
      title: "Nairobi - The Heartbeat of Kenya",
      description: `
        Nairobi, the vibrant capital of Kenya, is a modern city with unmatched wildlife access. Imagine sipping cocktails at a rooftop bar with giraffes roaming nearby, or experiencing world-class museums, cuisine, and luxury shopping, all just minutes from Nairobi National Park. Nairobi blends raw African beauty with luxurious urban living, offering travelers a truly unique experience.
      `,
      howToReach: "Fly into Jomo Kenyatta International Airport. Uber and private car pickups available.",
      image: "img/nairobi.png",
      packages: [
        {
          name: "Giraffe Manor Experience",
          image: "img/giraffe-manor.jpg",
          description: "Stay in a luxury colonial-style manor where giraffes visit your breakfast table. Includes full-board and private game drives.",
          price: "$1,250 / Night",
          location: "Lang’ata, Nairobi"
        },
        {
          name: "Nairobi Helicopter City Tour",
          image: "img/heli-tour.jpg",
          description: "A premium chopper ride over Nairobi National Park and the city skyline. Champagne included.",
          price: "$850 / Person",
          location: "Wilson Airport, Nairobi"
        },
        {
          name: "Luxury Safari at Emakoko Lodge",
          image: "img/emakoko.png",
          description: "Stay in a riverside luxury lodge inside Nairobi National Park. Enjoy game drives, massages, and fine dining.",
          price: "$1,400 / Night",
          location: "Inside Nairobi National Park"
        }
      ]
    },
    "mombasa": {
      title: "Mombasa - Coastal Charm and Swahili Culture",
      description: `
        Mombasa is a coastal paradise famed for its white sandy beaches, historical forts, and rich Swahili heritage. Relax in five-star beach resorts, explore ancient forts, and dive in vibrant coral reefs. At night, savor gourmet seafood paired with the rhythmic beats of taarab music.
      `,
      howToReach: "Fly into Moi International Airport or take the scenic SGR train from Nairobi.",
      image: "img/mombasa-snorkel.jpg",
      packages: [
        {
          name: "Luxury Beach Resort Stay",
          image: "img/lamu.jpg",
          description: "Experience 5-star oceanfront luxury with private beach access, spa treatments, and gourmet dining.",
          price: "$1,000 / Night",
          location: "Nyali Beach, Mombasa"
        },
        {
          name: "Private Historical Tour & Sunset Cruise",
          image: "img/mombasa-cruise.jpg",
          description: "Guided tour of Fort Jesus, followed by a private dhow sunset cruise with champagne.",
          price: "$600 / Person",
          location: "Mombasa Old Town"
        },
        {
          name: "Snorkeling & Marine Safari",
          image: "img/mombasa-snorkel.jpg",
          description: "Explore vibrant coral reefs and marine life with expert guides, followed by a beachside gourmet lunch.",
          price: "$450 / Person",
          location: "Watamu Marine Park"
        }
      ]
    },
    "diani": {
      title: "Diani Beach - Serenity by the Sea",
      description: `
        Diani Beach offers one of Africa’s most stunning seaside retreats with powdery white sands and turquoise waters. Dive into coral reefs, try skydiving over the coast, or unwind at ultra-luxury beachfront villas. This tranquil paradise promises both adventure and peace.
      `,
      howToReach: "Fly into Ukunda Airstrip or drive about 45 minutes from Mombasa.",
      image: "img/diani.jpeg",
      packages: [
        {
          name: "Ultra-Luxe Beachfront Villa",
          image: "img/diani-villa.jpg",
          description: "Private villa with infinity pool, personal chef, and direct beach access. Perfect for honeymooners.",
          price: "$1,800 / Night",
          location: "Diani Beach"
        },
        {
          name: "Skydiving Over Diani",
          image: "img/diani-skydiving.jpg",
          description: "Adrenaline-packed tandem skydiving with breathtaking views of the coastline and Indian Ocean.",
          price: "$600 / Jump",
          location: "Diani Airstrip"
        },
        {
          name: "Coral Reef Diving Safari",
          image: "img/diani-diving.jpg",
          description: "Guided diving expeditions exploring vibrant reefs and marine biodiversity of the Indian Ocean.",
          price: "$500 / Dive",
          location: "Diani Beach Marine Reserve"
        }
      ]
    },
    "maasai-mara": {
      title: "Maasai Mara - The Ultimate Safari Experience",
      description: `
        The Maasai Mara is Kenya’s most famous wildlife reserve, home to the Great Migration and the Big Five. Experience exclusive game drives in luxury tents with private guides, hot air balloon safaris at dawn, and authentic Maasai cultural visits.
      `,
      howToReach: "Fly into local Mara airstrips or enjoy a scenic 5-6 hour drive from Nairobi.",
      image: "img/masai-mara.jpg",
      packages: [
        {
          name: "Luxury Tented Safari Camp",
          image: "img/maasai-mara-camp.jpg",
          description: "Stay in ultra-luxe tents with en-suite bathrooms, gourmet meals, and daily guided game drives.",
          price: "$1,500 / Night",
          location: "Maasai Mara National Reserve"
        },
        {
          name: "Hot Air Balloon Safari",
          image: "img/maasai-mara-balloon.jpg",
          description: "Glide over the savannah at sunrise with champagne breakfast in the bush.",
          price: "$1,200 / Person",
          location: "Maasai Mara"
        },
        {
          name: "Maasai Cultural Immersion",
          image: "img/maasai-culture.jpeg",
          description: "Experience Maasai traditions, village visits, and traditional meals with local guides.",
          price: "$400 / Person",
          location: "Maasai Village"
        }
      ]
    },
    "naivasha": {
      title: "Naivasha - Lakeside Getaway",
      description: `
        Lake Naivasha offers a peaceful retreat with freshwater adventures, lush landscapes, and abundant birdlife. Explore Crescent Island’s walking safaris, enjoy boat rides, and hike or bike in Hell's Gate National Park surrounded by dramatic scenery.
      `,
      howToReach: "Just 1.5 hours by car or shuttle from Nairobi.",
      image: "img/naivasha.jpg",
      packages: [
        {
          name: "Luxury Lakeside Lodge Stay",
          image: "img/naivasha-lodge.jpeg",
          description: "Stay in premium lodges with lake views, gourmet dining, and guided nature walks.",
          price: "$700 / Night",
          location: "Lake Naivasha"
        },
        {
          name: "Crescent Island Walking Safari",
          image: "img/crescent-island.jpeg",
          description: "Explore this unique wildlife sanctuary on foot with giraffes, zebras, and antelopes roaming freely.",
          price: "$150 / Person",
          location: "Crescent Island Game Sanctuary"
        },
        {
          name: "Hell’s Gate Hiking & Biking",
          image: "img/hells-gate.jpg",
          description: "Guided hiking and biking tours through Hell’s Gate National Park’s stunning gorges and cliffs.",
          price: "$200 / Person",
          location: "Hell's Gate National Park"
        }
      ]
    },
    "kisumu": {
      title: "Kisumu - Lake Victoria's Gem",
      description: `
        Kisumu, nestled on the shores of Lake Victoria, charms visitors with its laid-back atmosphere, rich fishing culture, and scenic sunsets. Visit bustling markets, explore Impala Sanctuary, and savor lakeside gourmet meals at luxury lodges.
      `,
      howToReach: "Fly from Nairobi to Kisumu International Airport or take a 7-hour bus ride.",
      image: "img/kisumu.jpg",
      packages: [
        {
          name: "Luxury Lakeside Lodge",
          image: "img/kisumu-lodge.jpg",
          description: "Upscale accommodations with private balconies overlooking Lake Victoria, spa, and gourmet cuisine.",
          price: "$650 / Night",
          location: "Lake Victoria Shore, Kisumu"
        },
        {
          name: "Impala Sanctuary VIP Tour",
          image: "img/impala-sanctuary.jpg",
          description: "Exclusive guided tour of the sanctuary with a private picnic and birdwatching.",
          price: "$250 / Person",
          location: "Impala Sanctuary"
        },
        {
          name: "Dunga Beach Sunset Cruise",
          image: "img/dunga-cruise.jpg",
          description: "Private boat cruise at sunset with champagne and local delicacies.",
          price: "$400 / Person",
          location: "Dunga Beach, Kisumu"
        }
      ]
    }
  };

  const destination = destinations[placeKey];
  const container = document.getElementById("destination-content");

  if (!destination) {
    document.getElementById("destination-title").textContent = "Destination Not Found";
    container.innerHTML = "<p>Sorry, we couldn't find that destination. Please go back and choose a valid place.</p>";
    return;
  }

  document.getElementById("destination-title").textContent = destination.title;

  const hero = `
    <div class="text-center mb-5">
      <img src="${destination.image}" alt="${destination.title}" class="img-fluid rounded shadow hero-img">
    </div>
    <section class="mb-5">
      <h2 class="section-title fw-bold mb-3">Description</h2>
      <p class="fs-5 text-justify">${destination.description}</p>
      <h2 class="section-title fw-bold mt-4 mb-3">How to Reach</h2>
      <p class="fs-5">${destination.howToReach}</p>
    </section>
  `;

  const packages = destination.packages.map(pkg => `
    <div class="col-md-4 mb-4">
      <div class="card package-card h-100 shadow-sm border-0 rounded-4">
        <img src="${pkg.image}" class="card-img-top rounded-top-4" alt="${pkg.name}">
        <div class="card-body d-flex flex-column">
          <h5 class="card-title fw-bold">${pkg.name}</h5>
          <p class="card-text flex-grow-1">${pkg.description}</p>
          <div class="mt-3">
            <p class="fw-semibold text-primary mb-1">${pkg.price}</p>
            <p class="text-muted fst-italic mb-3">${pkg.location}</p>
            <a href="#" class="btn btn-dark w-100 rounded-pill shadow-sm">Explore Package</a>
          </div>
        </div>
      </div>
    </div>
  `).join("");

  const packageSection = `
    <section class="mb-5">
      <h2 class="section-title fw-bold mb-4">Premium Packages</h2>
      <div class="row g-4">
        ${packages}
      </div>
    </section>
  `;

  container.innerHTML = hero + packageSection;
});


