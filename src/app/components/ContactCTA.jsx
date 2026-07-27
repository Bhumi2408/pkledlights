"use client";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";


const ACCESS_KEY_1 = "17e7e5bc-0e76-46d6-b215-8e89939eb4ae";
const ACCESS_KEY_2 = "41f67e38-f83a-4ac2-a0f3-d16968b19732";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_REGEX = /^\d{10}$/; // sirf exactly 10 digits, koi bhi start ho

export default function ContactCTA() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [fieldErrors, setFieldErrors] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const validateName = (value) => (!value.trim() ? "Name is required" : "");

  const validateEmail = (value) => {
    if (!value.trim()) return "Email is required";
    if (!EMAIL_REGEX.test(value.trim()))
      return "Enter a valid email address (e.g. name@example.com)";
    return "";
  };

 const validatePhone = (value) => {
  const digitsOnly = value.replace(/\D/g, "");
  if (!digitsOnly) return "Phone number is required";
  if (digitsOnly.length !== 10)
    return "Phone number must be exactly 10 digits";
  if (!PHONE_REGEX.test(digitsOnly))
    return "Enter a valid 10-digit phone number";
  return "";
};

  const handlePhoneChange = (e) => {
    const digitsOnly = e.target.value.replace(/\D/g, "").slice(0, 10);
    e.target.value = digitsOnly;
    // sirf phone ka error clear karo, baaki errors as-is rahenge
    setFieldErrors((prev) => ({ ...prev, phone: "" }));
  };

  const handleEmailChange = () => {
    setFieldErrors((prev) => ({ ...prev, email: "" }));
  };

  const handleNameChange = () => {
    setFieldErrors((prev) => ({ ...prev, name: "" }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    const form = e.target;

    // 🤖 Honeypot bot-check — sirf real bots ke liye, isse validation errors alag hain
    if (form.botcheck.checked) {
      form.reset();
      return;
    }

    const nameValue = form.name.value;
    const emailValue = form.email.value.trim();
    const phoneValue = form.phone.value.trim();

    const nameError = validateName(nameValue);
    const emailError = validateEmail(emailValue);
    const phoneError = validatePhone(phoneValue);

    if (nameError || emailError || phoneError) {
      // ⚠️ Form ko RESET nahi karenge — jo type kiya hai wahi rahega
      setFieldErrors({ name: nameError, email: emailError, phone: phoneError });
      setError("Please fix the highlighted fields below.");
      return;
    }

    setLoading(true);

    const formData = {
      name: nameValue,
      email: emailValue,
      phone: phoneValue,
      message: form.message.value,
      subject: "New Inquiry - SCOOT (PK Led Light)",
      from_name: "PK Led Light Website",
    };

    try {
      const submitToWeb3Forms = (accessKey) =>
        fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            access_key: accessKey,
            ...formData,
          }),
        }).then((res) => res.json());

      const results = await Promise.allSettled([
        submitToWeb3Forms(ACCESS_KEY_1),
        submitToWeb3Forms(ACCESS_KEY_2),
      ]);

      const atLeastOneSuccess = results.some(
        (r) => r.status === "fulfilled" && r.value.success,
      );

      if (atLeastOneSuccess) {
        form.reset(); // sirf SUCCESS hone par hi reset hoga
        router.push("/thank-you");
      } else {
        setError("Something went wrong. Please try again.");
      }
    } catch (err) {
      console.error(err);
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      className="relative overflow-hidden bg-linear-to-tl from-black to-[#13151B] py-32 px-5 md:px-10 lg:px-32"
      id="contact"
    >
      {/* Background Glow */}
      <div className="absolute left-0 top-0 h-full w-full bg-[radial-gradient(circle_at_left,#d78c4320,transparent_45%)]" />

      <div className="container-custom relative z-10">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          {/* LEFT CONTENT */}
          <div>
            <p className="mb-8 text-sm lg:text-xs font-semibold uppercase tracking-[0.1em] text-primary">
              \ CONTACT US \
            </p>

            <h2 className="max-w-[700px] text-4xl md:text-[58px] font-semibold leading-[0.95] text-white">
              Looking for a Reliable
              <br />
              LED Light Manufacturer in Delhi?
            </h2>

            <p className="mt-7 max-w-[650px] text-[19px] font-medium leading-relaxed text-white/90">
              Get in touch with SCOOT (PK Led Light) for bulk orders, custom LED
              lighting solutions, and competitive wholesale pricing.
            </p>

            <p className="mt-7 text-white/80">
              Call us{" "}
              <a
                href="tel:+919212533254"
                className="font-semibold text-primary underline underline-offset-4"
              >
                +91 92125 33254
              </a>{" "}
              or write us{" "}
              <a
                href="mailto:office.pklighting@gmail.com"
                className="font-semibold text-primary underline underline-offset-4"
              >
                office.pklighting@gmail.com
              </a>
            </p>
          </div>

          {/* RIGHT FORM */}
          <div className="relative">
            <div className="rounded-[30px] border border-white/10 bg-white/[0.03] p-6 md:p-8 backdrop-blur-xl">
              <h3 className="mb-6 text-2xl font-semibold text-white">
                Request a Consultation
              </h3>

              <form className="space-y-5" onSubmit={handleSubmit} noValidate>
                <div>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Your Name"
                    onChange={handleNameChange}
                    className={`h-14 w-full rounded-xl border bg-black/40 px-5 text-white outline-none transition focus:border-primary ${
                      fieldErrors.name ? "border-red-500" : "border-white/10"
                    }`}
                  />
                  {fieldErrors.name && (
                    <p className="mt-1.5 text-sm text-red-400">
                      {fieldErrors.name}
                    </p>
                  )}
                </div>

                <div>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="Email Address"
                    onChange={handleEmailChange}
                    className={`h-14 w-full rounded-xl border bg-black/40 px-5 text-white outline-none transition focus:border-primary ${
                      fieldErrors.email ? "border-red-500" : "border-white/10"
                    }`}
                  />
                  {fieldErrors.email && (
                    <p className="mt-1.5 text-sm text-red-400">
                      {fieldErrors.email}
                    </p>
                  )}
                </div>

                <div>
                  <input
                    type="tel"
                    name="phone"
                    required
                    inputMode="numeric"
                    maxLength={10}
                    placeholder="Phone Number (10 digits)"
                    onChange={handlePhoneChange}
                    className={`h-14 w-full rounded-xl border bg-black/40 px-5 text-white outline-none transition focus:border-primary ${
                      fieldErrors.phone ? "border-red-500" : "border-white/10"
                    }`}
                  />
                  {fieldErrors.phone && (
                    <p className="mt-1.5 text-sm text-red-400">
                      {fieldErrors.phone}
                    </p>
                  )}
                </div>

                <div>
                  <textarea
                    name="message"
                    rows="5"
                    placeholder="Message..."
                    className="w-full rounded-xl border border-white/10 bg-black/40 p-5 text-white outline-none transition focus:border-primary"
                  />
                </div>

                {/* 🤖 Honeypot field — humans ko dikhega nahi, bots isko check kar dete hain */}
                <input
                  type="checkbox"
                  name="botcheck"
                  className="hidden"
                  style={{ display: "none" }}
                  tabIndex={-1}
                  autoComplete="off"
                />

                {error && (
                  <p className="text-sm font-medium text-red-400">{error}</p>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="h-14 w-full rounded-xl bg-primary font-semibold text-white transition hover:opacity-90 disabled:opacity-60"
                >
                  {loading ? "Sending..." : "Send Inquiry"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
