import React, { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { IoSearch } from "react-icons/io5";

const PropertyGallery = ({ images }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative ">
      <img
        src={images[0]}
        alt="Property"
        className="w-full h-[80vh] object-cover "
      />
      <div
        className="absolute inset-0 flex justify-center items-center bg-black/40 text-white text-[30px] font-semibold cursor-pointer"
        onClick={() => setOpen(true)}
      >
        <IoSearch className="mt-1" /> Click to View Photos
      </div>

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={images.map((src) => ({ src }))}
      />
    </div>
  );
};

export default PropertyGallery;
