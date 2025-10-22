"use client";
import { useRef, useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import ContentWrapper from "@/components/common/ContentWrapper";

export default function SecurityCodePage() {
  const router = useRouter();
  const inputCount = 6;
  const [code, setCode] = useState<string[]>(Array(inputCount).fill(""));
  const [error, setError] = useState<string>("");
  const [startTime, setStartTime] = useState<number | null>(null);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const correctCode = "000000"; // ✅ Default valid code

  useEffect(() => {
    setStartTime(Date.now()); // Start timer on page load
  }, []);

  const handleChange = (index: number, value: string) => {
    if (!/^[0-9]?$/.test(value)) return;
    const newCode = [...code];
    newCode[index] = value;
    setCode(newCode);
    setError("");
    if (value && index < inputCount - 1) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Backspace" && !code[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleButtonClick = (val: string) => {
    if (val === "Del") {
      const lastFilledIndex = code.findLastIndex((c) => c !== "");
      if (lastFilledIndex >= 0) {
        const newCode = [...code];
        newCode[lastFilledIndex] = "";
        setCode(newCode);
        inputRefs.current[lastFilledIndex]?.focus();
      }
      setError("");
      return;
    }

    if (val === "Check") {
      const enteredCode = code.join("");
      const now = Date.now();

      if (!enteredCode) {
        setError("Code not available");
        return;
      }

      if (startTime && now - startTime > 60000) {
        setError("Code Expired");
        return;
      }

      if (enteredCode === correctCode) {
        router.push("/valid");
      } else {
        setError("Incorrect code");
      }
      return;
    }

    const nextEmptyIndex = code.findIndex((c) => c === "");
    if (nextEmptyIndex !== -1) {
      const newCode = [...code];
      newCode[nextEmptyIndex] = val;
      setCode(newCode);
      setError("");
      if (nextEmptyIndex < inputCount - 1) {
        inputRefs.current[nextEmptyIndex + 1]?.focus();
      }
    }
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
            <div className="w-full font-inter font-normal text-[10px] sm:text-[16px] leading-[125%] tracking-tighter text-center flex flex-col items-center">
              <h2 className="text-white">Enter the code provided by</h2>
              <h2 className="text-white">the guest</h2>
            </div>
          </div>

          {/* Code Input Boxes */}
          <form
            action=""
            className="flex flex-wrap justify-center gap-[6px] sm:gap-[8px] mb-3"
          >
            {Array.from({ length: inputCount }).map((_, i) => (
              <input
                key={i}
                type="text"
                inputMode="numeric"
                maxLength={1}
                value={code[i]}
                ref={(el) => {
                  inputRefs.current[i] = el;
                }}
                onChange={(e) => handleChange(i, e.target.value)}
                onKeyDown={(e) => handleKeyDown(i, e)}
                className="w-[42px] h-[42px] sm:w-[48.44px] sm:h-[48.44px] rounded-[8.67px] border-[0.52px] border-white bg-white text-black text-center text-lg focus:outline-none focus:border-[#1D61E7]"
              />
            ))}
          </form>

          {/* Error Message */}
          {error && (
            <p className="text-red-500 text-sm mb-2 text-center">{error}</p>
          )}

          {/* Numeric Keypad */}
          <div className="grid grid-cols-3 gap-2 sm:gap-3 mt-[10px] sm:mt-[20px]">
            {[..."123456789"].map((num) => (
              <button
                key={num}
                type="button"
                onClick={() => handleButtonClick(num)}
                className="w-[70px] h-[48px] sm:w-[98px] sm:h-[54px] rounded-[4px] border-[0.35px] border-white text-black text-lg bg-white hover:bg-[#1D61E7]/40 transition"
              >
                {num}
              </button>
            ))}

            <button
              type="button"
              onClick={() => handleButtonClick("Del")}
              className="w-[70px] h-[48px] sm:w-[98px] sm:h-[54px] rounded-[4px] border-[0.35px] border-white text-black text-lg bg-white hover:bg-red-500/40 transition"
            >
              Del
            </button>
            <button
              type="button"
              onClick={() => handleButtonClick("0")}
              className="w-[70px] h-[48px] sm:w-[98px] sm:h-[54px] rounded-[4px] border-[0.35px] border-white text-black text-lg bg-white hover:bg-[#1D61E7]/40 transition"
            >
              0
            </button>
            <button
              type="button"
              onClick={() => handleButtonClick("Check")}
              className="w-[70px] h-[48px] sm:w-[98px] sm:h-[54px] rounded-[4px] border-[0.35px] border-white text-black text-lg bg-white hover:bg-green-500/40 transition"
            >
              Check
            </button>
          </div>
        </section>
      </main>
    </ContentWrapper>
  );
}
