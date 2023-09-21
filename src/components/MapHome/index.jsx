"use client";

export default function MapHome() {
  const position = [51.505, -0.09]; // Coordenadas de ejemplo
  return (
    <div className="w-full pr-6 text-black md:pr-32 xl:pr-56" sx={{ fontFamily: "inherit" }}>
      <div className="py-12 md:py-24">
        <div class="flex gap-16">
          <div class="w-[70%]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3103.9604188521985!2d-77.23310632337443!3d38.92488217171813!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b64b10a5d94ec7%3A0xee067bd5d419048b!2sExplore%20Kitchens%20%26%20Home%20Remodeling!5e0!3m2!1ses-419!2sar!4v1695297102106!5m2!1ses-419!2sar"
              style={{ border: 0 }}
              className="h-full w-full"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div class="w-[30%]">
            {/* Section header */}
            <div className="pb-12 text-start md:pb-20">
              <h2 className="p-5 text-4xl font-bold ">OUR LOCATION</h2>
              <p className="font'bold text'lg p-5">
                Explore Kitchens for kitchen remodeling in all of Northern Virginia. We service dozens of cities in the
                area, including Fairfax, Arlington, McLean, Vienna, Great Falls, Falls Church, and many more by
                appointment only. Our experienced staff is here to ensure you’re happy with your new dream kitchen at
                every step along the process. View the map to see if we service your particular neighborhood.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
