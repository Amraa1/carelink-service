import CtaService from "@/components/cta-service";
import MeetDoctors from "@/components/meet-doctors";
import Contact from "@/components/contact";
export default function Home() {
    return (
        <main className="my-10 px-5">
            <CtaService />
            <MeetDoctors />
            <Contact />
        </main>
    );
}
