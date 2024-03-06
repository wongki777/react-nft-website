import React, { useState, useEffect } from 'react' // useEffect is for the scrollreveal
import scrollreveal from 'scrollreveal'; // this is for scrollreveal effect
import Clients from "./components/Clients";
import Free from "./components/Free";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Release from "./components/Release";
import ScrollToTop from "./components/ScrollToTop";
import SuperRare from "./components/SuperRare";
import Like from "./components/Like";
import Signup from "./components/Signup";
import Footer from "./components/Footer";
import Review from "./components/Review";
import "./sass/index.scss";

export default function App() {
  // this is for light/dark mode effect
  const [theme, setTheme] = useState("dark");
  const changeTheme = () => {
    theme === "dark" ? setTheme("light") : setTheme("dark");
  };
  // this is for scrollreveal effect
  useEffect(() => {
    const registerAnimations = () => {
      const sr = scrollreveal({
        origin: "bottom",
        distance: "80px",
        duration: 2000,
        reset: false,
      });
      sr.reveal(
        `
        nav,
        .home,
        .free,
        .clients,
        .super-rare,
        .release,
        .review,
        .like,
        .signup,
        footer
    `,
        {
          interval: 500,
        }
      );
    };
    registerAnimations();
  }, []);

  return (
    // data-theme is to switch the background to black and to white
    <div data-theme={theme} className="app-container">
      <ScrollToTop />
      <Navbar changeTheme={changeTheme} currentTheme={theme} />
      <Home />
      <Free />
      <Clients />
      <SuperRare />
      <Release />
      <Review />
      <Like />
      <Signup />
      <Footer />
    </div>
  )
}
