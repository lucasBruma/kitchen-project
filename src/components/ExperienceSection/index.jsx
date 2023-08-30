import { Typography } from "@mui/material";
import Link from "next/link";

export default function ExperienceSection() {
  return (
    <section>
      <div className="w-full px-6 text-primary-main md:px-32 xl:px-56" sx={{ fontFamily: "inherit" }}>
        <div className="py-12 md:py-24">
          {/* Section header */}
          <div className="pb-12 text-start md:pb-20">
            <h2 className="text-4xl font-bold">Let’s walk through the Explore remodeling experience together.</h2>
          </div>

          {/* Items */}
          <div className="mx-auto grid max-w-sm items-start gap-8 md:max-w-2xl md:grid-cols-2 lg:max-w-none lg:grid-cols-3 lg:gap-16">
            {/* 1st item */}
            <div className="relative flex flex-col items-start">
              <div className="flex flex-row items-center gap-4">
                <svg className="mb-4 h-16 w-16" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                  <circle className="fill-current text-red-main" cx="32" cy="32" r="32" />
                  <text
                    x="50%"
                    y="51%"
                    text-anchor="middle"
                    stroke="white"
                    stroke-width="3px"
                    dy=".3em"
                    font-size="1.5em"
                  >
                    1
                  </text>
                </svg>
                <h4 className="h4 mb-2 w-full text-start text-xl font-medium">
                  Meet with our team virtually or in your home.{" "}
                </h4>
              </div>

              <p className="text-start text-lg text-gray-400">
                Our first meeting generally requires an investment of about one hour on your part. This meeting is
                essential, as it allows us to get to know each other. You’ll have the opportunity to ask us any
                questions you have, review our credentials and view our past work. On the other hand, we’ll have the
                chance to discuss your design goals, establish your needs and take some necessary measurements.
              </p>
            </div>

            {/* 2nd item */}
            <div className="relative flex flex-col items-start">
              <div className="flex flex-row items-center gap-4">
                <svg className="mb-4 h-16 w-16" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                  <circle className="fill-current text-red-main" cx="32" cy="32" r="32" />
                  <text
                    x="50%"
                    y="51%"
                    text-anchor="middle"
                    stroke="white"
                    stroke-width="3px"
                    dy=".3em"
                    font-size="1.5em"
                  >
                    2
                  </text>
                </svg>
                <h4 className="h4 mb-2 w-full text-start text-xl font-medium">Send Your Design and Project Total </h4>
              </div>
              <p className="text-start text-lg text-gray-400">
                After we’ve completed your design and drawings, we’ll generate a project total for you. Your designated
                designer will send your design and drawings, the full scope of work, and the required payment schedule
                for the project. Depending on your project’s complexity, it’s often helpful to schedule a follow-up
                appointment to go over the documents we send to you.
              </p>
            </div>

            {/* 3rd item */}
            <div className="relative flex flex-col items-start">
              <div className="flex flex-row items-center gap-4">
                <svg className="mb-4 h-16 w-16" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                  <circle className="fill-current text-red-main" cx="32" cy="32" r="32" />
                  <text
                    x="50%"
                    y="51%"
                    text-anchor="middle"
                    stroke="white"
                    stroke-width="3px"
                    dy=".3em"
                    font-size="1.5em"
                  >
                    3
                  </text>
                </svg>
                <h4 className="h4 mb-2 w-full text-start text-xl font-medium">Finalize the Design</h4>
              </div>
              <p className="text-start text-lg text-gray-400">
                As we get closer to the renovation, we will continue to work closely with you to finalize the design of
                your space. We’ll bring material samples to your home, meet with you in our showroom or walk you through
                the showrooms of some of our partners. This will give you the broadest range of products to choose from
                as possible. Explore can help you choose the best style and color combinations to achieve your desired
                design goals.
              </p>
            </div>

            {/* 4th item */}
            <div className="relative flex flex-col items-start">
              <div className="flex flex-row items-center gap-4">
                <svg className="mb-4 h-16 w-16" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                  <circle className="fill-current text-red-main" cx="32" cy="32" r="32" />
                  <text
                    x="50%"
                    y="51%"
                    text-anchor="middle"
                    stroke="white"
                    stroke-width="3px"
                    dy=".3em"
                    font-size="1.5em"
                  >
                    4
                  </text>
                </svg>
                <h4 className="h4 mb-2 w-full text-start text-xl font-medium">Installation</h4>
              </div>
              <p className="text-start text-lg text-gray-400">
                We’ll work with you to determine the project start date and work hours at the time of the contract being
                signed. Our work crews receive fantastic feedback from our clients and are both highly reliable and
                skilled. You can rest assured that they will be extremely considerate of your home, clean the work site
                daily, and will close off the area to reduce the spread of dust and dirt.
              </p>
            </div>

            {/* 5th item */}
            <div className="relative flex flex-col items-start">
              <div className="flex flex-row items-center gap-4">
                <svg className="mb-4 h-16 w-16" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                  <circle className="fill-current text-red-main" cx="32" cy="32" r="32" />
                  <text
                    x="50%"
                    y="51%"
                    text-anchor="middle"
                    stroke="white"
                    stroke-width="3px"
                    dy=".3em"
                    font-size="1.5em"
                  >
                    5
                  </text>
                </svg>
                <h4 className="h4 mb-2 w-full text-start text-xl font-medium">Finishing Up </h4>
              </div>
              <p className="text-start text-lg text-gray-400">
                After the installation is finished, we’ll organize a final meeting with you. Your assigned Project
                Manager will walk you through the job, ensuring you are satisfied with everything and handling any
                questions, concerns, or feedback you have.
              </p>
              <Link href="/contact">
                <button className="relative z-20 mt-6 w-fit rounded-xl bg-red-main px-5 py-3 font-medium text-white shadow-md shadow-black duration-200 ease-in hover:bg-primary-main">
                  CONTACT US
                </button>
              </Link>
            </div>

            {/* 6th item */}
            {/* <div className="relative flex flex-col items-start">
              <svg className="mb-4 h-16 w-16" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                <circle className="fill-current text-red-main" cx="32" cy="32" r="32" />
                <text
                  x="50%"
                  y="51%"
                  text-anchor="middle"
                  stroke="white"
                  stroke-width="3px"
                  dy=".3em"
                  font-size="1.5em"
                >
                  6
                </text>
              </svg>
              <h4 className="h4 mb-2">Instant Features</h4>
              <p className="text-start text-lg text-gray-400">
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                Excepteur sint occaecat cupidatat.
              </p>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}
