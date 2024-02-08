"use client"

import { useEffect } from "react";
import { gtm } from "./gtm";

const Test = () => {

    useEffect(() => {
        gtm('GTM-KNJN8X37')
    }, [])

    return <>
    <h2>Hello</h2>
    </>
};

export default Test;