import { useEffect, useContext, useRef, useState } from "react";
import Routing from "./Router.jsx";

import { auth } from "./Utility/firebase.js";

import { DataContext } from "./Components/DataProvider/DataProvider.jsx";
import { Type } from "./Utility/action.type.js";

import Popup from "./Components/Popup/Popup.jsx"; 


import { saveCartToFirebase, fetchCartFromFirebase } from "./Utility/firebaseHelpers"; 




function App() {

// Using useContext to access user, basket, and popup data
 const [{ user, basket, popup }, dispatch] = useContext(DataContext);

  // Ref to track if the initial basket has been fetched
  // This prevents unnecessary writes to Firebase on every render
 const hasFetchedInitialBasket = useRef(false);

  // State to manage fetching state
 const [isFetchingBasket, setIsFetchingBasket] = useState(false);




  useEffect(() => {

      auth.onAuthStateChanged(async (user) => {
      // Check if user is authenticated (logged in)
      if (user) {
        dispatch({
          type: Type.SET_USER,
          user: user,
        });
       
         
        setIsFetchingBasket(true); // Start fetching


        // Fetch and set cart from Firebase
        const fetchedBasket  = await fetchCartFromFirebase(user.uid);

        dispatch({
          type: Type.SET_BASKET,
          basket: fetchedBasket || [],
        });

       hasFetchedInitialBasket.current = true;

       setIsFetchingBasket(false); // Done fetching
      } else {
        // User is not authenticated (logged out)
        dispatch({
          type: Type.SET_USER,
          user: null,
        });

        // Empty the basket
        dispatch({
          type: Type.EMPTY_BASKET,
          basket: [],
        });
      }
    });

  }, []);



  useEffect(() => {
  if (user && hasFetchedInitialBasket.current && !isFetchingBasket) {
    saveCartToFirebase(user.uid, basket);
    }
  }, [basket, user, isFetchingBasket]);

  return (
    <>
        <Routing />
              {popup && (
              <Popup
                message={popup}
                onClose={() => dispatch({ type: Type.CLEAR_POPUP })}
                duration={3000}
              />
      )}
    </>
  )
}

export default App;
