import React, { useEffect, useRef, useState } from "react";
import { AiOutlineCloudUpload } from "react-icons/ai";
import './UploadImage.css'
import { Button, Group } from "@mantine/core";
const UploadImage = ({propertyDetails, setPropertyDetails, nextStep, prevStep }) => {
  const [imageURL, setImageURL] = useState(propertyDetails.image);
  
  const cloudinaryRef = useRef();
  const widgetRef = useRef();

  useEffect(()=>{
    cloudinaryRef.current = window.cloudinary;
    widgetRef.current = cloudinaryRef.current.createUploadWidget(
    {
        cloudName:"dlexeejuj",
        uploadPreset:"zi610bp2",
        maxFiles: 1,
    },
     (err,result)=>{
        if(result.event === "success"){
            setImageURL(result.info.secure_url)
        }
     }
    )
  },[])

  const handleNext = () => {
  setPropertyDetails((prev)=>({...prev,image: imageURL}));
  nextStep();
  }

  return (
    <div className="flexColCenter uploadWrapper">
      {!imageURL ? (
        <div className="flexColCenter uploadZone"
          onClick={()=>widgetRef.current?.open()}
        >
          <AiOutlineCloudUpload size={50} color="grey" />
          <span>Upload Image</span>
        </div>
      ) : (
        <div className="flexColCenter uploadedImage"
        onClick={()=>widgetRef.current?.open()}
        >
          <img src={imageURL} alt="" />
        </div>
      )}
      <Group>
        <Button variant="default" onClick={prevStep}>Back</Button>
        <Button onClick={handleNext} disabled={!imageURL}>Next</Button>
      </Group>
    </div>
  );
};

export default UploadImage;
