import { CheckCircle, Zap, Puzzle } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";

export default function SolutionsSection() {
  const t = useTranslations("landing");

  const solutionsData = [
    {
      icon: CheckCircle,
      title: t("curated-marketplace"),
      description: t("curated-marketplace-text"),
      image: "/images/Landing/Curated-marketplace.webp",
      iconColor: "#10B981",
      reverse: false,
    },
    {
      icon: Zap,
      title: t("streamlined-booking"),
      description: t("streamlined-booking-text"),
      image: "/images/Landing/Streamlined-booking.webp",
      iconColor: "#3B82F6",
      reverse: true,
    },
    {
      icon: Puzzle,
      title: t("verified-trusted"),
      description: t("verified-trusted-text"),
      image: "/images/Landing/Curated-marketplace.webp",
      iconColor: "#6366F1",
      reverse: false,
    },
  ];
  return (
    <section className="p-20 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-semibold text-center mb-16">
          {t("how-olsun-solves-it")}
        </h2>

        <div className="space-y-14">
          {solutionsData.map((solution) => (
            <div
              key={solution.title}
              className="grid md:grid-cols-2 gap-12 items-center"
            >
              <div
                className={
                  solution.reverse ? "order-1 md:order-2" : "order-2 md:order-1"
                }
              >
                <Image
                  src={solution.image}
                  alt={solution.title}
                  width={600}
                  height={300}
                  className="w-full h-[300px] rounded-2xl"
                />
              </div>
              <div
                className={
                  solution.reverse ? "order-2 md:order-1" : "order-1 md:order-2"
                }
              >
                <div className="flex items-center gap-3 mb-4">
                  <solution.icon
                    className="w-8 h-8"
                    style={{ color: solution.iconColor }}
                  />
                  <h3 className="text-[28px] text-[#111827]">
                    {solution.title}
                  </h3>
                </div>
                <p className="text-lg text-[#6B7280] leading-relaxed">
                  {solution.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
