"use client"
import Uploady from "@rpldy/uploady";
import UploadButton from "@rpldy/upload-button";
import UploadPreview from "@rpldy/upload-preview";
import Coper from "./Croper";


const Image2 = () => {
    return (
        <Uploady
		multiple={false}
		destination={{ url: "my-server.com/upload" }}>

		<UploadButton/>

		<UploadPreview
			rememberPreviousBatches
			PreviewComponent={Coper}
            fallbackUrl="https://icon-library.net/images/image-placeholder-icon/image-placeholder-icon-6.jpg"
        />
		
	</Uploady>
    );
};

export default Image2;