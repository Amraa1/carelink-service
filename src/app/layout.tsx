import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import MainHeader from "@/components/main-header";

const poppins = Poppins({ weight: "400", style: "normal" });

export const metadata: Metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={poppins.className}>
                <MainHeader />
                {children}
            </body>
        </html>
    );
}
