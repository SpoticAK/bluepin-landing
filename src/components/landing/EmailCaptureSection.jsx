import { useState } from "react";
import { useReferral } from "../../hooks/useReferral";

export default function EmailCaptureSection() {
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
      formData.append("source", "waitlist_cta");
      
      // Add referral code if available (not exposed to user)
      const ref = getReferralCode();
      if (ref) {
        formData.append("ref", ref);
      }

      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbxX3pAqbfHLwInWaHA4FPrBHQ7Qzb2Lw8LaF3ef5ESWwc3VWDYaq_gUQrbN9LF0ln6DHQ/exec",
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
      setError("Network error. Please try again.");
    }

    setLoading(false);
  };

  return (
    <section
      style={{
        padding: "120px 40px",
        background: "linear-gradient(135deg, #f8f9ff 0%, #ffffff 100%)",
        textAlign: "center",
      }}
    >
      <div style={{ maxWidth: "600px", margin: "0 auto" }}>
        <div
          style={{
            display: "inline-block",
            background: "#e8f1ff",
            padding: "8px 16px",
            borderRadius: "8px",
            marginBottom: "20px",
          }}
        >
          <span style={{ fontSize: "14px", color: "#0D5BFF", fontWeight: "600" }}>
            ✨ Join 5,000+ Waitlist Members
          </span>
        </div>

        <h2
          style={{
            fontSize: "48px",
            fontWeight: "800",
            color: "#070A6A",
            marginBottom: "16px",
            lineHeight: "1.2",
          }}
        >
          Get Early Access to BluePin
        </h2>

        <p
          style={{
            fontSize: "18px",
            color: "#666",
            marginBottom: "48px",
            lineHeight: "1.6",
          }}
        >
          Real-time product intelligence and verified supplier discovery. Be first to explore what's next.
        </p>

        <form
          onSubmit={handleSubmit}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "16px",
            marginBottom: "24px",
          }}
        >
          <div style={{ display: "flex", gap: "12px" }}>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              disabled={loading}
              style={{
                flex: 1,
                padding: "16px 18px",
                fontSize: "16px",
                borderRadius: "12px",
                border: "2px solid #e0e0e0",
                outline: "none",
                transition: "all 0.3s ease",
                background: "#fff",
                boxSizing: "border-box",
              }}
              onFocus={(e) => {
                e.target.style.borderColor = "#0D5BFF";
                e.target.style.boxShadow = "0 0 0 3px rgba(13, 91, 255, 0.1)";
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
                padding: "16px 32px",
                fontSize: "16px",
                fontWeight: "600",
                borderRadius: "12px",
                border: "none",
                cursor: loading ? "not-allowed" : "pointer",
                background: loading ? "#ccc" : "#0D5BFF",
                color: "#fff",
                transition: "all 0.3s ease",
                whiteSpace: "nowrap",
                opacity: loading ? 0.8 : 1,
              }}
              onMouseEnter={(e) => {
                if (!loading) {
                  e.target.style.background = "#0A47CC";
                  e.target.style.transform = "translateY(-2px)";
                  e.target.style.boxShadow = "0 8px 16px rgba(13, 91, 255, 0.3)";
                }
              }}
              onMouseLeave={(e) => {
                e.target.style.background = "#0D5BFF";
                e.target.style.transform = "translateY(0)";
                e.target.style.boxShadow = "none";
              }}
            >
              {loading ? "Joining..." : "Join Waitlist"}
            </button>
          </div>

          {success && (
            <div
              style={{
                padding: "14px 16px",
                background: "#d4edda",
                color: "#155724",
                borderRadius: "8px",
                fontSize: "14px",
                fontWeight: "500",
                border: "1px solid #c3e6cb",
              }}
            >
              ✅ You're on the list! Check your email for updates.
            </div>
          )}

          {error && (
            <div
              style={{
                padding: "14px 16px",
                background: "#f8d7da",
                color: "#721c24",
                borderRadius: "8px",
                fontSize: "14px",
                fontWeight: "500",
                border: "1px solid #f5c6cb",
              }}
            >
              ❌ {error}
            </div>
          )}
        </form>

        <p
          style={{
            fontSize: "13px",
            color: "#999",
          }}
        >
          No spam. Just product updates. Unsubscribe anytime.
        </p>
      </div>
    </section>
  );
}
