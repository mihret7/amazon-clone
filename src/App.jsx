import { useEffect, useState, useContext } from "react";
import Routing from "./Router.jsx";


import { auth } from "./Utility/firebase.js";

import { DataContext } from "./Components/DataProvider/DataProvider.jsx";
import { Type } from "./Utility/action.type.js";


function App() {

  const [{ user }, dispatch] = useContext(DataContext);
  

  useEffect(() => {
    // checking if the user is logged in or not
    auth.onAuthStateChanged((user) => {
      if (user) {
        // user is logged in
        dispatch({
          type: Type.SET_USER,
          user: user,
        });
      } else {
        // user is logged out
        dispatch({
          type: Type.SET_USER,
          user: null,
        });
      }
    });
  }, []);



  return <Routing />;
}

export default App;