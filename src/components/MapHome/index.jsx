export default function MapHome() {
  return (
    <div className="w-full px-6 text-black md:px-32 xl:px-56" sx={{ fontFamily: "inherit" }}>
      <div className="py-12 md:py-24">
        <div className="flex flex-col-reverse justify-between gap-4 sm:flex-row sm:gap-16">
          <div className="w-full sm:w-[60%]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3103.9604188521985!2d-77.23310632337443!3d38.92488217171813!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b64b10a5d94ec7%3A0xee067bd5d419048b!2sExplore%20Kitchens%20%26%20Home%20Remodeling!5e0!3m2!1ses-419!2sar!4v1695297102106!5m2!1ses-419!2sar"
              style={{ border: 0 }}
              className="h-full w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="sm:w-[30%]">
            {/* Section header */}
            <div className="pb-12 text-start md:pb-20">
              <h2 className="mb-4 text-4xl font-bold text-red-main">OUR LOCATION</h2>
              <p className="text-lg">
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
