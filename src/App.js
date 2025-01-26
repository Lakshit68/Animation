import React, { useEffect, useRef } from "react";
import anime from "animejs";
import "./App.css";
import Home from "./Home"

const AnimeComponent = () => {
  const containerRef = useRef(null);
  const btnRef = useRef(null); // Ref for the button

  useEffect(() => {
    // Create animated dots
    const container = containerRef.current;

    container.innerHTML = "";

    for (let i = 1; i <= 100; i++) {
      let dot = document.createElement("div");
      dot.classList.add("element");
      container.appendChild(dot);
    }

    let dotAll = container.querySelectorAll(".element");
    let animation = anime.timeline({
      targets: dotAll,
      easing: "easeInOutExpo",
      loop: true,
      delay: anime.stagger(100, { grid: [10, 10], from: "center" }),
    });

    animation
      .add({
        rotateZ: 180,
        translateY: anime.stagger(0, { grid: [10, 10], from: "center", axis: "y" }),
        translateX: anime.stagger(0, { grid: [10, 10], from: "center", axis: "x" }),
        opacity: 1,
      })
      .add({
        borderRadius: 50,
      })
      .add({
        scale: 0.2,
        opacity: 0.2,
      })
      .add({
        rotateZ: 180,
        translateY: anime.stagger(0, { grid: [10, 10], from: "center", axis: "y" }),
        translateX: anime.stagger(0, { grid: [10, 10], from: "center", axis: "x" }),
        opacity: 1,
      })
      .add({
        scale: 1,
        borderRadius: 0,
      })
      .add({
        rotateZ: -90,
      });

    // Add click event listener to the button
    const btn = btnRef.current;
    if (btn) {
      btn.addEventListener("click", () => {
        window.open("https://www.google.com/chrome/", "_blank");
      });
    }

    // Cleanup event listener on unmount
   
  }, []);

  return (
    <div>
      <header>
        <a href="#" className="logo">
          Logo
          
        </a>
        <ul>
          <li>
            <a href="#" className="active">
              Home
            </a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Work</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </header>

      <section>
        <div className="content">
          <h2>
            Level Up Your Website <b>Anime.js</b>
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam possimus dolorem maiores vitae fuga.
            Fuga cumque voluptates vero commodi quia excepturi eligendi asperiores fugit hic ipsa, dolores explicabo
            consequuntur neque.
          </p>
          <a href="#" className="btn" ref={btnRef}>
            Learn More
          </a>
        </div>
        <div className="container" ref={containerRef}></div>
    
      </section>
    </div>
  );
};

export default AnimeComponent;

