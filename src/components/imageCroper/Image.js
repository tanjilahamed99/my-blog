"use client";

import React, { useState, useRef } from "react";
import "./image.css";
import Uploady from "@rpldy/uploady";
import UploadButton from "@rpldy/upload-button";

const ImageCrop = () => {
  const [image, setImage] = useState(null);
  const hiddenFileInput = useRef(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    const imgName = event.target.files[0].name;
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      const img = new Image();
      img.src = reader.result;
      img.onload = () => {
        const canvas = document.createElement("canvas");
        const maxSize = Math.max(img.width, img.height);
        canvas.width = maxSize;
        canvas.height = maxSize;
        const ctx = canvas.getContext("2d");
        ctx.drawImage(
          img,
          (maxSize - img.width) / 2,
          (maxSize - img.height) / 2
        );
        canvas.toBlob(
          (blob) => {
            const file = new File([blob], imgName, {
              type: "image/png",
              lastModified: Date.now(),
            });

            console.log(file);
            setImage(file);
          },
          "image/jpeg",
          0.8
        );
      };
    };
  };

  const handleUploadButtonClick = (file) => {
    var formData = new FormData();
    formData.append("file", file);
  };

  const handleClick = (event) => {
    hiddenFileInput.current.click();
  };

  return (
    <div className="image-upload-container my-20">
      <div className="box-decoration">
        <label htmlFor="image-upload-input" className="image-upload-label">
          {image ? image.name : "Choose an image"}
        </label>
        <div onClick={handleClick} style={{ cursor: "pointer" }}>
          {image ? (
            <img
              src={URL.createObjectURL(image)}
              alt="upload image"
              className="img-display-after"
            />
          ) : (
            <img src="" alt="upload image" className="img-display-before" />
          )}

          <input
            id="image-upload-input"
            type="file"
            onChange={handleImageChange}
            ref={hiddenFileInput}
            style={{ display: "none" }}
          />
        </div>

        {/* <button
          className="image-upload-button"
          onClick={handleUploadButtonClick}
        >
          Upload
        </button> */}

        <Uploady  destination={{ url: "https://my-server.com/upload" }}>
          <UploadButton />
        </Uploady>
      </div>
    </div>
  );
};

export default ImageCrop;
