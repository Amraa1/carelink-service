"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function MainHeader() {
    const scrollToElement = (
        e: React.MouseEvent<HTMLAnchorElement>,
        elementId: string
    ) => {
        e.preventDefault(); // Prevent Next.js navigation behavior
        document
            .getElementById(elementId)
            ?.scrollIntoView({ behavior: "smooth" });
    };
    return (
        <>
            {/* Navbar and header */}
            <header className="px-12">
                <div className="max-w-4xl mx-auto flex flex-row justify-between items-center">
                    <div>
                        <Image
                            src="/carelink-service-logo.svg"
                            alt="Carelink logo"
                            width={200}
                            height={100}
                        />
                    </div>
                    <nav>
                        <ul className="flex flex-row gap-5 transition">
                            <li>
                                <Link href="/">Home</Link>
                            </li>
                            <li>
                                <Link
                                    onClick={(e) =>
                                        scrollToElement(e, "service")
                                    }
                                    href="#service"
                                >
                                    Service
                                </Link>
                            </li>
                            <li>
                                <Link
                                    onClick={(e) =>
                                        scrollToElement(e, "doctors")
                                    }
                                    href="#doctors"
                                >
                                    Our Doctors
                                </Link>
                            </li>
                            <li>
                                <Link
                                    onClick={(e) =>
                                        scrollToElement(e, "contact")
                                    }
                                    href="#contact"
                                >
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
        </>
    );
}
