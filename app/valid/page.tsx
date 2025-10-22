"use client";

import { useRouter } from "next/navigation";
import ContentWrapper from "@/components/common/ContentWrapper";

export default function ValidPage() {
  const router = useRouter();

  return (
    <ContentWrapper>
      <main
        className="relative bg-cover bg-center bg-no-repeat w-full min-h-screen flex flex-col justify-center items-center px-2 py-6"
        style={{ backgroundImage: "url('/icon/locksecbg.jpg')" }}
      >
        <section className="flex flex-col justify-center items-center w-full max-w-[400px] mx-auto -mt-40 space-y-6">
          <div className="flex flex-col items-center space-y-16">
            <h1 className="text-[#EEEEEE] text-[24px] font-normal font-inter">
              Valid Entry
            </h1>
            <h2 className="text-[#FFFFFF] text-[40px] font-bold font-inter">
              Gbenga Osho
            </h2>
          </div>

          <div>
            <div className="flex flex-row items-center justify-between mb-4 gap-20">
              <p className="text-[#929292] text-[12px] sm:text-[14px]">Phone Number</p>
              <p className="text-[#FFFFFF] text-[12px] sm:text-[14px]">08023323322</p>
            </div>
            <div className="flex flex-row items-center justify-between mb-4 gap-20">
              <p className="text-[#929292] text-[12px] sm:text-[14px]">No of Guest</p>
              <p className="text-[#FFFFFF] text-[12px] sm:text-[14px]">Guest (2 people)</p>
            </div>
            <div className="flex flex-row items-center justify-between mb-4 gap-20">
              <p className="text-[#929292] text-[12px] sm:text-[14px]">Plate No</p>
              <p className="text-[#FFFFFF] text-[12px] sm:text-[14px]">AJ783TMN</p>
            </div>
          </div>

          {/* Wrapped Section with Border */}
          <div className="border border-[#FFFFFF] w-[327px] h-[88px] rounded-[6px] flex flex-col justify-center px-4 py-2 space-y-3 sm:w-[340px]">
            <div className="flex flex-row items-center justify-between gap-20">
              <p className="text-[#929292] text-[12px] sm:text-[14px]">For:</p>
              <p className="text-[#FFFFFF] text-[12px] sm:text-[14px]"></p>
            </div>
            <div className="flex flex-row items-center justify-between gap-20">
              <p className="text-[#929292] text-[12px] sm:text-[14px]">Mr Adebayo</p>
              <p className="text-[#FFFFFF] text-[12px] sm:text-[14px]">Apt 12B Road M</p>
            </div>
          </div>
        </section>

        {/* Back Button Positioned 2/5 from Bottom */}
        <button
          onClick={() => router.push("/securitycode")}
          className="absolute bottom-[10%] text-[#375DFB] text-[12px] font-normal bg-transparent focus:outline-none"
        >
          Back
        </button>
      </main>
    </ContentWrapper>
  );
}
