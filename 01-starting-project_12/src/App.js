import React from "react";
import { useSelector } from "react-redux";

import Counter from "./components/Counter";
import Header from "./components/Header";
import Auth from "./components/Auth";
import UserProfile from "./components/UserProfile";

function App() {
  const isAuthenticaded = useSelector((state) => state.auth.isAuthenticaded);

  return (
    <React.Fragment>
      <Header />
      {isAuthenticaded ? <UserProfile /> : <Auth />}
      <Counter />
    </React.Fragment>
  );
}

export default App;
