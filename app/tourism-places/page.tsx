import React from "react";
import Image from "next/image";
import PageLayout from "@/components/PageLayout";
import { MapPin } from "lucide-react";

const places = [
  {
    title: "Digha Sea Beach & Mandarmani – Coastal Escape",
    description:
      "Digha and Mandarmani (about 130–160 km from IIT Kharagpur; ~2.5–3 hours by road) are iconic coastal getaways. Digha offers long, gently sloping sandy beaches, a lively promenade, and stunning Bay of Bengal sunsets, while Mandarmani provides calmer, scenic shores with expansive beaches.",
    highlights: ["Bay of Bengal sunsets", "Fresh seafood", "Beach walks"],
    mapLink: "https://maps.google.com/?q=Digha+Sea+Beach",
    images: [
      "https://res.cloudinary.com/damnmi4ya/image/upload/v1766388902/Screenshot_2025-12-22_130429_iihiba.png",
      "https://res.cloudinary.com/damnmi4ya/image/upload/v1766388902/Screenshot_2025-12-22_130446_jpzkkc.png",
      "https://res.cloudinary.com/damnmi4ya/image/upload/v1766388901/Screenshot_2025-12-22_130439_iiohdk.png",
    ],
  },

  {
    title: "Similipal National Park – Wildlife & Nature Retreat",
    description:
      "Similipal National Park, located around 185–230 km from Kharagpur, is one of India’s prominent tiger reserves known for dense forests, waterfalls, and rich biodiversity.",
    highlights: ["Tiger reserve", "Barehipani waterfall", "Jungle safaris"],
    mapLink: "https://maps.google.com/?q=Similipal+National+Park",
    images: [
      "https://res.cloudinary.com/damnmi4ya/image/upload/v1766389001/Screenshot_2025-12-22_130627_ujkycc.png",
      "https://res.cloudinary.com/damnmi4ya/image/upload/v1766389001/Screenshot_2025-12-22_130618_rx3roa.png",
      "https://res.cloudinary.com/damnmi4ya/image/upload/v1766389001/Screenshot_2025-12-22_130609_ufcgdx.png",
    ],
  },

  {
    title: "Deer Park Jhargram – Wildlife & Family Fun",
    description:
      "Jhargram Deer Park is a relaxed excursion located 40–50 km from IIT Kharagpur. Ideal for families, half-day trips, and peaceful nature exploration.",
    highlights: ["Family friendly", "Green surroundings", "Easy access"],
    mapLink: "https://maps.google.com/?q=Jhargram+Deer+Park",
    images: [
      "https://res.cloudinary.com/damnmi4ya/image/upload/v1766389142/Screenshot_2025-12-22_130842_c4lhrf.png",
      "https://res.cloudinary.com/damnmi4ya/image/upload/v1766389142/Screenshot_2025-12-22_130836_nlgfkx.png",
      "https://res.cloudinary.com/damnmi4ya/image/upload/v1766389142/Screenshot_2025-12-22_130830_l5xayd.png",
      "https://res.cloudinary.com/damnmi4ya/image/upload/v1766389141/Screenshot_2025-12-22_130823_eg6ukm.png",
    ],
  },

  {
    title: "Dimna Lake",
    description:
      "Dimna Lake near Jamshedpur is a peaceful destination surrounded by forested hills, perfect for photography, boating, cycling, and relaxation.",
    highlights: ["Serene lake views", "Sunrise & sunset", "Boating & cycling"],
    mapLink: "https://maps.google.com/?q=Dimna+Lake",
    images: [
      "https://res.cloudinary.com/damnmi4ya/image/upload/v1766389222/Screenshot_2025-12-22_131003_rbykmv.png",
      "https://res.cloudinary.com/damnmi4ya/image/upload/v1766389222/Screenshot_2025-12-22_131009_acgvkt.png",
    ],
  },
];

const ImageBox = ({ src }: { src: string }) => (
  <div className="relative w-full h-full rounded-xl overflow-hidden shadow-lg">
    <Image src={src} alt="" fill className="object-cover" />
  </div>
);

const TourismPlacesPage = () => {
  return (
    <PageLayout>
      <section className="max-w-6xl mx-auto px-4 py-12 space-y-16">
        {places.map((place, index) => {
          const reverse = index % 2 !== 0;

          return (
            <div
              key={place.title}
              className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
            >
              {/* TEXT */}
              <div className={`${reverse ? "md:order-2" : ""} space-y-4`}>
                <h2 className="text-2xl font-semibold text-slate-100">
                  {place.title}
                </h2>
                <p className="text-slate-300">{place.description}</p>

                <ul className="list-disc list-inside text-slate-200">
                  {place.highlights.map((h) => (
                    <li key={h}>{h}</li>
                  ))}
                </ul>

                {/* MAP LINK */}
                <a
                  href={place.mapLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition"
                >
                  <MapPin size={18} />
                  <span className="text-sm font-medium">View on Map</span>
                </a>
              </div>

              {/* IMAGES */}
              <div className={`${reverse ? "md:order-1" : ""} w-full`}>
                {index === 0 && (
                  <div className="space-y-4">
                    <div className="h-56">
                      <ImageBox src={place.images[0]} />
                    </div>
                    <div className="grid grid-cols-10 gap-4 h-40">
                      <div className="col-span-7">
                        <ImageBox src={place.images[1]} />
                      </div>
                      <div className="col-span-3">
                        <ImageBox src={place.images[2]} />
                      </div>
                    </div>
                  </div>
                )}

                {index === 1 && (
                  <div className="grid grid-cols-2 gap-4 h-72">
                    <div className="flex flex-col gap-4">
                      <div className="flex-1">
                        <ImageBox src={place.images[0]} />
                      </div>
                      <div className="flex-1">
                        <ImageBox src={place.images[1]} />
                      </div>
                    </div>
                    <div>
                      <ImageBox src={place.images[2]} />
                    </div>
                  </div>
                )}

                {index === 2 && (
                  <div className="grid grid-cols-2 grid-rows-2 gap-4 h-72">
                    {place.images.map((img) => (
                      <ImageBox key={img} src={img} />
                    ))}
                  </div>
                )}

                {index === 3 && (
                  <div className="flex flex-col gap-4 h-72">
                    {place.images.map((img) => (
                      <div key={img} className="flex-1">
                        <ImageBox src={img} />
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </section>
    </PageLayout>
  );
};

export default TourismPlacesPage;
