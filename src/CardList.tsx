import React, { useState } from "react";

const cards = [
  { id: 1, title: "Card 1", description: "This is the first card" },
  { id: 2, title: "Card 2", description: "This is the second card" },
  { id: 3, title: "Card 3", description: "This is the third card" },
];

export default function CardList() {
  const [selectedCard, setSelectedCard] = useState<number | null>(null);

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Card List</h1>
      <div
        data-testid="card-container"
        style={{ display: "flex", gap: "10px" }}
      >
        {cards.map((card) => (
          <div
            key={card.id}
            data-testid={`card-${card.id}`}
            onClick={() => setSelectedCard(card.id)}
            style={{
              border: "1px solid #ccc",
              padding: "10px",
              cursor: "pointer",
              width: "150px",
              textAlign: "center",
            }}
          >
            <h2>{card.title}</h2>
          </div>
        ))}
      </div>
      {selectedCard !== null && (
        <div
          data-testid="card-details"
          style={{
            marginTop: "20px",
            border: "1px solid #ddd",
            padding: "10px",
          }}
        >
          <h3>Details:</h3>
          <p>{cards.find((c) => c.id === selectedCard)?.description}</p>
        </div>
      )}
    </div>
  );
}
