"use client"
import { useEffect } from "react";

const Ads = () => {

    useEffect(() => {
        var ads = document.getElementsByClassName('adsbygoogle').length;
        for (var i = 0; i < ads; i++) {
            try {
                (window.adsbygoogle = window.adsbygoogle || []).push({});
            } catch (e) { }
        }
    }, []);

    return (
        <div>
            <ins class="adsbygoogle"
                style={{ display: 'block' }}
                data-ad-client="ca-pub-9673111961225622"
                data-ad-slot="4487841046"
                data-ad-format="auto"
                data-full-width-responsive="true"></ins>

        </div>
    );
};

export default Ads;