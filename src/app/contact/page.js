import { Hero } from "@/components/Hero";
import React from "react";
import { BsTelephoneFill } from "react-icons/bs";
import { GrMail } from "react-icons/gr";
import { HiLocationMarker } from "react-icons/hi";
import { FaInstagram, FaTwitter, FaYoutube, FaPinterest, FaGithub } from "react-icons/fa";
import { AiFillClockCircle } from "react-icons/ai";
import { Divider } from "@mui/material";
import Link from "next/link";
import { SectionTransparent } from "@/components/SectionTransparent";

export default function Page() {
  return (
    <main>
      <Hero title="Contact" />
      <div className="h-auto w-screen py-12 text-primary-main">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row xl:px-80">
          <div className="my-10 w-full flex-col px-10 md:my-0 md:w-1/2 md:px-0 md:py-16">
            <h1 className="text-5xl font-semibold">Get In Touch</h1>
            <p className="my-5 text-base font-semibold">
              Fill up the form & our Team will get back to you within 12 hours.
            </p>

            <div className="my-12 flex flex-col gap-5">
              <div className="group flex w-full cursor-pointer items-center gap-5 rounded-lg hover:border-black md:w-1/2">
                <BsTelephoneFill className="text-xl text-gray-500  group-hover:text-black" />
                <Link href="tel:703-962-7510">
                  <p className="text-base font-semibold text-gray-500 group-hover:text-black">(703) 962-7510</p>
                </Link>
              </div>
              <div className="group flex w-full cursor-pointer items-center gap-5 rounded-lg hover:border-black md:w-1/2">
                <GrMail className="text-xl text-gray-500 group-hover:text-black" />
                <Link
                  href="mailto:info@explorekitchens.com"
                  className="text-base font-semibold text-gray-500 group-hover:text-black"
                  target="_blank"
                >
                  <p className="text-base font-semibold text-gray-500 group-hover:text-black">
                    info@explorekitchens.com
                  </p>
                </Link>
              </div>
              <div className="group flex w-full cursor-pointer items-center gap-5 rounded-lg hover:border-black md:w-1/2">
                <HiLocationMarker className="text-3xl text-gray-500  group-hover:text-black" />
                <Link
                  href="https://www.google.com/maps/place/1660+International+Dr+Suite+600,+McLean,+VA+22102,+EE.+UU./@38.9249552,-77.230636,17z/data=!4m6!3m5!1s0x89b64af25daaaaab:0x887f0f5bfa97ef7f!8m2!3d38.9249552!4d-77.230636!16s%2Fg%2F11nyp630h3?entry=ttu"
                  className="text-base font-semibold text-gray-500 group-hover:text-black"
                  target="_blank"
                >
                  <p>1660 International Dr Suite 600 McLean, VA 22102</p>
                </Link>
              </div>
              <div className="flex w-full cursor-pointer flex-col items-start gap-5 rounded-lg text-gray-500">
                <div className="flex items-center gap-5 hover:text-black">
                  <AiFillClockCircle className="text-xl" />
                  <p className="text-base font-semibold">Business hours</p>
                </div>
                <div className="flex flex-col gap-5">
                  <Divider />
                  <div className="flex items-center justify-between gap-5 hover:text-black">
                    <p className="text-base font-semibold">Monday - Friday:</p>
                    <p className="text-base font-semibold"> 8:30am – 5:30pm (By Appointment Only)</p>
                  </div>
                  <Divider />
                  <div className="flex items-center justify-between gap-5 hover:text-black">
                    <p className="text-base font-semibold">Saturday:</p>
                    <p className="text-base font-semibold"> 9:00am – 4:00pm (By Appointment Only)</p>
                  </div>
                  <Divider />
                  <div className="flex items-center justify-between gap-5 hover:text-black">
                    <p className="text-base font-semibold">Sunday:</p>
                    <p className="text-base font-semibold">Closed</p>
                  </div>
                  <Divider />
                </div>
              </div>
            </div>

            <div className="flex justify-center  gap-8 md:justify-start ">
              <FaInstagram className="cursor-pointer text-2xl text-black hover:text-black" />
              <FaTwitter className="cursor-pointer text-2xl text-black hover:text-black" />
              <FaYoutube className="cursor-pointer text-2xl text-black hover:text-black" />
            </div>
          </div>
          {/* Contact form */}
          <div className="rounded-lg bg-white p-12 shadow-md">
            <form>
              <div className="grid xl:grid-cols-2 xl:gap-10">
                <input
                  type="text"
                  name="first_name"
                  id="first_name"
                  className="form-control m-0 mb-5 block h-[60px] w-full rounded-md border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 text-base font-normal text-gray-700 transition ease-in-out focus:border-black focus:bg-white focus:text-gray-700 focus:outline-none"
                  placeholder="First Name "
                  required={true}
                />

                <input
                  type="text"
                  name="last_name"
                  id="last_name"
                  className="form-control m-0 mb-5 block h-[60px] w-full rounded-md border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 text-base font-normal text-gray-700 transition ease-in-out focus:border-black focus:bg-white focus:text-gray-700 focus:outline-none"
                  placeholder="Last Name "
                  required=""
                />
              </div>
              <input
                type="email"
                name="email"
                className="form-control m-0 mb-5 block h-[60px] w-full rounded-md border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 text-base font-normal text-gray-700 transition ease-in-out focus:border-black focus:bg-white focus:text-gray-700 focus:outline-none"
                placeholder="Email "
                required={true}
              />
              <input
                type="text"
                name="subject"
                className="form-control m-0 mb-5 block h-[60px] w-full rounded-md border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 text-base font-normal text-gray-700 transition ease-in-out focus:border-black focus:bg-white focus:text-gray-700 focus:outline-none"
                placeholder="Subject "
                required={true}
              />

              <div className="flex justify-center">
                <textarea
                  className="form-control m-0 mb-5 block w-full rounded-md border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-4 text-base font-normal text-gray-700 transition ease-in-out focus:border-black focus:bg-white focus:text-gray-700 focus:outline-none"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  placeholder="Your message"
                  required={true}
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full rounded-lg bg-primary-main px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-black focus:outline-none focus:ring-4 dark:bg-primary-main dark:hover:bg-black sm:w-auto"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
      <SectionTransparent title="Our consultant will look at what you want to have done and need to have done, and if we can provide that service, we will give you an accurate written proposal on what your investment would be, and if we can’t provide the service you need, we may be able to provide you the names of others who can." />
    </main>
  );
}
