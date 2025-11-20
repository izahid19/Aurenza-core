import Image from "next/image";
import Link from "next/link";
import { Spotlight } from "@/components/ui/Spotlight";
import { Button } from "@/components/ui/moving-border";

function HeroSection() {
  return (
    <div className="relative w-full bg-black text-white overflow-hidden py-10 md:py-20">
      {/* Spotlight background */}
      <Spotlight
        className="-top-40 left-0 md:left-40 md:-top-20"
        fill="white"
      />

      {/* Content grid */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        
        {/* LEFT SIDE - Text Content */}
        <div className="flex flex-col justify-center text-center md:text-left space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
            Master Knowledge. Elevate Care.
          </h1>
          <p className="text-neutral-300 text-base md:text-lg max-w-md">
            At Aurenza, we believe technology should not only heal it should teach, empower, and inspire.
We're building a bridge between medical innovation and human understanding, making healthcare smarter, more accessible, and deeply personal.
          </p>
          <div>
            <Link href="/courses">
              <Button
                borderRadius="1.75rem"
                className="bg-white dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-800"
              >
                Explore
              </Button>
            </Link>
          </div>
        </div>

        {/* RIGHT SIDE - Image */}
        <div className="flex justify-center md:justify-end">
          <Image
            src="/39d26fe266-5890f59e90ae56926522.png"
            alt="Human Anatomy Illustration"
            width={500}
            height={500}
            className="rounded-xl object-contain drop-shadow-lg"
            priority
          />
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
