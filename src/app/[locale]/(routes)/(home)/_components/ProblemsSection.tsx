import { Clock, HelpCircle, Puzzle } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";

export default function ProblemsSection() {
  const t = useTranslations("landing");
  const problemsData = [
    {
      icon: "/icons/Clock.svg",
      title: t("problem-hours-wasted"),
      description: t("problem-hours-wasted-text"),
      bgColor: "#EF4444",
    },
    {
      icon: "/icons/Partnership.svg",
      title: t("problem-quality-assurance"),
      description: t("problem-quality-assurance-text"),
      bgColor: "#F59E0B",
    },
    {
      icon: `/icons/Chaos.svg`,
      title: t("problem-fragmented-process"),
      description: t("problem-fragmented-process-text"),
      bgColor: "#6366F1",
    },
  ];

  return (
    <section className="p-20 bg-primary">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-[40px] text-white text-center mb-4">
          {t("the-challenges-faced")}
        </h2>
        <p className="text-lg text-[#B2ADD2] text-center mb-16">
          {t("event-planning-shouldnt-consume")}
        </p>

        <div className="grid md:grid-cols-3 gap-8 ">
          {problemsData.map((problem) => (
            <div
              key={problem.title}
              className="bg-[#332B66] rounded-2xl p-7 hover:shadow-lg hover:-translate-y-1 transition-all text-white"
            >
              <Image
                src={problem.icon}
                alt={problem.title}
                width={56}
                height={56}
              />
              <h3 className="text-2xl mt-3 mb-5">{problem.title}</h3>
              <p className="text-[#A59FC6] leading-relaxed">
                {problem.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
