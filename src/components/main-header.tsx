import React from "react";
import Image from "next/image";

export default function MainHeader() {
    return (
        <>
            {/* Navbar and header */}
            <header className="flex flex-row justify-between items-center px-12">
                <div>
                    <Image
                        src="/carelink-service-logo.svg"
                        alt="Carelink logo"
                        width={200}
                        height={100}
                    />
                </div>
                <nav>
                    <ul className="flex flex-row gap-5">
                        <li>Home</li>
                        <li>Service</li>
                        <li>Contact</li>
                    </ul>
                </nav>
            </header>
        </>
    );
}
