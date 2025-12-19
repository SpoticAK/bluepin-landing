import { useState } from "react";

export default function HeroSection() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) return;

    setLoading(true);

    try {
      await fetch(
        "https://script.google.com/macros/s/AKfycbyAYJquspKCnjaSFEN0ndhb5a3-mPZgvMYGklIxxU-v0Nb1aeRjTy9T1QnZEDpI_R6Bow/exec",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: `email=${encodeURIComponent(email)}&source=hero`,
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
        padding: "120px 20px",
        textAlign: "center",
      }}
    >
      {/* Logo + Brand */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "12px",
          flexWrap: "wrap",
        }}
      >
        <img
          src="/logo.png"
          alt="BluePin logo"
          style={{ height: "48px", width: "auto" }}
        />

        <h1
          style={{
            fontSize: "48px",
            fontWeight: "700",
            color: "#0f093c",
            lineHeight: "1",
          }}
        >
          BluePin
        </h1>
      </div>

      {/* Tagline */}
      <p
        style={{
          marginTop: "8px",
          fontSize: "18px",
          color: "#150c59",
        }}
      >
        Data for trending products and reliable hyperlocal suppliers.
      </p>

      {/* Description */}
      <p
        style={{
          marginTop: "20px",
          fontSize: "20px",
          maxWidth: "680px",
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
          marginTop: "36px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            gap: "12px",
            flexWrap: "wrap",
            justifyContent: "center",
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
              flex: "1",
              minWidth: "240px",
              padding: "14px 16px",
              fontSize: "16px",
              borderRadius: "10px",
              border: "1px solid #ccc",
            }}
          />

          <button
            type="submit"
            disabled={loading}
            style={{
              padding: "14px 24px",
              fontSize: "16px",
              borderRadius: "10px",
              background: "#181157",
              color: "#fff",
              border: "none",
              fontWeight: "600",
              cursor: "pointer",
              opacity: loading ? 0.7 : 1,
              whiteSpace: "nowrap",
            }}
          >
            {loading ? "Joining..." : "Join Waitlist"}
          </button>
        </div>
      </form>
    </section>
  );
}
