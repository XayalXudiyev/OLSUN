import { Instagram, Linkedin, Facebook } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";

export default function Footer() {
  const locale = useLocale();
  const t = useTranslations("footer");

  const socialLinks = [
    { icon: Instagram, href: "https://instagram.com/olsunevents" },
    { icon: Linkedin, href: "https://linkedin.com/company/olsunevents" },
    { icon: Facebook, href: "https://facebook.com/olsunevents" },
  ];

  const quickLinks = [
    { label: t("home"), href: "/", isRoute: true },
    { label: t("about-us"), href: `/${locale}#about`, isRoute: false },
    { label: t("services"), href: `/${locale}/services`, isRoute: true },
    { label: t("contact"), href: `/${locale}#contact`, isRoute: false },
  ];

  const supportLinks = [
    { label: t("help-center"), href: "#" },
    { label: t("pricing"), href: "/pricing", isRoute: true },
    { label: t("terms-of-service"), href: "#" },
    { label: t("privacy-policy"), href: "#" },
  ];

  const contactInfo = [
    { label: t("email"), value: "info@olsunevents.com" },
    { label: t("phone"), value: "+994 10 417 71 32" },
    { label: t("address"), value: "Baku, Azerbaijan" },
  ];

  return (
    <footer className="bg-[#111827] text-white">
      <div className="max-w-[1280px] mx-auto px-10 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <h3 className="text-[24px] mb-3">Olsun</h3>
            <p className="text-sm text-[#9CA3AF] mb-6">
              Your partner in seamless event management
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-[#6366F1] transition-colors"
                >
                  <social.icon className="w-7 h-7" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-[16px] mb-4">{t("quicks-links")}</h4>
            <div className="flex flex-col gap-3">
              {quickLinks.map((link) =>
                link.isRoute ? (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="text-sm text-[#D1D5DB] hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                ) : (
                  <a
                    key={link.label}
                    href={link.href}
                    className="text-sm text-[#D1D5DB] hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                ),
              )}
            </div>
          </div>

          <div>
            <h4 className="text-[16px] mb-4">{t("support")}</h4>
            <div className="flex flex-col gap-3">
              {supportLinks.map((link) =>
                link.isRoute ? (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="text-sm text-[#D1D5DB] hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                ) : (
                  <a
                    key={link.label}
                    href={link.href}
                    className="text-sm text-[#D1D5DB] hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                ),
              )}
            </div>
          </div>

          <div>
            <h4 className="text-[16px] mb-4">{t("contacts")}</h4>
            <div className="flex flex-col gap-3 text-sm text-[#D1D5DB]">
              {contactInfo.map((contact) => (
                <p key={contact.label}>
                  {contact.label}: {contact.value}
                </p>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-[#374151] pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-[#9CA3AF]">
            © {new Date().getFullYear()} Olsun. {t("all-rights-reserved")}
          </p>
          <p className="text-sm text-[#9CA3AF]">{t("supported-by")}</p>
        </div>
      </div>
    </footer>
  );
}
