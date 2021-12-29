import React from "react";
// import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import LoginForm from "./components/LoginForm";
// // import Favorites from "./components/Favorites";
// import Apidata from "./components/apidata";
// import { FirebaseError } from "firebase/app";
// import { auth } from "../firebase";
// import { useState } from "react";

function App() {
  /*const [isUserSignedIn, setIsUserSignedIn] = useState(true);
  Firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      return setIsUserSignedIn(true);
    } else {
      return setIsUserSignedIn(false);
    }
  });

  if (isUserSignedIn === true) {
    return (
      <>
        <Header />
        <Hero />
      </>
    );
  } else {
    return (
      <>
        <Header />

        <Hero />

        <Apidata />
      </>
    );
  }
}*/
  return (
    <>
      <Header />
      <Hero />
      <LoginForm />
    </>
  );
}

export default App;
