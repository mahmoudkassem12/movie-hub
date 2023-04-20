import React, { useEffect, useState } from "react";
import "./Home.css";
import img1 from "../image/image/icon.png";
import Nav_bar from "./Navbarr";
import Header from "./Header";
import About from "./About";
import Categories from "./Categories";
import Review from "./Review";
import Footer from "./Footer";
function Home() {
  const [loading, setloading] = useState(false);
  const [username, setUserLogin] = useState("");
  const [name, setUsername] = useState(localStorage.getItem("name") || "");

  useEffect(() => {
    setloading(true);
    setTimeout(() => {
      setloading(false);
    }, 4000);
  }, []);
  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("user")) || [];
    userData.forEach((user) => {
      setUserLogin(user.name);
    });
  });
  return (
    <>
      {loading ? (
        <div className={loading ? "loading" : ""}>
          <img src={img1} alt="" />
        </div>
      ) : (
        <>
          <Nav_bar />
          <Header />
          <About />
          <Categories />
          <Review />
          <Footer />
        </>
      )}
    </>
  );
}

export default Home;