import Image from "next/image";

export default function Home() {
  return (
    <main style={{
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      gap: "1rem",
      padding: "2rem",
      background: "linear-gradient(135deg, #0D9488, #0EA5E9)",
      color: "#ffffff",
      textAlign: "center",
    }}>
      <section style={{ maxWidth: "700px" }}>
        <h1 style={{ fontSize: "3rem", margin: "0.5rem 0" }}>Welcome to Our Team</h1>
        <p style={{ fontSize: "1.25rem", lineHeight: 1.6 }}>
          We’re building great products together with focus, ownership, and a growth mindset.
        </p>
      </section>

      <section style={{
        background: "rgba(255,255,255,0.15)",
        border: "1px solid rgba(255,255,255,0.35)",
        borderRadius: "14px",
        padding: "1.5rem",
        maxWidth: "500px",
        width: "100%",
      }}>
        <h2 style={{ margin: "0 0 0.5rem", fontSize: "1.5rem" }}>Team Lead</h2>
        <p style={{ margin: 0, fontSize: "1.15rem" }}><strong>Anubhaw</strong></p>
      </section>

      <section style={{ maxWidth: "500px" }}>
        <p style={{ margin: 0 }}>
          Intern landing page ready. Build your next features and ship fast.
        </p>
      </section>
    </main>
  );
}
