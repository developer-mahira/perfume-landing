import React from "react";
import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Card from "./Components/Card";
import Counter from "./Components/Counter";

import perfume1 from "./assets/perfume1.jpeg";
import perfume2 from "./assets/perfume2.jpeg";
import perfume3 from "./assets/perfume3.jpeg";

function App() {
  const perfumes = [
    { id: 1, title: "Luxury Perfume", img: perfume1 },
    { id: 2, title: "Classic Aroma", img: perfume2 },
    { id: 3, title: "Modern Essence", img: perfume3 },
  ];

  return (
    <div className="App">
      <Header />
      <main className="main-content">
        <h1 className="hero-text">Discover Your Signature Scent</h1>
        <div className="card-container">
          {perfumes.map((p) => (
            <Card key={p.id} title={p.title} img={p.img} />
          ))}
        </div>
        <Counter />
      </main>
      <Footer />
    </div>
  );
}

export default App;
