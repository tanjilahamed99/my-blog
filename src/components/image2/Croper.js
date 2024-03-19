"use client";
import React, { useState, useCallback, useRef } from "react";
import ReactCrop from "react-image-crop";
import { withRequestPreSendUpdate } from "@rpldy/uploady";
import { PREVIEW_TYPES } from "@rpldy/upload-preview";
import cropImage from "../../../public/christian-lambert-vmIWr0NnpCQ-unsplash.jpg";

const Coper = () => {
  const { url, isFallback, updateRequest, requestData } =props;
  const [crop, setCrop] = useState(null);
  const imgRef = useRef(null);

  const onUploadCrop = useCallback(async () => {
    if (updateRequest && (crop?.height || crop?.width)) {
      requestData.items[0].file = await cropImage(
        imgRef.current,
        requestData.items[0].file,
        crop
      );
      updateRequest({ items: requestData.items });
    }
  }, [imgRef, requestData, updateRequest, crop]);



  const onLoad = useCallback((img) => {
    imgRef.current = img;
  }, []);


  
  return isFallback || type !== PREVIEW_TYPES.IMAGE ? (
    <img src={url} alt="fallback img" />
  ) : (
    <>
      {requestData ? (
        <ReactCrop
          src={url}
          crop={crop}
          onImageLoaded={onLoad}
          onChange={setCrop}
          onComplete={setCrop}
        />
      ) : null}
      <button
        style={{ display: updateRequest && crop ? "block" : "none" }}
        onClick={onUploadCrop}
      >
        Upload Cropped
      </button>
    </>
  );
};

export default Coper;
