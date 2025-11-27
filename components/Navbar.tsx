"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Menu, MenuItem } from "./ui/navbar-menu";

export default function Navbar() {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={"fixed top-10 inset-x-0 max-w-2xl mx-auto z-50"}
    >
      <Menu setActive={setActive}>
        <MenuItem setActive={setActive} active={active} item="Rings" href="/products/rings" />
        <MenuItem setActive={setActive} active={active} item="Necklaces" href="/products/necklaces" />
        <MenuItem 
          setActive={setActive} 
          active={null} 
          href="/"
          item={
            <div className="w-[40px] h-[40px]">
              <Image 
                src="/logo.png" 
                alt="Logo" 
                fill
                className="object-contain"
              />
            </div>
          } 
        />
        <MenuItem setActive={setActive} active={active} item="Others" href="/products/others" />
        <MenuItem setActive={setActive} active={active} item="T8 Collab" href="/archive/t8-collab" />
      </Menu>
    </div>
  );
}
