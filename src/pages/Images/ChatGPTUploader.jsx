"use client";

import React, { forwardRef, useImperativeHandle, useRef } from "react";
import styled from "styled-components";
import Cropper from "react-cropper";
import "cropperjs/dist/cropper.css";

const StyledCropper = styled(Cropper)`
  max-height: 500px;
  margin: 20px 0;
`;

const cropImage = (cropper, type, name) =>
  new Promise((resolve) => {
    cropper.getCroppedCanvas().toBlob((blob) => {
      blob.name = name;
      resolve(blob);
    }, type);
  });

// eslint-disable-next-line react/display-name
const UploadCropper = forwardRef(({ url, type, name, setCropped }, ref) => {
  const cropperRef = useRef(null);

  useImperativeHandle(ref, () => ({
    cropImage: () => cropImage(cropperRef.current.cropper, type, name),
    removeCrop: () => {
      cropperRef.current.cropper.clear();
      setCropped?.(false);
    },
    getDataUrl: () => cropperRef.current.cropper.getCroppedCanvas().toDataURL(),
  }));

  const onCropEnd = () => {
    setCropped?.(true);
  };

  return (
    <StyledCropper
      className=""
      src={url}
      initialAspectRatio={16 / 9}
      autoCrop={false}
      background={false}
      modal={false}
      viewMode={1}
      zoomable={false}
      cropend={onCropEnd}
      ref={cropperRef}
    />
  );
});

export default UploadCropper;
