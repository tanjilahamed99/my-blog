"use client"

import { useEffect } from "react";
import { gtm } from "../GTM/gtm";

const Ads = () => {

    useEffect(() => {
        gtm('GTM-KNJN8X37')
    }, [])

    return (
        <div className="bg-red-500">

            <ins className="adsByGoogle"
                style={{ display: 'block' }}
                data-ad-client="ca-pub-9673111961225622"
                data-ad-slot="1592254392"
                data-ad-format="auto"
                data-full-width-responsive="true"></ins>

        </div>
    );
};

export default Ads;