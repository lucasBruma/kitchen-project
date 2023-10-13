"use client";
import styled from "@emotion/styled";
import { useState } from "react";
import { Button } from "@mui/material";
import { IoMdClose } from "react-icons/io";

const ImageShadow = styled.div`
  background: rgb(0, 0, 0);
  background: linear-gradient(to top, rgba(109, 56, 64, 1) 0%, rgba(255, 255, 255, 0) 40%);
`;

export function Gallery({ images = [] }) {
  const [isModalOpen, setModalOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);

  return (
    <div className="grid w-full grid-cols-1 gap-4 px-6 py-12 md:grid-cols-2 md:px-32 lg:grid-cols-3 lg:gap-8 xl:px-56">
      {images.map((image) => (
        <div key={image.src} className="h-full w-full">
          <Button
            className="group relative cursor-pointer overflow-hidden rounded-md border-2 border-white p-0 duration-300 ease-in hover:shadow-lg hover:shadow-gray-400"
            onClick={() => {
              setCurrentImage(image);
              setModalOpen(true);
            }}
          >
            <img src={image.src} alt={image.alt} className="object-cover duration-300 ease-in group-hover:!scale-110" />
            <ImageShadow className="absolute inset-0 h-full w-full" />
          </Button>
          {isModalOpen && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-10">
              <div className="relative rounded-lg bg-white p-4 shadow-lg">
                <img src={currentImage.src} alt="Current View" />
                <button
                  className="absolute right-[-20px] top-[-20px] rounded-[50%] bg-red-500 p-2 text-white"
                  onClick={() => setModalOpen(false)}
                >
                  <IoMdClose size={50} />
                </button>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
