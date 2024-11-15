import { Analytics } from "@vercel/analytics/react";
import Intro from "@/components/intro";
import ShineBorder from "@/components/ui/shine-border";
import Experience from "@/components/experience";
import ContactForm from "@/components/ui/contact-form"; // Import the ContactForm component
import FooterBar from "@/components/ui/footer-bar"; // Import the FooterBar component
import Mascot from "@/components/ui/mascot"; // Import the Mascot component
import { Meteors } from "@/components/ui/meteors"; // Import Meteors component

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      {/* Add the Meteors component here */}
      <Meteors number={30} /> {/* You can adjust the number as needed */}

      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start flex-grow relative">
        <ShineBorder>
          <Intro />
        </ShineBorder>

        {/* Add the Mascot component here, between the Intro and Experience */}
        <div className="mt-12 flex justify-center w-full">
          <Mascot />
        </div>

        <Experience />

        {/* Add the Interactive Contact Form */}
        <div id="contact" className="w-full mt-12">
          <ContactForm />
        </div>
      </main>

      {/* Add FooterBar */}
      <FooterBar className="mt-auto" />

      {/* Insert Analytics component */}
      <Analytics />
    </div>
  );
}
