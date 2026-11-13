"use client";
import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { X } from "lucide-react";

const ACCESS_KEY_1 = "17e7e5bc-0e76-46d6-b215-8e89939eb4ae";
const ACCESS_KEY_2 = "41f67e38-f83a-4ac2-a0f3-d16968b19732";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const POPUP_DELAY_MS = 5000;
// sessionStorage per-tab hota hai: reload pe rehta hai, tab close hote hi clear
const STORAGE_KEY = "pk_popup_shown";

export default function PopupForm() {
  const router = useRouter();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [fieldErrors, setFieldErrors] = useState({ name: "", email: "", phone: "" });

  useEffect(() => {
    // thank-you page pe popup nahi dikhana
    if (pathname?.startsWith("/thank-you")) return;

    let alreadyShown = false;
    try {
      alreadyShown = sessionStorage.getItem(STORAGE_KEY) === "1";
    } catch {}
    if (alreadyShown) return;

    const timer = setTimeout(() => {
      setOpen(true);
      try {
        sessionStorage.setItem(STORAGE_KEY, "1");
      } catch {}
    }, POPUP_DELAY_MS);

    return () => clearTimeout(timer);
  }, [pathname]);

  // ESC se close + background scroll lock
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [open]);

  const clearField = (field) => setFieldErrors((prev) => ({ ...prev, [field]: "" }));

  const handlePhoneChange = (e) => {
    e.target.value = e.target.value.replace(/\D/g, "").slice(0, 10);
    clearField("phone");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    const form = e.target;

    if (form.botcheck.checked) {
      form.reset();
      return;
    }

    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const phone = form.phone.value.replace(/\D/g, "");

    const errors = {
      name: !name ? "Name is required" : "",
      email: !email
        ? "Email is required"
        : !EMAIL_REGEX.test(email)
          ? "Enter a valid email address"
          : "",
      phone: !phone
        ? "Phone number is required"
        : phone.length !== 10
          ? "Phone number must be exactly 10 digits"
          : "",
    };

    if (errors.name || errors.email || errors.phone) {
      setFieldErrors(errors);
      return;
    }

    setLoading(true);
    const formData = {
      name,
      email,
      phone,
      message: form.message.value,
      subject: "New Popup Inquiry - SCOOT (PK Led Light)",
      from_name: "PK Led Light Website (Popup)",
    };

    try {
      const submit = (accessKey) =>
        fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify({ access_key: accessKey, ...formData }),
        }).then((res) => res.json());

      const results = await Promise.allSettled([submit(ACCESS_KEY_1), submit(ACCESS_KEY_2)]);
      const ok = results.some((r) => r.status === "fulfilled" && r.value.success);

      if (ok) {
        form.reset();
        setOpen(false);
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

  if (!open) return null;

  const inputClass = (field) =>
    `h-12 w-full rounded-xl border bg-black/40 px-5 text-white outline-none transition focus:border-primary ${
      fieldErrors[field] ? "border-red-500" : "border-white/10"
    }`;

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/70 px-4 backdrop-blur-sm animate-[popupFade_0.3s_ease-out]"
      onClick={() => setOpen(false)}
      role="dialog"
      aria-modal="true"
      aria-labelledby="popup-title"
    >
      <div
        className="relative max-h-[92vh] w-full max-w-[460px] overflow-y-auto rounded-[30px] border border-white/10 bg-linear-to-tl from-black to-[#13151B] p-6 shadow-2xl md:p-8 animate-[popupIn_0.35s_ease-out]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Glow */}
        <div className="pointer-events-none absolute inset-0 rounded-[30px] bg-[radial-gradient(circle_at_top_left,#d78c4330,transparent_55%)]" />

        <button
          type="button"
          onClick={() => setOpen(false)}
          aria-label="Close popup"
          className="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/80 transition hover:border-primary hover:text-primary"
        >
          <X size={18} />
        </button>

        <div className="relative">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.1em] text-primary">
            \ GET A FREE QUOTE \
          </p>
          <h3 id="popup-title" className="text-2xl font-semibold leading-tight text-white md:text-3xl">
            Looking for Bulk LED Lights?
          </h3>
          <p className="mt-3 mb-6 text-sm text-white/70">
            Share your details and our team will get back to you with the best
            wholesale pricing.
          </p>

          <form className="space-y-4" onSubmit={handleSubmit} noValidate>
            <div>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                onChange={() => clearField("name")}
                className={inputClass("name")}
              />
              {fieldErrors.name && <p className="mt-1.5 text-sm text-red-400">{fieldErrors.name}</p>}
            </div>

            <div>
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                onChange={() => clearField("email")}
                className={inputClass("email")}
              />
              {fieldErrors.email && <p className="mt-1.5 text-sm text-red-400">{fieldErrors.email}</p>}
            </div>

            <div>
              <input
                type="tel"
                name="phone"
                inputMode="numeric"
                maxLength={10}
                placeholder="Phone Number (10 digits)"
                onChange={handlePhoneChange}
                className={inputClass("phone")}
              />
              {fieldErrors.phone && <p className="mt-1.5 text-sm text-red-400">{fieldErrors.phone}</p>}
            </div>

            <textarea
              name="message"
              rows="3"
              placeholder="Message..."
              className="w-full rounded-xl border border-white/10 bg-black/40 p-4 text-white outline-none transition focus:border-primary"
            />

            <input
              type="checkbox"
              name="botcheck"
              className="hidden"
              style={{ display: "none" }}
              tabIndex={-1}
              autoComplete="off"
            />

            {error && <p className="text-sm font-medium text-red-400">{error}</p>}

            <button
              type="submit"
              disabled={loading}
              className="h-12 w-full rounded-xl bg-primary font-semibold text-white transition hover:opacity-90 disabled:opacity-60"
            >
              {loading ? "Sending..." : "Send Inquiry"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
