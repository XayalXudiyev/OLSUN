import { CheckCircle, Zap, Puzzle } from "lucide-react";
import Image from "next/image";

export default function SolutionsSection() {
  const solutionsData = [
    {
      icon: CheckCircle,
      title: "Curated Marketplace",
      description:
        "Browse 20+ pre-vetted venues, service providers, and vendors in one platform. Filter by budget, capacity, location, and availability instantly.",
      image:
        "https://images.unsplash.com/photo-1709715357520-5e1047a2b691?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHRlYW0lMjBtZWV0aW5nfGVufDF8fHx8MTc2MTY4NzQ1NHww&ixlib=rb-4.1.0&q=80&w=1080",
      imageAlt: "Platform marketplace interface",
      iconColor: "#10B981",
      reverse: false,
    },
    {
      icon: Zap,
      title: "Streamlined Booking",
      description:
        "Submit one request, get responses from multiple vendors. Compare prices transparently, book with confidence, and track everything in your dashboard.",
      image:
        "https://images.unsplash.com/photo-1759419038843-29749ac4cd2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwcmVzdGF1cmFudCUyMGludGVyaW9yfGVufDF8fHx8MTc2MTcwODQ3OHww&ixlib=rb-4.1.0&q=80&w=1080",
      imageAlt: "Booking flow interface",
      iconColor: "#3B82F6",
      reverse: true,
    },
    {
      icon: Puzzle,
      title: "All-in-One Coordination",
      description:
        "Manage RSVPs, track budgets, communicate with vendors, and coordinate logistics—all from one simple interface.",
      image:
        "https://images.unsplash.com/photo-1630283017802-785b7aff9aac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzYxNjM5MDUzfDA&ixlib=rb-4.1.0&q=80&w=1080",
      imageAlt: "Coordination interface",
      iconColor: "#6366F1",
      reverse: false,
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-10">
        <h2 className="text-[40px] text-[#111827] text-center mb-20">
          How Olsun Events Solves It
        </h2>

        <div className="space-y-24">
          {solutionsData.map((solution) => (
            <div
              key={solution.title}
              className="grid md:grid-cols-2 gap-16 items-center"
            >
              <div
                className={
                  solution.reverse ? "order-2 md:order-1" : "order-1 md:order-2"
                }
              >
                <Image
                  src="/hero-photo.webp"
                  alt="Corporate event celebration"
                  width={600}
                  height={500}
                  className="w-full h-auto rounded-2xl shadow-2xl"
                  priority
                />
              </div>
              <div
                className={
                  solution.reverse ? "order-1 md:order-2" : "order-2 md:order-1"
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
