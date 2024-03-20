"use client"


import React, { useCallback, useRef, useState } from "react";
import { BiSolidImageAdd } from "react-icons/bi";
import { Line } from "rc-progress";
import { Uploady, useItemProgressListener, withRequestPreSendUpdate } from "@rpldy/uploady";
import UploadButton from "@rpldy/upload-button";
import UploadPreview from "@rpldy/upload-preview";
import UploadCropper from "./ChatGPTUploader";
import Image from "next/image";

const SingleCropContainer = ({ children }) => (
  <div className="w-600 flex flex-col items-center">{children}</div>
);

const PreviewImage = ({ src }) => (
  <Image width={500} height={500} className="h-[100px] w-fit" src={src} alt="cropped img to upload" />
);

const StyledProgressLine = ({ progress }) => (
  <Line
    strokeWidth={1}
    percent={progress}
    trailColor={"rgba(54,56,56)"}
    strokeColor={"rgb(41,117,169)"}
    className="w-full m-10"
  />
);

const UploadProgress = ({ progress }) => <StyledProgressLine progress={progress} />;

const ItemUploadProgress = ({ id, show = false }) => {
  const { completed: progress, state: itemState } = useItemProgressListener(id) || { completed: 0 };

  return (
    (show || itemState === "uploading") && <UploadProgress progress={progress} />
  );
};

const ItemPreviewWithCrop = withRequestPreSendUpdate(
  ({ id, url, type, name, updateRequest, requestData }) => {
    const croppingRef = useRef(null);
    const [isCropped, setCropped] = useState(null);
    const [croppedImg, setCroppedImg] = useState(null);

    const onUpload = useCallback(async () => {
      requestData.items[0].file = await croppingRef.current.cropImage();
      updateRequest({ items: requestData.items });
      setCroppedImg(croppingRef.current.getDataUrl());
    }, [requestData, updateRequest]);

    return (
      <SingleCropContainer>
        {!croppedImg ? (
          <UploadCropper
            ref={croppingRef}
            url={url}
            type={type}
            name={name}
            setCropped={setCropped}
          />
        ) : (
          <PreviewImage src={croppedImg} />
        )}

        {isCropped && !croppedImg && (
          <button onClick={onUpload}>Upload selection</button>
        )}

        {isCropped && <ItemUploadProgress id={id} />}
      </SingleCropContainer>
    );
  }
);

const ChatGPT = () => {
  return (
    <Uploady
      destination={{
        url: "https://webhook.site/ed0d5c3f-5ad7-4066-9ab0-b9012db63185",
      }}
      multiple={false}
    >
      <UploadButton>
        <div className="flex flex-col items-center justify-center border border-gray-300 rounded-lg w-full md:p-3 h-[120px] p-1">
          <BiSolidImageAdd className="text-6xl" />
          <span className="mt-1 text-[12px] md:text-sm text-center">
            Upload multiple or drag and <br /> drop photos
          </span>
        </div>
      </UploadButton>
      <UploadPreview PreviewComponent={ItemPreviewWithCrop} />
    </Uploady>
  );
};

export default ChatGPT;