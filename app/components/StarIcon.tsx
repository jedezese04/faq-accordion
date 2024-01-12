"use client";

import { Image } from "@nextui-org/react";
import { useTheme } from "next-themes";
import NextImage from "next/image";

export default function StarIcon() {
  const { theme } = useTheme();

  return (
    <Image
      as={NextImage}
      src={theme === "light" ? "/dark-star.svg" : "/light-star.svg"}
      alt="Star"
      width={30}
      height={30}
    />
  );
}
