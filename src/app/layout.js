import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import Test from "@/components/GTM/test";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "My blog",
  description: "testing purpose",
};



export default function RootLayout({ children }) {

  return (
    <html lang="en">

      <head>

        {/* google adSeance */}
        {/* <Script
          id="adsbygoogle-init"
          strategy="afterInteractive"
          crossOrigin="anonymous"
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9673111961225622"
        /> */}



        {/* google Analytics */}
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=G-0NT3DV49TB`}
        />


        <script
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-0NT3DV49TB', {
              page_path: window.location.pathname,
            });
          `,
          }}
        />



        {/* google tag manager */}

        {/* <script
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'GTM-KNJN8X37', {
              page_path: window.location.pathname,
            });
          `,
          }}
        />

        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=GTM-KNJN8X37`}
        /> */}


        {/* <!-- Google Tag Manager --> */}
        {/* <script>(function(w,d,s,l,i){w[l] = w[l] || [];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-KNJN8X37');</script>
        {/* <!-- End Google Tag Manager --> */}




      </head>
      <body className={inter.className}>
        <Test />
        {children}
      </body>
    </html>
  );
}
