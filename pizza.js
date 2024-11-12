// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import "./index.css"


// function Menu() {
//   return (
//       <div className="menu">
//           <h2>Our Menu</h2>
//           {pizza.map((p) => (
//               <Pizza key={p.name} name={p.name} ingredients={p.ingredients} price={p.price} image={p.image} />
//           ))}
//       </div>
//   );
// }

// function Header() {
//   return <h1 style={{color:"purple", fontSize:"48px", textTransform: "uppercase" }}>Kirthika's Pizza Co.</h1>;
// }

// const pizza = [ 
//   { name: 'Focaccia', ingredients: 'Bread with Italian olive oil and rosemary', price: 6, image: 'pizzas/focaccia.jpg' },   
//   { name: 'Pizza Margherita', ingredients: 'Tomato and mozzarella', price: 10, image: 'pizzas/margherita.jpg' },   
//   { name: 'Pizza Spinaci', ingredients: 'Tomato, mozzarella, spinach, and ricotta cheese', price: 12, image: 'pizzas/spinaci.jpg' },   
//   { name: 'Pizza Funghi', ingredients: 'Tomato, mozzarella, mushrooms, and onion', price: 12, image: 'pizzas/funghi.jpg' },   
//   { name: 'Pizza Salamino', ingredients: 'Tomato, mozzarella, and pepperoni', price: 15, image: 'pizzas/salamino.jpg' },   
//   { name: 'Pizza Prosciutto', ingredients: 'Tomato, mozzarella, ham, arugula, and burrata cheese', price: 18, image: 'pizzas/prosciutto.jpg' },
// ];

// function Pizza({ name, ingredients, price, image }) {

//   return (
//     <div className="pizza">
//       <img src={image} alt={name} />
//       <h3>{name}</h3>
//       <p>{ingredients}</p>
//       <p>{price}</p>
//     </div>
//   );
// };

// function Order() {
//   return (
//     <div className="order" style={{marginTop: "20px"}}>
//       <button>Order Now</button>
//     </div>
//   );
// }

// function App() {
//   return (
//     <div className="container">
//       <Header />
//       <Menu />
//       <Footer />
//     </div>
//   );
// }


// function Footer() {
//   const hour = new Date().getHours();
//   const isOpen = hour >= 10 && hour < 22;

//   return (
//     <footer className="footer">
//       {isOpen ? "We’re currently open" : "Sorry, we’re closed"}
//       {isOpen ? <Order /> : <p>Sorry, we're closed</p>}
//     </footer>
//   );
// }

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<App/>);