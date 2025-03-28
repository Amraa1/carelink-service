import Image from "next/image";
import React from "react";

export default function CtaService() {
    return (
        <section
            id="cta"
            className="py-10 flex flex-col gap-10 items-center text-blue-950 bg-[#6c84a4]"
        >
            {/* Call to Action section */}
            <div className="flex flex-col items-center text-center">
                <h1 className="text-4xl font-bold mb-5">
                    Your Health, Our Priority
                </h1>
                <p className="mb-5 max-w-2xl">
                    We provide smooth healthcare experience and care for all
                    your needs, delivered by a team of dedicated and highly
                    skilled professionals.
                </p>
                <button className="bg-sky-900 rounded px-5 py-1 text-white transition hover:bg-sky-600">
                    BOOK AN APPOINTMENT
                </button>
            </div>
            <div id="service" className="grid grid-cols-2 gap-5 max-w-4xl">
                <div className="text-center flex flex-col items-center">
                    <Image
                        src="/dental-implants.png"
                        alt="Dental Implant image"
                        width={500}
                        height={500}
                        layout="responsive"
                        className="p-3 mb-5"
                    />
                    <h3 className="text-xl font-bold mb-2">Dental implants</h3>
                    <ul>
                        <li>Titanium single implant</li>
                    </ul>
                </div>
                <div className="text-center flex flex-col items-center">
                    <Image
                        src="/teeth-crown.png"
                        alt="Dental Implant image"
                        width={500}
                        height={500}
                        layout="responsive"
                        className="p-3 mb-5"
                    />
                    <h3 className="text-xl font-bold mb-2">
                        Cosmetic dentistry
                    </h3>
                    <ul>
                        <li>Tooth Whitening</li>
                        <li>Dental Veneers</li>
                        <li>Dental Bonding</li>
                        <li>Dental Crowns</li>
                        <li>Dental Bridges</li>
                        <li>Hollywood Smile</li>
                    </ul>
                </div>
            </div>
        </section>
    );
}
