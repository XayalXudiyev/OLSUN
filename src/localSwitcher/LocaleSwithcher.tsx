"use client";

import { usePathname, useRouter } from "next/navigation";
import { useLocale } from "next-intl";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
} from "@/components/ui/select";

export default function LocaleSwitcher() {
  const locale: string = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const onSelectChange = (nextLocale: string) => {
    const segments = pathname.split("/").filter(Boolean);
    if (segments[0] === locale) {
      segments[0] = nextLocale;
    } else {
      segments.unshift(nextLocale);
    }

    router.replace(`/${segments.join("/")}`);
  };

  const localeLabels: Record<string, string> = {
    en: "EN",
    az: "AZ",
    ru: "RU",
  };

  if (!locale) return null;

  return (
    <Select onValueChange={onSelectChange} defaultValue={locale}>
      <SelectTrigger className="bg-transparent group border-none outline-none ring-0 focus:ring-offset-0 focus:ring-0 focus:outline-none gap-x-1 md:text-base w-fit [&>svg]:hover:text-[#D2B48C] [&>svg]:opacity-100 [&>svg]:data-[state=open]:rotate-180">
        <span className="text-xl text-black md:text-[#666666]  md:text-base group-hover:text-[#D2B48C]">
          {localeLabels[locale]}
        </span>
      </SelectTrigger>
      <SelectContent className=" shadow-none bg-primary-light max-w-[120px]  min-w-0">
        <SelectGroup>
          {Object.entries(localeLabels).map(([code, label]) => (
            <SelectItem
              key={code}
              value={code}
              className="focus:bg-white cursor-pointer my-1  pl-0 px-2"
            >
              <div className="flex gap-x-2 items-center">
                <span className="leading-4 text-base ">{label}</span>
              </div>
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
