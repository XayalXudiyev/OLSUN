import { useTranslations } from "next-intl";
import Image from "next/image";

export default function ServicesSection() {
  const t = useTranslations("landing");

  const servicesData = [
    {
      icon: "/icons/HR.svg",
      title: t("hr-managers"),
      description: t("ht-managers-text"),
      color: "#6366F1",
    },
    {
      icon: "/icons/HR.svg",
      title: t("office-managers"),
      description: t("office-managers-text"),
      color: "#3B82F6",
    },
    {
      icon: "/icons/Rocket.svg",
      title: t("organizational-developers"),
      description: t("organizational-developers-text"),
      color: "#10B981",
    },
    {
      icon: "/icons/Enterprise.svg",
      title: t("enterprise-teams"),
      description: t("enterprise-teams-text"),
      color: "#6366F1",
    },
  ];

  return (
    <section className="p-20 bg-primary">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl text-white font-bold text-center mb-16">
          {t("who-we-serve")}
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {servicesData.map((service) => (
            <div
              key={service.title}
              className="bg-[#332B66] rounded-2xl py-10 px-5 text-center hover:shadow-lg hover:-translate-y-1 transition-all text-white"
            >
              <div className="flex items-center justify-center">
                <Image
                  src={service.icon}
                  alt={service.title}
                  width={56}
                  height={56}
                />
              </div>
              <h3 className="text-2xl my-7">{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
