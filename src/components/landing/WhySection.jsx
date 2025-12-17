export default function WhySection() {
  return (
    <section
      style={{
        padding: "100px 40px",
        background: "#ffffff",
      }}
    >
      {/* Heading */}
      <h2
        style={{
          textAlign: "center",
          fontSize: "36px",
          fontWeight: "700",
          marginBottom: "16px",
          color: "#070A6A",
        }}
      >
        Why This Matters
      </h2>

      {/* Subheading */}
      <p
        style={{
          textAlign: "center",
          maxWidth: "640px",
          margin: "0 auto 60px",
          fontSize: "18px",
          color: "#555",
          lineHeight: "1.6",
        }}
      >
        BluePin removes friction between product insights and supplier discovery —
        so you can act on opportunities instantly.
      </p>

      {/* Cards */}
      <div
        style={{
          maxWidth: "900px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "32px",
        }}
      >
        {[
          "Discover Trending Products - Free",
          "Instantly Find Reliable, Low-MOQ Suppliers",
          "Free Marketplace Data - Amazon, Flipkart & more",
          "Live Data Across 1M+ Products",
        ].map((text, index) => (
          <div
            key={index}
            style={{
              padding: "32px",
              borderRadius: "16px",
              background: "rgba(13, 91, 255, 0.04)",
              border: "1px solid rgba(13, 91, 255, 0.15)",
              boxShadow: "0 12px 32px rgba(0,0,0,0.06)",
              fontSize: "18px",
              fontWeight: "500",
              color: "#070A6A",
              lineHeight: "1.4",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-6px)";
              e.currentTarget.style.boxShadow =
                "0 20px 48px rgba(0,0,0,0.12)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow =
                "0 12px 32px rgba(0,0,0,0.06)";
            }}
          >
            {/* Accent bar */}
            <div
              style={{
                width: "36px",
                height: "4px",
                background: "#0D5BFF",
                borderRadius: "4px",
                marginBottom: "16px",
              }}
            />

            {text}
          </div>
        ))}
      </div>
    </section>
  );
}
