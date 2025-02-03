"use client";
import { PageProps } from "@/interfaces/PageProps";
interface DropdownProps extends PageProps {
    dropdownState: string;
    setDropdownState: (value: string) => void;
}
export default function Dropdown({
    dropdownState,
    setChoice,
    openDropdown,
    lang,
    font,
    theme,
}: DropdownProps) {


    return (<div className={openDropdown ? "w-fit h-fit flex flex-col justify-center items-center" : "hidden"}>
        {dropdownState.map((data) => <span>{data}</span>)}
    </div>
    );
}
