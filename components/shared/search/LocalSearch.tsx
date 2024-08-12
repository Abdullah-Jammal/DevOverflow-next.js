"use client";
import { Input } from "@/components/ui/input";
import Image from "next/image";

interface LocalProps {
  iconPosition: string;
  route: string;
  placeholder: string;
  otherClasses?: string;
  imgSrc: string;
}

const LocalSearch = ({
  iconPosition,
  route,
  placeholder,
  otherClasses,
  imgSrc,
}: LocalProps) => {
  return (
    <div
      className={`background-light800_darkgradient flex min-h-[56px] grow items-center gap-4 rounded-[10px] px-4 ${otherClasses}`}
    >
      {iconPosition === "left" && (
        <Image
          src={imgSrc}
          width={20}
          height={20}
          alt="search"
          className="cursor-pointer"
        />
      )}
      <Input
        type="text"
        placeholder={placeholder}
        className="paragraph-regular no-focus placeholder background-light800_darkgradient
          border-none shadow-none outline-none"
      />
      {iconPosition === "right" && (
        <Image
          src={imgSrc}
          width={20}
          height={20}
          alt="search"
          className="cursor-pointer"
        />
      )}
    </div>
  );
};

export default LocalSearch;
