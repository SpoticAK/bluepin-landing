import { useState } from "react";

export default function HeroSection() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) return;

    setLoading(true);

    try {
      const formData = new FormData();
      formData.append("email", email);
      formData.append("source", "hero");

      await fetch(
        "https://script.google.com/macros/s/AKfycbyAYJquspKCnjaSFEN0ndhb5a3-mPZgvMYGklIxxU-v0Nb1aeRjTy9T1QnZEDpI_R6Bow/exec",
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
    <section style={{ padding: "120px 24px", textAlign: "center" }}>
      {/* Logo + Brand */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "14px",
        }}
      >
        <img
          src="/logo.png"
          alt="BluePin logo"
          style={{ height: "52px", width: "auto" }}
        />

        <h1
          style={{
            fontSize: "48px",
            fontWeight: "700",
            color: "#0f093cc3",
            lineHeight: "1",
          }}
        >
          BluePin
        </h1>
      </div>

      {/* Tagline */}
      <p style={{ marginTop: "8px", fontSize: "18px", color: "#150c59ff" }}>
        Data for trending products and reliable hyperlocal suppliers.
      </p>

      {/* Description */}
      <p
        style={{
          marginTop: "20px",
          fontSize: "20px",
          maxWidth: "700px",
          marginInline: "auto",
        }}
      >
        Discover what’s selling online and connect with multiple verified
        suppliers instantly.
      </p>

      {/* Email capture */}
      <form
        onSubmit={handleSubmit}
        style={{
          marginTop: "40px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "12px",
            width: "100%",
            maxWidth: "420px",
          }}
        >
          <input
            type="email"
            required
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{
              flex: "1 1 100%",
              padding: "14px 16px",
              fontSize: "16px",
              borderRadius: "10px",
              border: "1px solid #ccc",
              width: "100%",
            }}
          />

          <button
            type="submit"
            disabled={loading}
            style={{
              flex: "1 1 100%",
              padding: "14px 26px",
              fontSize: "16px",
              borderRadius: "10px",
              background: "#181157ff",
              color: "#fff",
              border: "none",
              fontWeight: "600",
              cursor: "pointer",
              opacity: loading ? 0.7 : 1,
            }}
          >
            {loading ? "Joining..." : "Join Waitlist"}
          </button>
        </div>
      </form>
    </section>
  );
}
