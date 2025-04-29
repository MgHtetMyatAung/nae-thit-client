import { useLangStore } from "@/hooks/useLangStore";
import { useLocale } from "next-intl";
import { usePathname, useRouter } from "next/navigation";
import React from "react";

export default function LangSwitchBtn({ isMobile }: { isMobile: boolean }) {
  const { lang, changeLang } = useLangStore();
  const pathname = usePathname();
  const router = useRouter();
  const locale = useLocale();
  const changeLangFunction = () => {
    if (lang === "en") {
      changeLang("my");
      router.push(`/${locale}${pathname.slice(3)}`);
    }
    if (lang === "my") {
      changeLang("en");
      router.push(`/${locale}${pathname.slice(3)}`);
    }
  };
  return (
    <button
      onClick={changeLangFunction}
      className={`${
        isMobile ? " w-full" : "hidden min-w-[95px]"
      }  md:inline-block bg-secondary hover:bg-blue-700 text-white px-4 py-2 rounded-full transition-colors`}
    >
      {lang === "en" ? "Myanmar" : "အင်္ဂလိပ်"}
    </button>
  );
}
