"use client";

import { Vortex } from "@/components/ui/vortex";
import Image from "next/image";

export default function T8CollabPage() {
    return (
        <div className="w-full h-screen">
            <Vortex
                backgroundColor="black"
                className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full"
            >
                <div className="flex items-center justify-center w-full h-full">
                    <Image 
                        src="/archive/t8-collab/img1.png" 
                        alt="T8 Collab" 
                        width={400} 
                        height={400}
                        className="animate-bounce hover:animate-spin cursor-pointer transition-all duration-500 hover:scale-150"
                    />
                </div>
            </Vortex>
        </div>
    )
}
