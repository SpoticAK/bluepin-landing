import { useState } from "react";

export default function EmailCaptureSection() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) return;

    setLoading(true);

    try {
      const formData = new FormData();
      formData.append("email", email);
      formData.append("source", "footer_cta");

      await fetch(
        "https://script.google.com/macros/s/AKfycbzgBRcH4OZxskzCw8iR-7blzHH18acdRTFfIydKREySffNM0CM5HDRG3RAtpSA7goZ6tA/exec",
        {
          method: "POST",
          body: formData,
        }
      );

      setEmail("");
      alert("You're on the waitlist 🚀");
    } catch (err) {
      alert("Network error. Please try again.");
    }

    setLoading(false);
  };

  return (
    <section
      style={{
        padding: "120px 40px",
        background: "#ffffff",
        textAlign: "center",
      }}
    >
      <h2
        style={{
          fontSize: "40px",
          fontWeight: "700",
          color: "#070A6A",
          marginBottom: "16px",
        }}
      >
        Join the BluePin Waitlist
      </h2>

      <p
        style={{
          fontSize: "18px",
          color: "#555",
          marginBottom: "40px",
          maxWidth: "520px",
          marginInline: "auto",
        }}
      >
        Get early access to real-time product intelligence and verified
        supplier discovery.
      </p>

      <form
        onSubmit={handleSubmit}
        style={{
          maxWidth: "420px",
          margin: "0 auto",
          display: "flex",
          gap: "12px",
        }}
      >
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          style={{
            flex: 1,
            padding: "14px 16px",
            fontSize: "16px",
            borderRadius: "10px",
            border: "1px solid #ddd",
            outline: "none",
          }}
        />

        <button
          type="submit"
          disabled={loading}
          style={{
            padding: "14px 20px",
            fontSize: "16px",
            fontWeight: "600",
            borderRadius: "10px",
            border: "none",
            cursor: "pointer",
            background: "#0D5BFF",
            color: "#fff",
            opacity: loading ? 0.7 : 1,
          }}
        >
          {loading ? "Joining..." : "Join"}
        </button>
      </form>

      <p
        style={{
          fontSize: "13px",
          color: "#888",
          marginTop: "16px",
        }}
      >
        No spam. Just early access.
      </p>
    </section>
  );
}
