import { useState } from "react";

export default function Chatbot() {
  const [messages, setMessages] = useState<{ from: string; text: string }[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

async function sendMessage() {
  if (!input.trim()) return;

  setMessages(prev => [...prev, { from: "user", text: input }]);
  setLoading(true);

  try {
    const response = await fetch("https://anthonymcastr.app.n8n.cloud/webhook/chatbot", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: input }),
    });

    const data = await response.json();
    
    // Suporta tanto array quanto objeto
    const reply = Array.isArray(data) ? data[0]?.reply : data.reply;
    
    if (reply) {
      setMessages(prev => [...prev, { from: "bot", text: reply }]);
    } else {
      setMessages(prev => [...prev, { from: "bot", text: "Resposta inválida do servidor" }]);
    }
  } catch (err) {
    console.error("Erro:", err);
    setMessages(prev => [...prev, { from: "bot", text: "Erro ao falar com o vendedor 😢" }]);
  }

  setInput("");
  setLoading(false);
}
  return (
    <div style={{ maxWidth: 400, margin: "0 auto", padding: 20 }}>
      <h2>Chat com o Vendedor 👓</h2>

      <div style={{
        border: "1px solid #ccc",
        padding: 10,
        height: 300,
        overflowY: "auto",
        borderRadius: 8,
        background: "#fafafa"
      }}>
        {messages.map((m, i) => (
          <div key={i} style={{
            textAlign: m.from === "user" ? "right" : "left",
            marginBottom: 10
          }}>
            <div style={{
              display: "inline-block",
              padding: "8px 12px",
              borderRadius: 12,
              background: m.from === "user" ? "#0070f3" : "#e5e5ea",
              color: m.from === "user" ? "white" : "black"
            }}>
              {m.text}
            </div>
          </div>
        ))}
        {loading && <div style={{ marginTop: 10, fontStyle: "italic", color: "#888" }}>Vendedor digitando...</div>}
      </div>

      <div style={{ display: "flex", marginTop: 10 }}>
        <input
          value={input}
          onChange={e => setInput(e.target.value)}
          placeholder="Pergunte sobre óculos..."
          style={{ flex: 1, padding: 10, borderRadius: 8, border: "1px solid #ccc" }}
        />
        <button
          style={{ marginLeft: 10, padding: "0 20px", borderRadius: 8, background: "#0070f3", color: "white" }}
          onClick={sendMessage}
        >
          Enviar
        </button>
      </div>
    </div>
  );
}