import Image from "next/image";
import React from "react";

export default function MeetDoctors() {
    return (
        <section className="py-10 px-5 text-white bg-[#012d62]">
            <h1 className="text-4xl font-bold mb-5">Meet Our Doctors</h1>
            <div>
                <div className="flex flex-row items-center gap-6">
                    <Image
                        src="/doctor-1.jpg"
                        alt="Our doctor image"
                        width={300}
                        height={300}
                        className="border rounded-xl"
                    />
                    <div>
                        <h3 className="text-xl font-bold">{"Doctor's name"}</h3>
                        <p>Experience: ...</p>
                    </div>
                </div>
            </div>
            <div>
                <div className="flex flex-row items-center justify-end gap-6">
                    <div>
                        <h3 className="text-xl font-bold">{"Doctor's name"}</h3>
                        <p>Experience: ...</p>
                    </div>
                    <Image
                        src="/doctor-2.jpg"
                        alt="Our doctor image"
                        width={300}
                        height={300}
                        className="border rounded-xl"
                    />
                </div>
            </div>
            <div>
                <div className="flex flex-row items-center gap-6">
                    <Image
                        src="/doctor-3.jpg"
                        alt="Our doctor image"
                        width={300}
                        height={300}
                        className="border rounded-xl"
                    />
                    <div>
                        <h3 className="text-xl font-bold">{"Doctor's name"}</h3>
                        <p>Experience: ...</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
