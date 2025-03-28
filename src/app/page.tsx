import CtaService from "@/components/cta-service";
import MeetDoctors from "@/components/meet-doctors";
import Contact from "@/components/contact";
export default function Home() {
    return (
        <main className="my-1">
            <CtaService />
            <MeetDoctors />
            <Contact />
        </main>
    );
}
