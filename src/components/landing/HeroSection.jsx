import { useState } from "react";
import { useReferral } from "../../hooks/useReferral";

export default function HeroSection() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const { getReferralCode } = useReferral();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) return;

    setLoading(true);
    setError("");

    try {
      const formData = new FormData();
      formData.append("email", email);
      formData.append("source", "hero_waitlist");
      
      const ref = getReferralCode();
      if (ref) {
        formData.append("ref", ref);
      }

      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbzgBRcH4OZxskzCw8iR-7blzHH18acdRTFfIydKREySffNM0CM5HDRG3RAtpSA7goZ6tA/exec",
        {
          method: "POST",
          body: formData,
        }
      );

      if (!response.ok) throw new Error("Submission failed");

      setEmail("");
      setSuccess(true);
      setTimeout(() => setSuccess(false), 5000);
    } catch (err) {
      setError("Something went wrong. Try again.");
    }

    setLoading(false);
  };

  return (
    <section
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "80px 20px",
        background: "linear-gradient(180deg, #ffffff 0%, #f8f9ff 100%)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Decorative gradient blobs */}
      <div
        style={{
          position: "absolute",
          top: "-10%",
          right: "-5%",
          width: "500px",
          height: "500px",
          background: "radial-gradient(circle, rgba(13,91,255,0.08) 0%, transparent 70%)",
          borderRadius: "50%",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "-10%",
          left: "-5%",
          width: "400px",
          height: "400px",
          background: "radial-gradient(circle, rgba(7,10,106,0.06) 0%, transparent 70%)",
          borderRadius: "50%",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: "800px", width: "100%", position: "relative", zIndex: 1 }}>
        {/* Logo + Brand */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "12px",
            marginBottom: "32px",
          }}
        >
          <img
            src="/logo.png"
            alt="BluePin logo"
            style={{ height: "56px", width: "auto" }}
          />
          <h1
            style={{
              fontSize: "56px",
              fontWeight: "800",
              color: "#070A6A",
              letterSpacing: "-0.02em",
            }}
          >
            BluePin
          </h1>
        </div>

        {/* Main headline */}
        <h2
          style={{
            fontSize: "clamp(36px, 6vw, 64px)",
            fontWeight: "900",
            color: "#070A6A",
            textAlign: "center",
            lineHeight: "1.1",
            marginBottom: "24px",
            letterSpacing: "-0.03em",
          }}
        >
          WE FIND THE DEALS
          <br />
          <span style={{ color: "#0D5BFF" }}>YOU CAN'T</span>
        </h2>

        {/* Key benefits */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "24px",
            flexWrap: "wrap",
            marginBottom: "48px",
          }}
        >
          <Badge text="Real-time Product Data" />
          <Badge text="Verified Suppliers" />
          <Badge text="Trending Insights" />
        </div>

        {/* Description */}
        <p
          style={{
            fontSize: "20px",
            color: "#555",
            textAlign: "center",
            lineHeight: "1.6",
            maxWidth: "680px",
            margin: "0 auto 48px",
          }}
        >
          Discover what's selling online and connect with multiple verified
          suppliers instantly. Limited spots. Join now.
        </p>

        {/* Email form */}
        <form
          onSubmit={handleSubmit}
          style={{
            maxWidth: "560px",
            margin: "0 auto",
          }}
        >
          <div
            style={{
              display: "flex",
              gap: "12px",
              marginBottom: "16px",
              flexWrap: "wrap",
            }}
          >
            <input
              type="email"
              required
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={loading}
              style={{
                flex: "1",
                minWidth: "250px",
                padding: "18px 24px",
                fontSize: "17px",
                borderRadius: "12px",
                border: "2px solid #e0e0e0",
                outline: "none",
                transition: "all 0.2s ease",
                background: "#fff",
                fontWeight: "500",
              }}
              onFocus={(e) => {
                e.target.style.borderColor = "#0D5BFF";
                e.target.style.boxShadow = "0 0 0 4px rgba(13, 91, 255, 0.08)";
              }}
              onBlur={(e) => {
                e.target.style.borderColor = "#e0e0e0";
                e.target.style.boxShadow = "none";
              }}
            />

            <button
              type="submit"
              disabled={loading}
              style={{
                padding: "18px 40px",
                fontSize: "17px",
                fontWeight: "700",
                borderRadius: "12px",
                border: "none",
                cursor: loading ? "not-allowed" : "pointer",
                background: loading ? "#ccc" : "#070A6A",
                color: "#fff",
                transition: "all 0.3s ease",
                whiteSpace: "nowrap",
                textTransform: "uppercase",
                letterSpacing: "0.5px",
              }}
              onMouseEnter={(e) => {
                if (!loading) {
                  e.target.style.background = "#0D5BFF";
                  e.target.style.transform = "translateY(-2px)";
                  e.target.style.boxShadow = "0 12px 24px rgba(13, 91, 255, 0.4)";
                }
              }}
              onMouseLeave={(e) => {
                e.target.style.background = "#070A6A";
                e.target.style.transform = "translateY(0)";
                e.target.style.boxShadow = "none";
              }}
            >
              {loading ? "Joining..." : "Get Early Access"}
            </button>
          </div>

          {success && (
            <div
              style={{
                padding: "16px",
                background: "#d4edda",
                color: "#155724",
                borderRadius: "10px",
                fontSize: "15px",
                fontWeight: "600",
                textAlign: "center",
                border: "2px solid #c3e6cb",
              }}
            >
              ✅ You're on the list! Check your email.
            </div>
          )}

          {error && (
            <div
              style={{
                padding: "16px",
                background: "#f8d7da",
                color: "#721c24",
                borderRadius: "10px",
                fontSize: "15px",
                fontWeight: "600",
                textAlign: "center",
                border: "2px solid #f5c6cb",
              }}
            >
              ❌ {error}
            </div>
          )}
        </form>

        <p
          style={{
            textAlign: "center",
            fontSize: "14px",
            color: "#999",
            marginTop: "20px",
          }}
        >
          No spam. Just deals. Unsubscribe anytime.
        </p>
      </div>
    </section>
  );
}

// Badge component
function Badge({ text }) {
  return (
    <div
      style={{
        padding: "10px 20px",
        background: "rgba(13, 91, 255, 0.08)",
        border: "1px solid rgba(13, 91, 255, 0.2)",
        borderRadius: "8px",
        fontSize: "14px",
        fontWeight: "600",
        color: "#070A6A",
      }}
    >
      {text}
    </div>
  );
}
