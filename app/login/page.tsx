"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState, type FormEvent } from "react";
import ContentWrapper from "@/components/common/ContentWrapper";

export default function LoginPage() {
  const router = useRouter();
  const [securityId, setSecurityId] = useState("");

  const handleLogin = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!securityId.trim()) {
      alert("Please enter your Security Personnel ID.");
      return;
    }

  
    router.push("/securitycode");
  };

  return (
    <ContentWrapper>
      <main
        className="bg-cover bg-center bg-no-repeat w-full min-h-screen flex flex-col justify-center items-center px-4 py-6"
        style={{ backgroundImage: "url('/icon/locksecbg.jpg')" }}
      >
        <section className="flex flex-col justify-center items-center w-full max-w-[400px] mx-auto">
          {/* Logo + Header */}
          <div className="flex flex-col justify-center items-center text-center mb-6">
            <Image
              src="/icon/locksec-bg.png"
              alt="locksec logo"
              width={34}
              height={34}
              className="mb-4"
            />
            <div className="w-full font-inter font-normal text-[28px] sm:text-[32px] leading-snug tracking-tighter text-center">
              <h2 className="text-white">Sign in to your</h2>
              <h2 className="text-white">
                Lock<span className="text-blue-700">Sec</span> Account
              </h2>
            </div>
          </div>

          {/* Form */}
          <section className="flex justify-center items-center w-full">
            <form
              onSubmit={handleLogin}
              className="flex flex-col gap-[10px] w-full max-w-[327px]"
            >
              <label
                htmlFor="security_id"
                className="text-[#D8DADC] flex flex-col gap-[10px] text-[15px]"
              >
                <span>
                  Security Personnel ID
                  <span className="text-red-500 ml-1">*</span>
                </span>
                <input
                  type="text"
                  name="security_id"
                  id="security_id"
                  placeholder="Enter ID"
                  pattern="[A-Za-z0-9]+"
                  title="Only letters and numbers allowed"
                  required
                  value={securityId}
                  onChange={(e) => setSecurityId(e.target.value)}
                  className="w-full h-[48px] rounded-[10px] border border-[#D8DADC] px-[24px] text-black placeholder-[#D8DADC] focus:outline-none focus:border-[#1D61E7] bg-white"
                />
              </label>

              <button
                type="submit"
                className="w-full h-[48px] rounded-[10px] bg-[#1D61E7] text-white font-medium mt-[10px]"
              >
                Log In
              </button>
            </form>
          </section>
        </section>
      </main>
    </ContentWrapper>
  );
}
