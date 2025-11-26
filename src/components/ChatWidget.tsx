import { useState } from "react";
import Chatbot from "./ChatBot";

export default function ChatWidget() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {open && (
        <div
          style={{
            position: "fixed",
            right: 24,
            bottom: 96,
            zIndex: 60,
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end",
          }}
        >
          <div
            style={{
              width: 360,
              maxWidth: "calc(100vw - 48px)",
              height: 480,
              background: "white",
              boxShadow: "0 8px 24px rgba(0,0,0,0.15)",
              borderRadius: 12,
              overflow: "hidden",
            }}
          >
            <div style={{ position: "relative", height: "100%" }}>
              <button
                onClick={() => setOpen(false)}
                aria-label="Fechar chat"
                style={{
                  position: "absolute",
                  top: 8,
                  right: 8,
                  zIndex: 70,
                  background: "transparent",
                  border: "none",
                  fontSize: 18,
                  cursor: "pointer",
                }}
              >
                ✕
              </button>

              <Chatbot />
            </div>
          </div>
        </div>
      )}

      <button
        onClick={() => setOpen((s) => !s)}
        aria-label="Abrir chat"
        title="Chat com o vendedor"
        style={{
          position: "fixed",
          right: 24,
          bottom: 24,
          zIndex: 70,
          width: 56,
          height: 56,
          borderRadius: "50%",
          background: "#0070f3",
          color: "white",
          border: "none",
          boxShadow: "0 6px 20px rgba(0,0,0,0.18)",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 22,
        }}
      >
        💬
      </button>
    </>
  );
}
