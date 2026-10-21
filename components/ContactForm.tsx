"use client";

import { useState } from "react";

// formspree url from the browser.
const FORMSPREE_URL = "https://formspree.io/f/xoejgnya";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle",
  );
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;

    if (FORMSPREE_URL.includes("YOUR_FORM_ID")) {
      setStatus("error");
      setErrorMsg(
        "The form ID has not been set yet. Add your Formspree ID in ContactForm.tsx.",
      );
      return;
    }

    setStatus("sending");
    setErrorMsg("");

    try {
      const res = await fetch(FORMSPREE_URL, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(form),
      });

      if (res.ok) {
        setStatus("sent");
        form.reset();
      } else {
        const data = await res.json().catch(() => null);
        setStatus("error");
        setErrorMsg(
          data?.errors?.map((x: { message: string }) => x.message).join(", ") ||
            `Request failed (status ${res.status}).`,
        );
      }
    } catch {
      setStatus("error");
      setErrorMsg(
        "Could not reach the server. Check your internet connection or disable ad blockers.",
      );
    }
  }

  const input =
    "w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-gray-500 outline-none transition focus:border-indigo-400";

  return (
    <form onSubmit={handleSubmit} className="space-y-4 text-left">
      <input name="name" required placeholder="Your name" className={input} />
      <input
        name="email"
        type="email"
        required
        placeholder="Your email"
        className={input}
      />
      <textarea
        name="message"
        required
        rows={5}
        placeholder="Your message"
        className={input}
      />
      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full rounded-lg bg-gradient-to-r from-indigo-500 to-cyan-500 px-6 py-3 font-semibold text-white transition hover:scale-[1.02] disabled:opacity-60"
      >
        {status === "sending" ? "Sending..." : "Send message"}
      </button>
      {status === "sent" && (
        <p className="text-sm text-emerald-400">
          Thanks! Your message was sent.
        </p>
      )}
      {status === "error" && <p className="text-sm text-red-400">{errorMsg}</p>}
    </form>
  );
}
