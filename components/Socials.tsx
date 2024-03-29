"use client";

import Link from "next/link";
import React from "react";
import { icons } from "@/app/data/socials";

type Props = {
  containerStyles: string;
  iconsStyles: string;
};

export default function Socials({ containerStyles, iconsStyles }: Props) {
  return (
    <div className={`${containerStyles}`}>
      {icons.map((icon, index) => {
        return (
          <Link href={icon.path} key={index}>
            <div className={`${iconsStyles}`}>{icon.name}</div>
          </Link>
        );
      })}
    </div>
  );
}
