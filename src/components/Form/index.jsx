"use client";
import React, { useState } from "react";
import { sendEmail } from "@/utils/send-email";
import { set, useForm } from "react-hook-form";
import { CircularProgress } from "@mui/material";

export const Form = () => {
  const { register, handleSubmit } = useForm();
  const [isLoading, setIsLoading] = useState(false);

  async function onSubmit(data) {
    setIsLoading(true);

    try {
      await sendEmail(data);
      setIsLoading(false);
    } catch (e) {
      console.log(e);
      setIsLoading(false);
      return;
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="grid xl:grid-cols-2 xl:gap-10">
        <input
          type="text"
          name="first_name"
          id="first_name"
          className="form-control m-0 mb-5 block h-[60px] w-full rounded-md border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 text-base font-normal text-gray-700 transition ease-in-out focus:border-black focus:bg-white focus:text-gray-700 focus:outline-none"
          placeholder="First Name "
          {...register("first_name", { required: true })}
        />

        <input
          type="text"
          name="last_name"
          id="last_name"
          className="form-control m-0 mb-5 block h-[60px] w-full rounded-md border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 text-base font-normal text-gray-700 transition ease-in-out focus:border-black focus:bg-white focus:text-gray-700 focus:outline-none"
          placeholder="Last Name "
          {...register("last_name", { required: true })}
        />
      </div>
      <input
        type="email"
        name="from_email"
        className="form-control m-0 mb-5 block h-[60px] w-full rounded-md border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 text-base font-normal text-gray-700 transition ease-in-out focus:border-black focus:bg-white focus:text-gray-700 focus:outline-none"
        placeholder="Email "
        {...register("email", { required: true })}
      />
      <input
        type="text"
        name="subject"
        className="form-control m-0 mb-5 block h-[60px] w-full rounded-md border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 text-base font-normal text-gray-700 transition ease-in-out focus:border-black focus:bg-white focus:text-gray-700 focus:outline-none"
        placeholder="Subject "
        {...register("subject", { required: true })}
      />

      <div className="flex justify-center">
        <textarea
          className="form-control m-0 mb-5 block w-full rounded-md border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-4 text-base font-normal text-gray-700 transition ease-in-out focus:border-black focus:bg-white focus:text-gray-700 focus:outline-none"
          id="exampleFormControlTextarea1"
          rows="3"
          placeholder="Your message"
          {...register("message", { required: true })}
          name="message"
        ></textarea>
      </div>

      <button
        type="submit"
        className="w-full rounded-lg bg-primary-main px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-black focus:outline-none focus:ring-4 dark:bg-primary-main dark:hover:bg-black sm:w-auto"
      >
        {isLoading ? <CircularProgress className="!h-[25px] !w-[25px]" /> : "Send Message"}
      </button>
    </form>
  );
};
