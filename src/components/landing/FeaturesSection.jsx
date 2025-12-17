export default function FeaturesSection() {
  return (
    <section
      style={{
        padding: "120px 40px",
        background: "#070A6A",
        color: "white",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background glow blobs */}
      <div
        style={{
          position: "absolute",
          top: "-220px",
          left: "-220px",
          width: "520px",
          height: "520px",
          background: "rgba(13,91,255,0.35)",
          borderRadius: "50%",
          filter: "blur(140px)",
        }}
      />

      <div
        style={{
          position: "absolute",
          bottom: "-220px",
          right: "-220px",
          width: "520px",
          height: "520px",
          background: "rgba(7,10,106,0.5)",
          borderRadius: "50%",
          filter: "blur(140px)",
        }}
      />

      {/* Content */}
      <div style={{ position: "relative", zIndex: 1 }}>
        <h2
          style={{
            textAlign: "center",
            fontSize: "38px",
            marginBottom: "70px",
            fontWeight: "700",
          }}
        >
          What BluePin Does
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "36px",
            maxWidth: "1100px",
            margin: "0 auto",
          }}
        >
          {/* CARD 1 */}
          <GlassCard
            title="Product Data Marketplace"
            text="Get data of Millions of Products Being Sold Online."
          />

          {/* CARD 2 */}
          <GlassCard
            title="Identifies Product Trends"
            text="BluePin AI Analyses Products and Identifies Trends and Opportunities."
          />

          {/* CARD 3 */}
          <GlassCard
            title="Local Suppliers"
            text="BluePin shows Local Suppliers for Each Product to Source From."
          />
        </div>
      </div>
    </section>
  );
}

/* ----------------- GLASS CARD COMPONENT ----------------- */

function GlassCard({ title, text }) {
  return (
    <div
      style={{
        padding: "36px",
        borderRadius: "18px",
        background: "rgba(255,255,255,0.12)",
        backdropFilter: "blur(18px)",
        WebkitBackdropFilter: "blur(18px)",
        border: "1px solid rgba(255,255,255,0.25)",
        boxShadow: "0 25px 50px rgba(0,0,0,0.35)",
        transition: "all 0.35s ease",
        cursor: "default",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-10px)";
        e.currentTarget.style.boxShadow =
          "0 40px 80px rgba(0,0,0,0.45)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow =
          "0 25px 50px rgba(0,0,0,0.35)";
      }}
    >
      <h3
        style={{
          fontSize: "22px",
          fontWeight: "600",
          marginBottom: "14px",
        }}
      >
        {title}
      </h3>

      <p
        style={{
          fontSize: "16px",
          color: "rgba(255,255,255,0.85)",
          lineHeight: "1.6",
        }}
      >
        {text}
      </p>
    </div>
  );
}
