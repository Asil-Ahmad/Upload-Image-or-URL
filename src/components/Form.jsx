import React, { useState } from "react";
import { upload_image } from "../assets";
import Table from "./Table";

const Form = () => {
  const [image, setImage] = useState(false);
  const [desc, setDesc] = useState("");
  const [imageURL, setImageURL] = useState("");

  const handleSubmit = () => {
    const createPara = document.createElement("p"); //creating p elements
    const createImage = document.createElement("img");//creating img element
    createImage.className = "userImage"; //adding classname to img tag after creating
    console.log(createImage);

    const imgdesc = desc; //getting image desc
    // const img = image  ? URL.createObjectURL(image) : upload_image;
    //const img = imageURL ? imageURL : upload_image;

    const img = image ? URL.createObjectURL(image) : imageURL || upload_image;

    createImage.src = img; //this is to get source for image
    createPara.innerHTML = imgdesc; //this is to get innerHTML of the text

    //below we check if image or text available then show or go error
    if (image || (imageURL && desc !== "")) {
      document.getElementById("imageDetails").appendChild(createImage);
      document.getElementById("imageDetails").appendChild(createPara);
      setImage(false);
      setDesc("");
      setImageURL("");
    } else alert("Enter text");
  };

  return (
    <>
      <div className='flex items-center justify-center h-full'>
        <form className='flex justify-center items-center flex-col p-5 gap-2.5 '>
          <input
            type='file'
            id='image'
            hidden
            accept='image/*'
            onChange={(e) => setImage(e.target.files[0])}
          />
          <label
            htmlFor='image'
            className='flex justify-center items-center gap-5'
          >
            <img
              src={image ? URL.createObjectURL(image) : upload_image}
              alt=''
              className='w-[100px] h-[100px] object-contain object-center 
              hover:scale-95 transition-all ease-in duration-100 '
            />
            <h1 className='text-center'>OR</h1>
            <input
              type='url'
              name='url'
              id='url'
              value={imageURL}
              src={imageURL}
              onChange={(e) => setImageURL(e.target.value)}
              placeholder='Paste Image URL'
              className='border-[3px] border-black focus-none outline-none py-1 px-3  rounded-lg'
            />
          </label>
          <input
            type='text'
            id='text'
            minLength={1}
            maxLength={10}
            value={desc}
            onChange={(e) => {
              setDesc(e.target.value);
              console.log("hy");
            }}
            placeholder='Enter image description'
            className='border-[3px] border-black focus-none outline-none py-1 px-3  rounded-lg'
          />
          <input
            type='button'
            value='Submit'
            onClick={handleSubmit}
            className='bg-blue-500 text-center rounded-lg w-full p-2 text-white'
          />
        </form>
      </div>
      <Table image={image} desc={desc} />
    </>
  );
};

export default Form;
