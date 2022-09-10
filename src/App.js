import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React, { Fragment } from "react";

import AllGuidesPage from "./pages/AllGuides";
import AllListingsPage from "./pages/AllListings";
import FavoriteGuidesPage from "./pages/FavoriteGuides";
import FavoriteListingsPage from "./pages/FavoriteListings";
import NewListingPage from "./pages/NewListing";
import NewGuidePage from "./pages/NewGuide";

function App() {
  //localhost:3000/pathname / is default
  return (
    <div>
      
        <Fragment>
          <Routes>
            <Route exact path="/" element={<AllListingsPage />}>
            </Route>

            <Route exact path="/all-guides" element={<AllGuidesPage />}>
            </Route>

            <Route exact path="/new-listing" element={<NewListingPage />}>
              
            </Route>

            <Route exact path="/new-guide" element={<NewGuidePage />}>
              
            </Route>

            <Route exact path="favorite-guides" element={<FavoriteGuidesPage />}>
              
            </Route>

            <Route exact path="favorite-listings" element={<FavoriteListingsPage />}>
            </Route>
          </Routes>
        </Fragment>
      
    </div>
  );
}
export default App;
