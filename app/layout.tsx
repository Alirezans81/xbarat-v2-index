import type { Metadata } from "next";
import "./globals.css";
import Head from "next/head";
import OnLoad from "@/components/common/OnLoad";
import Loading from "@/components/common/Loading";
import Image from "next/image";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Xbarat | Exchange/Transfer your money",
  description: "Exchange/Transfer platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <title>Xbarat | Exchange/Transfer your money</title>
      </Head>
      <body>
        <button
          id="new_widget_button"
          style={{
            backgroundColor: "#0a8dff",
            zIndex: 50,
            position: "absolute",
            right: "19px",
            bottom: "20px",
            padding: "12px",
            borderRadius: "100%",
          }}
        >
          <Image
            alt="Goftino Button"
            src={require("./ticket.png")}
            width={35}
            height={35}
          />
        </button>
        <OnLoad />
        <Loading />
        {children}
        {/* <!-- Goftino --> */}
        <Script
          id="goftino-widget"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `!function(){var i="8zbZU0",a=window,d=document;function g(){var g=d.createElement("script"),s="https://www.goftino.com/widget/"+i,l=localStorage.getItem("goftino_"+i);g.async=!0,g.src=l?s+"?o="+l:s;d.getElementsByTagName("head")[0].appendChild(g);}"complete"===d.readyState?g():a.attachEvent?a.attachEvent("onload",g):a.addEventListener("load",g,!1);}();`,
          }}
        />
        <Script
          id="goftino-widget"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `window.addEventListener("goftino_ready",function(){Goftino.setWidget({hasIcon:!1,counter:"#unread_counter"}),document.getElementById("new_widget_button").addEventListener("click",function(){Goftino.toggle()})});`,
          }}
        />
        {/* <!-- /Goftino --> */}
      </body>
    </html>
  );
}
