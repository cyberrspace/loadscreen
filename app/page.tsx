"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import ContentWrapper from "@/components/common/ContentWrapper";

export default function LoadingPage() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/login"); // ✅ redirects correctly
    }, 2000);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <ContentWrapper>
      <section
        className="bg-cover bg-center bg-no-repeat w-full h-[812px] flex flex-col justify-between items-center px-4 py-6"
        style={{ backgroundImage: "url('/icon/loadscreen-bg.png')" }}/>

      
    </ContentWrapper>
  );
}
