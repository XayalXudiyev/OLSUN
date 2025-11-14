import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";

interface HeroSectionProps {
  onExploreServices: () => void;
  onScrollToSection: (sectionId: string) => void;
}

export default function HeroSection({
  onExploreServices,
  onScrollToSection,
}: HeroSectionProps) {
  const t = useTranslations("landing");

  return (
    <section
      id="home"
      className="relative mt-20 flex items-center overflow-hidden px-5 lg:px-20"
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div>
          <p className="text-sm text-[#6366F1] uppercase tracking-wider mb-3 font-bold bg-[#F1EFFF] px-3 py-1 rounded-md inline-block">
            {t("first-corporate-event-marketplace")}
          </p>
          <h1 className="text-5xl md:text-[56px] leading-tight text-[#111827] mb-4 font-normal">
            {t("facilitating-corporate-events")}
          </h1>
          <h2 className="text-xl text-[#6B7280] leading-normal mb-6 max-w-[540px]">
            {t("we-connect")}
          </h2>

          <div className="flex flex-col h-14 sm:flex-row gap-4 mb-6">
            <Button
              type="button"
              onClick={onExploreServices}
              className="bg-primary h-full text-white text-lg rounded-xl flex items-center justify-center gap-1.5 transition-all hover:bg-primary/90 hover:shadow-lg hover:scale-[1] hover:cursor-pointer"
            >
              {t("explore-services")}
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button
              type="button"
              variant="outline"
              onClick={() => onScrollToSection("#about")}
              className="border-[1.5px] border-primary h-full text-primary text-lg rounded-xl transition-all hover:bg-transparent hover:text-primary"
            >
              {t("learn-more")}
            </Button>
          </div>
        </div>

        <div className="relative">
          <Image
            src="/images/Landing/hero-photo.webp"
            alt="Corporate event celebration"
            width={600}
            height={500}
            className="w-full h-auto rounded-2xl shadow-2xl"
            priority
          />
        </div>
      </div>
    </section>
  );
}
