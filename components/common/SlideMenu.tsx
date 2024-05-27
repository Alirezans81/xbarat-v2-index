import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { slide as Slide } from "react-burger-menu";
import { Styles } from "react-burger-menu";

export default function SlideMenu({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const SliderMenuStyles: Styles = {
    bmBurgerButton: {
      backgroundColor: "#fff",
      display: "hidden",
      width: "1px",
      height: "1px",
      position: "absolute",
      left: "-10px",
      top: "-10px",
      opacity: "0",
    },
    bmBurgerBars: {
      backgroundColor: "#fff",
      display: "hidden",
      width: "1px",
      height: "1px",
      position: "absolute",
      left: "-10px",
      top: "-10px",
      opacity: "0",
    },
    bmCrossButton: {
      padding: "20px",
      background: "#283236",
      borderRadius: "100%",
      right: "15px",
      top: "15px",
    },
    bmCross: {
      background: "#F2F5F8",
      position: "absolute",
      right: "5px",
      top: "7px",
    },
    bmMenuWrap: {},
    bmMenu: {
      background: "#171d20",
      padding: "2.5em 1rem 0rem",
      fontSize: "1.15em",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
    },
    bmMorphShape: {
      fill: "#171d20",
    },
    bmItemList: {
      color: "#b8b7ad",
      padding: "0.8em",
    },
    bmOverlay: {
      background: "rgba(0, 0, 0, 0.5)",
    },
  };

  type Page = {
    icon: StaticImageData;
    title: string;
    route: string;
  };
  const pages: Page[] = [];

  type ShareLink = {
    icon: StaticImageData;
    title: string;
    href: string;
  };
  const shareLinks: ShareLink[] = [];

  return (
    <Slide
      width={"200px"}
      right
      isOpen={isOpen}
      pageWrapId={"page-wrap"}
      outerContainerId={"outer-container"}
      onClose={onClose}
      styles={SliderMenuStyles}
    >
      <div className="w-full h-full flex flex-col justify-between relative">
        <div className="">
          <span className="text-snowWhite font-medium text-lg">Menu</span>
          <div className="w-full">
            {pages.map((page, index) => (
              <Link
                key={index}
                className="w-full flex items-center gap-x-2 my-7 text-colorGray transition-all duration-100 hover:text-themeColor"
                href={page.route}
              >
                <Image className="w-5 h-5" src={page.icon} alt={page.title} />
                <span className="text-[15.5px]">{page.title}</span>
              </Link>
            ))}
          </div>
        </div>

        <div className="absolute bottom-7">
          <span className="text-snowWhite font-medium text-lg">
            Get in Touch
          </span>
          <div className="flex items-center gap-x-2.5 py-1 mt-2.5">
            {shareLinks.map((shareLink, index) => (
              <Link
                key={index}
                className="opacity-60 transition-all duration-200 hover:opacity-100"
                href={shareLink.href}
              >
                <Image
                  className="w-5 h-5"
                  src={shareLink.icon}
                  alt={shareLink.title}
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </Slide>
  );
}
