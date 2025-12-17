import { useState } from "react";

const steps = [
  "We track online marketplaces continuously",
  "You search products or explore trending ones",
  "We provide free product data and AI analysis",
  "You instantly get multiple supplier contacts & ratings",
];

export default function HowItWorksSection() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section
      style={{
        padding: "120px 40px",
        background: "linear-gradient(135deg, #05084d, #070A6A)",
        color: "#fff",
      }}
    >
      {/* Heading */}
      <h2
        style={{
          textAlign: "center",
          fontSize: "36px",
          marginBottom: "16px",
        }}
      >
        How It Works
      </h2>

      <p
        style={{
          textAlign: "center",
          opacity: 0.7,
          marginBottom: "80px",
        }}
      >
        From marketplace data to suppliers — in minutes, not weeks.
      </p>

      {/* Steps container */}
      <div
        style={{
          maxWidth: "900px",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          gap: "40px",
        }}
      >
        {steps.map((text, index) => {
          const isActive = index === activeStep;

          return (
            <div
              key={index}
              onMouseEnter={() => setActiveStep(index)}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "24px",
                padding: "32px",
                borderRadius: "20px",
                cursor: "pointer",
                background: isActive
                  ? "rgba(255,255,255,0.08)"
                  : "rgba(255,255,255,0.03)",
                border: isActive
                  ? "1px solid rgba(255,255,255,0.25)"
                  : "1px solid rgba(255,255,255,0.08)",
                backdropFilter: "blur(12px)",
                transform: isActive ? "scale(1.02)" : "scale(0.98)",
                opacity: isActive ? 1 : 0.5,
                transition: "all 0.3s ease",
              }}
            >
              {/* Step number */}
              <div
                style={{
                  minWidth: "42px",
                  height: "42px",
                  borderRadius: "50%",
                  background: isActive ? "#0D5BFF" : "rgba(255,255,255,0.15)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight: "700",
                }}
              >
                {index + 1}
              </div>

              {/* Text */}
              <h3
                style={{
                  fontSize: "20px",
                  fontWeight: "600",
                  lineHeight: 1.4,
                }}
              >
                {text}
              </h3>
            </div>
          );
        })}
      </div>
    </section>
  );
}
