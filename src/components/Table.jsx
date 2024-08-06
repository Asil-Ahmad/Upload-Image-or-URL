import React from "react";
import { upload_image } from "../assets";

const Table = ({ image, desc }) => {
  return (
    <div className='h-[70vh] w-full flex justify-center items-start mt-10'>
      <div className='w-1/2'>
        <h1 className='text-4xl text-center'>Image Data</h1>
        <div
          className=' grid grid-cols-2 grid-rows-1 gap-4 w-full
         items-center p-2 border border-gray-300  bg-gray-100 rounded-3xl mt-10'
        >
          <b>Image</b>
          <b>Description</b>
        </div>
        <div
          id='imageDetails'
          className=' grid grid-cols-2 grid-rows-1 gap-4 w-full
         items-center p-2 border border-gray-300  bg-gray-100 rounded-3xl mt-5'
        >
          {/* <img
            id='userImage'
            src={image ? URL.createObjectURL(image) : upload_image}
            alt=''
            className='size-10 object-contain object-center'
          />
          <p id='imgDesc'></p> */}
        </div>
      </div>
    </div>
  );
};

export default Table;
