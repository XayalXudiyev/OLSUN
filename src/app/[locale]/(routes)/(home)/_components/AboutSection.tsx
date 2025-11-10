import { Handshake, Clock, Shield } from "lucide-react";
import Image from "next/image";

export default function AboutSection() {
  const statsData = [
    {
      icon: Handshake,
      value: "20+",
      label: "Trusted Partners",
      color: "#6366F1",
    },
    {
      icon: Clock,
      value: "10 Hours",
      label: "Time Saved Per Event",
      color: "#10B981",
    },
    {
      icon: Shield,
      value: "100%",
      label: "Verified Vendors",
      color: "#3B82F6",
    },
  ];

  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-10 grid md:grid-cols-[55%_45%] gap-12 items-center">
        <div>
          <p className="text-sm text-[#6366F1] uppercase tracking-widest mb-4">
            Who We Are
          </p>
          <h2 className="text-[40px] text-[#111827] leading-tight mb-6">
            Building Azerbaijan's Event Ecosystem
          </h2>
          <p className="text-lg text-[#6B7280] leading-relaxed mb-8 max-w-[520px]">
            Olsun Events is Azerbaijan's first corporate event marketplace,
            connecting HR managers and office coordinators with pre-vetted
            venues, service providers, and vendors. Born from the need to
            simplify event planning, we're backed by the CulTech Incubation
            Program and supported by Azerbaijan's Ministry of Culture.
          </p>
          <p className="text-lg text-[#6B7280] leading-relaxed mb-12 max-w-[520px]">
            Our mission is simple: transform event planning from a stressful,
            time-consuming process into a seamless, enjoyable experience.
          </p>

          <div className="grid grid-cols-3 gap-6">
            {statsData.map((stat) => (
              <div
                key={stat.label}
                className="bg-white border border-[#E5E7EB] rounded-xl p-6 hover:shadow-lg hover:-translate-y-1 transition-all"
              >
                <stat.icon
                  className="w-9 h-9 mb-3"
                  style={{ color: stat.color }}
                />
                <p className="text-[36px] text-[#111827] mb-1">{stat.value}</p>
                <p className="text-sm text-[#6B7280]">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <Image
            src="/hero-photo.webp"
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
