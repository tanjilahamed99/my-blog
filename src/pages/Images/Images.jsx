"use client";

import React, { memo, useCallback, useRef, useState } from "react";
import { BiSolidImageAdd } from "react-icons/bi";
import styled, { css } from "styled-components";
import Uploady, {
  useBatchAddListener,
  useBatchFinalizeListener,
  useBatchProgressListener,
  useItemFinalizeListener,
  useItemProgressListener,
  withBatchStartUpdate,
  withRequestPreSendUpdate,
} from "@rpldy/uploady";
import UploadButton from "@rpldy/upload-button";
import UploadPreview from "@rpldy/upload-preview";
import { Line } from "rc-progress";
import UploadCropper from "./UploadCroper";

const SingleCropContainer = styled.div`
  width: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const PreviewImage = styled.img`
  margin: 5px;
  max-width: 600px;
  max-height: 400px;
  height: auto;
`;

const StyledProgressLine = styled(Line)`
  width: 100%;
  margin: 10px 0;
`;

const UploadProgress = ({ progress }) => {
  return (
    <StyledProgressLine
      strokeWidth={1}
      percent={progress}
      trailColor={"rgba(54,56,56)"}
      strokeColor={"rgb(41,117,169)"}
    />
  );
};

// eslint-disable-next-line react/display-name
const ItemUploadProgress = memo(({ id, show = false }) => {
  const { completed: progress, state: itemState } = useItemProgressListener(
    id
  ) || { completed: 0 };

  return (
    (show || itemState === "uploading") && (
      <UploadProgress progress={progress} />
    )
  );
});

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
          <PreviewImage src={croppedImg} alt="cropped img to upload" />
        )}

        {isCropped && !croppedImg ? (
          <button onClick={onUpload}>Upload selection</button>
        ) : null}

        {isCropped && <ItemUploadProgress id={id} />}
      </SingleCropContainer>
    );
  }
);

export const FirstTutorial = () => {
  return (
    <Uploady
      destination={{
        url: "https://webhook.site/ed0d5c3f-5ad7-4066-9ab0-b9012db63185",
      }}
      multiple={false}
    >
      <UploadButton>
          <div class="flex flex-col items-center justify-center  border border-gray-300 rounded-lg w-full md:p-3 h-[120px] p-1">
            <BiSolidImageAdd className="text-6xl" />
            <span class="mt-1 text-[12px] md:text-sm text-center ">
              Upload multiple or drag and <br /> drop photos
            </span>
          </div>
      </UploadButton>
      <UploadPreview PreviewComponent={ItemPreviewWithCrop} />
    </Uploady>
  );
};
