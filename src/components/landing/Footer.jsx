export default function Footer() {
  return (
    <footer
      style={{
        padding: "40px",
        background: "#070A6A",
        color: "#ffffff",
      }}
    >
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "16px",
        }}
      >
        {/* Brand */}
        <div
          style={{
            fontSize: "18px",
            fontWeight: "600",
            letterSpacing: "0.5px",
          }}
        >
          BluePin
        </div>

        {/* Links */}
        <div
          style={{
            display: "flex",
            gap: "24px",
            fontSize: "14px",
            opacity: 0.85,
          }}
        >
          <span>About</span>
          <span>Contact</span>
          <span>Privacy</span>
        </div>
      </div>

      <div
        style={{
          textAlign: "center",
          marginTop: "28px",
          fontSize: "13px",
          opacity: 0.6,
        }}
      >
        © {new Date().getFullYear()} BluePin. Data for all.
      </div>
    </footer>
  );
}
