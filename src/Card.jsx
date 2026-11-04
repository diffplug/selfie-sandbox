export function Card({ title, body }) {
  return (
    <div style={{ font: "16px sans-serif", border: "1px solid #ccc", borderRadius: 24, padding: 16, width: 280 }}>
      <h3 style={{ margin: "0 0 8px" }}>{title}</h3>
      <p style={{ margin: 0 }}>{body}</p>
    </div>
  );
}
