"use client";

import { PageProps } from "@/interfaces/PageProps";
import Link from "next/link";
import { useState } from "react";

export default function Button(
  props: PageProps & {
    children: Readonly<React.ReactNode> | undefined | null;
  }
) {
  const { font, lang, children } = props;

  const [bgGradientClass, setBgGradient] = useState("opacity-100");
  const [bgGradientOppositeClass, setBgGradientOpposite] =
    useState("opacity-0");

  return (
    <Link
      href={process.env.NEXT_PUBLIC_CTA_BUTTON + ""}
      className={`flex justify-center items-center rounded-lg px-5 py-[12.5px] font-${font}-regular relative px-7 w-fit`}
      onMouseOver={() => {
        setBgGradient("opacity-0");
        setBgGradientOpposite("opacity-100");
      }}
      onMouseOut={() => {
        setBgGradient("opacity-100");
        setBgGradientOpposite("opacity-0");
      }}
    >
      <div
        className={`transition-all duration-300 rounded-lg absolute w-full h-full bg-blue-gradient ${bgGradientClass}`}
      />
      <div
        className={`transition-all duration-300 rounded-lg absolute w-full h-full bg-blue-gradient-opposite ${bgGradientOppositeClass}`}
      />
      <span className={`text-light z-10 ${font === "Fa" ? "" : "-mb-1.5"}`}>
        {children || lang["index-go-to-platform-button"]}
      </span>
    </Link>
  );
}
