import { useReferral } from "../../hooks/useReferral";

export default function ReferralBadge() {
  const { ref } = useReferral();

  if (!ref) return null;

  return (
    <div
      style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        background: "rgba(13, 91, 255, 0.95)",
        color: "white",
        padding: "12px 16px",
        borderRadius: "8px",
        fontSize: "12px",
        fontWeight: "600",
        boxShadow: "0 4px 12px rgba(13, 91, 255, 0.3)",
        zIndex: 999,
        backdropFilter: "blur(10px)",
      }}
    >
      👤 Referred by: <strong>{ref}</strong>
    </div>
  );
}
